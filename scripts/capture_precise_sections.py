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

    # Map all section positions
    section_positions = page.evaluate("""
        () => {
            const all = document.querySelectorAll('section[id], section');
            const result = [];
            all.forEach(s => {
                const rect = s.getBoundingClientRect();
                result.push({
                    id: s.id || '(no id)',
                    top: Math.round(rect.top + window.scrollY),
                    height: Math.round(rect.height),
                    firstHeading: (s.querySelector('h1,h2,h3')?.innerText || '').trim().substring(0, 60)
                });
            });
            return result;
        }
    """)
    print("SECTIONS:")
    for s in section_positions:
        print(f"  #{s['id']} y={s['top']} h={s['height']} heading='{s['firstHeading']}'")

    # Hero deep — bottom of hero
    scroll_to(page, 0)
    shot(page, "A01_hero_top.png")

    # Services section
    services_y = next((s['top'] for s in section_positions if 'service' in s['id'].lower() or 'agence' in s['firstHeading'].lower() or 'full-service' in s['firstHeading'].lower()), 700)
    print(f"Services at y~{services_y}")
    scroll_to(page, max(0, services_y - 80))
    shot(page, "A02_services_top.png")
    scroll_to(page, services_y + 400)
    shot(page, "A03_services_cards.png")
    scroll_to(page, services_y + 800)
    shot(page, "A04_services_cards2.png")

    # Stats section
    stats_y = next((s['top'] for s in section_positions if 'stat' in s['id'].lower() or 'résultat' in s['firstHeading'].lower() or '+1M' in s['firstHeading']), 1400)
    print(f"Stats at y~{stats_y}")
    scroll_to(page, max(0, stats_y - 80))
    shot(page, "A05_stats.png")

    # Process section
    process_y = next((s['top'] for s in section_positions if 'process' in s['id'].lower() or 'processus' in s['firstHeading'].lower() or 'garanti' in s['firstHeading'].lower()), 1800)
    print(f"Process at y~{process_y}")
    scroll_to(page, max(0, process_y - 80))
    shot(page, "A06_process_top.png")
    scroll_to(page, process_y + 500)
    shot(page, "A07_process_steps.png")

    # Portfolio section — navigate there
    portfolio_y = next((s['top'] for s in section_positions if 'portfolio' in s['id'].lower() or 'création' in s['firstHeading'].lower() or 'prochains résultats' in s['firstHeading'].lower()), 2200)
    print(f"Portfolio at y~{portfolio_y}")

    # Tab 1: Résultats Publicités
    scroll_to(page, max(0, portfolio_y - 80))
    page.evaluate("""
        () => {
            const tab = Array.from(document.querySelectorAll('button'))
                .find(b => b.innerText.includes('Résultats Publicités'));
            if (tab) tab.click();
        }
    """)
    time.sleep(1.5)
    scroll_to(page, max(0, portfolio_y - 80), 0.4)
    shot(page, "A08_portfolio_tab1_header.png")
    scroll_to(page, portfolio_y + 300)
    shot(page, "A09_portfolio_tab1_cards.png")
    scroll_to(page, portfolio_y + 700)
    shot(page, "A10_portfolio_tab1_cards2.png")

    # Tab 2: Sites Web
    scroll_to(page, max(0, portfolio_y - 80))
    page.evaluate("""
        () => {
            const tab = Array.from(document.querySelectorAll('button'))
                .find(b => b.innerText.includes('Sites Web'));
            if (tab) tab.click();
        }
    """)
    time.sleep(1.5)
    scroll_to(page, max(0, portfolio_y - 80), 0.4)
    shot(page, "A11_portfolio_tab2_header.png")
    scroll_to(page, portfolio_y + 300)
    shot(page, "A12_portfolio_tab2_cards.png")
    scroll_to(page, portfolio_y + 700)
    shot(page, "A13_portfolio_tab2_cards2.png")

    # Tab 3: Flyers & Design
    scroll_to(page, max(0, portfolio_y - 80))
    page.evaluate("""
        () => {
            const tab = Array.from(document.querySelectorAll('button'))
                .find(b => b.innerText.includes('Flyers'));
            if (tab) tab.click();
        }
    """)
    time.sleep(1.5)
    scroll_to(page, max(0, portfolio_y - 80), 0.4)
    shot(page, "A14_portfolio_tab3_header.png")
    scroll_to(page, portfolio_y + 300)
    shot(page, "A15_portfolio_tab3_row1.png")
    scroll_to(page, portfolio_y + 700)
    shot(page, "A16_portfolio_tab3_row2.png")
    scroll_to(page, portfolio_y + 1100)
    shot(page, "A17_portfolio_tab3_row3.png")
    scroll_to(page, portfolio_y + 1500)
    shot(page, "A18_portfolio_tab3_row4.png")

    # Testimonials
    testi_y = next((s['top'] for s in section_positions if 'testi' in s['id'].lower() or 'confiance' in s['firstHeading'].lower()), 3000)
    print(f"Testimonials at y~{testi_y}")
    scroll_to(page, max(0, testi_y - 80))
    shot(page, "A19_testimonials_top.png")
    scroll_to(page, testi_y + 400)
    shot(page, "A20_testimonials_cards.png")
    scroll_to(page, testi_y + 800)
    shot(page, "A21_testimonials_cards2.png")

    # CTA section
    cta_y = next((s['top'] for s in section_positions if 'transformons' in s['firstHeading'].lower() or 'présence' in s['firstHeading'].lower()), 3600)
    print(f"CTA at y~{cta_y}")
    scroll_to(page, max(0, cta_y - 80))
    shot(page, "A22_cta_section.png")

    # Contact section
    contact_y = next((s['top'] for s in section_positions if 'contact' in s['id'].lower() or 'projet' in s['firstHeading'].lower()), 3800)
    print(f"Contact at y~{contact_y}")
    scroll_to(page, max(0, contact_y - 80))
    shot(page, "A23_contact_top.png")
    scroll_to(page, contact_y + 400)
    shot(page, "A24_contact_form.png")

    # Footer
    page_height = page.evaluate("document.body.scrollHeight")
    scroll_to(page, page_height - VIEWPORT_H)
    shot(page, "A25_footer.png")

    browser.close()
    print("Done.")
