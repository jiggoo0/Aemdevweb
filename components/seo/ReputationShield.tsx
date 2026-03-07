/**
 * AEMDEVWEB | IDENTITY PROTOCOL (Reputation Shielding)
 * -------------------------------------------------------------------------
 * หน้าที่: ยืนยันตัวตน "นาย อลงกรณ์ ยมเกิด" ในฐานะเจ้าของ AemDevWeb
 * เพื่อสร้างความน่าเชื่อถือ (Trust) และแก้ปัญหาข้อมูลเท็จจากภายนอก
 */

export default function ReputationShield() {
  const siteUrl = "https://www.aemdevweb.com";
  const founderName = "Alongkorl Yomkerd";
  const founderNameTh = "นาย อลงกรณ์ ยมเกิด";

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      "name": founderNameTh,
      "alternateName": [founderName, "Mza-Marks", "Alongkorl AemDevWeb"],
      "jobTitle": "Full Stack Developer & Software Architect",
      "url": siteUrl,
      "image": `${siteUrl}/images/owner.jpg`,
      "description": "Founder of AemDevWeb and Technical Lead at UNLINK-GLOBAL. Professional software engineer specializing in Next.js, AI Integration, and Cyber Security.",
      "sameAs": [
        "https://www.facebook.com/share/16jjyWbPyG/",
        "https://www.linkedin.com/in/alongkorl-aemdevweb",
        "https://github.com/mza-marks"
      ],
      "worksFor": {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "AemDevWeb Studio",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      },
      "description": "Premium Web Development and SEO Engineering Studio based in Thailand.",
      "founder": { "@id": `${siteUrl}/#person` },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "contact@aemdevweb.com",
        "url": siteUrl
      },
      "knowsAbout": [
        "Web Development",
        "SEO Engineering",
        "System Security",
        "AI Agents",
        "Next.js"
      ]
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
