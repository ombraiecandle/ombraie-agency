from playwright.sync_api import sync_playwright

def capture_full(url, output_path, viewport_width=1440, viewport_height=900):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': viewport_width, 'height': viewport_height})
        page.goto(url, wait_until='networkidle')
        page.screenshot(path=output_path, full_page=True)
        browser.close()
        print(f"Saved: {output_path}")

def capture_section(url, output_path, scroll_y=0, viewport_width=1440, viewport_height=900):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': viewport_width, 'height': viewport_height})
        page.goto(url, wait_until='networkidle')
        page.wait_for_timeout(800)
        if scroll_y > 0:
            page.evaluate(f'window.scrollTo(0, {scroll_y})')
            page.wait_for_timeout(600)
        page.screenshot(path=output_path, full_page=False)
        browser.close()
        print(f"Saved: {output_path}")

def get_section_offsets(url, viewport_width=1440):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': viewport_width, 'height': 900})
        page.goto(url, wait_until='networkidle')
        page.wait_for_timeout(800)

        offsets = page.evaluate("""() => {
            const result = {};
            // Try common selectors for each section
            const selectors = {
                hero: ['#hero', '[data-section="hero"]', 'section:first-of-type', '.hero', 'header'],
                services: ['#services', '[data-section="services"]', '.services', 'section:nth-of-type(2)'],
                stats: ['#stats', '[data-section="stats"]', '.stats', '#about', '.about'],
                contact: ['#contact', '[data-section="contact"]', '.contact', 'footer']
            };
            for (const [key, sels] of Object.entries(selectors)) {
                for (const sel of sels) {
                    const el = document.querySelector(sel);
                    if (el) {
                        const rect = el.getBoundingClientRect();
                        result[key] = {
                            top: rect.top + window.scrollY,
                            selector: sel
                        };
                        break;
                    }
                }
            }
            // Also return page height
            result.pageHeight = document.body.scrollHeight;
            return result;
        }""")
        browser.close()
        return offsets

if __name__ == '__main__':
    URL = 'http://localhost:3001'

    print("Detecting section offsets...")
    offsets = get_section_offsets(URL)
    print(f"Detected offsets: {offsets}")

    # Full page
    capture_full(URL, '/tmp/current-full.png')

    # Hero - top of page
    hero_y = offsets.get('hero', {}).get('top', 0)
    capture_section(URL, '/tmp/cur-hero.png', scroll_y=int(hero_y))

    # Services
    services_y = offsets.get('services', {}).get('top', 900)
    capture_section(URL, '/tmp/cur-services.png', scroll_y=int(services_y))

    # Stats
    stats_y = offsets.get('stats', {}).get('top', 1800)
    capture_section(URL, '/tmp/cur-stats.png', scroll_y=int(stats_y))

    # Contact
    contact_y = offsets.get('contact', {}).get('top', 2700)
    capture_section(URL, '/tmp/cur-contact.png', scroll_y=int(contact_y))

    print("All screenshots captured.")
    print(f"Section offsets used: {offsets}")
