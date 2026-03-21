from playwright.sync_api import sync_playwright
import time

URL = "https://ombraie-agency.vercel.app"
OUT = "/Users/lucas/ombraie-agency/screenshots/redesign_audit"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1440, "height": 900})

    print("Loading page...")
    page.goto(URL, wait_until="networkidle", timeout=60000)
    time.sleep(3)

    # Get page height and structure
    height = page.evaluate("document.body.scrollHeight")
    print(f"Total page height: {height}px")

    # Find all sections with IDs
    sections_info = page.evaluate("""() => {
        const els = document.querySelectorAll('section, header, footer, [id]');
        return Array.from(els).map(el => ({
            tag: el.tagName,
            id: el.id || '',
            offsetTop: el.offsetTop,
            text: (el.innerText || '').substring(0, 80)
        })).filter(s => s.id || s.tag === 'SECTION' || s.tag === 'HEADER' || s.tag === 'FOOTER');
    }""")
    print("\nPage sections:")
    for s in sections_info:
        print(f"  [{s['tag']}] id='{s['id']}' y={s['offsetTop']} | {s['text'].strip()[:60]}")

    # Find all buttons/tabs
    all_buttons = page.evaluate("""() => {
        const btns = document.querySelectorAll('button, [role="tab"]');
        return Array.from(btns).map(b => ({
            text: (b.innerText || '').trim(),
            role: b.getAttribute('role') || '',
            id: b.id || '',
            classes: (b.getAttribute('class') || '').substring(0, 60)
        }));
    }""")
    print("\nAll buttons:")
    for b in all_buttons:
        if b['text']:
            print(f"  role='{b['role']}' | '{b['text'][:60]}'")

    # Scroll through page and take screenshots at different heights
    step = 900
    scroll_positions = list(range(0, height, step))
    for i, y in enumerate(scroll_positions):
        page.evaluate(f"window.scrollTo(0, {y})")
        time.sleep(0.5)
        page.screenshot(path=f"{OUT}/scroll_{i:02d}_y{y}.png", full_page=False)
        print(f"Saved scroll at y={y}")

    # Now try portfolio tabs specifically
    print("\nLooking for portfolio...")
    page.evaluate("window.scrollTo(0, 0)")
    time.sleep(0.5)

    # Try clicking portfolio nav link if exists
    portfolio_link = page.query_selector("a[href='#portfolio'], a[href='#realisations']")
    if portfolio_link:
        portfolio_link.click()
        time.sleep(1)
        page.screenshot(path=f"{OUT}/05_portfolio_default.png", full_page=False)
        print("Saved portfolio via nav link")

    # Get all buttons again and try to find tabs
    buttons = page.query_selector_all("button")
    print(f"\nFound {len(buttons)} buttons total")
    for btn in buttons:
        try:
            txt = btn.inner_text().strip()
            if txt:
                print(f"  Button: '{txt}'")
        except:
            pass

    # Try different tab selectors
    for tab_text in ["Résultats Publicités", "Publicités", "Pub", "Sites Web", "Sites", "Web"]:
        try:
            tab = page.get_by_text(tab_text, exact=False).first
            if tab:
                tab.scroll_into_view_if_needed()
                time.sleep(0.5)
                page.screenshot(path=f"{OUT}/portfolio_found_{tab_text.replace(' ', '_')}.png", full_page=False)
                print(f"Found element with text '{tab_text}'")
                tab.click()
                time.sleep(1.5)
                page.screenshot(path=f"{OUT}/portfolio_after_click_{tab_text.replace(' ', '_')}.png", full_page=False)
                print(f"Clicked '{tab_text}'")
        except Exception as e:
            print(f"  Error with '{tab_text}': {e}")

    browser.close()
    print("\nDone!")
