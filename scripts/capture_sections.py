from playwright.sync_api import sync_playwright
import time

BASE_URL = "http://localhost:3001"
DESKTOP_WIDTH = 1440
DESKTOP_HEIGHT = 900

def capture_section(page, selector_or_scroll, output_path, scroll_y=None):
    if scroll_y is not None:
        page.evaluate(f"window.scrollTo(0, {scroll_y})")
    elif selector_or_scroll:
        try:
            page.evaluate(f"""
                const el = document.querySelector('{selector_or_scroll}');
                if (el) el.scrollIntoView({{behavior: 'instant', block: 'start'}});
            """)
        except:
            pass
    time.sleep(0.8)
    page.screenshot(path=output_path, full_page=False)
    print(f"Saved: {output_path}")

def get_section_y(page, selector):
    try:
        y = page.evaluate(f"""
            (() => {{
                const el = document.querySelector('{selector}');
                if (!el) return null;
                return el.getBoundingClientRect().top + window.scrollY;
            }})()
        """)
        return y
    except:
        return None

with sync_playwright() as p:
    browser = p.chromium.launch()

    # ---- DESKTOP captures ----
    page = browser.new_page(viewport={'width': DESKTOP_WIDTH, 'height': DESKTOP_HEIGHT})
    page.goto(BASE_URL, wait_until='networkidle', timeout=30000)
    time.sleep(1.5)

    # List all sections for reference
    sections_info = page.evaluate("""
        () => {
            const tags = ['section', 'header', 'footer', 'main', '[id]', '[class*="hero"]', '[class*="service"]', '[class*="stats"]', '[class*="process"]', '[class*="portfolio"]', '[class*="testimonial"]', '[class*="cta"]', '[class*="contact"]', '[class*="footer"]'];
            const all = [];
            document.querySelectorAll('section, header, footer, [id], [class*="hero"], [class*="service"]').forEach(el => {
                const rect = el.getBoundingClientRect();
                const scrollY = window.scrollY;
                all.push({
                    tag: el.tagName,
                    id: el.id || '',
                    className: el.className.toString().substring(0, 80),
                    top: rect.top + scrollY,
                    height: rect.height
                });
            });
            return all.slice(0, 40);
        }
    """)
    print("=== SECTIONS FOUND ===")
    for s in sections_info:
        print(f"  {s['tag']} id='{s['id']}' class='{s['className'][:60]}' top={s['top']:.0f} h={s['height']:.0f}")

    page_height = page.evaluate("document.body.scrollHeight")
    print(f"\nTotal page height: {page_height}px\n")

    # s1 - Hero (top of page)
    page.evaluate("window.scrollTo(0, 0)")
    time.sleep(0.8)
    page.screenshot(path='/tmp/s1-hero.png', full_page=False)
    print("Saved: /tmp/s1-hero.png")

    # Find approximate positions by scanning sections
    section_positions = page.evaluate("""
        () => {
            const results = {};
            // Try multiple selectors for each section
            const selectors = {
                services: ['#services', '[id*="service"]', '[class*="service"]', 'section:nth-of-type(2)'],
                stats: ['#stats', '[id*="stat"]', '[class*="stat"]', 'section:nth-of-type(3)'],
                process: ['#process', '[id*="process"]', '[class*="process"]', 'section:nth-of-type(4)'],
                portfolio: ['#portfolio', '[id*="portfolio"]', '[class*="portfolio"]', '[id*="work"]', 'section:nth-of-type(5)'],
                testimonials: ['#testimonials', '[id*="testimonial"]', '[class*="testimonial"]', '[id*="review"]', 'section:nth-of-type(6)'],
                cta: ['#cta', '[id*="cta"]', '[class*="cta"]', '[class*="call-to-action"]', 'section:nth-of-type(7)'],
                contact: ['#contact', '[id*="contact"]', '[class*="contact"]', 'section:nth-of-type(8)'],
                footer: ['footer', '#footer', '[class*="footer"]']
            };
            for (const [name, sels] of Object.entries(selectors)) {
                for (const sel of sels) {
                    try {
                        const el = document.querySelector(sel);
                        if (el) {
                            const rect = el.getBoundingClientRect();
                            results[name] = { top: rect.top + window.scrollY, height: rect.height, selector: sel };
                            break;
                        }
                    } catch(e) {}
                }
            }
            return results;
        }
    """)
    print("=== SECTION POSITIONS ===")
    for name, pos in section_positions.items():
        print(f"  {name}: top={pos.get('top', 'N/A'):.0f} height={pos.get('height', 'N/A'):.0f} sel={pos.get('selector', 'N/A')}")

    # s2 - Services
    services_y = section_positions.get('services', {}).get('top', DESKTOP_HEIGHT)
    page.evaluate(f"window.scrollTo(0, {max(0, services_y - 20)})")
    time.sleep(0.8)
    page.screenshot(path='/tmp/s2-services.png', full_page=False)
    print("Saved: /tmp/s2-services.png")

    # s3 - Stats
    stats_y = section_positions.get('stats', {}).get('top', DESKTOP_HEIGHT * 2)
    page.evaluate(f"window.scrollTo(0, {max(0, stats_y - 20)})")
    time.sleep(0.8)
    page.screenshot(path='/tmp/s3-stats.png', full_page=False)
    print("Saved: /tmp/s3-stats.png")

    # s4 - Process
    process_y = section_positions.get('process', {}).get('top', DESKTOP_HEIGHT * 3)
    page.evaluate(f"window.scrollTo(0, {max(0, process_y - 20)})")
    time.sleep(0.8)
    page.screenshot(path='/tmp/s4-process.png', full_page=False)
    print("Saved: /tmp/s4-process.png")

    # s5 - Portfolio
    portfolio_y = section_positions.get('portfolio', {}).get('top', DESKTOP_HEIGHT * 4)
    page.evaluate(f"window.scrollTo(0, {max(0, portfolio_y - 20)})")
    time.sleep(0.8)
    page.screenshot(path='/tmp/s5-portfolio.png', full_page=False)
    print("Saved: /tmp/s5-portfolio.png")

    # s6 - Testimonials
    testimonials_y = section_positions.get('testimonials', {}).get('top', DESKTOP_HEIGHT * 5)
    page.evaluate(f"window.scrollTo(0, {max(0, testimonials_y - 20)})")
    time.sleep(0.8)
    page.screenshot(path='/tmp/s6-testimonials.png', full_page=False)
    print("Saved: /tmp/s6-testimonials.png")

    # s7 - CTA
    cta_y = section_positions.get('cta', {}).get('top', DESKTOP_HEIGHT * 6)
    page.evaluate(f"window.scrollTo(0, {max(0, cta_y - 20)})")
    time.sleep(0.8)
    page.screenshot(path='/tmp/s7-cta.png', full_page=False)
    print("Saved: /tmp/s7-cta.png")

    # s8 - Contact
    contact_y = section_positions.get('contact', {}).get('top', DESKTOP_HEIGHT * 7)
    page.evaluate(f"window.scrollTo(0, {max(0, contact_y - 20)})")
    time.sleep(0.8)
    page.screenshot(path='/tmp/s8-contact.png', full_page=False)
    print("Saved: /tmp/s8-contact.png")

    # s9 - Footer
    footer_y = section_positions.get('footer', {}).get('top', page_height - DESKTOP_HEIGHT)
    page.evaluate(f"window.scrollTo(0, {max(0, footer_y - 20)})")
    time.sleep(0.8)
    page.screenshot(path='/tmp/s9-footer.png', full_page=False)
    print("Saved: /tmp/s9-footer.png")

    page.close()

    # ---- MOBILE full page ----
    mobile_page = browser.new_page(viewport={'width': 390, 'height': 844})
    mobile_page.goto(BASE_URL, wait_until='networkidle', timeout=30000)
    time.sleep(1.5)
    mobile_page.screenshot(path='/tmp/s-mobile.png', full_page=True)
    print("Saved: /tmp/s-mobile.png")
    mobile_page.close()

    browser.close()
    print("\nAll screenshots captured successfully.")
