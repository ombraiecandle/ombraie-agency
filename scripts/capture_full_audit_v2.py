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

def scroll_to(page, y):
    page.evaluate(f"window.scrollTo(0, {y})")
    time.sleep(0.8)

def click_tab_js(page, index):
    """Click tab by index using JS to bypass overlay interception."""
    page.evaluate(f"""
        const buttons = Array.from(document.querySelectorAll('button[role="tab"]'));
        if (buttons[{index}]) {{
            buttons[{index}].dispatchEvent(new MouseEvent('click', {{bubbles: true, cancelable: true}}));
        }}
    """)
    time.sleep(1.2)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": VIEWPORT_W, "height": VIEWPORT_H})

    print("Loading page...")
    page.goto(URL, wait_until="networkidle", timeout=60000)
    time.sleep(3)

    # ── 0. Full page
    scroll_to(page, 0)
    shot(page, "00_full_page.png", full=True)

    page_height = page.evaluate("document.body.scrollHeight")
    print(f"Page height: {page_height}px")

    # ── 1. Hero (top)
    scroll_to(page, 0)
    shot(page, "01_hero.png")

    # ── 2-14. Scroll through every VIEWPORT_H pixels
    steps = list(range(VIEWPORT_H, page_height, VIEWPORT_H))
    for i, y in enumerate(steps):
        scroll_to(page, y)
        shot(page, f"scroll_{i+2:02d}_y{y}.png")

    # ── Last viewport (footer)
    scroll_to(page, page_height - VIEWPORT_H)
    shot(page, "scroll_footer.png")

    # ── Portfolio tabs — find their positions first
    print("\n--- Portfolio Tabs ---")

    # Get tab buttons info
    tab_info = page.evaluate("""
        () => {
            const tabs = Array.from(document.querySelectorAll('button[role="tab"]'));
            return tabs.map((t, i) => ({
                index: i,
                text: t.innerText,
                rect: t.getBoundingClientRect(),
                scrollY: window.scrollY
            }));
        }
    """)
    print("Tabs found:", [t['text'] for t in tab_info])

    # Find the portfolio section scroll position
    portfolio_y = page.evaluate("""
        () => {
            const tabs = document.querySelectorAll('button[role="tab"]');
            if (tabs.length > 0) {
                const rect = tabs[0].getBoundingClientRect();
                return window.scrollY + rect.top - 120;
            }
            return 0;
        }
    """)
    print(f"Portfolio section at ~y={portfolio_y}")

    # Tab 1: Résultats Publicités
    scroll_to(page, max(0, portfolio_y))
    click_tab_js(page, 0)
    scroll_to(page, max(0, portfolio_y))
    shot(page, "15_portfolio_tab1_resultats_top.png")
    scroll_to(page, portfolio_y + VIEWPORT_H)
    shot(page, "16_portfolio_tab1_resultats_cards.png")

    # Tab 2: Sites Web
    scroll_to(page, max(0, portfolio_y))
    click_tab_js(page, 1)
    scroll_to(page, max(0, portfolio_y))
    shot(page, "17_portfolio_tab2_sites_top.png")
    scroll_to(page, portfolio_y + VIEWPORT_H)
    shot(page, "18_portfolio_tab2_sites_cards.png")

    # Tab 3: Flyers & Design
    scroll_to(page, max(0, portfolio_y))
    click_tab_js(page, 2)
    scroll_to(page, max(0, portfolio_y))
    shot(page, "19_portfolio_tab3_flyers_top.png")
    scroll_to(page, portfolio_y + VIEWPORT_H)
    shot(page, "20_portfolio_tab3_flyers_cards.png")

    browser.close()
    print("\nAll screenshots captured.")
