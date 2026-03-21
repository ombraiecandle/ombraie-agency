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

def scroll_to(page, y, delay=0.8):
    page.evaluate(f"window.scrollTo(0, {y})")
    time.sleep(delay)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": VIEWPORT_W, "height": VIEWPORT_H})

    page.goto(URL, wait_until="networkidle", timeout=60000)
    time.sleep(3)

    # Navigate to portfolio via anchor link to trigger render
    page.goto(URL + "#portfolio", wait_until="networkidle", timeout=30000)
    time.sleep(2)

    # Find position after navigation
    portfolio_y = page.evaluate("window.scrollY")
    print(f"After #portfolio anchor: scrollY={portfolio_y}")

    # Grab real bounding rect of tabs now that section is visible
    tab_info = page.evaluate("""
        () => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const portfolioTabs = buttons.filter(b => {
                const t = b.innerText || '';
                return t.includes('Résultats Publicités') || t.includes('Sites Web') || t.includes('Flyers');
            });
            return portfolioTabs.map(b => {
                const rect = b.getBoundingClientRect();
                return {
                    text: b.innerText.trim().substring(0, 40),
                    rectTop: rect.top,
                    rectLeft: rect.left,
                    scrollY: window.scrollY,
                    absoluteTop: rect.top + window.scrollY
                };
            });
        }
    """)
    print("Tabs:", [(t['text'][:30], t['absoluteTop']) for t in tab_info])

    if tab_info:
        tab_absolute_top = tab_info[0]['absoluteTop']
        section_y = max(0, tab_absolute_top - 120)
    else:
        section_y = portfolio_y

    print(f"Portfolio section scroll position: {section_y}")

    # --- TAB 1: Résultats Publicités ---
    scroll_to(page, section_y)
    page.evaluate("""
        () => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const tab = buttons.find(b => (b.innerText || '').includes('Résultats Publicités'));
            if (tab) tab.click();
        }
    """)
    time.sleep(1.5)
    scroll_to(page, section_y, 0.5)
    shot(page, "P1_tab1_resultats_header.png")

    scroll_to(page, section_y + 400)
    shot(page, "P2_tab1_resultats_cards_top.png")

    scroll_to(page, section_y + 800)
    shot(page, "P3_tab1_resultats_cards_bottom.png")

    # --- TAB 2: Sites Web ---
    scroll_to(page, section_y)
    page.evaluate("""
        () => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const tab = buttons.find(b => (b.innerText || '').includes('Sites Web'));
            if (tab) tab.click();
        }
    """)
    time.sleep(1.5)
    scroll_to(page, section_y, 0.5)
    shot(page, "P4_tab2_sites_header.png")

    scroll_to(page, section_y + 400)
    shot(page, "P5_tab2_sites_cards_top.png")

    scroll_to(page, section_y + 800)
    shot(page, "P6_tab2_sites_cards_bottom.png")

    # --- TAB 3: Flyers & Design ---
    scroll_to(page, section_y)
    page.evaluate("""
        () => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const tab = buttons.find(b => (b.innerText || '').includes('Flyers'));
            if (tab) tab.click();
        }
    """)
    time.sleep(1.5)
    scroll_to(page, section_y, 0.5)
    shot(page, "P7_tab3_flyers_header.png")

    scroll_to(page, section_y + 400)
    shot(page, "P8_tab3_flyers_cards_row1.png")

    scroll_to(page, section_y + 800)
    shot(page, "P9_tab3_flyers_cards_row2.png")

    scroll_to(page, section_y + 1200)
    shot(page, "P10_tab3_flyers_cards_row3.png")

    browser.close()
    print("Done.")
