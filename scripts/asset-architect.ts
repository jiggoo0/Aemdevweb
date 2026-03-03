/**
 * [ENGINE]: ASSET_ARCHITECT_CORE v3.6.2 (DEBUG_VERIFIED)
 * [MISSION]: Professional AI-Native Asset Pipeline with Quality Assurance
 * [STRATEGY]: Targeted Execution | Verbose Logging | AI Prompt Mastery
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';

const ASSET_DIR = path.join(process.cwd(), 'public/images/areas');
const NODES_DIR = path.join(process.cwd(), 'constants/area-nodes');
const MANIFEST_PATH = path.join(ASSET_DIR, 'asset-manifest.json');

// ตั้งค่าจังหวัดที่ต้องการทดสอบที่นี่ (หากต้องการทำทั้งหมดให้เป็น null)
const TEST_ONLY: string[] | null = ['bangkok', 'chiang-mai', 'phuket']; 

interface ProvinceNode {
  slug: string;
  province: string;
  region: string;
  alt: string;
  geo_tag: string;
}

function generateAiPrompt(province: string, region: string, slug: string): string {
    const base = "Professional architectural photography of";
    const technical = "8k UHD, luxury commercial style, clean lines, sunset lighting, cinematic, no people, sharp focus, professional color grading";
    
    let context = "";
    if (slug === 'bangkok') context = "futuristic Bangkok CBD skyline with luxury skyscrapers, dusk atmosphere";
    else if (['phuket', 'krabi', 'phang-nga'].includes(slug)) context = `luxury beach resort and emerald sea in ${province}, Andaman coast`;
    else if (['chiang-mai', 'chiang-rai', 'nan'].includes(slug)) context = `modern Lanna architecture and mountain resort in ${province}`;
    else context = `iconic landmark or beautiful scenic view of ${province} province, Thailand`;

    return encodeURIComponent(`${base} ${context}, ${technical}`);
}

async function getProvinceNodes(): Promise<ProvinceNode[]> {
  if (!fs.existsSync(NODES_DIR)) return [];
  const files = fs.readdirSync(NODES_DIR).filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'node-factory.ts');
  const nodes: ProvinceNode[] = [];
  for (const file of files) {
    const content = fs.readFileSync(path.join(NODES_DIR, file), 'utf8');
    const slugMatch = content.match(/slug:\s*["'](.+?)["']/);
    const provinceMatch = content.match(/province:\s*["'](.+?)["']/);
    const regionMatch = content.match(/region:\s*["'](.+?)["']/);
    const titleMatch = content.match(/title:\s*["'](.+?)["']/);
    if (slugMatch && provinceMatch) {
      const slug = slugMatch[1];
      if (TEST_ONLY && !TEST_ONLY.includes(slug)) continue;
      
      nodes.push({
        slug,
        province: provinceMatch[1],
        region: regionMatch ? regionMatch[1] : 'Central',
        alt: titleMatch ? titleMatch[1].split('|')[0].trim() : `${provinceMatch[1]} Thailand`,
        geo_tag: `${provinceMatch[1]}, Thailand`
      });
    }
  }
  return nodes;
}

async function processImage(buffer: Buffer, dest: string): Promise<boolean> {
  try {
    await sharp(buffer)
      .resize(1920, 1080, { fit: 'cover', position: 'center' })
      .webp({ quality: 82, effort: 6 })
      .toFile(dest);
    return true;
  } catch (err) {
    return false;
  }
}

async function fetchAiImage(node: ProvinceNode): Promise<Buffer | null> {
  const prompt = generateAiPrompt(node.province, node.region, node.slug);
  const url = `https://image.pollinations.ai/prompt/${prompt}?width=1920&height=1080&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;
  
  return new Promise<Buffer | null>((resolve) => {
    https.get(url, { timeout: 60000 }, (res) => {
      if (res.statusCode === 200) {
        const chunks: any[] = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => resolve(Buffer.concat(chunks)));
      } else resolve(null);
    }).on('error', () => resolve(null));
  });
}

async function main() {
  console.log(`🛠️  Initializing AI Asset Architect v3.6.2 [${TEST_ONLY ? 'TEST MODE' : 'FULL MODE'}]...`);
  if (!fs.existsSync(ASSET_DIR)) fs.mkdirSync(ASSET_DIR, { recursive: true });

  const nodes = await getProvinceNodes();
  console.log(`🔍 [SCAN]: Found ${nodes.length} targets.`);

  const manifest: any = {};
  if (fs.existsSync(MANIFEST_PATH)) {
    try { manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8')); } catch(e) {}
  }

  for (const node of nodes) {
    const filename = `${node.slug}-node.webp`;
    const dest = path.join(ASSET_DIR, filename);

    console.log(`🎨 [PROCESS]: ${node.slug.toUpperCase()}...`);
    const buffer = await fetchAiImage(node);
    if (buffer) {
      const success = await processImage(buffer, dest);
      if (success) {
        console.log(`   ✅ [CREATED]: ${filename} (${(fs.statSync(dest).size / 1024).toFixed(1)} KB)`);
        manifest[node.slug] = {
          file: `/images/areas/${filename}`,
          alt: node.alt,
          geo: node.geo_tag,
          optimized: true,
          timestamp: new Date().toISOString()
        };
      }
    } else {
      console.log(`   ❌ [FAILED]: Fetching AI image for ${node.slug}`);
    }
    // บันทึก Manifest ทุกครั้งที่สำเร็จเพื่อป้องกันข้อมูลหาย
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  }

  console.log(`\n🏁 ${TEST_ONLY ? 'Test Run' : 'Execution'} Complete.`);
}

main();
