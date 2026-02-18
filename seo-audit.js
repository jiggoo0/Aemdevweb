const { JWT } = require('google-auth-library');
const fs = require('fs');

const KEY_FILE = './service-account.json';
// ใช้ Domain Property เพื่อให้ครอบคลุมทั้ง www และ non-www ในการดึงข้อมูล
const SITE_URL = encodeURIComponent('sc-domain:aemdevweb.com');

// --- 47 URLs ปัจจุบัน (ปรับเป็น WWW ทั้งหมด) ---
const currentInventory = [
    '/', '/services', '/case-studies', '/blog', '/about', '/privacy', '/terms',
    '/services/seo-agency', '/services/salepage', '/services/local-authority',
    '/services/corporate', '/services/catalog', '/services/bio', '/services/hotelresort',
    '/areas/bangkok', '/areas/chon-buri', '/areas/korat', '/areas/chiang-mai',
    '/areas/phuket', '/areas/kamphaeng-phet', '/areas/khon-kaen', '/areas/phang-nga',
    '/areas/phitsanulok', '/areas/ranong', '/areas/nakhon-sawan', '/areas/surat-thani',
    '/areas/lampang', '/areas/chumphon', '/areas/sukhothai', '/areas/tak',
    '/areas/mae-hong-son', '/areas/phichit', '/areas/chiang-rai', '/areas/uttaradit',
    '/case-studies/provincial-digital-domination', '/case-studies/case-study-industrial-catalog',
    '/case-studies/unlink-reputation-management-success', '/blog/seo-2026-strategy',
    '/blog/5-points-killing-sales', '/blog/advanced-schema-markup', '/blog/case-study-unlink-th',
    '/blog/copywriting-secrets', '/blog/core-web-vitals-speed', '/blog/ecommerce-conversion-seo',
    '/blog/facebook-ads-vs-website', '/blog/lower-north-digital-transformation',
    '/blog/technical-audit-protocol'
].map(path => `https://www.aemdevweb.com${path === '/' ? '' : path}`);

// Function สำหรับจัดการ URL ให้เป็นมาตรฐานเดียวกัน
// ปรับให้รองรับการเทียบ www และ non-www โดยการลบ www ออกชั่วคราวขณะเทียบ หรือบังคับเติม www
const normalize = (url) => {
    let clean = url.replace(/\/$/, "").toLowerCase();
    // ถ้าไม่มี www ให้เติมเข้าไปเพื่อให้ตรงกับ Inventory ปัจจุบัน
    if (clean.startsWith('https://aemdevweb.com')) {
        clean = clean.replace('https://aemdevweb.com', 'https://www.aemdevweb.com');
    }
    return clean;
};

async function runAudit() {
    if (!fs.existsSync(KEY_FILE)) {
        console.error(`❌ Missing ${KEY_FILE}`);
        return;
    }

    const keys = JSON.parse(fs.readFileSync(KEY_FILE));
    const client = new JWT({
        email: keys.client_email,
        key: keys.private_key,
        scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });

    try {
        console.log('📡 AEM SEO AUDIT (WWW-Primary): Fetching data from GSC...');
        
        const url = `https://www.googleapis.com/webmasters/v3/sites/${SITE_URL}/searchAnalytics/query`;
        const body = {
            startDate: '2026-01-01',
            endDate: new Date().toISOString().split('T')[0],
            dimensions: ['page'],
            rowLimit: 5000 
        };

        const res = await client.request({ url, method: 'POST', data: body });
        
        const gscUrls = res.data.rows ? res.data.rows.map(r => normalize(r.keys[0])) : [];
        const currentMapped = currentInventory.map(u => normalize(u));

        // แยกกลุ่ม
        const legacyUrls = gscUrls.filter(u => !currentMapped.includes(u));
        const untrackedUrls = currentMapped.filter(u => !gscUrls.includes(u));

        console.log('\n--- AUDIT RESULT (Target: WWW) ---');
        console.log(`✅ Current Active (WWW): ${currentMapped.length} URLs`);
        console.log(`⚠️ Legacy (Old Structure/Non-WWW): ${legacyUrls.length} URLs`);
        console.log(`🚀 New (WWW not yet in GSC): ${untrackedUrls.length} URLs`);

        if (legacyUrls.length > 0) {
            console.log('\n🔴 [ACTION] หน้าเก่าหรือหน้า Non-WWW ที่ Google ยังจำอยู่:');
            // กรองเอาเฉพาะหน้าที่ไม่ใช่หน้าหลักแบบเบิ้ลมาโชว์
            legacyUrls.slice(0, 15).forEach(u => console.log(` - ${u}`));
            if(legacyUrls.length > 15) console.log(` ... และอีก ${legacyUrls.length - 15} รายการ`);
        }

        if (untrackedUrls.length > 0) {
            console.log('\n🟢 [INDEXING] หน้า WWW ใหม่ที่ต้องดันเข้า Google:');
            untrackedUrls.forEach(u => console.log(` - ${u}`));
        }

        fs.writeFileSync('audit-result.json', JSON.stringify({ legacy: legacyUrls, new: untrackedUrls, timestamp: new Date() }, null, 2));
        console.log('\n💾 Saved result to audit-result.json');

    } catch (err) {
        const errorMsg = err.response ? JSON.stringify(err.response.data) : err.message;
        console.error('❌ Error:', errorMsg);
    }
}

runAudit();
