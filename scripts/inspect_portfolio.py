from playwright.sync_api import sync_playwright
import time

URL = "https://ombraie-agency.vercel.app"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto(URL, wait_until="networkidle", timeout=60000)
    time.sleep(3)

    # Find all buttons on the page with their texts
    all_buttons = page.evaluate("""
        () => {
            const buttons = Array.from(document.querySelectorAll('button'));
            return buttons.map(b => ({
                text: b.innerText.trim().substring(0, 60),
                role: b.getAttribute('role'),
                className: b.className.substring(0, 100),
                id: b.id
            }));
        }
    """)
    print("ALL BUTTONS:")
    for b in all_buttons:
        print(f"  text='{b['text']}' role='{b['role']}' class='{b['className'][:60]}'")

    # Find elements with tab-like text
    tab_elements = page.evaluate("""
        () => {
            const all = Array.from(document.querySelectorAll('*'));
            return all
                .filter(el => {
                    const text = el.innerText || '';
                    return (text.includes('Résultats') || text.includes('Sites Web') || text.includes('Flyers'))
                        && el.children.length < 3
                        && el.tagName !== 'SECTION'
                        && el.tagName !== 'DIV';
                })
                .map(el => ({
                    tag: el.tagName,
                    text: (el.innerText || '').trim().substring(0, 60),
                    role: el.getAttribute('role'),
                    className: (el.className || '').substring(0, 100)
                }));
        }
    """)
    print("\nTAB-LIKE ELEMENTS:")
    for el in tab_elements:
        print(f"  <{el['tag']}> text='{el['text']}' role='{el['role']}' class='{el['className'][:60]}'")

    # Find the portfolio section ID
    sections = page.evaluate("""
        () => {
            const sections = Array.from(document.querySelectorAll('section, [id]'));
            return sections.map(s => ({
                tag: s.tagName,
                id: s.id,
                className: (s.className || '').substring(0, 80)
            })).filter(s => s.id);
        }
    """)
    print("\nSECTIONS WITH IDs:")
    for s in sections:
        print(f"  <{s['tag']}> id='{s['id']}' class='{s['className']}'")

    browser.close()
