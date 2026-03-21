from playwright.sync_api import sync_playwright
import time

URL = "https://ombraie-agency.vercel.app"
OUT = "/Users/lucas/ombraie-agency/screenshots/redesign_audit"

def capture(page, path, label):
    page.screenshot(path=f"{OUT}/{path}", full_page=False)
    print(f"  Saved: {label}")

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1440, "height": 900})

    print("Loading page...")
    page.goto(URL, wait_until="networkidle", timeout=60000)
    time.sleep(3)

    # --- 1. Full page screenshot ---
    print("Capturing full page...")
    page.screenshot(path=f"{OUT}/00_full_page.png", full_page=True)
    print("  Saved: Full page")

    # --- 2. Hero (top of page) ---
    print("Capturing Hero...")
    page.evaluate("window.scrollTo(0, 0)")
    time.sleep(0.8)
    page.screenshot(path=f"{OUT}/01_hero.png", full_page=False)
    print("  Saved: Hero")

    # --- 3. Services section ---
    print("Capturing Services...")
    services = page.query_selector("#services, [id*='service'], section:has(h2:has-text('Service')), section:has(h2:has-text('service'))")
    if services:
        services.scroll_into_view_if_needed()
        time.sleep(0.8)
        page.screenshot(path=f"{OUT}/02_services.png", full_page=False)
        print("  Saved: Services (via selector)")
    else:
        page.evaluate("window.scrollTo(0, 900)")
        time.sleep(0.8)
        page.screenshot(path=f"{OUT}/02_services.png", full_page=False)
        print("  Saved: Services (scroll fallback)")

    # --- 4. Stats section ---
    print("Capturing Stats...")
    # Try to find stats by numbers or chiffres
    stats_selectors = ["#stats", "[id*='stat']", "section:has([class*='stat'])", "section:has(h2:has-text('Chiffre'))", "section:has(h2:has-text('Résultat'))"]
    stats = None
    for sel in stats_selectors:
        try:
            el = page.query_selector(sel)
            if el:
                stats = el
                break
        except:
            pass
    if stats:
        stats.scroll_into_view_if_needed()
        time.sleep(0.8)
        page.screenshot(path=f"{OUT}/03_stats.png", full_page=False)
        print("  Saved: Stats (via selector)")
    else:
        page.evaluate("window.scrollTo(0, 1800)")
        time.sleep(0.8)
        page.screenshot(path=f"{OUT}/03_stats.png", full_page=False)
        print("  Saved: Stats (scroll fallback)")

    # --- 5. Process section ---
    print("Capturing Process...")
    process_selectors = ["#process", "#processus", "[id*='process']", "section:has(h2:has-text('Process'))", "section:has(h2:has-text('Notre méthode'))", "section:has(h2:has-text('Comment'))"]
    process = None
    for sel in process_selectors:
        try:
            el = page.query_selector(sel)
            if el:
                process = el
                break
        except:
            pass
    if process:
        process.scroll_into_view_if_needed()
        time.sleep(0.8)
        page.screenshot(path=f"{OUT}/04_process.png", full_page=False)
        print("  Saved: Process (via selector)")
    else:
        page.evaluate("window.scrollTo(0, 2700)")
        time.sleep(0.8)
        page.screenshot(path=f"{OUT}/04_process.png", full_page=False)
        print("  Saved: Process (scroll fallback)")

    # --- 6. Portfolio section - find it first ---
    print("Capturing Portfolio...")
    portfolio_selectors = ["#portfolio", "#realisations", "[id*='portfolio']", "[id*='realisation']", "section:has(h2:has-text('Portfolio'))", "section:has(h2:has-text('Réalisations'))", "section:has(h2:has-text('Nos travaux'))"]
    portfolio = None
    for sel in portfolio_selectors:
        try:
            el = page.query_selector(sel)
            if el:
                portfolio = el
                break
        except:
            pass

    if portfolio:
        portfolio.scroll_into_view_if_needed()
        time.sleep(1)
        page.screenshot(path=f"{OUT}/05_portfolio_default.png", full_page=False)
        print("  Saved: Portfolio default tab")

        # Click "Résultats Publicités" tab
        pub_tab = page.query_selector("button:has-text('Publicité'), button:has-text('Résultat'), [role='tab']:has-text('Publicité'), [role='tab']:has-text('Résultat')")
        if pub_tab:
            pub_tab.click()
            time.sleep(1.5)
            page.screenshot(path=f"{OUT}/06_portfolio_pub.png", full_page=False)
            print("  Saved: Portfolio - Résultats Publicités tab")
        else:
            # Try all tab buttons
            tabs = page.query_selector_all("[role='tab'], .tab-button, button[data-tab]")
            print(f"  Found {len(tabs)} tabs")
            for i, tab in enumerate(tabs):
                tab_text = tab.inner_text().strip()
                print(f"    Tab {i}: '{tab_text}'")
                if "pub" in tab_text.lower() or "résultat" in tab_text.lower() or "publicité" in tab_text.lower():
                    tab.click()
                    time.sleep(1.5)
                    page.screenshot(path=f"{OUT}/06_portfolio_pub.png", full_page=False)
                    print("  Saved: Portfolio - Pub tab")
                    break

        # Click "Sites Web" tab
        sites_tab = page.query_selector("button:has-text('Sites Web'), button:has-text('Site'), [role='tab']:has-text('Sites Web'), [role='tab']:has-text('Site')")
        if sites_tab:
            sites_tab.click()
            time.sleep(1.5)
            page.screenshot(path=f"{OUT}/07_portfolio_sites.png", full_page=False)
            print("  Saved: Portfolio - Sites Web tab")
        else:
            tabs = page.query_selector_all("[role='tab'], .tab-button, button[data-tab]")
            for i, tab in enumerate(tabs):
                tab_text = tab.inner_text().strip()
                if "site" in tab_text.lower() or "web" in tab_text.lower():
                    tab.click()
                    time.sleep(1.5)
                    page.screenshot(path=f"{OUT}/07_portfolio_sites.png", full_page=False)
                    print("  Saved: Portfolio - Sites tab")
                    break
    else:
        page.evaluate("window.scrollTo(0, 3600)")
        time.sleep(0.8)
        page.screenshot(path=f"{OUT}/05_portfolio_default.png", full_page=False)
        print("  Saved: Portfolio (scroll fallback)")

    # --- 7. Testimonials ---
    print("Capturing Testimonials...")
    testi_selectors = ["#testimonials", "#avis", "[id*='temoignage']", "[id*='testimonial']", "section:has(h2:has-text('Témoignage'))", "section:has(h2:has-text('Avis'))", "section:has(h2:has-text('Client'))"]
    testi = None
    for sel in testi_selectors:
        try:
            el = page.query_selector(sel)
            if el:
                testi = el
                break
        except:
            pass
    if testi:
        testi.scroll_into_view_if_needed()
        time.sleep(0.8)
        page.screenshot(path=f"{OUT}/08_testimonials.png", full_page=False)
        print("  Saved: Testimonials")
    else:
        page.evaluate("window.scrollTo(0, 4500)")
        time.sleep(0.8)
        page.screenshot(path=f"{OUT}/08_testimonials.png", full_page=False)
        print("  Saved: Testimonials (scroll fallback)")

    # --- 8. Zone d'intervention ---
    print("Capturing Zone d'intervention...")
    zone_selectors = ["#zone", "[id*='zone']", "[id*='intervention']", "section:has(h2:has-text('Zone'))", "section:has(h2:has-text('Intervention'))", "section:has(h2:has-text('intervention'))"]
    zone = None
    for sel in zone_selectors:
        try:
            el = page.query_selector(sel)
            if el:
                zone = el
                break
        except:
            pass
    if zone:
        zone.scroll_into_view_if_needed()
        time.sleep(0.8)
        page.screenshot(path=f"{OUT}/09_zone.png", full_page=False)
        print("  Saved: Zone d'intervention")
    else:
        page.evaluate("window.scrollTo(0, 5400)")
        time.sleep(0.8)
        page.screenshot(path=f"{OUT}/09_zone.png", full_page=False)
        print("  Saved: Zone (scroll fallback)")

    # --- 9. FAQ ---
    print("Capturing FAQ...")
    faq_selectors = ["#faq", "[id*='faq']", "section:has(h2:has-text('FAQ'))", "section:has(h2:has-text('Question'))", "section:has(h2:has-text('question'))"]
    faq = None
    for sel in faq_selectors:
        try:
            el = page.query_selector(sel)
            if el:
                faq = el
                break
        except:
            pass
    if faq:
        faq.scroll_into_view_if_needed()
        time.sleep(0.8)
        page.screenshot(path=f"{OUT}/10_faq.png", full_page=False)
        print("  Saved: FAQ")
    else:
        page.evaluate("window.scrollTo(0, 6300)")
        time.sleep(0.8)
        page.screenshot(path=f"{OUT}/10_faq.png", full_page=False)
        print("  Saved: FAQ (scroll fallback)")

    # --- 10. Contact ---
    print("Capturing Contact...")
    contact_selectors = ["#contact", "[id*='contact']", "section:has(h2:has-text('Contact'))", "section:has(h2:has-text('contact'))", "section:has(h2:has-text('Parlons'))"]
    contact = None
    for sel in contact_selectors:
        try:
            el = page.query_selector(sel)
            if el:
                contact = el
                break
        except:
            pass
    if contact:
        contact.scroll_into_view_if_needed()
        time.sleep(0.8)
        page.screenshot(path=f"{OUT}/11_contact.png", full_page=False)
        print("  Saved: Contact")
    else:
        page.evaluate("window.scrollTo(0, 7200)")
        time.sleep(0.8)
        page.screenshot(path=f"{OUT}/11_contact.png", full_page=False)
        print("  Saved: Contact (scroll fallback)")

    # --- 11. Footer ---
    print("Capturing Footer...")
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    time.sleep(1)
    page.screenshot(path=f"{OUT}/12_footer.png", full_page=False)
    print("  Saved: Footer")

    # --- Inspect page structure ---
    print("\nInspecting page structure...")
    sections = page.evaluate("""() => {
        const sections = document.querySelectorAll('section, [id]');
        return Array.from(sections).map(el => ({
            tag: el.tagName,
            id: el.id || '',
            class: el.className.substring(0, 80) || '',
            text: el.innerText ? el.innerText.substring(0, 60) : ''
        }));
    }""")
    for s in sections[:40]:
        if s['id'] or s['tag'] == 'SECTION':
            print(f"  [{s['tag']}] id='{s['id']}' | '{s['text'].strip()[:50]}'")

    # --- Get total page height ---
    height = page.evaluate("document.body.scrollHeight")
    print(f"\nTotal page height: {height}px")

    browser.close()
    print("\nAll screenshots saved to:", OUT)
