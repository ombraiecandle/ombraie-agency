from playwright.sync_api import sync_playwright
import sys

def capture(url, output_path, viewport_width=1920, viewport_height=1080, full_page=False):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': viewport_width, 'height': viewport_height})
        page.goto(url, wait_until='networkidle')
        page.screenshot(path=output_path, full_page=full_page)
        browser.close()
        print(f"Screenshot saved: {output_path}")

def capture_scroll(url, output_path, viewport_width=1440, viewport_height=1080, scroll_y=0):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': viewport_width, 'height': viewport_height})
        page.goto(url, wait_until='networkidle')
        if scroll_y > 0:
            page.evaluate(f'window.scrollTo(0, {scroll_y})')
            page.wait_for_timeout(500)
        page.screenshot(path=output_path, full_page=False)
        browser.close()
        print(f"Screenshot saved: {output_path}")

if __name__ == '__main__':
    # 1. Hero section at desktop 1440px - top of page
    capture('http://localhost:3001', '/tmp/new-hero.png', 1440, 900, False)

    # 2. Services section - scroll down ~900px
    capture_scroll('http://localhost:3001', '/tmp/new-services.png', 1440, 900, 900)

    # 3. Stats + Process sections - scroll down ~1800px
    capture_scroll('http://localhost:3001', '/tmp/new-stats.png', 1440, 900, 1800)

    # 4. Full page desktop 1440px
    capture('http://localhost:3001', '/tmp/new-fullpage.png', 1440, 900, True)

    # 5. Mobile 390px full page
    capture('http://localhost:3001', '/tmp/new-mobile.png', 390, 844, True)
