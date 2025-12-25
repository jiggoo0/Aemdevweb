/** @format */
"use client"

import React from "react"
import Image from "next/image"
import styles from "./CafeStyle.module.css"

export default function CafeTemplate({ data }: { data: any }) {
  // ดึง content ออกมา ถ้าไม่มี data ให้ใช้ object ว่างป้องกันหน้าขาว
  const content = data?.content || {}

  return (
    <div className={styles.wrapper}>
      {/* HERO_SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            {content.heroTitle || "CAFE_COLLECTION"}
          </h1>
          <p className={styles.heroSubtitle}>{content.heroSubtitle}</p>
          <button className={styles.ctaButton}>ORDER_NOW</button>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.circleBadge}>EST.2025</div>
        </div>
      </section>

      {/* FEATURE_GRID */}
      <section className={styles.featureGrid}>
        {content.features?.map((item: any) => (
          <div key={item.id} className={styles.featureCard}>
            <span className={styles.featureLabel}>LOG_0{item.id}</span>
            <h3 className={styles.featureTitle}>{item.label}</h3>
            <p className={styles.featureDetail}>{item.detail}</p>
          </div>
        ))}
      </section>

      {/* MENU_SECTION */}
      <section className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>MENU_MATRIX</h2>
        <div className={styles.menuGrid}>
          {content.menuItems?.map((item: any) => (
            <div key={item.id} className={styles.menuItem}>
              <div className={styles.imageBox}>
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  unoptimized
                  className={styles.img}
                />
              </div>
              <div className={styles.menuText}>
                <div className={styles.menuHeader}>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemPrice}>{item.price}</span>
                </div>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
