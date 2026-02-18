const { JWT } = require('google-auth-library');
const fs = require('fs');

const KEY_FILE = './service-account.json';
const AUDIT_RESULT = './audit-result.json';

async function executeSeo() {
    if (!fs.existsSync(AUDIT_RESULT)) return console.error('❌ ไม่พบไฟล์ audit-result.json');
    
    const { legacy, new: newUrls } = JSON.parse(fs.readFileSync(AUDIT_RESULT));
    const keys = JSON.parse(fs.readFileSync(KEY_FILE));
    const client = new JWT({
        email: keys.client_email,
        key: keys.private_key,
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const notify = async (url, type) => {
        try {
            await client.request({
                url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
                method: 'POST',
                data: { url, type }
            });
            console.log(`✅ [${type}] : ${url}`);
        } catch (err) {
            console.error(`❌ [${type}] FAILED: ${url}`, err.message);
        }
    };

    console.log('🚀 AEM SEO EXECUTION ENGINE STARTING...');
    
    // 1. ดันหน้าใหม่เข้า Index (สำคัญที่สุด)
    for (const url of newUrls) await notify(url, 'URL_UPDATED');
    
    // 2. แจ้งลบหน้าเก่า/โครงเก่า
    for (const url of legacy) await notify(url, 'URL_DELETED');

    console.log('\n✨ Done! ตรวจสอบกราฟได้ที่ Google Cloud Console');
}

executeSeo();
