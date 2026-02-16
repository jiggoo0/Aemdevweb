import os
import sys
import re
import requests
import datetime
from typing import List, Dict
from concurrent.futures import ThreadPoolExecutor

# --- [VISUAL SYSTEM] ---
class Colors:
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    BOLD = '\033[1m'
    END = '\033[0m'

# --- [SYSTEM CORE] ---
class SEOMonitor:
    def __init__(self):
        # ตั้งค่า Target Sitemap หลักของโครงการ
        self.target_sitemap = "https://aemdevweb.com/sitemap.xml"
        self.urls = self._load_urls()
        self.report_date = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
        
    def _load_urls(self) -> List[str]:
        """ดึง URL จาก Live Sitemap เพื่อความแม่นยำระดับ Production"""
        urls = []
        try:
            print(f"{Colors.YELLOW}📡 Fetching dynamic sitemap from: {self.target_sitemap}...{Colors.END}")
            response = requests.get(self.target_sitemap, timeout=15)
            
            if response.status_code == 200:
                # ใช้ Regex สกัดค่าใน Tag <loc>
                urls = re.findall(r'<loc>(.*?)</loc>', response.text)
                if not urls:
                    print(f"{Colors.RED}[ERROR] No URLs found in sitemap content.{Colors.END}")
                    sys.exit(1)
            else:
                print(f"{Colors.RED}[ERROR] Sitemap returned status {response.status_code}{Colors.END}")
                sys.exit(1)
                
        except requests.exceptions.RequestException as e:
            print(f"{Colors.RED}[ERROR] Could not connect to live sitemap: {e}{Colors.END}")
            sys.exit(1)
        return urls

    def check_health(self, url: str) -> Dict:
        """ตรวจสอบ HTTP Status และ Latency รายหน้า"""
        try:
            start_time = datetime.datetime.now()
            # ส่ง User-Agent จำลองว่าเป็น Bot เพื่อความแม่นยำ
            headers = {'User-Agent': 'AEM-SEO-Monitor/1.1'}
            response = requests.get(url, headers=headers, timeout=10)
            duration = (datetime.datetime.now() - start_time).total_seconds()
            
            return {
                "url": url,
                "status": response.status_code,
                "latency": round(duration, 2),
                "ok": response.status_code == 200
            }
        except Exception:
            return {"url": url, "status": "ERR", "latency": 0, "ok": False}

    def run(self):
        print(f"{Colors.BOLD}{Colors.CYAN}🚀 AEM SEO MONITORING ENGINE v1.1{Colors.END}")
        print(f"📅 Report Date: {self.report_date}")
        print(f"📡 Monitoring {len(self.urls)} URLs (Live Mode)...\n")

        # ใช้ ThreadPool สำหรับ Parallel Scanning (เหมาะกับ Termux)
        with ThreadPoolExecutor(max_workers=5) as executor:
            results = list(executor.map(self.check_health, self.urls))

        # --- [REPORT GENERATION] ---
        print(f"{'URL':<55} | {'STATUS':<7} | {'LATENCY':<8}")
        print("-" * 75)
        
        success_count = 0
        for r in results:
            status_color = Colors.GREEN if r['ok'] else Colors.RED
            latency_color = Colors.YELLOW if r['latency'] > 1.2 else Colors.GREEN
            
            # ตัด URL ให้พอดีกับหน้าจอ Terminal
            display_url = r['url'].replace("https://", "")
            
            print(f"{display_url[:55]:<55} | "
                  f"{status_color}{r['status']:<7}{Colors.END} | "
                  f"{latency_color}{r['latency']}s{Colors.END}")
            
            if r['ok']: success_count += 1

        print("-" * 75)
        print(f"{Colors.BOLD}📊 FINAL SUMMARY:{Colors.END}")
        print(f"✅ Healthy: {success_count}/{len(self.urls)}")
        
        if success_count == len(self.urls):
            print(f"{Colors.GREEN}✨ ALL SYSTEMS OPTIMIZED: Website is fully accessible to Google.{Colors.END}")
        else:
            print(f"{Colors.RED}⚠ ATTENTION: Some SEO nodes are down or unreachable!{Colors.END}")

if __name__ == "__main__":
    monitor = SEOMonitor()
    monitor.run()
