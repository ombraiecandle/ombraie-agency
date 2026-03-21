from playwright.sync_api import sync_playwright
import os
import time

URL = "https://ombraie-agency.vercel.app"
OUT_DIR = "/Users/lucas/ombraie-agency/screenshots"
os.makedirs(OUT_DIR, exist_ok=True)

VIEWPORT_W = 1440
VIEWPORT_H = 900

def shot(page, filename, full=False):
    path = os.path.join(OUT_DIR, filename)
    page.screenshot(path=path, full_page=full)
    print(f"Saved: {path}")
    return path

def scroll_to(page, y, delay=0.8):
    page.evaluate(f"window.scrollTo(0, {y})")
    time.sleep(delay)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": VIEWPORT_W, "height": VIEWPORT_H})

    print("Loading page...")
    page.goto(URL, wait_until="networkidle", timeout=60000)
    time.sleep(3)

    # Get portfolio tab button positions
    tab_positions = page.evaluate("""
        () => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const portfolioTabs = buttons.filter(b => {
                const t = b.innerText || '';
                return t.includes('Résultats Publicités') || t.includes('Sites Web') || t.includes('Flyers');
            });
            return portfolioTabs.map(b => {
                const rect = b.getBoundingClientRect();
                return {
                    text: b.innerText.trim(),
                    offsetTop: b.offsetTop,
                    top: rect.top,
                    left: rect.left
                };
            });
        }
    """)
    print("Portfolio tabs:", [(t['text'][:30], t['offsetTop']) for t in tab_positions])

    if not tab_positions:
        print("ERROR: No portfolio tabs found!")
        browser.close()
        exit(1)

    portfolio_scroll_y = max(0, tab_positions[0]['offsetTop'] - 150)
    print(f"Portfolio section at scroll y={portfolio_scroll_y}")

    # ─── Tab 1: Résultats Publicités ───
    scroll_to(page, portfolio_scroll_y)
    page.evaluate("""
        () => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const tab = buttons.find(b => (b.innerText || '').includes('Résultats Publicités'));
            if (tab) tab.click();
        }
    """)
    time.sleep(1.5)
    scroll_to(page, portfolio_scroll_y, 0.5)
    shot(page, "15_portfolio_tab1_top.png")

    # scroll down to see cards
    scroll_to(page, portfolio_scroll_y + 500)
    shot(page, "16_portfolio_tab1_cards.png")

    scroll_to(page, portfolio_scroll_y + 1000)
    shot(page, "16b_portfolio_tab1_cards2.png")

    # ─── Tab 2: Sites Web ───
    scroll_to(page, portfolio_scroll_y)
    page.evaluate("""
        () => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const tab = buttons.find(b => (b.innerText || '').includes('Sites Web'));
            if (tab) tab.click();
        }
    """)
    time.sleep(1.5)
    scroll_to(page, portfolio_scroll_y, 0.5)
    shot(page, "17_portfolio_tab2_top.png")

    scroll_to(page, portfolio_scroll_y + 500)
    shot(page, "18_portfolio_tab2_cards.png")

    scroll_to(page, portfolio_scroll_y + 1000)
    shot(page, "18b_portfolio_tab2_cards2.png")

    # ─── Tab 3: Flyers & Design ───
    scroll_to(page, portfolio_scroll_y)
    page.evaluate("""
        () => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const tab = buttons.find(b => (b.innerText || '').includes('Flyers'));
            if (tab) tab.click();
        }
    """)
    time.sleep(1.5)
    scroll_to(page, portfolio_scroll_y, 0.5)
    shot(page, "19_portfolio_tab3_top.png")

    scroll_to(page, portfolio_scroll_y + 500)
    shot(page, "20_portfolio_tab3_cards.png")

    scroll_to(page, portfolio_scroll_y + 1000)
    shot(page, "20b_portfolio_tab3_cards2.png")

    scroll_to(page, portfolio_scroll_y + 1500)
    shot(page, "20c_portfolio_tab3_cards3.png")

    browser.close()
    print("\nDone with portfolio tabs.")
