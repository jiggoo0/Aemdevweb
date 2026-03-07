-- [DATABASE SCHEMA]: AEMDEVWEB-V18 (TURSO/libSQL)
-- [STRATEGY]: Optimized for Regional SEO & Performance

-- 1. Table: Provinces (77 จังหวัด)
CREATE TABLE IF NOT EXISTS provinces (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    name_th TEXT NOT NULL,
    name_en TEXT NOT NULL,
    region TEXT NOT NULL,
    priority INTEGER DEFAULT 0,
    seo_title TEXT,
    seo_description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Table: Services (บริการหลัก)
CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    description TEXT,
    price_start REAL,
    category TEXT,
    is_featured BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 3. Table: System Metrics (สถิติเรียลไทม์)
CREATE TABLE IF NOT EXISTS system_metrics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    metric_key TEXT NOT NULL UNIQUE,
    metric_value REAL NOT NULL,
    unit TEXT,
    last_updated DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- [INDEXING]: เพิ่มดัชนีเพื่อความเร็วในการค้นหา (SEO Ready)
CREATE INDEX IF NOT EXISTS idx_provinces_slug ON provinces(slug);
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
