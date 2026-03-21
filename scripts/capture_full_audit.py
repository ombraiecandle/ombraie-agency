from playwright.sync_api import sync_playwright
import os
import time

URL = "https://ombraie-agency.vercel.app"
OUT_DIR = "/Users/lucas/ombraie-agency/screenshots"
os.makedirs(OUT_DIR, exist_ok=True)

VIEWPORT_W = 1440
VIEWPORT_H = 900

def capture_full_page(page, filename):
    path = os.path.join(OUT_DIR, filename)
    page.screenshot(path=path, full_page=True)
    print(f"Saved: {path}")
    return path

def capture_viewport(page, filename):
    path = os.path.join(OUT_DIR, filename)
    page.screenshot(path=path, full_page=False)
    print(f"Saved: {path}")
    return path

def scroll_to_element(page, selector):
    page.evaluate(f"""
        const el = document.querySelector('{selector}');
        if (el) el.scrollIntoView({{behavior: 'instant', block: 'start'}});
    """)
    time.sleep(0.5)

def capture_section_by_scroll(page, y_offset, filename):
    page.evaluate(f"window.scrollTo(0, {y_offset})")
    time.sleep(0.8)
    path = os.path.join(OUT_DIR, filename)
    page.screenshot(path=path, full_page=False)
    print(f"Saved: {path}")
    return path

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": VIEWPORT_W, "height": VIEWPORT_H})

    print("Loading page...")
    page.goto(URL, wait_until="networkidle", timeout=60000)
    time.sleep(3)

    # 1. Full page screenshot
    print("Capturing full page...")
    capture_full_page(page, "00_full_page.png")

    # 2. Hero section (top of page)
    print("Capturing Hero...")
    page.evaluate("window.scrollTo(0, 0)")
    time.sleep(0.5)
    capture_viewport(page, "01_hero.png")

    # Get page height to plan scroll positions
    page_height = page.evaluate("document.body.scrollHeight")
    print(f"Total page height: {page_height}px")

    # Scroll through page systematically at viewport-height intervals
    sections_y = {
        "02_hero_bottom": VIEWPORT_H,
        "03_services": VIEWPORT_H * 2,
        "04_services_2": VIEWPORT_H * 3,
        "05_stats": VIEWPORT_H * 4,
        "06_process": VIEWPORT_H * 5,
        "07_process_2": VIEWPORT_H * 6,
        "08_portfolio": VIEWPORT_H * 7,
        "09_portfolio_2": VIEWPORT_H * 8,
        "10_portfolio_3": VIEWPORT_H * 9,
        "11_testimonials": VIEWPORT_H * 10,
        "12_testimonials_2": VIEWPORT_H * 11,
        "13_contact": VIEWPORT_H * 12,
        "14_footer": page_height - VIEWPORT_H,
    }

    for name, y in sections_y.items():
        if y < page_height:
            capture_section_by_scroll(page, y, f"{name}.png")

    # Now capture Portfolio tabs
    print("\nCapturing Portfolio tabs...")

    # Find and click portfolio tabs
    # Tab 1: Résultats Publicités (default)
    page.evaluate("window.scrollTo(0, 0)")
    time.sleep(0.5)

    # Try to find portfolio section
    portfolio_section = page.query_selector("#portfolio, [id*='portfolio'], section:has([data-tab]), section:has(button[role='tab'])")

    # Look for tab buttons
    tabs = page.query_selector_all("button[role='tab'], [data-tab], .tab-button, button:has-text('Résultats'), button:has-text('Sites Web'), button:has-text('Flyers')")
    print(f"Found {len(tabs)} tab buttons")

    if len(tabs) >= 1:
        # Tab 1 - already active (Résultats Publicités)
        tabs[0].scroll_into_view_if_needed()
        time.sleep(0.5)
        tabs[0].click()
        time.sleep(1)
        tabs[0].scroll_into_view_if_needed()
        page.evaluate("arguments => arguments[0].scrollIntoView({block: 'start'})", tabs[0])
        time.sleep(0.5)
        # Scroll up a bit to see tabs
        current_scroll = page.evaluate("window.scrollY")
        page.evaluate(f"window.scrollTo(0, {max(0, current_scroll - 100)})")
        time.sleep(0.5)
        capture_viewport(page, "15_portfolio_tab1_resultats.png")

        # Scroll down to see content
        page.evaluate(f"window.scrollTo(0, {current_scroll + 400})")
        time.sleep(0.5)
        capture_viewport(page, "16_portfolio_tab1_resultats_content.png")

    if len(tabs) >= 2:
        # Tab 2 - Sites Web
        tabs[1].scroll_into_view_if_needed()
        time.sleep(0.5)
        tabs[1].click()
        time.sleep(1)
        tabs[1].scroll_into_view_if_needed()
        current_scroll = page.evaluate("window.scrollY")
        page.evaluate(f"window.scrollTo(0, {max(0, current_scroll - 100)})")
        time.sleep(0.5)
        capture_viewport(page, "17_portfolio_tab2_sites.png")
        page.evaluate(f"window.scrollTo(0, {current_scroll + 400})")
        time.sleep(0.5)
        capture_viewport(page, "18_portfolio_tab2_sites_content.png")

    if len(tabs) >= 3:
        # Tab 3 - Flyers & Design
        tabs[2].scroll_into_view_if_needed()
        time.sleep(0.5)
        tabs[2].click()
        time.sleep(1)
        tabs[2].scroll_into_view_if_needed()
        current_scroll = page.evaluate("window.scrollY")
        page.evaluate(f"window.scrollTo(0, {max(0, current_scroll - 100)})")
        time.sleep(0.5)
        capture_viewport(page, "19_portfolio_tab3_flyers.png")
        page.evaluate(f"window.scrollTo(0, {current_scroll + 400})")
        time.sleep(0.5)
        capture_viewport(page, "20_portfolio_tab3_flyers_content.png")

    # Capture all tab info
    all_buttons = page.query_selector_all("button")
    tab_texts = [b.inner_text() for b in all_buttons if any(kw in b.inner_text() for kw in ["Résultat", "Sites", "Flyer", "Design", "Publicité"])]
    print(f"Tab button texts found: {tab_texts}")

    browser.close()
    print("\nDone! All screenshots captured.")
