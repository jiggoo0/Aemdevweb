# 📑 Project Summary Report

_Generated on Wed Dec 24 02:21:19 +07 2025_

## ⚙️ Environment Variables

> Loaded from .env (sensitive values masked)

- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `***`
- `POSTGRES_PASSWORD` = `***`
- `POSTGRES_PRISMA_URL` = `***`
- `POSTGRES_URL` = `***`
- `POSTGRES_URL_NON_POOLING` = `***`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `***`
- `SUPABASE_JWT_SECRET` = `***`
- `SUPABASE_SERVICE_ROLE_KEY` = `***`

## 📁 Folder Structure (Depth ≤ 4)

### app

app
├── about
│   └── page.tsx
├── api
│   └── contact
│   └── route.ts
├── blog
│   ├── [slug]
│   │   └── page.tsx
│   └── page.tsx
├── catalog
│   └── page.tsx
├── contact
│   ├── \_components
│   │   └── ContactMap.tsx
│   └── page.tsx
├── favicon.ico
├── globals.css
├── landing
│   └── [template-id]
│   ├── normalize.ts
│   ├── page.tsx
│   ├── registry.ts
│   ├── shared
│   │   ├── BrandBadge.tsx
│   │   ├── ContactForm.tsx
│   │   ├── FloatingAction.tsx
│   │   ├── Footer.tsx
│   │   ├── GoogleMap.tsx
│   │   ├── Navbar.tsx
│   │   ├── PricingSection.tsx
│   │   ├── PromoBanner.tsx
│   │   ├── Section.tsx
│   │   ├── ServiceInclusionSection.tsx
│   │   ├── ServicePolicy.tsx
│   │   ├── Testimonials.tsx
│   │   └── index.ts
│   ├── types
│   │   └── index.ts
│   └── variants
│   ├── cafe
│   ├── clinic
│   ├── construction
│   ├── real-estate
│   └── starter
├── layout.tsx
├── page.tsx
├── robots.txt
├── services
│   ├── ServicesPageClient.tsx
│   └── page.tsx
└── sitemap.ts

20 directories, 32 files

#### Metadata (file | size | sha1)

- app/services/page.tsx | 738b | sha1:c9eb8e21546b0a33dac7c6e26668845b56707284
- app/services/ServicesPageClient.tsx | 10561b | sha1:d0458c360c3b0247da6acc908b41f2cdaebec24b
- app/about/page.tsx | 7313b | sha1:717e06dd724311b0b679e8d287c2f0ec72493833
- app/blog/[slug]/page.tsx | 7051b | sha1:14b905ed1706d4edb548c4303d6fed33f34d3fa0
- app/blog/page.tsx | 11318b | sha1:ec5fede35297a10eea706ea5d34049a5fa97379f
- app/contact/page.tsx | 9478b | sha1:54be5369fcea33064165c5026f74881142c217ba
- app/contact/\_components/ContactMap.tsx | 7467b | sha1:0b28b0ad50ace1787356d28629594a5a3fa3851f
- app/layout.tsx | 4021b | sha1:579201343bea077ac716aee277093bc2fd5233ab
- app/page.tsx | 6281b | sha1:4ed760589f5c53aa3e02ad16d64cfe8116efff1e
- app/globals.css | 2818b | sha1:814b39f421df1fb728e642754c6923acded44f66
- app/api/contact/route.ts | 2313b | sha1:ad7395a8f89f2a2f55ebb119f618393bf8d024a6
- app/landing/[template-id]/page.tsx | 1998b | sha1:4263d8b91c644052080c7af1013a74988de213f1
- app/landing/[template-id]/normalize.ts | 2096b | sha1:02cbb885c92b2e831db638e68b64834f8b172628
- app/landing/[template-id]/types/index.ts | 3521b | sha1:7e0cf78176283bec11f4edff815a2e33ca2a1afd
- app/landing/[template-id]/variants/starter/components/ConversionForm.tsx | 2646b | sha1:21685ab42193123bf28ecd4dbd3481f116e5277a
- app/landing/[template-id]/variants/starter/components/FeatureHighlights.tsx | 3157b | sha1:4aa8e1f50f97a91f2d82a06b3e9ac2ed1da1b6db
- app/landing/[template-id]/variants/starter/components/HeroStarter.tsx | 2975b | sha1:cfaf55d53d8e4eea6941711522b5c87033a32194
- app/landing/[template-id]/variants/starter/components/SocialProof.tsx | 3674b | sha1:cb41134560b429bf2608b55a7008bdefb20d06b6
- app/landing/[template-id]/variants/starter/components/StarterFAQ.tsx | 2421b | sha1:34b805007c0387b8f9bfdd4f5502b04343db9c3a
- app/landing/[template-id]/variants/starter/components/TrustBadges.tsx | 2195b | sha1:b1ea60e78ce0a2269a9a8e159856546cc580df75
- app/landing/[template-id]/variants/starter/components/index.ts | 362b | sha1:923ebbc3f9f7c7356deb237ea2197cec9d9e9d04
- app/landing/[template-id]/variants/starter/StarterVariant.tsx | 577b | sha1:ca8fdf59e85c9df1f44cf71debf1b23f4a32d55b
- app/landing/[template-id]/variants/starter/index.ts | 59b | sha1:4a04103fe055e05df651e0a9e58a1bbb744fb328
- app/landing/[template-id]/variants/starter/template.tsx | 2265b | sha1:11458acca800db1b0526fbddcd11c3ad21ca6925
- app/landing/[template-id]/variants/clinic/components/BeforeAfter.tsx | 3585b | sha1:40152cef79b7db4e1bdbd363790a48ea28b3d3a3
- app/landing/[template-id]/variants/clinic/components/DoctorProfile.tsx | 3166b | sha1:971ec495303a1c7bf960e83706e376df6635101b
- app/landing/[template-id]/variants/clinic/components/FAQSection.tsx | 520b | sha1:1df0bd61d418496c9151b8c101b266a1183bc6f4
- app/landing/[template-id]/variants/clinic/components/SocialProof.tsx | 732b | sha1:9e3fdbc1d30e900a9e7288f871fcb57e839029a5
- app/landing/[template-id]/variants/clinic/components/index.ts | 222b | sha1:8c9dc1ab4f69ecf070480e0b1da9991a22efb202
- app/landing/[template-id]/variants/clinic/ClinicVariant.tsx | 514b | sha1:c76ecf77928954286627f7b9604f759c12f0957a
- app/landing/[template-id]/variants/clinic/index.ts | 58b | sha1:77926862abc561c5f19bf950b79727f444e5acd9
- app/landing/[template-id]/variants/clinic/template.tsx | 3410b | sha1:a83263e1756bc853d0179b7a8109ab8894292553
- app/landing/[template-id]/variants/real-estate/components/FAQSection.tsx | 516b | sha1:5ca0e24109c8da453d239444fa31b44ccfd114e2
- app/landing/[template-id]/variants/real-estate/components/LocationInsight.tsx | 2647b | sha1:e5fd56f89f0050603deb8821592f109f1262b28e
- app/landing/[template-id]/variants/real-estate/components/RoomTypeCards.tsx | 2485b | sha1:d174802ce44ed7124bb5ae10e375c1d6efe9fb19
- app/landing/[template-id]/variants/real-estate/components/SocialProof.tsx | 630b | sha1:6e5e1c84627cb5fd2edd4a23fda3f5662b87882b
- app/landing/[template-id]/variants/real-estate/components/index.ts | 230b | sha1:43fb9282e13468ac3f94c6a4e21b32113bbe7827
- app/landing/[template-id]/variants/real-estate/RealEstateVariant.tsx | 537b | sha1:8060f001b83b97ad5a16f900aaed2f1b6b67b86b
- app/landing/[template-id]/variants/real-estate/index.ts | 62b | sha1:e06aae93a51b7de57ad82e1ad8d43a443bab5847
- app/landing/[template-id]/variants/real-estate/template.tsx | 3145b | sha1:d7a837ee0c5cc5d33d0bbec889fa2c37057456db
- app/landing/[template-id]/variants/cafe/components/CafeGallery.tsx | 2935b | sha1:cb7cfc99bab99cb4633604c5b8139b2b4c01a7ab
- app/landing/[template-id]/variants/cafe/components/FAQSection.tsx | 516b | sha1:5ca0e24109c8da453d239444fa31b44ccfd114e2
- app/landing/[template-id]/variants/cafe/components/MenuHighlight.tsx | 3937b | sha1:56c4bb3163b1422730cd7c6a2d2d2adbb90e6c73
- app/landing/[template-id]/variants/cafe/components/OpeningHours.tsx | 2255b | sha1:2661f0726cab2465a5a7d2b8b5e889f9a1d39f7f
- app/landing/[template-id]/variants/cafe/components/SocialProof.tsx | 532b | sha1:e42fa8e57face0156b0f3cd61bd9677565d0fc99
- app/landing/[template-id]/variants/cafe/components/index.ts | 279b | sha1:adc8c2070c4bb71c31ce39b68859e9819a5865eb
- app/landing/[template-id]/variants/cafe/CafeVariant.tsx | 1081b | sha1:95e425bf7b24201aa0be5a27c3a54e9bd7e4d386
- app/landing/[template-id]/variants/cafe/index.ts | 124b | sha1:78cb0a2363e17738b4b94cd8a87b5a213f769ec2
- app/landing/[template-id]/variants/cafe/template.tsx | 3613b | sha1:2d0228f81dc2beb9c53c9b5036ef983788c99b96
- app/landing/[template-id]/variants/construction/components/FAQSection.tsx | 516b | sha1:5ca0e24109c8da453d239444fa31b44ccfd114e2
- app/landing/[template-id]/variants/construction/components/ProjectGallery.tsx | 3060b | sha1:068ebe7355b4c86d1408345065264811c0e8b7d8
- app/landing/[template-id]/variants/construction/components/SocialProof.tsx | 535b | sha1:1dbc9465932607b23cd2d8e637e9b93f5d99262f
- app/landing/[template-id]/variants/construction/components/StepWork.tsx | 2944b | sha1:34090fd27fcf1997454fbec14cbf66cb96e22ef4
- app/landing/[template-id]/variants/construction/components/index.ts | 218b | sha1:1109a82a61a9f47860ef4a4c41418e6582657476
- app/landing/[template-id]/variants/construction/ConstructionVariant.tsx | 505b | sha1:cb1c55a40703f0d09aba8fca24cff60ef9679109
- app/landing/[template-id]/variants/construction/index.ts | 64b | sha1:98db47d175cbdbcc628976c08c4b8e3b7fa10e90
- app/landing/[template-id]/variants/construction/template.tsx | 3429b | sha1:522673f61a8416ecb1255200984c0af3f6db89f7
- app/landing/[template-id]/shared/BrandBadge.tsx | 3431b | sha1:9de4f8fa547dfbb003e69725142acfa8d8debbc5
- app/landing/[template-id]/shared/ContactForm.tsx | 6620b | sha1:0f7c0367ca9ea15e3ad15f884914d73a90ed1ded
- app/landing/[template-id]/shared/FloatingAction.tsx | 3841b | sha1:c13fb8b7be1f398dc7064c936677a08fd6218471
- app/landing/[template-id]/shared/Footer.tsx | 9138b | sha1:da80afcaef3d15f51fa337d95d877f3974cff28c
- app/landing/[template-id]/shared/GoogleMap.tsx | 1939b | sha1:8bdc1ed9a98830767b42ce27761ef89a1682fe22
- app/landing/[template-id]/shared/Navbar.tsx | 4909b | sha1:f9f3cd637712f1e9381acc0277b3f8b4ada50a30
- app/landing/[template-id]/shared/PricingSection.tsx | 6580b | sha1:b266617663a20babe04f80061f3b1ddc2fcf358c
- app/landing/[template-id]/shared/PromoBanner.tsx | 3191b | sha1:a2c69a551a2b0b4288a3218300733c519906bbda
- app/landing/[template-id]/shared/Section.tsx | 4632b | sha1:c9565dd230f73e0d43577b6d299e7e3985cc85ac
- app/landing/[template-id]/shared/ServiceInclusionSection.tsx | 3382b | sha1:183cbfdff2d351726e960cb08cea23ca6471d328
- app/landing/[template-id]/shared/ServicePolicy.tsx | 6900b | sha1:3cb585e1b6227dc5fec2ab043566cdf0e4d9a77e
- app/landing/[template-id]/shared/Testimonials.tsx | 8027b | sha1:4dfca8e92ceb9056d209d6153fc7e4a307965cd9
- app/landing/[template-id]/shared/index.ts | 1419b | sha1:829de912e2491f08c9c9c254845922e61da39b11
- app/landing/[template-id]/registry.ts | 2001b | sha1:374d10fd4b016001d2a179d3f78e1f43da9641f7
- app/sitemap.ts | 2178b | sha1:2e4bac8073f9482b08705a4f5652cb4a489d385e
- app/robots.txt | 70b | sha1:98896dad3ec15b2ca1b7fe72e65bae71d23c7475
- app/favicon.ico | 194522b | sha1:6e91e3cfc9327f26b55a992b403b6560ddbd353c
- app/catalog/page.tsx | 1864b | sha1:7c0a1ce73570f2dd7451b1857bde8ff782ed1adc

### components

components
├── About.tsx
├── BlogCard.tsx
├── BlogSection.tsx
├── CTA.tsx
├── ContactForm.tsx
├── ContactInfo.tsx
├── FAQSection.tsx
├── Footer.tsx
├── Header.tsx
├── Hero.tsx
├── Navbar.tsx
├── PriceTable.tsx
├── Seo.tsx
├── Services.tsx
├── SocialProof.tsx
├── catalog
│   ├── CatalogProjectCard.tsx
│   └── CatalogProjectsGrid.tsx
├── sections
│   └── Services
│   ├── Services.tsx
│   └── iconMap.ts
├── shared
│   └── JsonLd.tsx
└── ui
├── accordion.tsx
├── avatar.tsx
├── badge.tsx
├── button.tsx
├── card.tsx
├── dialog.tsx
├── empty.tsx
├── input.tsx
├── label.tsx
├── modal.tsx
├── select.tsx
├── tabs.tsx
├── textarea.tsx
├── toast.tsx
└── toaster.tsx

6 directories, 35 files

#### Metadata (file | size | sha1)

- components/Header.tsx | 5879b | sha1:4759a95ba3d4bedb5889764ce920b52be98211b2
- components/Footer.tsx | 8709b | sha1:41eff7009828cfc6f57cba106869731c2d31582f
- components/Navbar.tsx | 2301b | sha1:a06bd19966ea4b408d1e770043e2011b761a77ce
- components/catalog/CatalogProjectCard.tsx | 3544b | sha1:a6fd1de4289fa89180a9681dea6f7802fd048ba9
- components/catalog/CatalogProjectsGrid.tsx | 1204b | sha1:6aa951adf535e541448d4ac7971a781b7f8b256e
- components/Services.tsx | 7629b | sha1:f4fa76e695be0993694b540baa66fba9a98501d9
- components/Seo.tsx | 1800b | sha1:7ab94819190dabaaa0b77d41e32140e7423e974c
- components/Hero.tsx | 10327b | sha1:48709b70dc2ab02aad62291e3396d5ad97f3a5ba
- components/About.tsx | 9465b | sha1:6b8faca6c826882a838c78e0fccd59db0eb350d0
- components/shared/JsonLd.tsx | 1242b | sha1:75b3c8b08af50cf1ec0d10104d1becd08a0c353c
- components/ui/button.tsx | 1906b | sha1:f184334b52aa6dce5431d21ed02974120af19625
- components/ui/card.tsx | 1828b | sha1:c90a853903b78e8954330602b9d97f6f156eda85
- components/ui/badge.tsx | 1144b | sha1:4255f9fbc9862219d16be2ac566b2f65af92294e
- components/ui/label.tsx | 724b | sha1:c40f1bfdae352eab497210cedf32d113c0855143
- components/ui/empty.tsx | 2396b | sha1:a0f1e982e1386df6dc720985e7c958fe14fad552
- components/ui/avatar.tsx | 1419b | sha1:50ceaf0561e1d9967175b0c3ae0f2101b0e578fc
- components/ui/accordion.tsx | 2087b | sha1:c166c068cac9c471a9b6539ac3b60df1615edb58
- components/ui/tabs.tsx | 2384b | sha1:25d7ebd5b25354dc6a472dd1bab904f6137a0ffb
- components/ui/input.tsx | 768b | sha1:6fcb78d951139d4923eae26c6ae452c51b07ef7a
- components/ui/modal.tsx | 3989b | sha1:403602299dabd22184c474d81549011512c6880b
- components/ui/toast.tsx | 4832b | sha1:2123060c51054ade60c2bb42175b4473509ad718
- components/ui/dialog.tsx | 4196b | sha1:7b5096e886c5f0fdf2fc44a9406bd802cddd385a
- components/ui/select.tsx | 5745b | sha1:42f83400bb6efda7b2513e837933f72eb97c5da0
- components/ui/textarea.tsx | 649b | sha1:0f6ede6e3460545d0f5cdf7a3d0c5f7d465f28fd
- components/ui/toaster.tsx | 786b | sha1:fdc46a5e17cdbe9102e35848126f606e6ff6bc91
- components/BlogCard.tsx | 3587b | sha1:bb2dc86922a510ac8da5703cd84e84f2f89d84ca
- components/ContactInfo.tsx | 6663b | sha1:030f2f1263910dcc6320a2f8aa7b8e052ebd9488
- components/ContactForm.tsx | 10447b | sha1:760b11052a9327b0ea084bb0863e441f7f712e05
- components/CTA.tsx | 7161b | sha1:94062c939d491e675a3ed0cfcfd6cc0573efcd44
- components/sections/Services/Services.tsx | 7652b | sha1:4e21548ff8b333a44fd301a373f0e3fe3e0d73f2
- components/sections/Services/iconMap.ts | 1110b | sha1:0b2d70bbec920b6edffda6a6e0ef63582913ff91
- components/PriceTable.tsx | 11600b | sha1:a276b3ba202a612af901acb4e8d2fcef843bd6cf
- components/SocialProof.tsx | 6211b | sha1:a20071e7257b0913cba386a7152c70db3a4a4836
- components/FAQSection.tsx | 9247b | sha1:c5de2ead0e52ff629c76826abd575909266b6522
- components/BlogSection.tsx | 6625b | sha1:c8b47021e39a0b38d64b798d61df12386c8abe4b

### lib

lib
├── api.ts
├── helpers.ts
├── supabase.ts
└── utils.ts

1 directory, 4 files

#### Metadata (file | size | sha1)

- lib/utils.ts | 166b | sha1:03edf7b44c7cf1d3f48be4f72866007dbb63b8c6
- lib/api.ts | 1850b | sha1:fda75dc3de207e9abc921aa0e1bf62cb6a1e5df1
- lib/helpers.ts | 3381b | sha1:3b509d447b9e785c50b4cb34ba51dfd046cc4309
- lib/supabase.ts | 987b | sha1:714a4067d19c464152a877de911c306450c31ac8

### public

public
├── grid.svg
├── images
│   ├── blog
│   │   ├── corporate-trust.jpg
│   │   ├── performance-web.jpg
│   │   ├── restaurant-web.jpg
│   │   └── success-case.jpg
│   ├── portfolio
│   │   ├── corporate-1.webp
│   │   ├── default-avatar.webp
│   │   ├── restaurant-1.webp
│   │   └── sme-1.webp
│   ├── profile
│   │   └── default-avatar.webp
│   └── projects
│   ├── clinic.jpg
│   ├── construction.jpg
│   ├── gadget-store.jpg
│   ├── real-estate.jpg
│   └── smj-cafe.jpg
└── og-image.png

6 directories, 16 files

#### Metadata (file | size | sha1)

- public/images/blog/restaurant-web.jpg | 22788b | sha1:03b7783d0589d0b0499ec0e9f3bda5c711ffc342
- public/images/blog/success-case.jpg | 45269b | sha1:ad750f2883d85c878ad5b99a4d195baed2f8d801
- public/images/blog/corporate-trust.jpg | 44964b | sha1:84969f7d4e2f9f60c197eb28a7d7d618edb8cdd0
- public/images/blog/performance-web.jpg | 17183b | sha1:431c3e5d4439cf8847e9d44ce2036419b74dbc17
- public/images/profile/default-avatar.webp | 4351b | sha1:f3f3438414e699035d448859a6d6b1ae0b9750ae
- public/images/portfolio/restaurant-1.webp | 22797b | sha1:0c491e38af3e3f47260ae7973e1610e6880bfba0
- public/images/portfolio/sme-1.webp | 27619b | sha1:48b1014ff6b99454b6ac68372ecaf0b04154fdcd
- public/images/portfolio/default-avatar.webp | 5586b | sha1:97038bafeb268c23a6ec0e9695a9eea18a457731
- public/images/portfolio/corporate-1.webp | 44174b | sha1:9b0f4099faf3cb115d393a8b9c8c2f63f81efa06
- public/images/projects/clinic.jpg | 31375b | sha1:96776186bb212db0d2bfa9cb52da5cbeb1f3c6ed
- public/images/projects/gadget-store.jpg | 27895b | sha1:04ec8d11ceb8d6c411da9afa4694d3905e990ab7
- public/images/projects/construction.jpg | 40060b | sha1:858033eb9cdae9d66093f6d90d93f6088f95c216
- public/images/projects/real-estate.jpg | 334333b | sha1:15669c1648d29aaeba95aa97374d2868c3efed69
- public/images/projects/smj-cafe.jpg | 197157b | sha1:5272006bb3e1eb4b8e76e29405c4f7d430fabb2c
- public/og-image.png | 132909b | sha1:7102561a00e219c617ff0ddd2fd0c094ffd49782
- public/grid.svg | 185b | sha1:71a836ea40052f09230c3f3cef63c47e4703f0b1

### scripts

scripts
├── project-summary.sh
└── tree-projects.sh

1 directory, 2 files

#### Metadata (file | size | sha1)

- scripts/project-summary.sh | 7551b | sha1:56b30ca598ca62a3983fda302a6e2ffed9864927
- scripts/tree-projects.sh | 862b | sha1:6de4d4cefa660072eaf34961340437a16836bbca

### data

data
├── blogData.ts
├── catalog.projects.ts
├── reviews.ts
├── servicesData.ts
└── types.ts

1 directory, 5 files

#### Metadata (file | size | sha1)

- data/servicesData.ts | 5260b | sha1:1e2c87d2402200fafcf543c8e533d734c1f025a2
- data/blogData.ts | 10488b | sha1:0d065a345b99e83f3013984b54a6c9b27d3aaf02
- data/reviews.ts | 4093b | sha1:ac2064dcad2796c1ea3eb43b14e846bf2ea5ff76
- data/types.ts | 6356b | sha1:2317dab352d2e4bc61fd5e8d23d5a5db6a8d72b1
- data/catalog.projects.ts | 4110b | sha1:ded3a2a256f63cd1c84549e14e63669310a6cc74

### hooks

hooks
└── use-toast.ts

1 directory, 1 file

#### Metadata (file | size | sha1)

- hooks/use-toast.ts | 3943b | sha1:6eac08b90d28dd8ccf6bc813c4bd6df0c2f34a9f

### config

config
└── siteConfig.ts

1 directory, 1 file

#### Metadata (file | size | sha1)

- config/siteConfig.ts | 4941b | sha1:8bb1276f183df047ce33064820c74b947406976f

### types

types
├── blog.ts
├── index.ts
├── review.ts
└── services.ts

1 directory, 4 files

#### Metadata (file | size | sha1)

- types/blog.ts | 304b | sha1:710f2c3bad973f8463358f521719f4a0450fcad4
- types/services.ts | 1662b | sha1:27a3a67f67fc94ca53c55aa407249b178b2eedcd
- types/review.ts | 260b | sha1:58d2f8960e8689ba0e268f28a1ef26363885f933
- types/index.ts | 547b | sha1:4a8e38fde7c270d7f6912648361e04deac36baa8

### utils

utils
└── helpers.ts

1 directory, 1 file

#### Metadata (file | size | sha1)

- utils/helpers.ts | 3381b | sha1:3b509d447b9e785c50b4cb34ba51dfd046cc4309

## ⚙️ Root Config Previews

### `.prettierrc`

```text
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": false,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 80,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### `eslint.config.mjs`

```js
/** @format */
import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  // 1. ระบุไฟล์ที่ต้องการให้ ESLint ข้ามการตรวจสอบ (Industrial Clean-up)
  {
    ignores: [".next/*", "out/*", "node_modules/*", "public/*", "**/*.d.ts"],
  },

  // 2. ใช้ FlatCompat เพื่อโหลด Next.js Config
  // วิธีนี้จะแก้ปัญหา ERR_MODULE_NOT_FOUND ได้แน่นอน
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 3. ปรับแต่งกฎ (Custom Rules) ตามจริตการพัฒนาของเรา
  {
    rules: {
      // ✅ ลดความเข้มงวดในช่วงพัฒนา (Pragmatic Developer)
      "@typescript-eslint/no-unused-vars": "off",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-expressions": "off",

      // ✅ เพิ่มกฎเพื่อความปลอดภัย (Industrial Sharp Standard)
      "react/jsx-no-comment-textnodes": "error", // ดักจับ Error ที่เจอใน PromoBanner
    },
  },
]

export default eslintConfig
```

### `tailwind.config.ts`

```ts
/** @format */
import type { Config } from "tailwindcss"
import animatePlugin from "tailwindcss-animate"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },

    extend: {
      colors: {
        brand: {
          blue: "#2563EB",
          navy: "#0F172A",
          green: "#22C55E",
          slate: "#64748B",
          emerald: "#065F46",
          gold: "#C5A059",
          orange: "#F97316",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      fontFamily: {
        prompt: ["var(--font-prompt)", "sans-serif"],
        sans: ["var(--font-prompt)", "var(--font-inter)", "sans-serif"],
        heading: ["var(--font-prompt)", "var(--font-inter)", "sans-serif"],
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/data/*": ["./data/*"],
      "@/app/*": ["./app/*"],
      "@/types/*": ["./types/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    "data/**/*.ts",
    "types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```

### `next.config.ts`

```ts
/** @format */
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // ✅ 1. ตั้งค่าความปลอดภัยสำหรับไฟล์ SVG (จำเป็นสำหรับ Dicebear/Logos)
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // ✅ 2. กำหนด Format ที่ทันสมัยเพื่อลดขนาดไฟล์ภาพ (WebP/AVIF)
    formats: ["image/avif", "image/webp"],

    // ✅ 3. ลงทะเบียน Remote Hostnames (ป้องกัน Error: hostname is not configured)
    remotePatterns: [
      {
        // Supabase Storage (แหล่งเก็บรูปภาพหลักของโปรเจกต์)
        protocol: "https",
        hostname: "dpgmfbnzyhnhwzyozoxe.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        // Unsplash (สำหรับรูปภาพ Portfolio และภาพประกอบ)
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        // Avatars / Mockup Logos
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/**",
      },
      {
        // Production Domain
        protocol: "https",
        hostname: "www.aemdevweb.com",
        pathname: "/**",
      },
    ],
  },

  // ✅ 4. Performance Tuning (ลดขนาด Bundle Size)
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // ✅ 5. ลบ Error ลำดับความสำคัญต่ำในช่วง Build
  typescript: {
    ignoreBuildErrors: false, // แนะนำเป็น false เพื่อความ Sharp ของโค้ด
  },
}

export default nextConfig
```

## 👀 Code Preview & Coverage

### `app/services/page.tsx`

```ts
/** @format */
import { Metadata } from "next"
import { siteConfig } from "@/config/siteConfig"

// Export metadata สำหรับ Next.js App Router
export const metadata: Metadata = {
  title: `บริการและราคา | ${siteConfig.name}`,
  description:
    "รับทำเว็บไซต์สำหรับ SME เริ่มต้น 3,900.- ครบทั้งคลินิก ร้านอาหาร และอสังหาฯ โหลดไวด้วย Next.js 15 ดีไซน์ Industrial Sharp ดูแลหลังการขายแบบพาร์ทเนอร์",
}

// Export client component แยกไฟล์
export { default } from "./ServicesPageClient"
```

### `app/services/ServicesPageClient.tsx`

```ts
"use client"
/** @format */
import React, { memo } from "react"
import Link from "next/link"
import {
  Check,
  Sparkles,
  MessageCircle,
  MoveRight,
  ShieldCheck,
  Zap,
  Clock,
} from "lucide-react"

import { servicesData } from "@/data/servicesData"
import { resolveServiceIcon } from "@/components/sections/Services/iconMap"

const ServicesPageClient = () => {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative overflow-hidden border-b-[6px] border-slate-900 bg-slate-50/50 py-24 md:py-40">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-4xl space-y-10">
            <div className="group inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-6 py-3 shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] transition-all hover:shadow-none">
              <Sparkles size={16} className="animate-pulse text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 md:text-xs">
                คุณภาพระดับสากล ในราคาที่ SME เข้าถึงง่าย
              </span>
            </div>

            <h1 className="text-5xl font-black italic leading-[0.9] tracking-tighter text-slate-900 md:text-8xl lg:text-[100px]">
              แผนงานที่ <span className="text-blue-600">พอดี</span> <br />
              <span className="underline decoration-blue-600 decoration-8 underline-offset-[12px]">
                กับขนาดธุรกิจคุณ
              </span>
            </h1>

            <p className="max-w-2xl border-l-[10px] border-blue-600/20 pl-8 text-xl font-bold leading-relaxed text-slate-500 md:text-2xl">
              ไม่ต้องจ่ายแพงเกินความจำเป็นครับ ผมออกแบบแพ็กเกจตามการใช้งานจริง
              เพื่อให้คุณได้ระบบที่ช่วยปิดการขายได้แม่นยำที่สุด
              ในงบประมาณที่คุ้มค่า
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. PRICING GRID ─── */}
      <section className="py-24 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-px border-[6px] border-slate-900 bg-slate-900 shadow-2xl md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => {
              const Icon = resolveServiceIcon(service.icon)
              return (
                <div
                  key={service.id}
                  className="group flex flex-col bg-white p-8 transition-all duration-500 hover:bg-slate-50 md:p-12"
                >
                  <div className="mb-12 flex items-start justify-between">
                    <div className="border-4 border-slate-900 bg-slate-900 p-5 text-white shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] transition-all group-hover:bg-blue-600 group-hover:shadow-none">
                      <Icon size={32} />
                    </div>
                    {service.isHot && (
                      <span className="bg-orange-500 px-4 py-1.5 text-[10px] font-black uppercase italic text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] ring-2 ring-slate-900">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <div className="mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">
                      {service.targetGroup}
                    </span>
                    <h3 className="mt-3 text-3xl font-black uppercase italic tracking-tighter text-slate-900 transition-colors group-hover:text-blue-600">
                      {service.title}
                    </h3>
                  </div>

                  <div className="mb-8 text-5xl font-black italic tracking-tighter text-slate-900">
```

### `app/about/page.tsx`

```ts
/** @format */
import React, { memo } from "react"
import AboutContent from "@/components/About"
import CTA from "@/components/CTA"
import { siteConfig } from "@/config/siteConfig"
import { Metadata } from "next"
import { Users, Code2, Heart, ArrowDownRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: `รู้จักเรา | ${siteConfig.name}`,
  description:
    "ทำความรู้จักกับ aemdevweb พาร์ทเนอร์ผู้ช่วยสร้างตัวตนบนโลกออนไลน์ให้กับธุรกิจ SME ด้วยมาตรฐานวิศวกรรมและความจริงใจ",
}

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      {/* ─── 1. HERO SECTION: INDUSTRIAL BLUEPRINT ─── */}
      <section className="relative overflow-hidden bg-slate-900 py-24 md:py-48">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

        {/* Cinematic Glows */}
        <div className="absolute right-0 top-0 -mr-32 -mt-32 h-[600px] w-[600px] bg-blue-600/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="space-y-12">
            <div className="group inline-flex items-center gap-3 border-l-4 border-blue-600 bg-white/5 px-6 py-3 backdrop-blur-md transition-all hover:bg-white/10">
              <Sparkles size={14} className="animate-pulse text-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 md:text-xs">
                Engineering Digital Trust
              </span>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <h1 className="text-5xl font-black uppercase italic leading-[0.9] tracking-tighter text-white md:text-8xl lg:text-[100px]">
                  เราสร้างเว็บเพื่อให้ <br />
                  <span className="text-blue-600">ธุรกิจคุณไปได้ไกล</span>
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p className="border-l-4 border-blue-600/30 pl-8 text-xl font-bold leading-relaxed text-slate-400 md:text-2xl">
                  พาร์ทเนอร์ที่พร้อมเติบโตไปกับ{" "}
                  <span className="text-white">SME และ หจก.</span>{" "}
                  ทั่วไทยด้วยความแม่นยำและจริงใจครับ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. CORE VALUES: BENTO SHARP STRUCTURE ─── */}
      <section className="relative z-20 -mt-20 px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px border-4 border-slate-900 bg-slate-900 shadow-2xl md:grid-cols-3">
          {[
            {
              icon: <Code2 size={24} />,
              color: "text-blue-600",
              t: "Precision Craft",
              d: "วิศวกรรมเว็บที่โหลดไว และรองรับโครงสร้าง SEO",
            },
            {
              icon: <Heart size={24} />,
              color: "text-rose-500",
              t: "Genuine Care",
              d: "ดูแลธุรกิจคุณ เหมือนเป็นธุรกิจของเราเอง",
            },
            {
              icon: <Users size={24} />,
              color: "text-emerald-500",
              t: "Real Partnership",
              d: "คุยตรงไปตรงมา ปรึกษาได้ทุกขั้นตอนงาน",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between bg-white p-12 transition-all duration-500 hover:bg-slate-50"
```

### `app/blog/[slug]/page.tsx`

```ts
/** @format */

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogData } from "@/data/blogData"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/button"
import { CalendarDays, ChevronLeft, Clock, Share2 } from "lucide-react"
import { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

/**
 * 🛠️ SSG Optimization: สร้างหน้า Static ไว้ล่วงหน้าตอน Build
 */
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }))
}

/**
 * 🚀 SEO Metadata: ปรับปรุงการเรียกใช้ Metadata ให้สมบูรณ์
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogData.find((p) => p.slug === slug)
  if (!post) return { title: "ไม่พบบทความ | aemdevweb" }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      type: "article",
      publishedTime: post.date, // สำหรับ Schema Markup
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogData.find((p) => p.slug === slug)

  if (!post) notFound()

  // Normalize Author
  const author = {
    name:
      typeof post.author === "object"
        ? post.author.name
        : post.author || "AemDev Team",
    role: typeof post.author === "object" ? post.author.role : "Web Specialist",
    avatar:
      typeof post.author === "object"
        ? post.author.avatar
        : "/images/profile/default-avatar.webp",
  }

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Article Header */}
      <div className="mx-auto max-w-4xl px-4 pt-12 md:pt-20">
        <Button
          variant="ghost"
          asChild
          className="-ml-4 mb-8 text-slate-500 transition-colors hover:text-primary"
```

### `app/blog/page.tsx`

```ts
/** @format */
import React, { memo } from "react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { blogData } from "@/data/blogData"
import { siteConfig } from "@/config/siteConfig"
import { Calendar, Clock, Sparkles, MoveRight, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: `คลังความรู้ SME และเทคนิคการทำเว็บไซต์ | ${siteConfig.name}`,
  description:
    "รวมบทความเทคนิคการทำเว็บไซต์ การตลาดออนไลน์ และแนวทางการปรับตัวสำหรับธุรกิจ SME ร้านอาหาร และ หจก. โดยผู้เชี่ยวชาญ",
}

const BlogPage = () => {
  // เรียงลำดับบทความใหม่สุดขึ้นก่อน (Defensive Check)
  const allPosts = blogData
    ? [...blogData].sort((a, b) => Number(b.id) - Number(a.id))
    : []

  return (
    <main className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      {/* ─── 1. HEADER SECTION: INDUSTRIAL INSIGHTS ─── */}
      <section className="relative overflow-hidden border-b-[6px] border-slate-900 bg-slate-50 py-24 md:py-40">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60" />

        {/* Glow Element */}
        <div className="absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="container mx-auto px-6">
          <div className="max-w-4xl space-y-12">
            <div className="group inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-6 py-3 shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] transition-all hover:shadow-none">
              <Sparkles size={16} className="animate-pulse text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 md:text-xs">
                Business Intelligence & Tech Insights
              </span>
            </div>

            <h1 className="text-5xl font-black uppercase italic leading-[0.9] tracking-tighter text-slate-900 md:text-8xl lg:text-[100px]">
              คลังความรู้ <br />
              <span className="text-blue-600 underline decoration-slate-900 decoration-8 underline-offset-[12px]">
                สำหรับผู้ประกอบการ
              </span>
            </h1>

            <p className="max-w-2xl border-l-[10px] border-blue-600/20 pl-8 text-xl font-bold leading-relaxed text-slate-500 md:text-2xl">
              ถอดรหัสเทคนิคการสร้างตัวตนบนโลกออนไลน์ การจัดการระบบหลังบ้าน
              และกลยุทธ์ที่ช่วยให้ธุรกิจคุณเติบโตอย่างแม่นยำด้วยเทคโนโลยี
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. BLOG GRID: MODULAR INDUSTRIAL CARDS ─── */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6">
          {allPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-px border-[6px] border-slate-900 bg-slate-900 shadow-2xl md:grid-cols-2 lg:grid-cols-3">
              {allPosts.map((post, index) => {
                const authorData =
                  typeof post.author === "object" && post.author !== null
                    ? post.author
                    : {
                        name:
                          typeof post.author === "string"
                            ? post.author
                            : "AEMDEVWEB Admin",
                        avatar: "/images/default-avatar.png",
                      }

                return (
                  <article
                    key={post.id}
                    className="group flex flex-col bg-white transition-all duration-500 hover:z-10 hover:bg-slate-50"
                  >
                    {/* Image Section: Sharp Frame */}
                    <Link
```

### `app/contact/page.tsx`

```ts
/** @format */
import React, { memo } from "react"
import { Metadata } from "next"
import {
  Sparkles,
  MessageCircle,
  ArrowDownRight,
  ShieldCheck,
  Zap,
} from "lucide-react"

// Import Components
import ContactForm from "@/components/ContactForm"
import ContactInfo from "@/components/ContactInfo"
import ContactMap from "./_components/ContactMap"

// ✅ ใช้ shared JsonLd
import JsonLd from "@/components/shared/JsonLd"

import { siteConfig } from "@/config/siteConfig"
import { cn } from "@/lib/utils"

/**
 * 🛠️ SEO Optimization: ดึงดูด SME ด้วย Keyword ที่ตรงจุด
 */
export const metadata: Metadata = {
  title: `ติดต่อพาร์ทเนอร์โปรเจกต์ | ${siteConfig.name}`,
  description:
    "เริ่มต้นเว็บไซต์ธุรกิจของคุณด้วยระบบวิศวกรรมที่แม่นยำ ปรึกษาฟรีสำหรับ SME และ หจก. คุยง่าย ตรงไปตรงมา งบไม่บานปลาย",
  openGraph: {
    title: `ติดต่อพาร์ทเนอร์โปรเจกต์ | ${siteConfig.name}`,
    description:
      "ยินดีให้คำปรึกษาฟรีเหมือนพาร์ทเนอร์สายเทคส่วนตัว เพื่อเว็บไซต์ที่ปิดการขายได้จริง",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    locale: "th_TH",
    type: "website",
  },
}

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      {/* 🚀 SEO STRUCTURED DATA */}
      <JsonLd
        type="LocalBusiness"
        data={{
          name: siteConfig.name,
          description: siteConfig.description,
          phone: siteConfig.contact.tel,
          address: siteConfig.contact.address,
          url: `${siteConfig.url}/contact`,
        }}
      />

      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative overflow-hidden border-b-[6px] border-slate-900 bg-slate-50 py-24 md:py-40">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60" />
        {/* Cinematic Glow */}
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="container mx-auto px-6">
          <div className="max-w-5xl space-y-12">
            <div className="group inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-6 py-3 shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] transition-all hover:shadow-none">
              <Sparkles size={16} className="animate-pulse text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 md:text-xs">
                Available for New Projects v2025
              </span>
            </div>
            <h1 className="text-5xl font-black uppercase italic leading-[0.9] tracking-tighter text-slate-900 md:text-8xl lg:text-[100px]">
              เปลี่ยนไอเดียให้เป็น <br />
              <span className="text-blue-600 underline decoration-slate-900 decoration-8 underline-offset-[12px]">
                ผลลัพธ์ที่จับต้องได้
              </span>
            </h1>
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <p className="max-w-2xl border-l-[10px] border-blue-600/20 pl-8 text-xl font-bold leading-relaxed text-slate-500 md:text-2xl">
                ผมยินดีให้คำปรึกษาฟรีสำหรับ SME ไทยที่อยากมีเว็บไซต์คุณภาพสูง
                คุยง่าย ตรงไปตรงมา เหมือนมี{" "}
                <span className="text-slate-900">Chief Technology Partner</span>{" "}
```

### `app/contact/_components/ContactMap.tsx`

```ts
/** @format */
"use client"

import React from "react"
import {
  MapPin,
  Navigation,
  Map as MapIcon,
  Coffee,
  ArrowUpRight,
} from "lucide-react"
import { siteConfig } from "@/config/siteConfig"

export default function ContactMap() {
  /**
   * 🛠️ แนะนำ: ให้ใช้ Embed URL จาก Google Maps โดยตรง (Share > Embed a map)
   * ตัวอย่างด้านล่างเป็น URL จำลองสำหรับแสดงสไตล์
   */
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.503123456789!2d100.50123456789!3d13.7563309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ1JzIyLjgiTiAxMDDCsDMwJzA0LjQiRQ!5e0!3m2!1sth!2sth!4v1700000000000!5m2!1sth!2sth"

  return (
    <section
      className="relative overflow-hidden bg-white py-24 md:py-32"
      id="location"
    >
      {/* ─── INDUSTRIAL BACKGROUND ─── */}
      <div className="absolute inset-0 -z-10 bg-industrial-grid opacity-30" />

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-stretch gap-px overflow-hidden border-2 border-brand-navy bg-brand-navy shadow-enterprise-lg lg:grid-cols-12">
            {/* 1. ส่วนข้อมูลที่ตั้ง: BUSINESS INTELLIGENCE (Col-span 5) */}
            <div className="relative flex flex-col justify-between bg-white p-8 md:p-14 lg:col-span-5">
              <div className="space-y-12">
                <div className="inline-flex items-center gap-3 border-l-4 border-brand-blue bg-slate-50 px-5 py-2">
                  <MapIcon size={14} className="text-brand-blue" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                    Our Workstation
                  </span>
                </div>

                <div className="space-y-8">
                  <h2 className="text-4xl font-black uppercase italic leading-[0.95] tracking-tighter text-brand-navy md:text-6xl">
                    แวะมาคุย <br />
                    <span className="text-brand-blue">จิบกาแฟกันครับ</span>
                  </h2>

                  <div className="space-y-4 border-l-2 border-slate-100 pl-6">
                    <p className="text-lg font-bold leading-relaxed text-slate-600">
                      ออฟฟิศของผมตั้งอยู่ที่ <br />
                      <span className="text-brand-navy underline decoration-brand-blue decoration-2 underline-offset-8">
                        {siteConfig.contact.address}
                      </span>
                    </p>
                    <p className="text-[11px] font-black uppercase italic tracking-[0.2em] text-slate-400">
                      * เพื่อการต้อนรับที่ดีที่สุด รบกวนนัดหมายล่วงหน้าครับ
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Block: Sharp & Tactile */}
              <div className="mt-16 space-y-6 border-t-2 border-slate-50 pt-10">
                <div className="group flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-brand-navy bg-white text-brand-blue shadow-enterprise-sm transition-transform group-hover:-translate-y-1">
                    <MapPin size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                      HQ Coordinates
                    </h4>
                    <p className="text-sm font-black uppercase leading-tight text-brand-navy">
                      Bangkok, Thailand
                    </p>
                  </div>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address)}`}
```

### `app/layout.tsx`

```ts
/** @format */
import type { Metadata, Viewport } from "next"
import { Inter, Prompt } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { siteConfig } from "@/config/siteConfig"
import { cn } from "@/lib/utils"

// 🔤 Font Configuration
const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-prompt",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
}

// ─── 🚀 ADVANCED SEO METADATA ───
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "รับทำเว็บไซต์ SME",
    "รับทำ Landing Page ปิดการขาย",
    "ทำเว็บไซต์บริษัท",
    "จ้างทำเว็บ Next.js",
    "Web Developer Thailand",
    "aemdevweb",
    "เว็บไซต์ธุรกิจท้องถิ่น",
    "SEO Website Thailand",
  ],
  authors: [{ name: "aemdevweb", url: "https://aemdevweb.com" }],
  creator: "aemdevweb",
  publisher: "aemdevweb",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Digital Architecture for Business`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@aemdevweb",
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

### `app/page.tsx`

```ts
/** @format */
"use client"

import React from "react"
import dynamic from "next/dynamic"
import Hero from "@/components/Hero"
import SocialProof from "@/components/SocialProof"
// ✅ ใช้ Path ที่ถูกต้องและเป็นระเบียบ
import { blogData } from "@/data/blogData"
import { BlogPost } from "@/types" // นำเข้า Type ส่วนกลางที่เราแก้ไว้

// --- 🛠️ Optimized Dynamic Imports ---
const Services = dynamic(
  () => import("@/components/sections/Services/Services"),
  {
    ssr: true,
    loading: () => (
      <div className="h-[600px] w-full animate-pulse border-2 border-slate-100 bg-slate-50" />
    ),
  }
)

const PriceTable = dynamic(() => import("@/components/PriceTable"), {
  ssr: true,
  loading: () => <div className="h-[700px] w-full animate-pulse bg-slate-50" />,
})

const BlogSection = dynamic(() => import("@/components/BlogSection"), {
  ssr: true,
})

const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  ssr: true,
})

const CTA = dynamic(() => import("@/components/CTA"), {
  ssr: true,
})

export default function HomePage() {
  /**
   * ✅ การจัดการข้อมูล Blog ให้ตรงตาม Interface ใหม่
   * ป้องกัน Error TS2769: การ Map ข้อมูลให้ Author เป็น Object เสมอ
   */
  const featuredPosts: BlogPost[] = blogData.slice(0, 4).map((post) => ({
    ...post,
    // ตรวจสอบ Guard Clause: ถ้า author เป็น string ให้แปลงเป็น Object
    author:
      typeof post.author === "string"
        ? {
            name: post.author,
            avatar: "/images/default-avatar.jpg",
            role: "Team Member",
          }
        : post.author,
  }))

  return (
    <main className="flex w-full flex-col overflow-x-hidden bg-white selection:bg-blue-600 selection:text-white">
      {/* ─── 1. HERO AREA: เน้นความคมชัดแบบวิศวกรรม ─── */}
      <Hero
        badgeText="Website Solution for Local Business"
        headline={
          <div className="leading-[0.85] tracking-tighter">
            สร้างยอดขายด้วย <br />
            <span className="font-black uppercase italic text-blue-600">
              เว็บไซต์ที่มีมาตรฐาน
            </span>
            <br />
            <span className="mt-4 block text-3xl font-medium italic text-slate-400 md:text-5xl lg:text-6xl">
              แต่คุยง่ายแบบพาร์ทเนอร์
            </span>
          </div>
        }
      />

      {/* ─── 2. SOCIAL PROOF: ใช้ขอบเหลี่ยม (Low Border Radius) ─── */}
      <div className="relative z-20 -mt-10 border-y-4 border-slate-900 bg-white shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
        <div className="container mx-auto py-6">
          <SocialProof />
```

### `app/api/contact/route.ts`

```ts
/** @format */
import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const getSupabaseConfig = () => ({
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
})

export async function POST(request: Request) {
  try {
    const { url, serviceKey } = getSupabaseConfig()

    // 1. ตรวจสอบ Config
    if (!url || !serviceKey) {
      console.error("❌ [Config Error]: Missing Supabase Credentials")
      return NextResponse.json(
        { error: "Internal Server Configuration Error" },
        { status: 500 }
      )
    }

    const body = await request.json()
    const {
      name,
      phone,
      businessType,
      budget,
      templateId,
      source_url,
      metadata,
    } = body

    // 2. Validation ขั้นต่ำตาม Schema (NOT NULL)
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 })
    }

    const supabase = createClient(url, serviceKey)

    // 3. Mapping ข้อมูลให้ตรงกับ Schema ใน Supabase (leads table)
    const leadData = {
      name: name,
      phone: phone || null,
      category: businessType || "not_specified",
      template_id: templateId || "main",
      source_url: source_url || "",
      // นำ budget ไปรวมไว้ใน message ตามโครงสร้างตารางที่ไม่มีฟิลด์ budget
      message: budget ? `Budget Plan: ${budget}` : "No message provided",
      metadata: metadata || {},
      status: "new",
    }

    // 4. บันทึกข้อมูล
    const { data, error } = await supabase
      .from("leads")
      .insert([leadData])
      .select()
      .single()

    if (error) {
      console.error("❌ [Supabase Error]:", error.message)
      return NextResponse.json(
        { error: "Database rejection", details: error.message },
        { status: 502 }
      )
    }

    return NextResponse.json(
      { success: true, leadId: data.id },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("❌ [Runtime Error]:", error.message)
    return NextResponse.json(
      { error: "Critical Server Error", message: error.message },
      { status: 500 }
    )
  }
}
```

### `app/landing/[template-id]/page.tsx`

```ts
/** @format */
import { notFound } from "next/navigation"
import { TemplateRegistry } from "./registry"
import { catalogProjects } from "@/data/catalog.projects"

interface LandingPageProps {
  params: Promise<{ "template-id": string }>
}

export default async function LandingPage({ params }: LandingPageProps) {
  // 1. ดึง template-id จาก params
  const { "template-id": templateId } = await params

  // 2. ค้นหาข้อมูลจาก catalogProjects
  const rawData = catalogProjects.find((p) => p.templateId === templateId)

  // 3. หากไม่พบข้อมูลให้แสดงหน้า 404
  if (!rawData) {
    return notFound()
  }

  // 4. ระบุ Key ของ Category ให้ตรงตาม Registry
  const categoryKey = rawData.category as keyof typeof TemplateRegistry
  const registryEntry = TemplateRegistry[categoryKey]

  // 5. กรณีพบ Category แต่ไม่มีคอมโพเนนต์รองรับ (Safety Check)
  if (!registryEntry) {
    return (
      <div className="flex h-screen items-center justify-center font-mono text-xs uppercase tracking-widest text-slate-400">
        [SYSTEM_ERROR]: Category "{rawData.category}" is not registered in TemplateRegistry.
      </div>
    )
  }

  const { Component } = registryEntry

  /**
   * ✅ แก้ไข Error TS2322: Type 'any' is not assignable to type 'never'
   * * สาเหตุ: เกิดจาก 'category' ในแต่ละ TemplateProps มี Type ที่ขัดแย้งกัน
   * การใช้ 'as unknown as any' เป็นการบอก TypeScript ว่า "ไม่ต้องพยายามวิเคราะห์ Type นี้"
   * และปล่อยให้ Runtime จัดการส่งข้อมูลผ่าน Props 'data' ไปยังคอมโพเนนต์ลูก
   */
  return <Component data={rawData as unknown as any} />
}
```

### `app/landing/[template-id]/normalize.ts`

```ts
/** @format */
import { TemplateData } from "./types"

/**
 * 🛠️ normalizeTemplateData
 * ทำหน้าที่เป็น "ด่านคัดกรองข้อมูล" (Data Sanitization)
 * เพื่อแปลงข้อมูลดิบจาก catalogProjects ให้กลายเป็น Format ที่ Template พร้อมใช้งาน
 * แก้ปัญหาเรื่อง Property Mismatch และป้องกันหน้าเว็บล่ม (Crash)
 */
export function normalizeTemplateData(raw: any): TemplateData {
  if (!raw) return {} as TemplateData

  return {
    ...raw,
    // 1. จัดการข้อมูล Hero (ถ้าไม่มี ให้ดึงจากข้อมูลพื้นฐานของ Project)
    hero: {
      title: raw.hero?.title || raw.title || "",
      subtitle: raw.hero?.subtitle || raw.description || "",
      image: raw.hero?.image || raw.image || "",
    },

    // 2. ประกันความปลอดภัยของข้อมูลที่เป็น Array (ป้องกัน .map is not a function)
    menu: raw.menu || [],
    gallery: raw.gallery || [],
    openingHours: raw.openingHours || [],
    doctors: raw.doctors || [],
    beforeAfter: raw.beforeAfter || [],
    projects: raw.projects || [],
    steps: raw.steps || [],
    roomTypes: raw.roomTypes || [],

    // 3. จัดการ Social Proof (รองรับทั้งชื่อเก่า testimonials และชื่อใหม่ socialProof)
    socialProof: raw.socialProof || raw.testimonials || [],

    // 4. ตั้งค่า Default สำหรับข้อมูลการติดต่อและแบรนด์
    primaryColor: raw.primaryColor || "#0f172a",
    phone: raw.phone || "",
    lineId: raw.lineId || "",
    defaultLanguage: raw.defaultLanguage || "th",

    // 5. ข้อมูลจำเพาะอื่นๆ
    locationInsight: raw.locationInsight || null,
    googleMapUrl: raw.googleMapUrl || "",
  }
}
```

### `app/landing/[template-id]/types/index.ts`

```ts
/** @format */
import { Author } from "@/types" // ดึงจาก Global Root

/**
 * 🇹🇭 ระบบรองรับ 2 ภาษาสำหรับธุรกิจ SME
 */
export interface MultiLangText {
  th: string
  en: string
}

/**
 * 🏗️ พื้นฐานข้อมูลเทมเพลต (Base Template Data)
 * นี่คือ Interface หลักที่ทุกธุรกิจต้องใช้งานร่วมกัน
 */
export interface BaseTemplateData {
  id: string
  category: "starter" | "clinic" | "construction" | "real-estate" | "cafe"
  name: string | MultiLangText
  description: string | MultiLangText
  primaryColor: string

  // SME Contact Details
  phone: string
  lineId: string
  address: string | MultiLangText
  googleMapUrl: string
  defaultLanguage: "th" | "en"

  // Shared Hero Section
  hero: {
    title: string | MultiLangText
    subtitle: string | MultiLangText
    image?: string
    blueprintGrid?: boolean
  }

  // Shared Optional Sections
  faqs?: {
    q: MultiLangText | string
    a: MultiLangText | string
  }[]

  socialProof?: {
    id: string
    name: string
    role: string
    avatar: string
    comment: string
    rating?: number
  }[]
}

/** * ☕ 1. เฉพาะทาง: Cafe
 */
export interface CafeTemplateProps extends BaseTemplateData {
  category: "cafe"
  gallery?: string[]
  menu?: any[]
  openingHours?: { day: string; time: string }[] // ✅ เพิ่มเพื่อแก้ TS2339
}

/** * 🏥 2. เฉพาะทาง: Clinic
 */
export interface ClinicTemplateProps extends BaseTemplateData {
  category: "clinic"
  beforeAfter?: { before: string; after: string; label?: string }[]
  doctors?: { name: string; specialty: string; image: string }[] // ✅ เพิ่มเพื่อแก้ TS2339
}

/** * 🏗️ 3. เฉพาะทาง: Construction
 */
export interface ConstructionTemplateProps extends BaseTemplateData {
  category: "construction"
  projects?: { title: string; image: string; description?: string }[]
  steps?: { title: string; detail: string }[] // ✅ เพิ่มเพื่อแก้ TS2339
}

/** * 🏠 4. เฉพาะทาง: Real Estate
 */
```

### `app/landing/[template-id]/variants/starter/components/ConversionForm.tsx`

```ts
/** @format */
"use client"

import React, { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ConversionFormProps {
  title?: string
  description?: string
  onSubmit?: (data: { name: string; email: string; message: string }) => void
}

export const ConversionForm: React.FC<ConversionFormProps> = ({
  title = "สนใจสั่งทำเว็บไซต์?",
  description = "กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับเร็วที่สุด",
  onSubmit,
}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      if (onSubmit) {
        await onSubmit({ name, email, message })
      }
      setSuccess(true)
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-lg rounded-lg border-2 border-brand-navy p-8 shadow-[8px_8px_0px_0px_rgba(37,99,235,1)]">
      <h3 className="mb-2 text-2xl font-black text-brand-navy">{title}</h3>
      <p className="mb-6 text-slate-600">{description}</p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="ชื่อของคุณ"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="อีเมล"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Textarea
          placeholder="ข้อความ / รายละเอียด"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
        />

        <Button
          type="submit"
          className="mt-4 h-14 w-full bg-brand-blue font-black uppercase text-white hover:bg-brand-navy"
          disabled={loading}
        >
          {loading ? "กำลังส่ง..." : success ? "ส่งเรียบร้อย!" : "ส่งข้อความ"}
        </Button>
      </form>
    </div>
```

### `app/landing/[template-id]/variants/starter/components/FeatureHighlights.tsx`

```ts
/** @format */
import React from "react"
import * as Icons from "lucide-react"
import { MultiLangText } from "../../../types"

/**
 * 🟢 แก้ไข Interface: เพิ่ม primaryColor และระบุโครงสร้าง Feature ให้ชัดเจน
 * เพื่อแก้ปัญหา Property 'primaryColor' does not exist on type 'IntrinsicAttributes & FeatureHighlightsProps'
 */
export interface FeatureItem {
  id?: string | number
  title: string | MultiLangText
  description: string | MultiLangText
  icon?: string
}

export interface FeatureHighlightsProps {
  features: FeatureItem[]
  primaryColor?: string
  t: (content: string | MultiLangText | undefined) => string
}

export default function FeatureHighlights({
  features = [],
  primaryColor = "#000000",
  t,
}: FeatureHighlightsProps) {

  if (!features.length) return null

  /**
   * Helper: ดึง Icon จาก Lucide ตามชื่อที่ระบุใน Data
   */
  const getIcon = (iconName: string | undefined) => {
    const LucideIcon = (Icons as any)[iconName || "Zap"] || Icons.Zap
    return <LucideIcon size={24} />
  }

  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div
            className="mb-4 h-1.5 w-12"
            style={{ backgroundColor: primaryColor }}
          />
          <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">
            Why Choose Us
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={feature.id || idx}
              className="group relative flex flex-col items-start"
            >
              {/* Icon Box with Brutalist Shadow */}
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center border-2 border-slate-900 bg-white transition-all group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]"
                style={{ color: primaryColor }}
              >
                {getIcon(feature.icon)}
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">
                  {t(feature.title)}
                </h3>
                <div
                  className="h-1 w-8 opacity-20"
                  style={{ backgroundColor: primaryColor }}
                />
                <p className="text-sm font-bold leading-relaxed text-slate-500">
                  {t(feature.description)}
                </p>
              </div>
```

### `app/landing/[template-id]/variants/starter/components/HeroStarter.tsx`

```ts
/** @format */
import React from "react"
import { MultiLangText } from "../../../types"

/**
 * 🟢 ปรับ Interface ให้รองรับ Props จาก Template.tsx
 * แก้ปัญหา Property 'primaryColor' does not exist on type 'IntrinsicAttributes & HeroStarterProps'
 */
export interface HeroStarterProps {
  title: string | MultiLangText
  subtitle: string | MultiLangText
  image?: string
  blueprintGrid?: boolean
  primaryColor?: string
  t: (content: string | MultiLangText | undefined) => string
}

export default function HeroStarter({
  title,
  subtitle,
  image,
  blueprintGrid = true,
  primaryColor = "#000000",
  t,
}: HeroStarterProps) {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Background Decor: Blueprint Grid */}
      {blueprintGrid && (
        <div className="absolute inset-0 z-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <div className="h-full w-full bg-[grid:1px_solid_black] bg-[size:40px_40px]" />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <div className="max-w-2xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-slate-900 md:text-7xl">
                {t(title)}
              </h1>
              <p className="text-xl font-medium leading-relaxed text-slate-500">
                {t(subtitle)}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:brightness-110 active:scale-95"
                style={{ backgroundColor: primaryColor }}
              >
                Get Started Now
              </button>
              <button className="border-2 border-slate-900 px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-900 transition-all hover:bg-slate-900 hover:text-white">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Content with Modern Frame */}
          <div className="relative">
            <div
              className="absolute -bottom-6 -right-6 h-full w-full border-2 border-dashed border-slate-200"
              style={{ borderColor: `${primaryColor}33` }}
            />
            <div className="relative aspect-square overflow-hidden border-2 border-slate-900 bg-slate-100 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.05)]">
              <img
                src={image || "/api/placeholder/800/800"}
                alt="Hero Visual"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### `app/landing/[template-id]/variants/starter/components/SocialProof.tsx`

```ts
/** @format */
import React from "react"
import { Star, Quote } from "lucide-react"
import { MultiLangText } from "../../../types"

/**
 * 🟢 แก้ไข Interface: เพิ่มฟังก์ชัน t และระบุโครงสร้าง Review ให้ชัดเจน
 * เพื่อแก้ปัญหา Property 'role' does not exist และ Property 't' does not exist
 */
export interface Review {
  id: string | number
  name: string
  role?: string       // 🟢 ทำให้เป็น Optional เพื่อความยืดหยุ่น
  avatar?: string
  comment: string | MultiLangText
  rating?: number
}

export interface SocialProofProps {
  testimonials: Review[]
  t: (content: string | MultiLangText | undefined) => string // 🟢 รับฟังก์ชันแปลภาษา
}

export default function SocialProof({ testimonials = [], t }: SocialProofProps) {
  if (!testimonials.length) return null

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">
            Trusted by Professionals
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 bg-slate-900" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((review, idx) => (
            <div
              key={review.id || idx}
              className="relative flex flex-col border-2 border-slate-900 bg-white p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-transform hover:-translate-y-1"
            >
              {/* Quote Icon Decor */}
              <div className="absolute -top-4 -right-4 bg-slate-900 p-3 text-white">
                <Quote size={20} fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < (review.rating || 5) ? "fill-yellow-400 text-yellow-400" : "text-slate-200"}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="mb-8 flex-grow text-lg font-medium leading-relaxed italic text-slate-700">
                "{t(review.comment)}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="h-12 w-12 overflow-hidden border-2 border-slate-900 bg-slate-200">
                  <img
                    src={review.avatar || `https://ui-avatars.com/api/?name=${review.name}`}
                    alt={review.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tight text-slate-900">
                    {review.name}
                  </h4>
                  {/* 🟢 แก้ไข Error TS2339: แสดงผล Role อย่างปลอดภัย */}
                  {review.role && (
```

### `app/landing/[template-id]/variants/starter/components/StarterFAQ.tsx`

```ts
/** @format */
"use client"

import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

interface StarterFAQProps {
  faqs?: FAQItem[]
}

const StarterFAQ: React.FC<StarterFAQProps> = ({
  faqs = [
    {
      question: "เว็บไซต์ Starter เหมาะกับใคร?",
      answer:
        "เหมาะสำหรับร้านค้าเริ่มต้นที่ต้องการมีหน้าร้านออนไลน์ง่ายๆ แต่สวยงามและใช้งานได้จริง",
    },
    {
      question: "ใช้เวลาทำเว็บไซต์นานเท่าไหร่?",
      answer:
        "โดยทั่วไปประมาณ 5-7 วันทำการ ขึ้นอยู่กับความซับซ้อนของข้อมูลและดีไซน์",
    },
    {
      question: "สามารถปรับแก้ไขเองได้หรือไม่?",
      answer:
        "ได้ เราสอนวิธีใช้งานและแก้ไขข้อมูลเบื้องต้นให้ รวมถึงมีระบบ CMS ง่ายต่อการปรับปรุงข้อมูล",
    },
  ],
}) => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-12 text-3xl font-black text-brand-navy md:text-4xl">
          คำถามที่พบบ่อย (FAQ)
        </h2>
        <Accordion type="single" collapsible className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg border border-slate-200"
            >
              <AccordionTrigger className="px-4 py-3 text-lg font-semibold text-slate-900">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 text-slate-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default StarterFAQ
```

### `app/landing/[template-id]/variants/starter/components/TrustBadges.tsx`

```ts
/** @format */
"use client"

import React from "react"

interface TrustBadge {
  icon: string
  title: string
  description: string
}

interface TrustBadgesProps {
  badges?: TrustBadge[]
}

const TrustBadges: React.FC<TrustBadgesProps> = ({
  badges = [
    {
      icon: "ShieldCheck",
      title: "ปลอดภัยและน่าเชื่อถือ",
      description:
        "เว็บไซต์ถูกออกแบบตามมาตรฐานความปลอดภัย และรองรับการใช้งานบนทุกอุปกรณ์",
    },
    {
      icon: "Award",
      title: "คุณภาพสูง",
      description:
        "เราออกแบบ UI/UX ให้สวยงาม ดูมืออาชีพ และตอบโจทย์ธุรกิจ SME ไทย",
    },
    {
      icon: "Users",
      title: "รองรับลูกค้าจำนวนมาก",
      description:
        "เว็บไซต์โหลดเร็วและเสถียร รองรับจำนวนผู้ใช้งานพร้อมกันได้ดี",
    },
  ],
}) => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-12 text-center text-3xl font-black text-brand-navy md:text-4xl">
          ทำไมลูกค้าไว้ใจเรา
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="text-brand-primary mb-4 text-4xl">
                <i className={`icon-${badge.icon}`} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {badge.title}
              </h3>
              <p className="text-slate-700">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBadges
```

### `app/landing/[template-id]/variants/starter/components/index.ts`

```ts
/** @format */

export { default as ConversionForm } from "./ConversionForm"
export { default as FeatureHighlights } from "./FeatureHighlights"
export { default as HeroStarter } from "./HeroStarter"
export { default as SocialProof } from "./SocialProof"
export { default as StarterFAQ } from "./StarterFAQ"
export { default as TrustBadges } from "./TrustBadges"
```

### `app/landing/[template-id]/variants/starter/StarterVariant.tsx`

```ts
/** @format */
import React from "react"
// 🟢 แก้ไข Path จาก ../ เป็น ../../ เพื่อถอยออกไปหาโฟลเดอร์ types
import { StarterTemplateProps } from "../../types"
import StarterTemplate from "./template"

interface Props {
  data: StarterTemplateProps
}

export default function StarterVariant({ data }: Props) {
  // หากในอนาคตมี MobileTemplate สามารถแยกเงื่อนไขการ Render ตรงนี้ได้
  return <StarterTemplate data={data} />
}
```

### `app/landing/[template-id]/variants/starter/index.ts`

```ts
/** @format */

export { default } from "./StarterVariant"
```

### `app/landing/[template-id]/variants/starter/template.tsx`

```ts
/** @format */
"use client"

import React from "react"
// 🟢 แก้ไข Path ให้ถูกต้อง (ถอย 2 ชั้น)
import { StarterTemplateProps, MultiLangText } from "../../types"
import { Navbar, Footer } from "../../shared"
import HeroStarter from "./components/HeroStarter"
import FeatureHighlights from "./components/FeatureHighlights"
import ConversionForm from "./components/ConversionForm"
import SocialProof from "./components/SocialProof"

interface Props {
  data: StarterTemplateProps
}

const StarterTemplate: React.FC<Props> = ({ data }) => {
  /**
   * 🟢 Helper Function: t() สำหรับรองรับ Multi-language
   */
  const t = (content: string | MultiLangText | undefined): string => {
    if (!content) return ""
    if (typeof content === "string") return content
    const lang = data?.defaultLanguage || "th"
    return content[lang as keyof MultiLangText] || content["th"] || ""
  }

  if (!data) return null

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* 1. Navbar */}
      <Navbar
        brandName={t(data.name)}
        primaryColor={data.primaryColor || "#000000"}
        lineId={data.lineId}
        defaultLanguage={data.defaultLanguage}
      />

      <main className="flex-grow">
        {/* 2. Hero Section
            🟢 แก้ไข TS2322: ใช้ {...data.hero} เพื่อกระจาย Props เข้าไปยัง HeroStarter
        */}
        <HeroStarter
          {...(data.hero || {})}
          primaryColor={data.primaryColor || "#000000"}
          t={t}
        />

        {/* 3. Features Section */}
        <FeatureHighlights
          features={data.features || []}
          primaryColor={data.primaryColor || "#000000"}
          t={t}
        />

        {/* 4. Social Proof Section */}
        <SocialProof
          testimonials={data.socialProof || data.testimonials || []}
          t={t}
        />

        {/* 5. Conversion Section */}
        <ConversionForm
          form={data.form}
          primaryColor={data.primaryColor || "#000000"}
          t={t}
        />
      </main>

      {/* 6. Shared Footer */}
      <Footer data={data} />
    </div>
  )
}

export default StarterTemplate
```

### `app/landing/[template-id]/variants/clinic/components/BeforeAfter.tsx`

```ts
/** @format */
import React from "react"

/**
 * 🟢 แก้ไข Interface: ปรับชื่อ Property ให้ตรงกับข้อมูลที่ส่งมาจาก template.tsx
 * เพื่อแก้ปัญหา Property 'beforeAfter' does not exist on type 'IntrinsicAttributes & BeforeAfterProps'
 */
export interface BeforeAfterItem {
  before: string
  after: string
  label?: string
}

export interface BeforeAfterProps {
  // 🟢 เปลี่ยนชื่อให้ตรงตามที่เรียกใช้ใน clinic/template.tsx
  beforeAfter: BeforeAfterItem[]
  primaryColor?: string
}

export default function BeforeAfter({
  beforeAfter = [],
  primaryColor = "#0ea5e9", // Default เป็นสีฟ้าคลินิก
}: BeforeAfterProps) {
  if (!beforeAfter || beforeAfter.length === 0) return null

  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 md:text-5xl">
          Real Results
        </h2>
        <div
          className="mx-auto mt-4 h-1.5 w-20"
          style={{ backgroundColor: primaryColor }}
        />
        <p className="mt-4 text-sm font-bold uppercase tracking-widest text-slate-400">
          Case Studies & Treatment Gallery
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {beforeAfter.map((item, idx) => (
          <div key={idx} className="group relative">
            {/* Comparison Container */}
            <div className="relative flex gap-1 overflow-hidden border-2 border-slate-900 bg-slate-900 p-1 shadow-[10px_10px_0px_0px_rgba(15,23,42,0.05)] transition-all hover:shadow-[10px_10px_0px_0px_rgba(15,23,42,0.1)]">
              {/* Before Image */}
              <div className="relative w-1/2">
                <img
                  src={item.before || "/api/placeholder/400/400"}
                  alt="Before treatment"
                  className="aspect-square w-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-slate-900/80 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-sm">
                  Before
                </div>
              </div>

              {/* After Image */}
              <div className="relative w-1/2">
                <img
                  src={item.after || "/api/placeholder/400/400"}
                  alt="After treatment"
                  className="aspect-square w-full object-cover"
                />
                <div
                  className="absolute bottom-2 right-2 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-sm"
                  style={{ backgroundColor: primaryColor }}
                >
                  After
                </div>
              </div>
            </div>

            {/* Case Label */}
            {item.label && (
              <div className="mt-4 border-l-4 border-slate-900 pl-4">
                <h4 className="text-lg font-black uppercase italic tracking-tight text-slate-900">
                  {item.label}
                </h4>
              </div>
```

### `app/landing/[template-id]/variants/clinic/components/DoctorProfile.tsx`

```ts
/** @format */
import React from "react"

/**
 * 🟢 ปรับ Interface ให้ยืดหยุ่น (Flexible Interface)
 * รองรับทั้ง 'title' และ 'specialty' เพราะข้อมูลใน Catalog อาจใช้ชื่อต่างกัน
 */
export interface Doctor {
  id?: string | number // 🟢 เปลี่ยนเป็น Optional เพื่อรองรับข้อมูลที่ไม่มี ID
  name: string
  title?: string       // 🟢 เปลี่ยนเป็น Optional
  specialty?: string   // 🟢 เพิ่มเพื่อรองรับข้อมูลจากบาง Catalog
  image: string
  bio?: string
}

export interface DoctorProfileProps {
  doctors: Doctor[]
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({ doctors = [] }) => {
  return (
    <section className="py-16">
      <div className="mb-12 flex items-center gap-4">
        <div className="h-10 w-2 bg-blue-600" />
        <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">
          Professional Medical Team
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doc, idx) => (
          <div
            key={doc.id || idx}
            className="group relative overflow-hidden border-2 border-slate-900 bg-white p-6 transition-all hover:shadow-[10px_10px_0px_0px_rgba(15,23,42,1)]"
          >
            {/* Doctor Image with Brutalist Frame */}
            <div className="relative mb-6 aspect-[4/5] overflow-hidden border-2 border-slate-900">
              <img
                src={doc.image || "/api/placeholder/400/500"}
                alt={doc.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 bg-slate-900 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white">
                Verified Specialist
              </div>
            </div>

            {/* Doctor Info */}
            <div className="space-y-2">
              <h3 className="text-2xl font-black uppercase italic text-slate-900">
                {doc.name}
              </h3>

              {/* 🟢 Render Title หรือ Specialty อย่างใดอย่างหนึ่งที่ส่งมา */}
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                {doc.title || doc.specialty || "Medical Specialist"}
              </p>

              {doc.bio && (
                <p className="mt-4 text-sm font-medium leading-relaxed text-slate-500 border-t border-slate-100 pt-4">
                  {doc.bio}
                </p>
              )}
            </div>

            {/* Interactive Corner Decor */}
            <div className="absolute -bottom-2 -right-2 h-8 w-8 bg-slate-100 transition-colors group-hover:bg-blue-50" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default DoctorProfile
```

### `app/landing/[template-id]/variants/clinic/components/FAQSection.tsx`

```ts
/** @format */
import React from "react"

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  return (
    <section>
      <h2>FAQ</h2>
      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQSection
```

### `app/landing/[template-id]/variants/clinic/components/SocialProof.tsx`

```ts
/** @format */
import React from "react"

interface Testimonial {
  id: string
  name: string
  role?: string
  content: string
  avatar?: string
}

interface SocialProofProps {
  testimonials: Testimonial[]
}

const SocialProof: React.FC<SocialProofProps> = ({ testimonials }) => {
  return (
    <section>
      <h2>What Our Clients Say</h2>
      <div className="testimonials">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-card">
            {t.avatar && <img src={t.avatar} alt={t.name} />}
            <p>{t.content}</p>
            <h4>{t.name}</h4>
            {t.role && <span>{t.role}</span>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default SocialProof
```

### `app/landing/[template-id]/variants/clinic/components/index.ts`

```ts
export { default as BeforeAfter } from "./BeforeAfter"
export { default as DoctorProfile } from "./DoctorProfile"
export { default as FAQSection } from "./FAQSection"
export { default as SocialProof } from "./SocialProof"
```

### `app/landing/[template-id]/variants/clinic/ClinicVariant.tsx`

```ts
/** @format */
import React from "react"
import ClinicTemplate from "./template"
import { ClinicTemplateProps } from "../../types"

interface Props {
  data?: ClinicTemplateProps
}

const ClinicVariant: React.FC<Props> = ({ data }) => {
  if (!data) return null

  const safeData: ClinicTemplateProps = {
    ...data,
    beforeAfter: data.beforeAfter || [],
    doctors: data.doctors || [],
    socialProof: data.socialProof || [],
  }

  return <ClinicTemplate data={safeData} />
}

export default ClinicVariant
```

### `app/landing/[template-id]/variants/clinic/index.ts`

```ts
/** @format */

export { default } from "./ClinicVariant"
```

### `app/landing/[template-id]/variants/clinic/template.tsx`

```ts
/** @format */
"use client"
import React from "react"
import { ClinicTemplateProps, MultiLangText } from "../../types"
import { Navbar, Footer, Section, Testimonials } from "../../shared"
import BeforeAfter from "./components/BeforeAfter"
import DoctorProfile from "./components/DoctorProfile"

export default function ClinicTemplate({
  data,
}: {
  data: ClinicTemplateProps
}) {
  /**
   * 🟢 Helper Function: t()
   * สำหรับดึงข้อความตามภาษา (th/en)
   * แก้ปัญหา Error: Type 'MultiLangText' is not assignable to type 'ReactNode'
   */
  const t = (content: string | MultiLangText | undefined): string => {
    if (!content) return ""
    if (typeof content === "string") return content
    const lang = data.defaultLanguage || "th"
    return content[lang] || content["th"] || ""
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar
        brandName={data.name}
        primaryColor={data.primaryColor}
        lineId={data.lineId}
        defaultLanguage={data.defaultLanguage}
      />

      {/* Hero: Medical Trust Look */}
      <section className="border-b-8 border-slate-900 bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
              {t(data.hero?.title)}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              {t(data.hero?.subtitle)}
            </p>
            <a
              href={`tel:${data.phone}`}
              className="inline-block bg-slate-900 px-8 py-4 font-bold uppercase text-white transition-transform hover:-translate-y-1 active:scale-95"
              style={{ backgroundColor: data.primaryColor }}
            >
              ปรึกษาคุณหมอทันที
            </a>
          </div>
          <div className="relative border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]">
            {data.hero?.image && (
              <img
                src={data.hero.image}
                alt="Clinic Hero"
                className="h-auto w-full"
              />
            )}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <Section
        id="results"
        title="Success Stories"
        subtitle="ผลลัพธ์ที่พิสูจน์ได้จริงจากผู้ใช้บริการ"
        config={{ primaryColor: data.primaryColor }}
      >
        {/* ✅ ส่ง data.beforeAfter (ระวังชื่อ prop ในคอมโพเนนต์ย่อยด้วย) */}
        <BeforeAfter beforeAfter={data.beforeAfter || []} />
      </Section>

      {/* Medical Experts Section */}
      <Section
        id="doctors"
        title="Medical Experts"
        className="bg-blue-50/50"
```

### `app/landing/[template-id]/variants/real-estate/components/FAQSection.tsx`

```ts
/** @format */
import React from "react"

interface FAQ {
  id: string
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  return (
    <section>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqs.map((faq) => (
          <li key={faq.id}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FAQSection
```

### `app/landing/[template-id]/variants/real-estate/components/LocationInsight.tsx`

```ts
/** @format */
import React from "react"

// 🟢 แก้ไข: ปรับ Interface ให้รองรับทั้ง 'insight' (Object) และ 'locations' (Array)
// เพื่อให้สอดคล้องกับที่ RealEstateTemplate.tsx เรียกใช้
export interface LocationInsightProps {
  insight?: {
    title: string
    content: string
    image?: string
  }
  locations?: {
    id: string
    name: string
    image: string
    description?: string
  }[]
}

export default function LocationInsight({
  insight,
  locations = [],
}: LocationInsightProps) {

  // 1. กรณีส่งมาเป็น 'insight' (แบบที่ RealEstateTemplate ใช้อยู่ปัจจุบัน)
  if (insight) {
    return (
      <section className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 md:text-6xl">
              {insight.title}
            </h2>
            <p className="text-lg font-bold leading-relaxed text-slate-500 border-l-4 border-slate-900 pl-6">
              {insight.content}
            </p>
          </div>
          {insight.image && (
            <div className="relative aspect-video border-2 border-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] overflow-hidden">
              <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          )}
        </div>
      </section>
    )
  }

  // 2. กรณีส่งมาเป็น 'locations' Array (แบบที่คุณเขียนไว้ตอนแรก)
  if (locations.length > 0) {
    return (
      <section className="py-20">
        <h2 className="text-3xl font-black uppercase italic mb-12">Explore Our Locations</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {locations.map((loc) => (
            <div key={loc.id} className="group border-2 border-slate-900 bg-white p-4 hover:-translate-y-2 transition-all">
              <img src={loc.image} alt={loc.name} className="aspect-square object-cover border-2 border-slate-900 mb-4" />
              <h3 className="font-black uppercase italic">{loc.name}</h3>
              {loc.description && <p className="text-sm text-slate-500 mt-2">{loc.description}</p>}
            </div>
          ))}
        </div>
      </section>
    )
  }

  return null
}
```

### `app/landing/[template-id]/variants/real-estate/components/RoomTypeCards.tsx`

```ts
/** @format */
import React from "react"

// 🟢 แก้ไข 1: ทำให้ properties เป็น Optional (?) เพื่อรองรับข้อมูลที่อาจไม่ครบถ้วน
// และเพิ่ม 'name' เพื่อรองรับข้อมูลจาก catalog.projects ที่อาจใช้ฟิลด์นี้แทน 'type'
interface Room {
  id?: string | number
  type?: string
  name?: string
  price?: string
  image?: string
}

export interface RoomTypeCardsProps {
  rooms: Room[]
}

const RoomTypeCards: React.FC<RoomTypeCardsProps> = ({ rooms = [] }) => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-slate-900 uppercase tracking-tight">
        Available Properties
      </h2>

      {/* 🛡️ ป้องกันการ Render ล้มเหลวหาก rooms เป็น empty array */}
      {rooms.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-3">
          {rooms.map((room, idx) => (
            <div
              key={room.id || idx} // 🟢 ใช้ index เป็น fallback หากไม่มี id
              className="group border-2 border-slate-900 bg-white p-4 transition-all hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]"
            >
              <div className="relative aspect-video overflow-hidden border-b-2 border-slate-900 mb-4">
                <img
                  src={room.image || "/api/placeholder/400/300"}
                  alt={room.name || room.type || "Property"}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>

              {/* 🟢 รองรับทั้ง .name และ .type เพื่อแก้ปัญหา TS2322 */}
              <h3 className="text-xl font-black uppercase italic text-slate-900">
                {room.name || room.type || "Special Unit"}
              </h3>

              <p className="mt-2 text-lg font-bold text-slate-500">
                {room.price || "Contact for Price"}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed border-slate-200">
          <p className="text-slate-400 italic">No property data available.</p>
        </div>
      )}
    </section>
  )
}

export default RoomTypeCards
```

### `app/landing/[template-id]/variants/real-estate/components/SocialProof.tsx`

```ts
/** @format */
import React from "react"

interface Testimonial {
  id: string
  name: string
  feedback: string
  avatar?: string
}

interface SocialProofProps {
  testimonials: Testimonial[]
}

const SocialProof: React.FC<SocialProofProps> = ({ testimonials }) => {
  return (
    <section>
      <h2>What Our Clients Say</h2>
      <div>
        {testimonials.map((t) => (
          <div key={t.id}>
            {t.avatar && <img src={t.avatar} alt={t.name} />}
            <p>"{t.feedback}"</p>
            <strong>- {t.name}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SocialProof
```

### `app/landing/[template-id]/variants/real-estate/components/index.ts`

```ts
export { default as FAQSection } from "./FAQSection"
export { default as LocationInsight } from "./LocationInsight"
export { default as RoomTypeCards } from "./RoomTypeCards"
export { default as SocialProof } from "./SocialProof"
```

### `app/landing/[template-id]/variants/real-estate/RealEstateVariant.tsx`

```ts
/** @format */
import React from "react"
import RealEstateTemplate from "./template"
import { RealEstateTemplateProps } from "../../types"

interface Props {
  data?: RealEstateTemplateProps
}

const RealEstateVariant: React.FC<Props> = ({ data }) => {
  if (!data) return null

  const safeData: RealEstateTemplateProps = {
    ...data,
    locationInsight: data.locationInsight || { title: "", content: "" },
    roomTypes: data.roomTypes || [],
  }

  return <RealEstateTemplate data={safeData} />
}

export default RealEstateVariant
```

### `app/landing/[template-id]/variants/real-estate/index.ts`

```ts
/** @format */

export { default } from "./RealEstateVariant"
```

### `app/landing/[template-id]/variants/real-estate/template.tsx`

```ts
/** @format */
"use client"

import React from "react"
import { RealEstateTemplateProps, MultiLangText } from "../../types"
import { Navbar, Footer, Section } from "../../shared"
import LocationInsight from "./components/LocationInsight"
import RoomTypeCards from "./components/RoomTypeCards"

export default function RealEstateTemplate({
  data,
}: {
  data: RealEstateTemplateProps
}) {
  /**
   * 🟢 Helper Function: t()
   * รองรับการดึงข้อมูลภาษาแบบ Dynamic และ Type-safe
   */
  const t = (content: string | MultiLangText | undefined): string => {
    if (!content) return ""
    if (typeof content === "string") return content
    const lang = data?.defaultLanguage || "th"
    return content[lang as keyof MultiLangText] || content["th"] || ""
  }

  if (!data) return null

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar
        brandName={data.name}
        primaryColor={data.primaryColor || "#000000"}
        lineId={data.lineId}
        defaultLanguage={data.defaultLanguage}
      />

      <main className="flex-grow">
        {/* Cinematic Hero */}
        <section className="relative h-screen overflow-hidden bg-slate-900">
          {data.hero?.image && (
            <img
              src={data.hero.image}
              /* ✅ แก้ไข Warning Tailwind ถาวร:
                ใช้ [transition-duration:10000ms] เพื่อระบุชัดเจนว่าใช้กับ transition
                วิธีนี้จะช่วยกำจัดข้อความ ambiguous ใน terminal
              */
              className="h-full w-full object-cover transition-transform ease-out [transition-duration:10000ms] hover:scale-110"
              alt="Property Hero"
            />
          )}

          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 via-black/20 to-transparent pb-32">
            <div className="mx-auto w-full max-w-7xl px-6 text-white">
              <h1 className="mb-6 text-5xl font-extralight uppercase leading-none tracking-[0.2em] md:text-9xl">
                {t(data.hero?.title)}
              </h1>
              <p className="text-xl font-medium uppercase tracking-[0.4em] text-[#C5A059] md:text-3xl">
                {t(data.hero?.subtitle)}
              </p>
            </div>
          </div>
        </section>

        {/* Dynamic Sections */}
        <Section
          id="room-types"
          title="The Residences"
          subtitle="เลือกสรรรูปแบบการใช้ชีวิตที่เหนือระดับ"
          config={{ primaryColor: data.primaryColor }}
        >
          <RoomTypeCards rooms={data.roomTypes || []} />
        </Section>

        <Section
          id="location"
          title="The Location"
          className="bg-slate-50"
          config={{ primaryColor: data.primaryColor }}
        >
          <LocationInsight insight={data.locationInsight} />
```

### `app/landing/[template-id]/variants/cafe/components/CafeGallery.tsx`

```ts
/** @format */
import React from "react"

/**
 * 🟢 แก้ไข Interface ให้รองรับ Prop 'items' ตามที่ Template ส่งมา
 * เพื่อแก้ปัญหา Property 'items' does not exist on type 'IntrinsicAttributes & CafeGalleryProps'
 */
export interface CafeGalleryProps {
  items: string[] // รับ Array ของ URL รูปภาพ
  primaryColor?: string
}

export default function CafeGallery({
  items = [],
  primaryColor = "#eab308"
}: CafeGalleryProps) {

  if (!items || items.length === 0) return null

  // กำหนด Layout สำหรับ Bento Grid (รองรับสูงสุด 5 รูปแรกเพื่อให้สวยงาม)
  const displayItems = items.slice(0, 5)

  return (
    <section className="py-16">
      <div className="mb-10 flex items-center gap-4">
        <div className="h-10 w-2" style={{ backgroundColor: primaryColor }} />
        <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">
          Atmosphere
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
        {displayItems.map((src, idx) => {
          // Logic สำหรับสลับขนาดช่องให้ดูเหมือน Bento Grid
          const isLarge = idx === 0
          const gridClass = isLarge
            ? "col-span-2 row-span-2 aspect-square"
            : "aspect-square"

          return (
            <div
              key={idx}
              className={`${gridClass} group relative overflow-hidden border-2 border-slate-900 bg-slate-100 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1`}
            >
              <img
                src={src || "/api/placeholder/600/600"}
                alt={`Cafe gallery ${idx + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Decor */}
              <div className="absolute inset-0 bg-slate-900/10 opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="absolute bottom-2 right-2 bg-white border border-slate-900 px-2 py-1 text-[8px] font-black uppercase tracking-widest text-slate-900">
                Shot 0{idx + 1}
              </div>
            </div>
          )
        })}
      </div>

      {/* Social Call to Action */}
      <div className="mt-8 flex items-center justify-end gap-2 text-slate-400">
        <span className="text-[10px] font-bold uppercase tracking-widest">
          Share your moment
        </span>
        <div className="h-[1px] w-8 bg-slate-200" />
        <span className="text-[10px] font-black text-slate-900">#CAFEVIBE</span>
      </div>
    </section>
  )
}
```

### `app/landing/[template-id]/variants/cafe/components/FAQSection.tsx`

```ts
/** @format */
import React from "react"

interface FAQ {
  id: string
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  return (
    <section>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqs.map((faq) => (
          <li key={faq.id}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FAQSection
```

### `app/landing/[template-id]/variants/cafe/components/MenuHighlight.tsx`

```ts
/** @format */
import React from "react"

/**
 * 🟢 แก้ไข Interface: เพิ่ม primaryColor และระบุโครงสร้าง Item ให้ชัดเจน
 * เพื่อแก้ปัญหา TS2322 ใน Cafe Template
 */
export interface MenuItem {
  id?: string | number
  name: string
  description?: string
  price: string | number
  image?: string
  category?: string
}

export interface MenuHighlightProps {
  items: MenuItem[]
  primaryColor?: string // 🟢 เพิ่ม Prop นี้เพื่อรับค่าจาก Template
}

export default function MenuHighlight({
  items = [],
  primaryColor = "#eab308" // Default เป็นสีเหลืองทองแบบ Cafe
}: MenuHighlightProps) {

  if (!items.length) return null

  return (
    <section className="py-16">
      {/* Header Section */}
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-2 w-12" style={{ backgroundColor: primaryColor }} />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
              Selected Menu
            </span>
          </div>
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 md:text-6xl">
            Signature Highlights
          </h2>
        </div>
        <div className="hidden h-[1px] flex-grow border-t-2 border-dashed border-slate-200 mx-8 mb-4 md:block" />
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
        {items.map((item, idx) => (
          <div
            key={item.id || idx}
            className="group flex items-start gap-6 border-b-2 border-slate-50 pb-8 transition-colors hover:border-slate-900"
          >
            {/* Item Image */}
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-transform group-hover:-translate-y-1">
              <img
                src={item.image || "/api/placeholder/200/200"}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Item Details */}
            <div className="flex-grow">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">
                  {item.name}
                </h3>
                <div className="flex-grow border-b-2 border-dotted border-slate-200" />
                <span
                  className="text-xl font-black tabular-nums"
                  style={{ color: primaryColor }}
                >
                  {typeof item.price === 'number' ? `${item.price}.-` : item.price}
                </span>
              </div>

              {item.description && (
                <p className="mt-2 text-sm font-bold leading-relaxed text-slate-500">
                  {item.description}
```

### `app/landing/[template-id]/variants/cafe/components/OpeningHours.tsx`

```ts
/** @format */
import React from "react"

// 🟢 แก้ไข Interface ให้ยืดหยุ่น: รองรับทั้ง Array และ Record (Object)
export interface OpeningHoursProps {
  hours: { day: string; time: string }[] | Record<string, string>
  primaryColor?: string
}

export default function OpeningHours({
  hours = [],
  primaryColor = "#000000"
}: OpeningHoursProps) {

  /**
   * 🟢 Normalizer: แปลงข้อมูลทุกรูปแบบให้เป็น Array มาตรฐาน
   * เพื่อให้การ Render ด้านล่างเสถียร 100%
   */
  const normalizedHours = Array.isArray(hours)
    ? hours
    : Object.entries(hours).map(([day, time]) => ({
        day: day.charAt(0).toUpperCase() + day.slice(1),
        time: time
      }))

  if (!normalizedHours.length) return null

  return (
    <section className="rounded-2xl border-2 border-slate-900 bg-white p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
      <div className="mb-6 flex items-center gap-3">
        <div
          className="h-2 w-8"
          style={{ backgroundColor: primaryColor }}
        />
        <h2 className="text-xl font-black uppercase tracking-widest text-slate-900">
          Opening Hours
        </h2>
      </div>

      <div className="space-y-4">
        {normalizedHours.map((item, idx) => (
          <div
            key={idx}
            className="group flex items-center justify-between border-b-2 border-slate-50 pb-3 transition-colors hover:border-slate-900"
          >
            <span className="text-sm font-black uppercase tracking-tight text-slate-500 group-hover:text-slate-900">
              {item.day}
            </span>
            <span className="text-sm font-bold tabular-nums text-slate-900">
              {item.time}
            </span>
          </div>
        ))}
      </div>

      {/* 🟢 System Status Watermark */}
      <div className="mt-8 flex items-center gap-2 opacity-20">
        <div className="h-1 w-1 rounded-full bg-slate-900 animate-pulse" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
          Service Operational
        </span>
      </div>
    </section>
  )
}
```

### `app/landing/[template-id]/variants/cafe/components/SocialProof.tsx`

```ts
/** @format */
import React from "react"

interface Testimonial {
  id: string
  name: string
  feedback: string
}

interface SocialProofProps {
  testimonials: Testimonial[]
}

const SocialProof: React.FC<SocialProofProps> = ({ testimonials }) => {
  return (
    <section>
      <h2>Customer Reviews</h2>
      <ul>
        {testimonials.map((t) => (
          <li key={t.id}>
            <p>"{t.feedback}"</p>
            <p>- {t.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SocialProof
```

### `app/landing/[template-id]/variants/cafe/components/index.ts`

```ts
export { default as CafeGallery } from "./CafeGallery"
export { default as FAQSection } from "./FAQSection"
export { default as MenuHighlight } from "./MenuHighlight"
export { default as OpeningHours } from "./OpeningHours"
export { default as SocialProof } from "./SocialProof"
```

### `app/landing/[template-id]/variants/cafe/CafeVariant.tsx`

```ts
/** @format */
import React from "react"
import CafeTemplate from "./template" // ✅ ใช้ Relative Path เพื่อความแม่นยำภายใน Folder
import { CafeTemplateProps } from "../../types" // ✅ ชี้ไปที่โฟลเดอร์ types/index.ts ที่เราสร้างใหม่

interface Props {
  data?: CafeTemplateProps
}

const CafeVariant: React.FC<Props> = ({ data }) => {
  // Guard Clause: ป้องกัน Runtime Error
  if (!data) return null

  // ✅ มั่นใจว่าข้อมูลพื้นฐานครบถ้วนก่อนส่งให้ Template
  const safeData: CafeTemplateProps = {
    ...data,
    hero: {
      title: data.hero?.title || "Welcome to Cafe",
      subtitle: data.hero?.subtitle || "",
      image: data.hero?.image,
    },
    gallery: data.gallery || [],
    menu: data.menu || [],
    openingHours: data.openingHours || [],
    socialProof: data.socialProof || [],
  }

  return <CafeTemplate data={safeData} />
}

export default CafeVariant
```

### `app/landing/[template-id]/variants/cafe/index.ts`

```ts
/** @format */

// ✅ แก้ไขให้ชี้ไปยัง CafeVariant
export { default } from "./CafeVariant"
```

### `app/landing/[template-id]/variants/cafe/template.tsx`

```ts
/** @format */
"use client"

import React from "react"
import { CafeTemplateProps, MultiLangText } from "../../types"
import { Navbar, Footer, Section, GoogleMap } from "../../shared"
import CafeGallery from "./components/CafeGallery"
import MenuHighlight from "./components/MenuHighlight"
import OpeningHours from "./components/OpeningHours"

export default function CafeTemplate({ data }: { data: CafeTemplateProps }) {
  /**
   * 🟢 Helper Function: t()
   * ปลอดภัยยิ่งขึ้นด้วยการเช็ค data ว่ามีตัวตนก่อนอ่าน defaultLanguage
   */
  const t = (content: string | MultiLangText | undefined): string => {
    if (!content) return ""
    if (typeof content === "string") return content
    const lang = data?.defaultLanguage || "th"
    return content[lang as keyof MultiLangText] || content["th"] || ""
  }

  // ป้องกันหน้าพังถ้าข้อมูลหลักไม่มา
  if (!data) return null

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar
        brandName={data.name}
        primaryColor={data.primaryColor || "#000000"}
        lineId={data.lineId}
        defaultLanguage={data.defaultLanguage}
      />

      {/* ─── Hero Section ─── */}
      <section className="relative flex h-[80vh] items-center justify-center overflow-hidden bg-slate-900 text-white">
        {data.hero?.image && (
          <img
            src={data.hero.image}
            alt="Hero"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
        )}
        <div className="relative z-10 px-6 text-center">
          <h1 className="mb-4 text-5xl font-black uppercase tracking-tighter md:text-7xl">
            {t(data.hero?.title)}
          </h1>
          <p className="text-xl font-medium opacity-90 md:text-2xl">
            {t(data.hero?.subtitle)}
          </p>
        </div>
      </section>

      {/* ─── Menu Section ─── */}
      <Section
        id="menu"
        title="Artisan Menu"
        subtitle="เมนูแนะนำที่เราคัดสรรมาเพื่อคุณ"
        config={{ primaryColor: data.primaryColor }}
      >
        {/* ⚠️ จุดแก้สำคัญ:
          จาก Error ก่อนหน้า คอมโพเนนต์ MenuHighlight น่าจะรับ prop ชื่อ 'items' ไม่ใช่ 'menu'
          ผมจึงส่งทั้ง 'items' และส่ง fallback เป็น Array ว่าง [] กันล่ม
        */}
        <MenuHighlight
          items={data.menu || []}
          primaryColor={data.primaryColor}
        />
      </Section>

      {/* ─── Gallery Section ─── */}
      <Section
        id="gallery"
        title="Atmosphere"
        className="bg-slate-50"
        config={{ primaryColor: data.primaryColor }}
      >
        <CafeGallery items={data.gallery || []} />
      </Section>

```

### `app/landing/[template-id]/variants/construction/components/FAQSection.tsx`

```ts
/** @format */
import React from "react"

interface FAQ {
  id: string
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  return (
    <section>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqs.map((faq) => (
          <li key={faq.id}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FAQSection
```

### `app/landing/[template-id]/variants/construction/components/ProjectGallery.tsx`

```ts
/** @format */
import React from "react"

/**
 * 🟢 ปรับ Interface ให้ยืดหยุ่น (Flexible Interface)
 * รองรับทั้ง 'image' และ 'imageUrl' เพื่อแก้ปัญหา TS2322
 */
export interface Project {
  id?: string | number
  title: string
  image: string        // รองรับข้อมูลที่ส่งมาเป็น image
  imageUrl?: string    // รองรับข้อมูลที่ส่งมาเป็น imageUrl
  description?: string
}

export interface ProjectGalleryProps {
  projects: Project[]
  primaryColor?: string
}

export default function ProjectGallery({
  projects = [],
  primaryColor = "#0f172a"
}: ProjectGalleryProps) {

  if (!projects.length) return null

  return (
    <section className="py-12">
      <div className="mb-10 flex items-center gap-4">
        <div className="h-12 w-3" style={{ backgroundColor: primaryColor }} />
        <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((item, idx) => (
          <div
            key={item.id || idx}
            className="group relative flex flex-col border-2 border-slate-900 bg-white transition-all hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]"
          >
            {/* Project Image Container */}
            <div className="relative aspect-video overflow-hidden border-b-2 border-slate-900">
              <img
                src={item.image || item.imageUrl || "/api/placeholder/600/400"}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 bg-white border-2 border-slate-900 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-900">
                Project 0{idx + 1}
              </div>
            </div>

            {/* Project Info */}
            <div className="flex flex-grow flex-col p-6">
              <h3 className="mb-3 text-xl font-black uppercase leading-tight text-slate-900">
                {item.title}
              </h3>

              {item.description && (
                <p className="mb-6 text-sm font-bold leading-relaxed text-slate-500">
                  {item.description}
                </p>
              )}

              <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Architecture & Build
                </span>
                <div
                  className="h-2 w-10"
                  style={{ backgroundColor: primaryColor }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
```

### `app/landing/[template-id]/variants/construction/components/SocialProof.tsx`

```ts
/** @format */
import React from "react"

interface Testimonial {
  id: string
  name: string
  feedback: string
}

interface SocialProofProps {
  testimonials: Testimonial[]
}

const SocialProof: React.FC<SocialProofProps> = ({ testimonials }) => {
  return (
    <section>
      <h2>Client Testimonials</h2>
      <ul>
        {testimonials.map((t) => (
          <li key={t.id}>
            <p>"{t.feedback}"</p>
            <p>- {t.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SocialProof
```

### `app/landing/[template-id]/variants/construction/components/StepWork.tsx`

```ts
/** @format */
import React from "react"

/**
 * 🟢 ปรับ Interface ให้ยืดหยุ่น (Flexible Interface)
 * รองรับทั้ง 'detail' และ 'description' เพื่อแก้ปัญหา TS2322
 */
export interface Step {
  id?: string | number
  title: string
  detail?: string       // รองรับข้อมูลที่ส่งจาก Template (data.steps)
  description?: string  // รองรับข้อมูลสำรอง
}

export interface StepWorkProps {
  steps: Step[]
  primaryColor?: string
}

export default function StepWork({
  steps = [],
  primaryColor = "#0f172a"
}: StepWorkProps) {

  if (!steps.length) return null

  return (
    <section className="py-16">
      <div className="mb-16 flex items-center gap-4">
        <div className="h-12 w-3" style={{ backgroundColor: primaryColor }} />
        <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">
          Our Process
        </h2>
      </div>

      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, idx) => (
          <div key={step.id || idx} className="group relative">
            {/* Step Number Badge */}
            <div className="mb-6 flex items-baseline gap-2">
              <span
                className="text-6xl font-black italic leading-none opacity-10 transition-opacity group-hover:opacity-100"
                style={{ color: primaryColor }}
              >
                0{idx + 1}
              </span>
              <div
                className="h-2 w-8"
                style={{ backgroundColor: primaryColor }}
              />
            </div>

            {/* Content Card */}
            <div className="relative border-l-4 border-slate-900 pl-6 transition-transform group-hover:translate-x-2">
              <h3 className="mb-4 text-xl font-black uppercase tracking-tight text-slate-900">
                {step.title}
              </h3>

              <p className="text-sm font-bold leading-relaxed text-slate-500">
                {step.detail || step.description || "Project phase details arriving soon."}
              </p>
            </div>

            {/* Connecting Line (Desktop Only) */}
            {idx < steps.length - 1 && (
              <div className="absolute right-0 top-8 hidden h-[2px] w-12 bg-slate-100 lg:block" />
            )}
          </div>
        ))}
      </div>

      {/* Industrial Footer Decor */}
      <div className="mt-16 border-t-2 border-slate-900 pt-8">
        <div className="flex flex-wrap gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          <span>Phase: Planning</span>
          <span>Phase: Execution</span>
          <span>Phase: Quality Control</span>
          <span>Status: Verified</span>
        </div>
      </div>
```

### `app/landing/[template-id]/variants/construction/components/index.ts`

```ts
export { default as FAQSection } from "./FAQSection"
export { default as ProjectGallery } from "./ProjectGallery"
export { default as SocialProof } from "./SocialProof"
export { default as StepWork } from "./StepWork"
```

### `app/landing/[template-id]/variants/construction/ConstructionVariant.tsx`

```ts
/** @format */
import React from "react"
import ConstructionTemplate from "./template"
import { ConstructionTemplateProps } from "../../types"

interface Props {
  data?: ConstructionTemplateProps
}

const ConstructionVariant: React.FC<Props> = ({ data }) => {
  if (!data) return null

  const safeData: ConstructionTemplateProps = {
    ...data,
    projects: data.projects || [],
    steps: data.steps || [],
  }

  return <ConstructionTemplate data={safeData} />
}

export default ConstructionVariant
```

### `app/landing/[template-id]/variants/construction/index.ts`

```ts
/** @format */

export { default } from "./ConstructionVariant"
```

### `app/landing/[template-id]/variants/construction/template.tsx`

```ts
/** @format */
"use client"
import React from "react"
import { ConstructionTemplateProps, MultiLangText } from "../../types"
import { Navbar, Footer, Section } from "../../shared"
import ProjectGallery from "./components/ProjectGallery"
import StepWork from "./components/StepWork"

export default function ConstructionTemplate({
  data,
}: {
  data: ConstructionTemplateProps
}) {
  /**
   * 🟢 Helper Function: t()
   * แก้ปัญหา Error: Type 'MultiLangText' is not assignable to type 'ReactNode'
   */
  const t = (content: string | MultiLangText | undefined): string => {
    if (!content) return ""
    if (typeof content === "string") return content
    const lang = data.defaultLanguage || "th"
    return content[lang] || content["th"] || ""
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F8F8]">
      <Navbar
        brandName={data.name}
        primaryColor="#000"
        lineId={data.lineId}
        defaultLanguage={data.defaultLanguage}
      />

      {/* Hero: Industrial Blueprint Grid */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-slate-900 py-32 text-white">
        {/* Background Pattern: Blueprint Look */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="max-w-4xl">
            <div className="mb-6 inline-block bg-yellow-400 px-4 py-1 text-sm font-black uppercase tracking-widest text-black">
              Reliability First
            </div>
            {/* ✅ ใช้ t() เพื่อดึง String ออกจาก MultiLangText */}
            <h1 className="mb-8 text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-8xl">
              {t(data.hero?.title)}
            </h1>
            <p className="max-w-2xl border-l-4 border-yellow-400 pl-6 text-xl opacity-80 md:text-2xl">
              {t(data.hero?.subtitle)}
            </p>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 hidden p-10 opacity-10 lg:block">
          <span className="select-none text-[150px] font-black leading-none">
            BUILD
          </span>
        </div>
      </section>

      {/* Featured Projects Section */}
      <Section
        id="projects"
        title="Featured Projects"
        subtitle="รวมผลงานการก่อสร้างระดับมาตราฐานวิศวกรรม"
        config={{ primaryColor: "#EAB308" }} // ใช้สีเหลืองทองเพื่อเน้นความหรูหรา/แข็งแกร่ง
      >
        {/* ✅ ส่ง projects และระวังเรื่อง undefined ด้วย || [] */}
        <ProjectGallery projects={data.projects || []} />
      </Section>

      {/* Execution Process Section */}
      <Section
        id="steps"
        title="Execution Process"
        className="bg-white"
        config={{ primaryColor: "#000" }}
      >
        {/* ✅ ส่ง steps ตามโครงสร้างใหม่ใน types */}
```

### `app/landing/[template-id]/shared/BrandBadge.tsx`

```ts
/** @format */
"use client"

import React from "react"
import { Sparkles } from "lucide-react"

interface BrandBadgeProps {
  children: React.ReactNode
  config: {
    primaryColor: string
    defaultLanguage?: "th" | "en"
  }
  icon?: React.ReactNode
  className?: string
  withAnimate?: boolean
}

export default function BrandBadge({
  children,
  config,
  icon,
  className = "",
  withAnimate = true,
}: BrandBadgeProps) {
  const lang = config.defaultLanguage || "th"

  const formatText = (content: any) => {
    if (!content) return ""
    if (typeof content === "string") return content
    if (typeof content === "object") {
      return content[lang] || content["th"] || content["en"] || ""
    }
    return content
  }

  // 🎨 Industrial Sharp Design Style
  // เปลี่ยนจาก Rounded-full เป็น Rounded-none หรือ Border หนาขึ้นเพื่อความเท่
  const badgeStyle = {
    backgroundColor: `${config.primaryColor}10`, // 10% opacity
    color: config.primaryColor,
    borderColor: config.primaryColor,
    // ใช้ Shadow แบบ Solid ตามสไตล์ Brutalist ของเรา
    boxShadow: `3px 3px 0px 0px ${config.primaryColor}20`,
  }

  return (
    <div
      style={badgeStyle}
      className={`group relative mb-10 inline-flex items-center gap-4 border-l-4 px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:translate-x-1 md:text-[11px] ${className}`}
    >
      {/* 🛠️ Status Indicator Dot */}
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75`}
          style={{ backgroundColor: config.primaryColor }}
        ></span>
        <span
          className="relative inline-flex h-2 w-2 rounded-full"
          style={{ backgroundColor: config.primaryColor }}
        ></span>
      </span>

      {/* ✨ Icon Section */}
      <span
        className={`relative z-10 shrink-0 ${withAnimate ? "animate-spin-slow" : ""}`}
      >
        {icon || <Sparkles size={14} strokeWidth={3} />}
      </span>

      {/* 📝 Text Content */}
      <span className="relative z-10 leading-none">{formatText(children)}</span>

      {/* ⚡ Industrial Shimmer Effect */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="shimmer-block absolute inset-0 opacity-20"
          style={{
            background: `linear-gradient(90deg, transparent, ${config.primaryColor}, transparent)`,
          }}
        />
```

### `app/landing/[template-id]/shared/ContactForm.tsx`

```ts
/** @format */
"use client"

import React, { useState } from "react"
import {
  Send,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"

interface ContactFormProps {
  config: {
    primaryColor: string
    name: string
  }
}

export default function ContactForm({ config }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Failed to send message")
      setIsSubmitted(true)
    } catch (err) {
      setError("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง หรือติดต่อผ่าน Line")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="relative flex min-h-[500px] flex-col items-center justify-center border-4 border-slate-900 bg-white p-12 text-center shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] duration-700 animate-in fade-in zoom-in">
        <div
          className="relative mb-10 flex h-24 w-24 items-center justify-center border-4 border-slate-900"
          style={{
            backgroundColor: `${config.primaryColor}10`,
            color: config.primaryColor,
          }}
        >
          <CheckCircle2 size={40} strokeWidth={3} />
        </div>
        <h3 className="mb-4 text-4xl font-black uppercase italic tracking-tighter text-slate-900">
          SUBMISSION SUCCESS
        </h3>
        <p className="max-w-xs text-lg font-bold leading-relaxed text-slate-500">
          ทีมงาน <span className="text-slate-900">{config.name}</span> <br />
          ได้รับข้อมูลในระบบเรียบร้อยแล้วครับ
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 transition-all hover:text-blue-600"
        >
          [ SEND ANOTHER REQUEST ]
        </button>
      </div>
    )
  }
```

### `app/landing/[template-id]/shared/FloatingAction.tsx`

```ts
/** @format */
"use client"

import React, { useState, useEffect } from "react"
import { MessageCircle, Phone, ArrowUp, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

interface FloatingActionProps {
  config: {
    lineId?: string
    phone?: string
    primaryColor?: string
    [key: string]: any
  }
}

export default function FloatingAction({ config }: FloatingActionProps) {
  const [isVisible, setIsVisible] = useState(false)

  const rawLineId = config?.lineId || ""
  const phone = config?.phone || ""
  const primaryColor = config?.primaryColor || "#2563eb"

  const lineLink = rawLineId
    ? `https://line.me/ti/p/${rawLineId.toString().replace("@", "")}`
    : null

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true)
      else setIsVisible(false)
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  if (!lineLink && !phone) return null

  return (
    <div
      className={cn(
        "fixed bottom-8 right-6 z-[99] flex flex-col gap-3 transition-all duration-500 md:right-8",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
    >
      {/* 📞 Call Action: Industrial Square */}
      {phone && (
        <a
          href={`tel:${phone}`}
          className="group relative flex h-14 w-14 items-center justify-center border-2 border-slate-900 bg-white text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]"
        >
          <Phone size={22} strokeWidth={2.5} />
          <span className="absolute right-full mr-4 border-2 border-slate-900 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-900 opacity-0 transition-opacity group-hover:opacity-100">
            Call
          </span>
        </a>
      )}

      {/* 💬 LINE Action: The Main Command */}
      {lineLink && (
        <a
          href={lineLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-16 w-16 items-center justify-center border-2 border-slate-900 text-white shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(15,23,42,1)]"
          style={{ backgroundColor: primaryColor }}
        >
          {/* Signal Pulse */}
          <div className="absolute inset-0 animate-ping border-2 border-current opacity-20" />

          <MessageCircle
            size={28}
            strokeWidth={2.5}
            className="relative z-10"
          />

          {/* Label Tag */}
          <div className="absolute -right-2 -top-2 bg-slate-900 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-tighter text-white">
            Online
          </div>
```

### `app/landing/[template-id]/shared/Footer.tsx`

```ts
/** @format */
"use client"

import React from "react"
import {
  Facebook,
  Instagram,
  Globe,
  ArrowUp,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react"

/** * 🟢 แก้ไข 1: เปลี่ยนมาใช้ Local Interface หรือ Path ที่ถูกต้อง
 * เพื่อแก้ปัญหา TS2307 หากไฟล์ types ด้านนอกมีปัญหา
 */
interface MultiLangText {
  th: string
  en: string
}

export interface FooterProps {
  data: {
    id: string
    name: string | MultiLangText
    description: string | MultiLangText
    phone?: string
    lineId?: string
    address?: string | MultiLangText
    primaryColor?: string
    defaultLanguage?: "th" | "en"
    social?: { facebook?: string; instagram?: string }
  }
}

export default function Footer({ data }: FooterProps) {
  const currentYear = new Date().getFullYear()
  const lang = data?.defaultLanguage || "th"

  const primaryColor = data?.primaryColor || "#2563eb"
  const rawLineId = data?.lineId || ""
  const safeLineLink = rawLineId
    ? `https://line.me/ti/p/${rawLineId.toString().replace("@", "")}`
    : null

  /**
   * 🟢 Helper Function สำหรับดึงข้อความตามภาษา
   * รองรับทั้ง String และ Object เพื่อความทนทานของระบบ
   */
  const t = (content: string | MultiLangText | undefined): string => {
    if (!content) return ""
    if (typeof content === "string") return content
    return content[lang as keyof MultiLangText] || content["th"] || ""
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // ป้องกัน Error หาก data เป็น null
  if (!data) return null

  return (
    <footer className="relative overflow-hidden border-t-2 border-slate-900 bg-[#0B0F1A] px-6 pb-12 pt-32 text-slate-400">
      {/* ─── BACKGROUND ARCHITECTURE ─── */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05]" />

      {/* Dynamic Ambient Glow */}
      <div
        className="absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full opacity-[0.05] blur-[120px]"
        style={{ backgroundColor: primaryColor }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-24 grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* 1. BRAND BLOCK */}
          <div className="space-y-10 lg:col-span-5">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div
```

### `app/landing/[template-id]/shared/GoogleMap.tsx`

```ts
/** @format */
import React from "react"

/**
 * 🟢 ปรับ Interface ให้ยืดหยุ่น (Flexible Interface)
 * รองรับทั้ง 'url' (จาก Cafe Template) และ 'src' (ทั่วไป)
 */
export interface GoogleMapProps {
  url?: string
  src?: string
  className?: string
}

export default function GoogleMap({ url, src, className = "" }: GoogleMapProps) {
  // 🟢 รวมค่าเพื่อให้ Component เลือกใช้ตัวใดตัวหนึ่งที่ส่งมา
  const mapSrc = url || src

  if (!mapSrc) {
    return (
      <div className="flex aspect-video w-full items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-widest text-slate-400">
        [ Map Location Not Configured ]
      </div>
    )
  }

  return (
    <div className={`group relative ${className}`}>
      {/* ─── DECORATIVE FRAME ─── */}
      <div className="absolute -bottom-3 -right-3 h-full w-full border-2 border-slate-900" />

      {/* ─── MAP CONTAINER ─── */}
      <div className="relative aspect-video w-full overflow-hidden border-2 border-slate-900 bg-white shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
        <iframe
          src={mapSrc}
          className="h-full w-full grayscale-[0.2] contrast-[1.1] transition-all group-hover:grayscale-0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
        />

        {/* Interactive Badge */}
        <div className="absolute bottom-4 left-4 bg-slate-900 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">
          Location Terminal
        </div>
      </div>
    </div>
  )
}
```

### `app/landing/[template-id]/shared/Navbar.tsx`

```ts
/** @format */
"use client"

import React, { useState, useEffect } from "react"
import { Menu, X, MessageCircle, Phone } from "lucide-react"

/**
 * 🟢 แก้ไข: เพิ่ม 'export' เพื่อให้ไฟล์ shared/index.ts สามารถดึงไปใช้ได้
 * และแก้ปัญหา TS2614 (Module has no exported member 'NavbarProps')
 */
export interface NavbarProps {
  brandName: string
  primaryColor?: string
  lineId?: string
  phone?: string
  defaultLanguage?: "th" | "en"
}

export default function Navbar({
  brandName,
  primaryColor = "#000000",
  lineId,
  phone,
  defaultLanguage = "th",
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // จัดการ Effect ตอน Scroll เพื่อเปลี่ยนสีพื้นหลัง
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: defaultLanguage === "th" ? "หน้าแรก" : "Home", href: "#home" },
    { label: defaultLanguage === "th" ? "บริการ" : "Services", href: "#services" },
    { label: defaultLanguage === "th" ? "ผลงาน" : "Portfolio", href: "#portfolio" },
    { label: defaultLanguage === "th" ? "ติดต่อ" : "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b-2 border-slate-900 bg-white py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-1" style={{ backgroundColor: primaryColor }} />
            <span className="text-2xl font-black uppercase italic tracking-tighter text-slate-900">
              {brandName}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}

            {/* CTA Button */}
            {lineId && (
              <a
                href={`https://line.me/ti/p/${lineId.replace("@", "")}`}
                target="_blank"
                className="flex items-center gap-2 border-2 border-slate-900 px-5 py-2 text-[10px] font-black uppercase tracking-widest text-slate-900 transition-all hover:bg-slate-900 hover:text-white"
              >
                <MessageCircle size={14} />
```

### `app/landing/[template-id]/shared/PricingSection.tsx`

```ts
/** @format */
"use client"

import React from "react"
import { Check, Sparkles, Zap, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function PricingSection({ config }: { config: any }) {
  // รองรับทั้งโครงสร้าง config.pricing.plans หรือ config.pricing ตรงๆ
  const plansData =
    config?.pricing?.plans ||
    (config?.pricing ? Object.values(config.pricing) : [])

  if (plansData.length === 0) return null

  const isClinic = config.category === "clinic"
  const primaryColor = config.primaryColor || "#0F172A"

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:grid-cols-3">
      {plansData.map((plan: any, i: number) => {
        const isRecommended = plan.isRecommended || i === 1

        return (
          <div
            key={i}
            className={cn(
              "group relative flex flex-col bg-white transition-all duration-500",
              "border-4 border-slate-900",
              isRecommended
                ? "z-10 scale-105 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]"
                : "shadow-none hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,0.1)]"
            )}
            style={{
              borderColor: isRecommended ? primaryColor : "#0F172A",
              boxShadow: isRecommended
                ? `12px 12px 0px 0px ${isClinic ? "#D4AF37" : primaryColor}`
                : undefined,
            }}
          >
            {/* System Status Badge */}
            {isRecommended && (
              <div className="absolute -top-5 left-1/2 z-20 -translate-x-1/2">
                <div
                  className="flex items-center gap-2 border-2 border-slate-900 bg-white px-5 py-1.5"
                  style={{ boxShadow: "4px 4px 0px 0px #0f172a" }}
                >
                  <Sparkles
                    size={14}
                    className="animate-spin-slow text-slate-900"
                  />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-900">
                    Most Popular Choice
                  </span>
                </div>
              </div>
            )}

            <div className="flex flex-1 flex-col p-8 md:p-10">
              {/* HEADER */}
              <div className="mb-10 border-b-2 border-slate-100 pb-8">
                <div className="mb-3 flex items-center gap-2">
                  <div
                    className="h-1 w-6"
                    style={{
                      backgroundColor: isRecommended ? primaryColor : "#cbd5e1",
                    }}
                  />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                    Package Module 0{i + 1}
                  </span>
                </div>
                <h3 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900">
                  {plan.name}
                </h3>
                <p className="mt-2 text-xs font-bold italic text-slate-500">
                  {plan.targetGroup || "Tailored for your business growth"}
                </p>
              </div>

```

### `app/landing/[template-id]/shared/PromoBanner.tsx`

```ts
/** @format */
"use client"

import React from "react"
import { Zap } from "lucide-react"

interface PromoConfig {
  text: string
  highlight?: string
}

export default function PromoBanner({ config }: { config: any }) {
  // ✅ 1. Flexible Data Fetching พร้อม Guard Clause ตามกฎเหล็ก
  const promoData = (config?.promo || config?.promotion) as PromoConfig
  const primaryColor = config?.primaryColor || "#0F172A"

  // ตรวจสอบค่าก่อนแสดงผลเสมอ เพื่อป้องกัน Runtime Error
  if (!promoData || !promoData.text) return null

  return (
    <div
      className="relative overflow-hidden border-b-2 border-slate-900 py-3 text-white"
      style={{ backgroundColor: primaryColor }}
    >
      {/* 🚧 2. Industrial Hazard Pattern - ใส่ลายเส้นเพื่อ Mood มืออาชีพ */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)`,
          backgroundSize: "2rem 2rem",
        }}
      />

      <div className="relative z-10 flex items-center justify-center px-6">
        <div className="flex items-center gap-3 md:gap-6">
          {/* Left Visual Elements (Engineering Lines) */}
          <div className="hidden items-center gap-2 md:flex">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-1.5 w-6 bg-white/30" />
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Boxy Design - ขอบเหลี่ยมตาม Industrial Style */}
            <div className="flex h-8 w-8 items-center justify-center bg-white text-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Zap size={16} fill="currentColor" className="animate-pulse" />
            </div>

            <div className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] md:text-sm">
              <span className="text-white/70">[ SYSTEM ALERT ] :</span>
              <span>{promoData.text}</span>

              {/* ✅ จัดการสัญลักษณ์ // ให้อยู่ในปีกกาเพื่อความปลอดภัย */}
              <span className="mx-2 font-normal text-white/40">{"//"}</span>

              <span className="bg-white px-2 py-0.5 italic text-slate-900 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]">
                {promoData.highlight || "LIMITED TIME OFFER"}
              </span>
            </div>
          </div>

          {/* Right Visual Elements */}
          <div className="hidden items-center gap-2 md:flex">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-1.5 w-6 bg-white/30" />
            ))}
          </div>
        </div>
      </div>

      {/* Center Glow เพื่อดึงสายตา (High Conversion) */}
      <div className="absolute left-1/2 top-1/2 h-full w-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/5 blur-[60px]" />
    </div>
  )
}
```

### `app/landing/[template-id]/shared/Section.tsx`

```ts
/** @format */
"use client"

import React from "react"
import { cn } from "@/lib/utils"

/**
 * 🛠️ ปรับ Interface ให้รองรับทั้งก้อน Config และการส่งแยก Title/Subtitle
 * เพื่อแก้ปัญหา Error TS2322 ในไฟล์ Template ต่างๆ
 */
export interface SectionProps {
  children: React.ReactNode
  id?: string
  title?: string // 🟢 เพิ่มสิ่งนี้เพื่อรับค่าจาก Template
  subtitle?: string // 🟢 เพิ่มสิ่งนี้เพื่อรับค่าจาก Template
  config?: {
    primaryColor?: string
    [key: string]: any
  }
  className?: string
  withGrid?: boolean
  withLight?: boolean
  withStatus?: boolean
  variant?: "white" | "slate" | "primary" | "dark"
}

export default function Section({
  children,
  id,
  title,
  subtitle,
  config = {},
  className = "",
  withGrid = true,
  withLight = false,
  withStatus = true,
  variant = "white",
}: SectionProps) {
  // Fallback สำหรับสีและธีม
  const themeColor = config?.primaryColor || "#2563eb"

  const backgroundVariants = {
    white: "bg-white text-slate-900",
    slate: "bg-slate-50 text-slate-900",
    primary: "bg-[#0B0F1A] text-white",
    dark: "bg-slate-950 text-white",
  }

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden px-6 py-24 transition-all duration-700 md:py-40",
        backgroundVariants[variant],
        className
      )}
    >
      {/* ─── 1. BLUEPRINT GRID & LINES (AEM Industrial Look) ─── */}
      {withGrid && (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `linear-gradient(to right, ${variant === "primary" ? "#fff" : "#000"} 1px, transparent 1px),
                                  linear-gradient(to bottom, ${variant === "primary" ? "#fff" : "#000"} 1px, transparent 1px)`,
                backgroundSize: "4rem 4rem",
              }}
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(#808080_1px,transparent_1px)] bg-[size:8rem_8rem] opacity-[0.05]" />
        </div>
      )}

      {/* ─── 2. AMBIENT SYSTEM GLOW ─── */}
      {withLight && (
        <div className="pointer-events-none absolute inset-0 z-0">
          <div
            className="absolute -right-1/4 top-0 h-[600px] w-[600px] opacity-[0.08] blur-[120px]"
            style={{ backgroundColor: themeColor }}
```

### `app/landing/[template-id]/shared/ServiceInclusionSection.tsx`

```ts
/** @format */
import React from "react"
import { ShieldCheck, ArrowRight, Binary } from "lucide-react"

export default function ServiceInclusionSection({ config }: { config: any }) {
  const inclusions = config?.serviceInclusions || []
  const primaryColor = config?.primaryColor || "#0F172A"

  if (inclusions.length === 0) return null

  return (
    <div className="group relative overflow-hidden border-2 border-slate-900 bg-white p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-all hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] md:p-12">
      {/* 🛠️ Top Utility Bar (Industrial Detail) */}
      <div className="mb-10 flex items-center justify-between border-b-2 border-slate-100 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center bg-slate-900 text-white">
            <ShieldCheck size={20} strokeWidth={2.5} />
          </div>
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">
              Reliability Standards
            </h3>
            <p className="text-lg font-black uppercase italic tracking-tighter text-slate-900">
              Guaranteed Inclusions
            </p>
          </div>
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">
            System_v2.0
          </span>
          <Binary size={14} className="text-slate-200" />
        </div>
      </div>

      {/* 🏗️ Grid of Inclusions */}
      <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        {inclusions.map((item: any, i: number) => (
          <div key={i} className="group/item flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black text-slate-300">
                0{i + 1}
              </span>
              <div
                className="h-px w-8 bg-slate-100 transition-all group-hover/item:w-12 group-hover/item:bg-slate-900"
                style={{
                  backgroundColor: i % 2 === 0 ? primaryColor : undefined,
                }}
              />
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-black uppercase leading-tight tracking-tight text-slate-900">
                {item.title}
              </h4>
              <p className="text-xs font-bold italic leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>

            {/* Micro-detail for industrial look */}
            <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover/item:opacity-100">
              <ArrowRight size={10} style={{ color: primaryColor }} />
              <span
                className="text-[8px] font-black uppercase tracking-widest"
                style={{ color: primaryColor }}
              >
                Operational
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 📐 Decorative Corner Element */}
      <div className="absolute -bottom-2 -right-2 h-10 w-10 overflow-hidden">
        <div className="absolute h-20 w-20 rotate-45 border-t-2 border-slate-900 bg-slate-50" />
      </div>
    </div>
  )
```

### `app/landing/[template-id]/shared/ServicePolicy.tsx`

```ts
/** @format */
"use client"

import React from "react"
import {
  ShieldCheck,
  RefreshCcw,
  Zap,
  HeartHandshake,
  Settings2,
} from "lucide-react"

interface ServicePolicyProps {
  config: {
    primaryColor: string
    defaultLanguage?: "th" | "en"
    name?: { th: string; en: string } | string
  }
}

export default function ServicePolicy({ config }: ServicePolicyProps) {
  const lang = config.defaultLanguage || "th"
  const primaryColor = config.primaryColor || "#2563eb"

  const policies = [
    {
      icon: <RefreshCcw size={28} />,
      code: "UPD-01",
      title: lang === "th" ? "แก้ไขข้อมูลฟรีรายเดือน" : "Free Monthly Updates",
      desc:
        lang === "th"
          ? "เราดูแลอัปเดตข้อมูล/แก้รายการให้ฟรีเดือนละ 1 ครั้ง ตลอดการใช้งาน"
          : "Enjoy one free content update every month to keep your page fresh.",
      animation: "group-hover:rotate-180",
    },
    {
      icon: <ShieldCheck size={28} />,
      code: "SEC-02",
      title: lang === "th" ? "ระบบปลอดภัย & เสถียร" : "Secure & Reliable",
      desc:
        lang === "th"
          ? "เซิร์ฟเวอร์ความเร็วสูง พร้อมระบบสำรองข้อมูลและรักษาความปลอดภัย 24 ชม."
          : "High-speed servers with 24/7 data backup and top-tier security.",
      animation: "group-hover:scale-110",
    },
    {
      icon: <Zap size={28} />,
      code: "OPS-24",
      title: lang === "th" ? "พร้อมใช้งานใน 24 ชม." : "Ready in 24 Hours",
      desc:
        lang === "th"
          ? "รวดเร็วทันใจ ระบบออนไลน์พร้อมรับลูกค้าได้ทันทีภายใน 1 วันทำการ"
          : "Go live and start receiving leads within just 24 business hours.",
      animation: "group-hover:translate-x-2",
    },
    {
      icon: <HeartHandshake size={28} />,
      code: "PRT-04",
      title: lang === "th" ? "พาร์ทเนอร์ระยะยาว" : "Long-term Partner",
      desc:
        lang === "th"
          ? "เราดูแลคุณเหมือนเป็นพาร์ทเนอร์ พร้อมให้คำปรึกษาด้านออนไลน์เสมอ"
          : "We don't just build; we consult and grow your business together.",
      animation: "group-hover:-translate-y-2",
    },
  ]

  return (
    <div className="w-full py-12">
      {/* ─── 1. INDUSTRIAL HEADER ─── */}
      <div className="mb-16 flex flex-col items-end justify-between gap-10 border-b-4 border-slate-900 pb-12 md:flex-row lg:mb-24">
        <div className="max-w-3xl text-left">
          <div className="mb-6 inline-flex items-center gap-2 border-2 border-slate-900 bg-white px-4 py-1">
            <Settings2 size={14} className="animate-spin-slow" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">
              Service Infrastructure v2.5
            </span>
          </div>
          <h2 className="text-5xl font-black uppercase italic leading-[0.85] tracking-tighter text-slate-900 md:text-7xl lg:text-8xl">
            {lang === "th" ? "มาตรฐาน" : "Quality"} <br />
```

### `app/landing/[template-id]/shared/Testimonials.tsx`

```ts
/** @format */
"use client"

import React from "react"
import Image from "next/image"
import {
  Star,
  Quote,
  ShieldCheck,
  Heart,
  UserCheck,
  Activity,
} from "lucide-react"

interface TestimonialProps {
  // 🟢 เพิ่ม reviews? เพื่อให้ยืดหยุ่น และเปลี่ยน config? เป็น optional
  reviews?: any[]
  config?: {
    primaryColor?: string
    category?: string
    defaultLanguage?: "th" | "en"
  }
}

// 🟢 กำหนดค่า Default ให้กับ config = {} เพื่อป้องกัน error 'undefined'
export default function Testimonials({ config = {} }: TestimonialProps) {
  // 🟢 ใช้ Optional Chaining (?.) เพื่อความปลอดภัยสูงสุด
  const lang = config?.defaultLanguage || "th"
  const primaryColor = config?.primaryColor || "#2563eb"

  const internalReviews = [
    {
      id: "FB-001",
      name: lang === "th" ? "คุณวรวุฒิ" : "Mr. Worawut",
      role: lang === "th" ? "เจ้าของธุรกิจ SME" : "SME Owner",
      text:
        lang === "th"
          ? "ประทับใจความเร็วในการโหลดหน้าเว็บมากครับ ลูกค้าทักไลน์มาเยอะขึ้นอย่างเห็นได้ชัด"
          : "Impressive page load speed. Noticed a significant increase in LINE inquiries.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    },
    {
      id: "FB-002",
      name: lang === "th" ? "คุณอารยา" : "Ms. Araya",
      role: "Marketing Manager",
      text:
        lang === "th"
          ? "ดีไซน์สวย ทันสมัย และใช้งานง่ายมาก ทีมงานช่วยปรับแก้ข้อมูลให้รวดเร็วทันใจจริงๆ ค่ะ"
          : "Beautiful, modern design and very user-friendly. The team handled requests very quickly.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
    },
    {
      id: "FB-003",
      name: lang === "th" ? "คุณธนกฤต" : "Mr. Thanakrit",
      role: "Entrepreneur",
      text:
        lang === "th"
          ? "คุ้มค่ากับการลงทุนมากครับ เว็บไซต์ดูแพงและช่วยยกระดับภาพลักษณ์แบรนด์ให้ดูอินเตอร์ขึ้น"
          : "Great investment. The website looks premium and truly upgrades our brand image.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dustin",
    },
  ]

  return (
    <div className="mx-auto max-w-7xl space-y-20 px-6 py-16">
      {/* ─── 1. VERIFICATION HEADER ─── */}
      <div className="relative flex flex-col items-center text-center">
        <div className="mb-6 flex items-center gap-3 border-2 border-slate-900 bg-white px-5 py-1.5 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
          <Activity size={14} className="text-emerald-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">
            Real-time Feedback Analysis
          </span>
        </div>

        <h2 className="max-w-4xl text-5xl font-black uppercase italic leading-[0.85] tracking-tighter text-slate-900 md:text-7xl lg:text-8xl">
          {lang === "th" ? "เสียงตอบรับ" : "Client"} <br />
          <span style={{ color: primaryColor }}>
            {lang === "th" ? "จากผู้ใช้งานจริง" : "Verifications"}
          </span>
        </h2>
```

### `app/landing/[template-id]/shared/index.ts`

```ts
/** @format */

/**
 * 🏛️ SHARED COMPONENT ARCHITECTURE
 * บรรจุคอมโพเนนต์ส่วนกลางที่ใช้ร่วมกันในทุก Template Variants
 */

// 1. 🏗️ Base Structure & Layout
// ส่วนประกอบหลักที่กำหนดโครงสร้างของหน้าเว็บ
export { default as Section } from "./Section"
export { default as Navbar } from "./Navbar"
export { default as Footer } from "./Footer"

// 2. 🎯 Conversion & Interaction Elements
// ส่วนประกอบที่ใช้สำหรับการติดต่อและสร้างความเชื่อมั่น (Social Proof)
export { default as ContactForm } from "./ContactForm"
export { default as Testimonials } from "./Testimonials"
export { default as GoogleMap } from "./GoogleMap"

// 3. 🛡️ TypeScript Definitions (Industrial Standard)
// Export Interface เพื่อให้หน้า Template Variant ต่างๆ สามารถทำ Type-checking ได้ 100%
// แก้ไข Error: Module has no exported member 'NavbarProps', etc.
export type { SectionProps } from "./Section"
export type { FooterProps } from "./Footer"
export type { NavbarProps } from "./Navbar"
export type { TestimonialProps } from "./Testimonials"
export type { GoogleMapProps } from "./GoogleMap"
```

### `app/landing/[template-id]/registry.ts`

```ts
/** @format */
import dynamic from "next/dynamic"

/**
 * 🛠️ การใช้ Dynamic Import (Next.js Optimization)
 * ช่วยลด Bundle Size โดยจะโหลด Component เฉพาะเมื่อมีการใช้งานจริงเท่านั้น
 * และชี้ไปยังไฟล์ template.tsx ของแต่ละโฟลเดอร์โดยตรง
 */
const StarterVariant = dynamic(() => import("./variants/starter/template"))
const ClinicVariant = dynamic(() => import("./variants/clinic/template"))
const RealEstateVariant = dynamic(
  () => import("./variants/real-estate/template")
)
const CafeVariant = dynamic(() => import("./variants/cafe/template"))
const ConstructionVariant = dynamic(
  () => import("./variants/construction/template")
)

/**
 * 🗂️ TemplateRegistry
 * เปลี่ยน Key ให้เป็น 'category' (เช่น cafe, clinic) เพื่อให้ตรงกับข้อมูลใน catalogProjects
 * วิธีนี้จะทำให้หน้า page.tsx สามารถดึง Component มาแสดงผลตามหมวดหมู่ธุรกิจได้ทันที
 */
export const TemplateRegistry = {
  starter: {
    Component: StarterVariant,
    meta: { title: "Aemdev Starter Kit" },
  },
  clinic: {
    Component: ClinicVariant,
    meta: { title: "Care Clinic Solution" },
  },
  "real-estate": {
    Component: RealEstateVariant,
    meta: { title: "The Prime Real Estate" },
  },
  cafe: {
    Component: CafeVariant,
    meta: { title: "Urban Cafe & Artisan" },
  },
  construction: {
    Component: ConstructionVariant,
    meta: { title: "Steel & Construction Hub" },
  },
} as const

// สร้าง Type เพื่อใช้ตรวจสอบความถูกต้องของ Category ทั่วทั้งโปรเจกต์
export type TemplateCategory = keyof typeof TemplateRegistry
```

### `app/sitemap.ts`

```ts
/** @format */
import { MetadataRoute } from "next"
import { siteConfig } from "@/config/siteConfig"
// 🟢 เปลี่ยนมาดึงจาก catalogProjects ซึ่งเป็นแหล่งข้อมูลหลักของหน้า Landing
import { catalogProjects } from "@/data/catalog.projects"
import { blogData } from "@/data/blogData"

/**
 * 🛠️ Helper: ตรวจสอบวันที่ให้ปลอดภัยก่อนส่งให้ Sitemap
 */
function getSafeDate(dateStr: string | undefined | null): Date {
  if (!dateStr) return new Date()
  const parsedDate = new Date(dateStr)
  return isNaN(parsedDate.getTime()) ? new Date() : parsedDate
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ดึง Base URL จาก SiteConfig หรือ Fallback กรณีไม่มี Config
  const baseUrl = siteConfig?.url || "https://yourdomain.com"

  // 1. 📂 หน้าหลัก (Static Routes)
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }))

  // 2. 🚀 หน้า Landing Templates (Dynamic Routes)
  // 🟢 ใช้ข้อมูลจาก catalogProjects โดยตรง เพื่อแก้ปัญหา Path Error ของ allTemplates
  const templateRoutes: MetadataRoute.Sitemap = catalogProjects.map(
    (project) => ({
      url: `${baseUrl}/landing/${project.templateId}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })
  )

  // 3. 📝 หน้าบทความ Blog
  // 🛡️ ป้องกันกรณี blogData เป็น undefined
  const blogRoutes: MetadataRoute.Sitemap = (blogData || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: getSafeDate(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...templateRoutes, ...blogRoutes]
}
```

### `app/catalog/page.tsx`

```ts
/** @format */
import { Metadata } from "next"
import { catalogProjects } from "@/data/catalog.projects"
import { CatalogProjectsGrid } from "@/components/catalog/CatalogProjectsGrid"

export const metadata: Metadata = {
  title: "Project Catalog | AEM Dev",
  description:
    "รวมผลงานเว็บไซต์และ Landing Page สำหรับธุรกิจจริง ที่ออกแบบเพื่อ Conversion, Performance และ Trust",
}

export default function CatalogPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 bg-industrial-grid opacity-40" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        {/* Header */}
        <header className="mb-20 max-w-3xl">
          <p className="mb-4 text-xs font-black uppercase tracking-widest text-brand-blue">
            Project Catalog
          </p>
          <h1 className="text-display-xl text-brand-navy md:text-display-2xl">
            ตัวอย่างผลงาน
            <br />
            <span className="underline decoration-brand-blue decoration-8 underline-offset-8">
              ที่ใช้งานจริง
            </span>
          </h1>
          <p className="mt-6 text-lg font-bold leading-relaxed text-slate-600">
            ทุกโปรเจกต์ถูกออกแบบจากโจทย์ธุรกิจจริง เน้นผลลัพธ์ด้านยอดขาย
            ความน่าเชื่อถือ และประสิทธิภาพระดับ Enterprise
          </p>
        </header>

        {/* Catalog Grid */}
        <CatalogProjectsGrid projects={catalogProjects} />
      </section>
    </main>
  )
}
```

### `components/Header.tsx`

```ts
/** @format */
"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/button"
import { Menu, X, Code2, Sparkles, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-[100] w-full transition-all duration-500",
        scrolled
          ? "border-b-2 border-brand-navy bg-white/95 py-3 shadow-enterprise-sm backdrop-blur-md"
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          {/* ─── LOGO: INDUSTRIAL BLOCK ─── */}
          <Link href="/" className="group flex items-center gap-4">
            <div className="relative flex h-11 w-11 items-center justify-center border-2 border-brand-navy bg-brand-blue transition-all duration-500 group-hover:rotate-90 group-hover:shadow-enterprise-sm">
              <Code2
                size={22}
                className="-rotate-90 text-white transition-transform duration-500 group-hover:rotate-0"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black uppercase tracking-tighter text-brand-navy md:text-2xl">
                {siteConfig.name}
              </span>
              <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-[0.2em] text-brand-blue">
                <Sparkles size={10} />
                <span>Creative Engineering</span>
              </div>
            </div>
          </Link>

          {/* ─── DESKTOP NAVIGATION: MODULAR DESIGN ─── */}
          <nav className="hidden items-center border-2 border-brand-navy bg-white p-1 shadow-enterprise-sm lg:flex">
            {siteConfig.navLinks.map((link) => {
              const isActive = mounted ? pathname === link.href : false
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-6 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300",
                    isActive
                      ? "bg-brand-navy text-white"
                      : "text-slate-500 hover:text-brand-blue"
                  )}
                >
                  {link.title}
                </Link>
              )
            })}
          </nav>

          {/* ─── ACTION BUTTON: SHARP & ROBUST ─── */}
          <div className="hidden items-center gap-4 md:flex">
            <Button
```

### `components/Footer.tsx`

```ts
/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { siteConfig } from "@/config/siteConfig"
import {
  Facebook,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  Sparkles,
  ShieldCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t-2 border-brand-navy bg-white px-6 pb-12 pt-24 text-slate-500">
      {/* Background Decor: Blueprint Grid */}
      <div className="absolute inset-0 -z-10 bg-industrial-grid opacity-30" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-12">
          {/* 1. BRAND SECTION: THE FOUNDATION (Col-span: 4) */}
          <div className="space-y-10 lg:col-span-4">
            <div className="space-y-6">
              <Link href="/" className="group flex items-center gap-3">
                <div className="border-2 border-brand-navy bg-brand-blue px-4 py-1.5 transition-transform group-hover:-rotate-2">
                  <span className="text-lg font-black uppercase tracking-[0.2em] text-white">
                    AEM
                  </span>
                </div>
                <span className="text-3xl font-black uppercase italic tracking-tighter text-brand-navy">
                  devweb
                </span>
              </Link>
              <p className="border-l-4 border-slate-100 pl-6 text-[15px] font-bold leading-relaxed text-slate-500">
                ผมตั้งใจสร้างเว็บไซต์ที่มีมาตรฐานสากล เพื่อช่วยให้ SME และ หจก.
                ในไทย แข่งขันบนโลกออนไลน์ได้อย่างยั่งยืน
                ด้วยวิศวกรรมซอฟต์แวร์ที่ทันสมัยที่สุดครับ
              </p>
            </div>

            {/* Availability Status: Industrial Monitor Style */}
            <div className="inline-flex items-center gap-4 border-2 border-brand-navy bg-white p-4 shadow-enterprise-sm">
              <div className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-emerald-500"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  System Status
                </span>
                <span className="text-[11px] font-black uppercase tracking-widest text-brand-navy">
                  Ready for New Projects
                </span>
              </div>
            </div>
          </div>

          {/* 2. NAVIGATION: MODULAR LINKS (Col-span: 2) */}
          <div className="space-y-10 lg:col-span-2 lg:pl-6">
            <h4 className="border-b-2 border-slate-100 pb-4 text-[11px] font-black uppercase tracking-[0.3em] text-brand-navy">
              Explore
            </h4>
            <ul className="space-y-5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-[13px] font-bold text-slate-500 transition-all hover:text-brand-blue"
                  >
                    <ArrowRight className="mr-2 h-3.5 w-3.5 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    {link.title}
```

### `components/Navbar.tsx`

```ts
/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/siteConfig"
import { cn } from "@/lib/utils"

interface NavbarProps {
  className?: string
  onLinkClick?: () => void
}

export default function Navbar({ className, onLinkClick }: NavbarProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex items-center", className)}>
      <ul className="flex w-full flex-col gap-2 md:flex-row md:items-center md:gap-px">
        {siteConfig.navLinks.map((link) => {
          const isActive = pathname === link.href

          return (
            <li key={link.href} className="group relative">
              <Link
                href={link.href}
                onClick={onLinkClick}
                className={cn(
                  "relative block py-4 text-[12px] font-black uppercase tracking-[0.2em] transition-all duration-300 md:px-6 md:py-3",
                  isActive
                    ? "text-brand-blue md:bg-brand-navy md:text-white"
                    : "text-slate-500 hover:text-brand-navy"
                )}
              >
                {/* Text Label: ใส่ความหนาและระยะห่างที่เป็นระบบ */}
                <span className="relative z-10">{link.title}</span>

                {/* Desktop Hover Effect: Industrial Slide Line */}
                {!isActive && (
                  <span className="absolute bottom-0 left-0 hidden h-0.5 w-full origin-left scale-x-0 bg-brand-blue transition-transform duration-500 group-hover:scale-x-100 md:block" />
                )}
              </Link>

              {/* Mobile Active Indicator: Thick Vertical Block */}
              {isActive && (
                <div
                  className="absolute left-0 top-0 h-full w-2 bg-brand-blue md:hidden"
                  aria-hidden="true"
                />
              )}

              {/* Mobile Hover Accent (Background Ghost) */}
              {!isActive && (
                <div className="absolute inset-0 -z-10 bg-slate-50 opacity-0 transition-opacity group-hover:opacity-100 md:hidden" />
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
```

### `components/catalog/CatalogProjectCard.tsx`

```ts
/** @format */
"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp } from "lucide-react"

import { Project } from "@/data/types"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface CatalogProjectCardProps {
  project: Project
  showCTA?: boolean
}

export function CatalogProjectCard({
  project,
  showCTA = true,
}: CatalogProjectCardProps) {
  return (
    <Card className="group relative overflow-hidden rounded-none border-4 border-brand-navy bg-white transition-all hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(37,99,235,1)]">
      {/* ─── Image ───────────────────────────── */}
      <div className="relative aspect-[16/10] overflow-hidden border-b-4 border-brand-navy">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <Badge className="absolute left-4 top-4 rounded-none border-2 border-brand-navy bg-white px-3 py-1 text-xs font-black uppercase text-brand-navy shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
          {project.category}
        </Badge>
      </div>

      {/* ─── Content ─────────────────────────── */}
      <CardContent className="space-y-6 p-6">
        <div>
          <h3 className="text-2xl font-black uppercase italic tracking-tight text-brand-navy">
            {project.title}
          </h3>
          <p className="mt-3 line-clamp-3 font-bold leading-relaxed text-slate-500">
            {project.description}
          </p>
        </div>

        {/* ─── Tags ───────────────────────────── */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-brand-navy px-2 py-1 text-[10px] font-black uppercase tracking-widest text-brand-navy"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ─── Stats ──────────────────────────── */}
        {project.stats && (
          <div className="flex items-center gap-3 border-l-4 border-brand-blue bg-blue-50 p-4">
            <TrendingUp className="h-6 w-6 text-brand-blue" />
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                {project.stats.label}
              </p>
              <p className="text-lg font-black text-brand-navy">
                {project.stats.value}
              </p>
            </div>
          </div>
        )}
      </CardContent>

      {/* ─── CTA ─────────────────────────────── */}
      {showCTA && (
        <CardFooter className="p-6 pt-0">
          <Button asChild className="btn-primary h-14 w-full text-base">
```

### `components/catalog/CatalogProjectsGrid.tsx`

```ts
/** @format */
"use client"

import { Project } from "@/data/types"
import { CatalogProjectCard } from "./CatalogProjectCard"

interface CatalogProjectsGridProps {
  projects: Project[]
  columns?: 2 | 3 | 4
  showCTA?: boolean
}

export function CatalogProjectsGrid({
  projects,
  columns = 3,
  showCTA = true,
}: CatalogProjectsGridProps) {
  if (!projects.length) {
    return (
      <div className="flex h-64 items-center justify-center border-4 border-dashed border-slate-300 bg-slate-50">
        <p className="text-sm font-black uppercase tracking-widest text-slate-400">
          No projects available
        </p>
      </div>
    )
  }

  const gridColsClass = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  }[columns]

  return (
    <section className="relative">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 bg-industrial-grid opacity-40" />

      <div className={`grid grid-cols-1 gap-12 ${gridColsClass}`}>
        {projects.map((project) => (
          <CatalogProjectCard
            key={project.id}
            project={project}
            showCTA={showCTA}
          />
        ))}
      </div>
    </section>
  )
}
```

### `components/Services.tsx`

```ts
/** @format */
"use client"

import React from "react"
import NextLink from "next/link"
import { servicesData, getServiceIcon } from "@/data/servicesData"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, ShieldCheck, PhoneCall } from "lucide-react"

export default function Services() {
  return (
    <section
      className="relative scroll-mt-20 overflow-hidden bg-white py-24 md:py-40"
      id="services"
    >
      {/* ─── Industrial Background Grid ─── */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* ─── Header Section ─── */}
        <div className="mb-24 flex flex-col items-center text-center lg:items-start lg:text-left">
          <Badge
            variant="outline"
            className="mb-6 rounded-none border-2 border-slate-900 bg-white px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
          >
            Service Packages
          </Badge>
          <h2 className="mb-8 text-5xl font-black uppercase italic leading-[0.85] tracking-tighter text-slate-900 md:text-7xl lg:text-8xl">
            โซลูชันที่ <br />
            <span className="text-blue-600 underline decoration-slate-900 decoration-8 underline-offset-[12px]">
              ใช่สำหรับคุณ
            </span>
          </h2>
          <p className="max-w-2xl text-xl font-bold leading-relaxed text-slate-500">
            เราคัดสรรเทมเพลตคุณภาพสูงที่ผ่านการทดสอบมาแล้วว่าใช้งานได้จริง
            เน้นการปิดการขายและสร้างความน่าเชื่อถือในระดับสากล
          </p>
        </div>

        {/* ─── Service Cards Grid ─── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {servicesData.map((service) => {
            const Icon = getServiceIcon(service.iconName)

            return (
              <Card
                key={service.id}
                className="group relative flex flex-col rounded-none border-4 border-slate-900 bg-white p-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-[20px_20px_0px_0px_rgba(37,99,235,1)]"
              >
                <CardHeader className="space-y-6 p-8 pb-4">
                  <div className="flex items-center justify-between">
                    <div className="border-2 border-slate-900 bg-slate-900 p-4 text-white shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] transition-all group-hover:bg-blue-600 group-hover:shadow-none">
                      <Icon className="h-8 w-8 stroke-[2.5]" />
                    </div>
                    {service.isHot && (
                      <span className="border-2 border-slate-900 bg-orange-500 px-4 py-1 text-xs font-black uppercase italic tracking-widest text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <CardTitle className="text-3xl font-black uppercase italic tracking-tighter text-slate-900">
                      {service.title}
                    </CardTitle>
                    <div className="text-4xl font-black text-blue-600">
                      {service.priceTag.replace("เริ่มต้น ", "")}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow space-y-8 p-8 pt-0">
```

### `components/Seo.tsx`

```ts
"use client"

import React from "react"
import { siteConfig } from "@/config/siteConfig"

interface SeoProps {
  title?: string
  description?: string
  ogImage?: string
  ogType?: "website" | "article"
  canonicalUrl?: string
}

export default function Seo({
  title,
  description,
  ogImage,
  ogType = "website",
  canonicalUrl,
}: SeoProps) {
  // รวมชื่อเว็บเข้ากับ Title ถ้ามีการส่งค่ามา
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title

  const metaDescription = description || siteConfig.description
  const image = ogImage || siteConfig.ogImage
  const url = canonicalUrl || siteConfig.url

  return (
    <>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* Additional Tags for Business Trust */}
      <meta name="author" content={siteConfig.name} />
      <meta name="robots" content="index, follow" />
    </>
  )
}
```

### `components/Hero.tsx`

```ts
/** @format */
"use client"

import React, { memo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Monitor,
  Smartphone,
  Sparkles,
  ShieldCheck,
} from "lucide-react"

/** * 🛠️ Define Interface with strict typing
 * แยกส่วนประกอบเนื้อหาเพื่อให้ง่ายต่อการจัดการผ่าน Data File
 */
interface HeroProps {
  badgeText?: string
  headline?: React.ReactNode
  description?: string
  primaryActionText?: string
  primaryActionHref?: string
  secondaryActionText?: string
  secondaryActionHref?: string
  imageSrc?: string
  imageAlt?: string
  trustBadges?: string[]
  floatingElement1?: { title: string; desc: string }
  floatingElement2?: { title: string; desc: string }
}

/**
 * 🏛️ Hero Component (Refactored Version)
 * ใช้ Industrial Sharp Design: ขอบเหลี่ยม, Blueprint Grid, และ Typography ที่ทรงพลัง
 */
const Hero = ({
  badgeText = "Website Solution สำหรับธุรกิจไทยโดยเฉพาะ",
  headline = (
    <>
      สร้างเว็บไซต์ที่เป็น <br />
      <span className="italic text-blue-600">พนักงานขายเบอร์ 1</span>
    </>
  ),
  description = "เปลี่ยนหน้าเว็บธรรมดาให้เป็นเครื่องมือผลิตยอดขายที่ทำงาน 24 ชั่วโมง ด้วยสถาปัตยกรรมระดับสากลที่โหลดไว มั่นคง และออกแบบมาเพื่อปิดการขายสำหรับ SME โดยเฉพาะ",
  primaryActionText = "เริ่มสร้างโปรเจกต์ของคุณ",
  primaryActionHref = "/services",
  secondaryActionText = "ดูราคาและแพ็กเกจ",
  secondaryActionHref = "/services#pricing",
  imageSrc = "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Hero/Hero.png",
  imageAlt = "aemdevweb digital architecture workspace",
  trustBadges = [
    "High-Performance Speed",
    "สวยเป๊ะทุกหน้าจอมือถือ",
    "โครงสร้างรองรับ Google (SEO)",
  ],
  floatingElement1 = { title: "Mobile Optimized", desc: "สวยงามทุกหน้าจอ" },
  floatingElement2 = { title: "Secure & Stable", desc: "ระบบมั่นคง ปลอดภัย" },
}: HeroProps) => {
  return (
    <section className="relative flex min-h-[95vh] items-center overflow-hidden bg-white pb-20 pt-32 md:pt-40">
      {/* ─── 1. ARCHITECTURAL BACKGROUND (Blueprint Grid) ─── */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-70" />

      {/* Cinematic Glow Effects (เพิ่มมิติให้กับหน้าเว็บ) */}
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[900px] w-[900px] translate-x-1/4 translate-y-1/4 rounded-full bg-indigo-500/5 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
          {/* ─── 2. CONTENT AREA (Left Column) ─── */}
          <div className="space-y-12 lg:col-span-7">
            {/* Brand Badge */}
            <div className="group inline-flex items-center gap-3 border-l-4 border-blue-600 bg-white px-6 py-3 shadow-sm transition-all hover:shadow-md">
              <Sparkles size={16} className="animate-pulse text-blue-600" />
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-900 md:text-xs">
                {badgeText}
              </span>
            </div>
```

### `components/About.tsx`

```ts
/** @format */
"use client"

import React, { memo } from "react"
import Image from "next/image"
import {
  Check,
  Code2,
  HeartHandshake,
  Lightbulb,
  Sparkles,
  ShieldCheck,
} from "lucide-react"
import { Card } from "@/components/ui/card"

/**
 * 🏛️ AboutContent Component
 * นำเสนอตัวตนของ aemdevweb ผ่านงานดีไซน์แบบ Industrial Sharp
 * เน้นขอบเหลี่ยม (Rounded-none) และความโปร่งใสในการทำงาน
 */
const AboutContent = () => {
  const values = [
    {
      icon: <Code2 className="h-6 w-6 stroke-[1.5]" />,
      title: "มาตรฐานระดับสากล",
      description:
        "เลือกใช้ Next.js 15 และเทคโนโลยีล่าสุด เพื่อให้เว็บไซต์ของคุณโหลดไว ปลอดภัย และพร้อมขยายตัวตามธุรกิจในอนาคต",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 stroke-[1.5]" />,
      title: "คุยง่ายแบบพาร์ทเนอร์",
      description:
        "ผมเชื่อในการสื่อสารที่ตรงไปตรงมา ปรึกษาได้ทุกขั้นตอนเหมือนเพื่อนคู่คิด ผมไม่เน้นแค่ขายงาน แต่เน้นช่วยแก้ปัญหาให้ธุรกิจคุณ",
    },
    {
      icon: <Lightbulb className="h-6 w-6 stroke-[1.5]" />,
      title: "เน้นผลลัพธ์ที่ใช้งานจริง",
      description:
        "เว็บไซต์ที่ดีต้องไม่ใช่แค่สวย แต่ต้องเป็นพนักงานขายที่ทำงานได้จริง สร้างความน่าเชื่อถือ และปิดการขายให้คุณได้ตลอด 24 ชม.",
    },
  ]

  return (
    <div className="space-y-32">
      {/* ─── 1. STORY SECTION: THE ARTISAN PHILOSOPHY ─── */}
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
        {/* Image Area: Industrial Frame Style */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-none border-l-[12px] border-t-[12px] border-blue-600 shadow-2xl lg:col-span-5">
          <Image
            src="https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/About/About.png"
            alt="aemdevweb vision and craftsmanship"
            fill
            priority
            className="object-cover grayscale-[20%] transition-all duration-1000 hover:scale-105 hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, 500px"
          />
          {/* Status Label (Industrial Badge) */}
          <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-slate-900 px-8 py-5 text-white">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">
              Crafting Digital Architecture
            </span>
          </div>
        </div>

        {/* Text Content: Friendly Professional Tone */}
        <div className="space-y-10 lg:col-span-7">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 border-b-4 border-blue-600 pb-3 text-xs font-black uppercase tracking-[0.2em] text-blue-600">
              <Sparkles size={16} />
              <span>Our Core Philosophy</span>
            </div>
            <h2 className="text-5xl font-black leading-[0.95] tracking-tighter text-slate-900 md:text-8xl">
              จากโครงร่าง <br />
              <span className="font-light italic text-slate-400">
                สู่ความสำเร็จของคุณ
              </span>
            </h2>
          </div>

```

### `components/shared/JsonLd.tsx`

```ts
/** @format */
import React from "react"

interface JsonLdProps {
  type?: "LocalBusiness" | "MedicalBusiness" | "Restaurant" | "RealEstateAgent"
  data: {
    name: string
    description: string
    url: string
    phone?: string
    address?: string
    image?: string
    priceRange?: string
  }
}

/**
 * JsonLd Component
 * ใช้สร้าง Structured Data สำหรับ SEO
 * รับข้อมูลเป็น string หรือ primitive types เท่านั้น
 */
const JsonLd: React.FC<JsonLdProps> = ({ type = "LocalBusiness", data }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.phone || "",
    address: data.address
      ? {
          "@type": "PostalAddress",
          streetAddress: data.address,
          addressLocality: "Bangkok",
          addressCountry: "TH",
        }
      : undefined,
    image: data.image || "https://aemdevweb.com/og-image.jpg",
    priceRange: data.priceRange || "$$",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default JsonLd
```

### `components/ui/button.tsx`

```ts
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### `components/ui/card.tsx`

```ts
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

### `components/ui/badge.tsx`

```ts
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
```

### `components/ui/label.tsx`

```ts
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
```

### `components/ui/empty.tsx`

```ts
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12",
        className
      )}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        className
      )}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn("text-lg font-medium tracking-tight", className)}
      {...props}
    />
  )
}

function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "text-sm/relaxed text-muted-foreground [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
```

### `components/ui/avatar.tsx`

```ts
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
```

### `components/ui/accordion.tsx`

```ts
/** @format */

"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-slate-100", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-5 text-left text-base font-semibold transition-all hover:text-blue-600 [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-slate-600 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-6 pt-0 leading-relaxed", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
```

### `components/ui/tabs.tsx`

```ts
/** @format */

"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

// 1. นำเข้าคอมโพเนนต์พื้นฐานจาก Radix UI
const Tabs = TabsPrimitive.Root

// 2. TabsList: ส่วนแถบเมนูสำหรับเลือก Tab
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

// 3. TabsTrigger: ปุ่มสำหรับคลิกเพื่อสลับเนื้อหา
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

// 4. TabsContent: ส่วนแสดงเนื้อหาตามที่เลือก
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background duration-300 animate-in fade-in-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

// 5. ส่งออกแบบ Named Exports
export { Tabs, TabsList, TabsTrigger, TabsContent }
```

### `components/ui/input.tsx`

```ts
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
```

### `components/ui/modal.tsx`

```ts
/** @format */

"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Modal = DialogPrimitive.Root
const ModalTrigger = DialogPrimitive.Trigger
const ModalPortal = DialogPrimitive.Portal
const ModalClose = DialogPrimitive.Close

const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
ModalOverlay.displayName = "ModalOverlay"

const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <ModalPortal>
    <ModalOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2",
        // ✅ ใช้รูปแบบที่ Tailwind แนะนำเพื่อเลี่ยง Ambiguous Utility Warning
        "data-[state=closed]:slide-out-to-top-&lsqb;48%&rsqb; data-[state=open]:slide-in-from-top-&lsqb;48%&rsqb;",
        "sm:rounded-2xl",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-xl opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </ModalPortal>
))
ModalContent.displayName = "ModalContent"

const ModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
ModalHeader.displayName = "ModalHeader"

const ModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
```

### `components/ui/toast.tsx`

```ts
"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
```

### `components/ui/dialog.tsx`

```ts
/** @format */
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2",
        // ✅ แก้ไขปัญหา Ambiguous Utility โดยการใช้ค่ามาตรฐาน 50% (1/2) แทน 48%
        // หรือถ้าต้องการ 48% จริงๆ ให้ใช้รูปแบบ &lsqb; และ &rsqb;
        "data-[state=closed]:slide-out-to-top-[50%] data-[state=open]:slide-in-from-top-[50%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
```

### `components/ui/select.tsx`

```ts
"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted-foreground [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] origin-[--radix-select-content-transform-origin] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
```

### `components/ui/textarea.tsx`

```ts
import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
```

### `components/ui/toaster.tsx`

```ts
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
```

### `components/BlogCard.tsx`

```ts
/** @format */
"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { BlogPost } from "@/types"
import { Calendar, ArrowRight, Clock } from "lucide-react"

interface BlogCardProps {
  post: BlogPost
}

const BlogCard = ({ post }: BlogCardProps) => {
  const blogLink = `/blog/${post.slug || post.id}`
  const description = post.description || (post as any).excerpt || ""

  return (
    <Link href={blogLink} className="group block h-full">
      {/* ─── CARD STRUCTURE: INDUSTRIAL BRUTALISM ─── */}
      <div className="flex h-full flex-col border-2 border-brand-navy bg-white transition-all duration-300 hover:shadow-enterprise-md group-hover:-translate-x-1 group-hover:-translate-y-1">
        {/* Thumbnail: High-End Editorial Style */}
        <div className="relative aspect-[16/9] overflow-hidden border-b-2 border-brand-navy bg-slate-100">
          <Image
            src={post.image || "/images/blog-placeholder.jpg"}
            alt={post.title}
            fill
            className="object-cover grayscale-[0.4] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Category Tag: Engineering Label */}
          <div className="absolute bottom-0 left-0 bg-brand-navy px-5 py-2">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">
              {post.category || "Insight"}
            </span>
          </div>
        </div>

        {/* Content Area: Blueprint Hierarchy */}
        <div className="flex flex-grow flex-col space-y-6 p-8 lg:p-10">
          {/* Metadata Section */}
          <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
            <div className="flex items-center gap-1.5">
              <Calendar size={12} className="text-brand-blue" />
              <span>{post.date}</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-1.5">
              <Clock size={12} className="text-brand-blue" />
              <span>{post.readTime || "5 MIN READ"}</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-4">
            <h3 className="line-clamp-2 text-xl font-black uppercase italic leading-[1.1] tracking-tight text-brand-navy transition-colors group-hover:text-brand-blue md:text-2xl">
              {post.title}
            </h3>
            <p className="line-clamp-2 border-l-2 border-slate-100 pl-4 text-sm font-bold leading-relaxed text-slate-500">
              {description}
            </p>
          </div>

          {/* Action Area: Functional Design */}
          <div className="mt-auto flex items-center justify-between border-t-2 border-slate-50 pt-8">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy transition-colors group-hover:text-brand-blue">
              Read Document
            </span>
            <div className="flex h-10 w-10 items-center justify-center border-2 border-brand-navy bg-white text-brand-navy transition-all duration-300 group-hover:bg-brand-navy group-hover:text-white">
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
```

### `components/ContactInfo.tsx`

```ts
/** @format */
"use client"

import React from "react"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  MessageCircle,
  ExternalLink,
  ArrowRight,
} from "lucide-react"
import { siteConfig } from "@/config/siteConfig"
import { cn } from "@/lib/utils"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Direct Line",
      value: siteConfig.contact.tel,
      href: `tel:${siteConfig.contact.tel.replace(/-/g, "")}`,
      status: "Available Now",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "Line Official",
      value: siteConfig.contact.lineId,
      href: siteConfig.contact.lineUrl,
      status: "Fast Response",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Enterprise Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      status: "Official Inquiries",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Operation Hours",
      value: "Mon - Sat (09:00 - 18:00)",
      href: null,
      status: "Office Time",
    },
  ]

  return (
    <div className="space-y-12">
      {/* 1. Header Section: Industrial Command */}
      <div className="space-y-6">
        <div className="inline-block border-b-4 border-brand-blue pb-2">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white">
            Connection <span className="text-brand-blue">Hub</span>
          </h2>
        </div>
        <p className="text-lg font-bold leading-relaxed text-slate-400">
          ยินดีให้คำปรึกษาฟรีแบบพาร์ทเนอร์ ทักมาคุยรายละเอียดก่อนได้เลยครับ
          ผมพร้อมช่วยวางแผนระบบที่คุ้มค่าที่สุดให้ธุรกิจคุณ
        </p>
      </div>

      {/* 2. Contact Cards Grid: Data Log Style */}
      <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="group relative flex items-center justify-between bg-brand-navy p-6 transition-all hover:bg-white/5"
          >
            <div className="flex items-center gap-6">
              <div className="flex h-12 w-12 items-center justify-center border-2 border-slate-700 bg-slate-800 text-brand-blue transition-transform group-hover:scale-110 group-hover:border-brand-blue group-hover:text-white">
                {item.icon}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    {item.label}
                  </span>
```

### `components/ContactForm.tsx`

```ts
/** @format */
"use client"

import React, { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  MessageSquare,
  User,
  Phone,
  CheckCircle2,
  Loader2,
  Wallet,
  Briefcase,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface IContactForm {
  businessType: string
  name: string
  phone: string
  budget: string
  templateId?: string
}

export default function ContactForm({ templateId }: { templateId?: string }) {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<IContactForm>({
    businessType: "sme",
    name: "",
    phone: "",
    budget: "",
    templateId: templateId || "main-contact",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source_url: window.location.href,
          metadata: {
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString(),
          },
        }),
      })

      if (!response.ok) throw new Error("Submission failed")
      setSubmitted(true)
    } catch (error: any) {
      alert("เกิดข้อผิดพลาด กรุณาทัก Line หาผมโดยตรงได้เลยครับ")
    } finally {
      setLoading(false)
    }
  }
```

### `components/CTA.tsx`

```ts
/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/siteConfig"
import {
  PhoneCall,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  PenTool,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface CTAProps {
  title?: string
  subtitle?: string
  config?: any // รับข้อมูล TemplateData เพื่อแสดง Custom Notice
}

export default function CTA({
  title = "พร้อมยกระดับธุรกิจของคุณ สู่มาตรฐานใหม่หรือยังครับ?",
  subtitle = "ไม่ว่าจะเป็นร้านอาหาร หรือบริษัท หจก. ผมยินดีให้คำปรึกษาฟรีแบบพาร์ทเนอร์ พร้อมช่วยวางแผนให้คุ้มค่ากับงบประมาณที่สุด",
  config,
}: CTAProps) {
  // ดึงข้อมูล Custom Design Notice ถ้ามี
  const customNotice = config?.customDesignNotice

  return (
    <div className="bg-white px-6 py-24 md:py-32">
      <section className="relative mx-auto max-w-7xl overflow-hidden border-4 border-brand-navy bg-brand-navy px-8 py-20 shadow-enterprise-lg md:px-20 md:py-28">
        <div className="absolute inset-0 z-0 bg-industrial-grid opacity-20" />
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-blue/20 blur-[120px]" />

        <div className="relative z-10 flex flex-col items-center space-y-14 text-center">
          {/* ✅ CUSTOM DESIGN NOTICE BLOCK (ส่วนที่เพิ่มใหม่) */}
          {customNotice && (
            <div className="group relative w-full max-w-3xl border-2 border-dashed border-white/20 bg-white/5 p-8 transition-colors hover:border-brand-blue/50">
              <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 bg-brand-navy px-4">
                <PenTool size={14} className="text-brand-blue" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                  Bespoke Solution
                </span>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-black uppercase tracking-tight text-brand-blue">
                  {customNotice.title_th}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-slate-300">
                  {customNotice.description_th}
                </p>
                <div className="pt-2">
                  <p className="text-[10px] font-bold uppercase italic tracking-widest text-slate-500 opacity-60">
                    {customNotice.title_en}: {customNotice.description_en}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="inline-flex items-center gap-3 border-2 border-brand-blue bg-brand-blue/10 px-6 py-2.5 shadow-[4px_4px_0px_0px_rgba(59,130,246,0.3)]">
            <Sparkles className="h-4 w-4 text-brand-blue" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue">
              Direct Consultation v2.0
            </span>
          </div>

          <div className="max-w-4xl space-y-8">
            <h2 className="text-4xl font-black uppercase italic leading-[0.95] tracking-tighter text-white md:text-7xl">
              {title}
            </h2>
            <p className="mx-auto max-w-2xl border-l-2 border-brand-blue/30 px-6 text-lg font-bold leading-relaxed text-slate-400 md:text-xl">
              {subtitle}
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-6 pt-6 sm:flex-row">
```

### `components/sections/Services/Services.tsx`

```ts
/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { Check, ArrowRight, ShieldCheck, PhoneCall } from "lucide-react"

import { servicesData } from "@/data/servicesData"
// 🟢 ตรวจสอบให้แน่ใจว่า resolveServiceIcon รองรับ string หรือ any
import { resolveServiceIcon } from "./iconMap"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 overflow-hidden bg-white py-24 md:py-40"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-industrial-grid opacity-50" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mb-24 flex flex-col items-center text-center lg:items-start lg:text-left">
          <Badge
            variant="outline"
            className="mb-6 rounded-none border-2 border-slate-900 bg-white px-4 py-1 text-xs font-black uppercase tracking-widest text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
          >
            AEM Service Packages
          </Badge>

          <h2 className="mb-8 text-5xl font-black uppercase italic leading-none tracking-tighter text-slate-900 md:text-7xl lg:text-8xl">
            โซลูชันที่ <br />
            <span className="text-blue-600 underline decoration-slate-900 decoration-8 underline-offset-[12px]">
              ใช่สำหรับคุณ
            </span>
          </h2>

          <p className="max-w-2xl text-xl font-bold leading-relaxed text-slate-500">
            ยกระดับธุรกิจ SME ด้วยเทมเพลตระดับ Enterprise ที่ออกแบบมาเพื่อ
            Performance และ Conversion สูงสุด
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {servicesData.map((service) => {
            /**
             * 🟢 แก้ไข Error TS2339:
             * ใช้ Type Assertion 'as any' เพื่อให้เข้าถึง Property ได้อย่างยืดหยุ่น
             */
            const Icon = resolveServiceIcon((service as any).icon || (service as any).iconName || "Zap")

            return (
              <Card
                key={service.id}
                className="group relative flex flex-col rounded-none border-4 border-slate-900 bg-white p-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-[20px_20px_0px_0px_rgba(37,99,235,1)]"
              >
                <CardHeader className="space-y-6 p-8 pb-4">
                  <div className="flex items-center justify-between">
                    <div className="border-2 border-slate-900 bg-slate-900 p-4 text-white shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] transition-all group-hover:bg-blue-600 group-hover:shadow-none">
                      <Icon className="h-8 w-8 stroke-[2.5]" />
                    </div>

                    {service.isHot && (
                      <span className="border-2 border-slate-900 bg-orange-500 px-4 py-1 text-xs font-black uppercase italic tracking-widest text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                        Popular
                      </span>
                    )}
                  </div>

```

### `components/sections/Services/iconMap.ts`

```ts
/** @format */
import type { LucideIcon } from "lucide-react"
import {
  LayoutTemplate,
  Utensils,
  Building2,
  Zap,
  Stethoscope,
  Home,
  Award,
  Settings,
  ShieldCheck,
  Cpu,
} from "lucide-react"

/**
 * 🔒 Icon keys ที่อนุญาตให้ใช้ในระบบเท่านั้น
 * ใช้ร่วมกับ ServiceItem.icon
 */
export type ServiceIconKey =
  | "starter"
  | "clinic"
  | "construction"
  | "realEstate"
  | "cafe"

/**
 * 🎯 Centralized icon registry
 * UI layer เท่านั้นที่รู้ว่า icon จริงคืออะไร
 */
const ICON_REGISTRY: Record<ServiceIconKey, LucideIcon> = {
  starter: Home,
  clinic: Stethoscope,
  construction: Building2,
  realEstate: Award,
  cafe: Utensils,
}

/**
 * ✅ Resolver ที่ปลอดภัย (ไม่มี any)
 * - ถ้า key ไม่ตรง → fallback เป็น default
 */
export function resolveServiceIcon(
  key: ServiceIconKey | undefined
): LucideIcon {
  if (!key) return LayoutTemplate
  return ICON_REGISTRY[key] ?? LayoutTemplate
}
```

### `components/PriceTable.tsx`

```ts
/** @format */
"use client"

import React, { memo } from "react"
import {
  Check,
  Sparkles,
  MessageSquare,
  Zap,
  ShieldCheck,
  MoveRight,
  PenTool,
} from "lucide-react"
import { cn } from "@/lib/utils"

const pricingPlans = [
  {
    name: "Starter Package",
    price: "3,900",
    description:
      "ทางเลือกที่คุ้มค่าที่สุดสำหรับพ่อค้าแม่ค้าออนไลน์ที่ต้องการหน้าปิดการขายแบบมืออาชีพ โหลดไว พร้อมรับออเดอร์ทันที",
    features: [
      "1 Landing Page (High Conversion)",
      "รองรับการแสดงผลมือถือ 100%",
      "ปุ่มแชท Line / Messenger / โทร",
      "ติดตั้งระบบเก็บฐานข้อมูลลูกค้า",
      "ฟรี Hosting และ SSL ความปลอดภัยสูง",
    ],
    recommended: false,
  },
  {
    name: "Business Enterprise",
    price: "7,900",
    description:
      "ยกระดับความน่าเชื่อถือด้วยเว็บไซต์โครงสร้างระดับสากล เหมาะสำหรับบริษัท ห้างหุ้นส่วน หรือคลินิกที่ต้องการความมั่นคง",
    features: [
      "Multi-Page (รองรับหลายหน้าบริการ)",
      "เซ็ตอัพ SEO ให้ Google ค้นหาเจอ",
      "ระบบแกลเลอรีผลงาน / รีวิวลูกค้า",
      "ระบบแจ้งเตือนนัดหมายผ่าน Line",
      "วิเคราะห์สถิติผู้เข้าชม (Analytics)",
      "Premium Domain & Hosting สเปกสูง",
    ],
    recommended: true,
  },
]

const PriceTable = () => {
  return (
    <section
      className="relative overflow-hidden bg-white py-24 md:py-48"
      id="pricing"
    >
      {/* ─── 0. ARCHITECTURAL BACKGROUND ─── */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70" />

      <div className="container mx-auto px-6">
        {/* ─── 1. HEADER SECTION ─── */}
        <div className="mx-auto mb-24 max-w-6xl">
          <div className="inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-6 py-3 shadow-[6px_6px_0px_0px_rgba(37,99,235,1)]">
            <Sparkles size={16} className="animate-pulse text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 md:text-xs">
              Project Investment Structure
            </span>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <h2 className="text-5xl font-black leading-[0.85] tracking-tighter text-slate-900 md:text-8xl lg:text-[100px]">
              งบชัดเจน <br />
              <span className="italic text-blue-600 underline decoration-slate-900 decoration-[12px] underline-offset-[14px]">
                ไม่บานปลาย
              </span>
            </h2>
            <p className="max-w-md border-l-[12px] border-blue-600/20 pl-8 text-xl font-bold italic leading-relaxed text-slate-500 md:text-2xl">
              ความโปร่งใสคือมาตรฐานวิศวกรรมของเรา <br />
              <span className="not-italic text-slate-900">
                ดูแลครบจบจนออนไลน์ได้จริง ไม่มีค่าใช้จ่ายแอบแฝง
              </span>
            </p>
          </div>
```

### `components/SocialProof.tsx`

```ts
/** @format */
"use client"

import React from "react"
import { motion } from "framer-motion"
import { Star, ShieldCheck, Globe, Quote } from "lucide-react"
import { reviews } from "@/data/reviews" // 👈 ดึงข้อมูลจากไฟล์ data ของคุณ

const SocialProof = () => {
  // จำลอง Client Logos (ดึงมาจาก data อื่นๆ ได้ในอนาคต)
  const clients = [
    { name: "The Prime Estate", id: 1 },
    { name: "Care Dental Clinic", id: 2 },
    { name: "Steel Structure หจก.", id: 3 },
    { name: "Urban Cafe 24", id: 4 },
  ]

  return (
    <section
      className="relative overflow-hidden border-y-4 border-slate-900 bg-white py-20 md:py-28"
      id="social-proof"
    >
      <div className="absolute inset-0 -z-10 bg-industrial-grid opacity-[0.03]" />

      <div className="container relative z-20 mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* 1. STATUS LABEL */}
          <div className="mb-16 flex w-full items-center justify-center gap-6">
            <div className="hidden h-px flex-grow bg-slate-200 md:block" />
            <div className="flex items-center gap-3 border-2 border-slate-900 bg-white px-6 py-2 shadow-enterprise-sm">
              <ShieldCheck size={14} className="text-blue-600" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-900">
                Verified Client Testimonials
              </span>
            </div>
            <div className="hidden h-px flex-grow bg-slate-200 md:block" />
          </div>

          {/* 2. STATS & EXPERIENCE */}
          <div className="mb-16 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="border-2 border-slate-900 bg-white p-8 shadow-enterprise-sm">
              <Globe size={24} className="mb-4 text-blue-600" />
              <p className="text-5xl font-black tracking-tighter text-slate-900">
                150+
              </p>
              <p className="mt-2 text-xs font-black uppercase tracking-widest text-slate-500">
                Successful Projects Launched
              </p>
            </div>
            <div className="flex flex-col justify-center border-2 border-slate-900 bg-slate-900 p-8 text-white shadow-enterprise-sm">
              <div className="mb-2 flex gap-1 text-blue-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-2xl font-black italic tracking-tight">
                "ความพึงพอใจ 4.9/5.0"
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                จากผู้ประกอบการ SME ทั่วประเทศ
              </p>
            </div>
          </div>

          {/* 3. ANIMATED REVIEWS: INFINITE MARQUEE (ดึงข้อมูลจาก Data) */}
          <div className="relative flex w-full overflow-hidden py-10">
            <motion.div
              className="flex gap-6 whitespace-nowrap"
              animate={{ x: [0, -1000] }} // ปรับระยะตามจำนวนข้อมูล
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40, // ความเร็วในการเลื่อน (ยิ่งมากยิ่งช้า)
                  ease: "linear",
                },
              }}
            >
              {/* เรนเดอร์รีวิว 2 ชุดเพื่อให้เลื่อนต่อเนื่องแบบไร้รอยต่อ */}
              {[...reviews, ...reviews].map((review, index) => (
```

### `components/FAQSection.tsx`

```ts
/** @format */
"use client"

import React, { useState, useEffect } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight, Sparkles, HelpCircle, MessageSquare } from "lucide-react"

// ค่า Default ในกรณีที่ไม่มีการส่ง props มาจาก Template
const defaultFaqs = [
  {
    question: "ใช้เวลาทำนานไหม กว่าจะได้เว็บไซต์?",
    answer:
      "สำหรับ Landing Page หน้าเดียว ใช้เวลาประมาณ 3-7 วันทำการครับ ส่วนเว็บไซต์บริษัท (3-5 หน้า) จะใช้เวลาประมาณ 10-14 วัน ขึ้นอยู่กับการเตรียมข้อมูลของคุณเป็นหลักครับ ผมเน้นงานไวแต่ต้องเป๊ะครับ",
  },
  {
    question: "มีค่าบริการรายปีเพิ่มเติมไหม?",
    answer:
      "ปีแรกผมดูแลค่า Hosting และ SSL (กุญแจล็อกความปลอดภัย) ให้ฟรีครับ ปีถัดไปจะมีค่าต่ออายุโดเมนและพื้นที่เว็บ เริ่มต้นประมาณ 1,500 - 2,500 บาทต่อปี ตามขนาดเว็บครับ ไม่มีค่าบริการแอบแฝงแน่นอน",
  },
  {
    question: "ทำแล้วจะติดหน้าแรก Google (SEO) หรือเปล่า?",
    answer:
      "ผมวางโครงสร้างเว็บตามมาตรฐาน SEO 100% ครับ ทั้งความเร็วและการจัดวาง Tag ต่างๆ ซึ่งจะช่วยให้ Google เข้ามาเก็บข้อมูลได้ง่ายขึ้น ส่วนการจะติดอันดับ 1 เลยนั้นต้องอาศัยการลงเนื้อหาอย่างต่อเนื่องด้วยครับ",
  },
  {
    question: "ถ้าต้องการแก้ไขข้อมูลเองในอนาคต ทำได้ไหม?",
    answer:
      "ทำได้แน่นอนครับ! ผมใช้ระบบที่จัดการง่าย (WordPress หรือ Next.js CMS) ลูกค้าสามารถเปลี่ยนรูป แก้ไขข้อความเองได้เลย และผมจะมีคลิปวิดีโอสอนใช้งานเบื้องต้นส่งให้ด้วยครับ ไม่ต้องกลัวงง",
  },
]

interface FAQSectionProps {
  config?: any // รองรับ TemplateData
}

const FAQSection = ({ config }: FAQSectionProps) => {
  const [hasMounted, setHasMounted] = useState(false)

  // ตรวจสอบว่ามีข้อมูล FAQ จาก config หรือไม่ ถ้าไม่มีให้ใช้ค่า default
  const displayFaqs = config?.faqs
    ? config.faqs.map((f: any) => ({ question: f.q_th, answer: f.a_th }))
    : defaultFaqs

  const primaryColor = config?.primaryColor || "#2563eb"

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <section
      className="relative scroll-mt-20 overflow-hidden bg-white py-24 md:py-32"
      id="faq"
    >
      {/* ─── BACKGROUND DECOR ─── */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div
        className="absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full opacity-[0.03] blur-3xl"
        style={{ backgroundColor: primaryColor }}
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-12">
          {/* ─── LEFT: STRATEGIC HEADER ─── */}
          <div className="space-y-10 lg:sticky lg:top-32 lg:col-span-5">
            <div className="space-y-4">
              <div
                className="inline-flex items-center gap-2 border-l-4 px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-white"
                style={{
                  backgroundColor: primaryColor,
                  borderColor: primaryColor,
                }}
              >
                <HelpCircle size={12} />
                <span>Knowledge Base</span>
```

### `components/BlogSection.tsx`

```ts
/** @format */
"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { BlogPost } from "@/types"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Calendar, Clock, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface BlogSectionProps {
  posts?: BlogPost[]
}

const BlogCard = ({ post }: { post: BlogPost }) => {
  const blogLink = `/blog/${post.slug || post.id}`
  const description = post.description || post.excerpt || ""

  return (
    <Link href={blogLink} className="group block h-full">
      {/* ─── CARD: ENTERPRISE BRUTALISM ─── */}
      <div className="relative flex h-full flex-col border-2 border-brand-navy bg-white transition-all duration-300 hover:shadow-enterprise-md group-hover:-translate-x-1 group-hover:-translate-y-1">
        {/* Thumbnail with Grayscale effect */}
        <div className="relative aspect-[16/9] overflow-hidden border-b-2 border-brand-navy bg-slate-100">
          <Image
            src={post.image || "/images/blog-placeholder.jpg"}
            alt={post.title}
            fill
            className="object-cover grayscale-[0.3] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Category Label */}
          <div className="absolute bottom-0 left-0 bg-brand-blue px-5 py-2">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">
              {post.category || "Business Insight"}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-grow flex-col space-y-6 p-8 lg:p-10">
          <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-slate-400">
            <div className="flex items-center gap-1.5">
              <Calendar size={12} className="text-brand-blue" />
              <span>{post.date}</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-1.5">
              <Clock size={12} className="text-brand-blue" />
              <span>{post.readTime || "5 MIN READ"}</span>
            </div>
          </div>

          <h3 className="line-clamp-2 text-xl font-black uppercase italic leading-tight text-brand-navy transition-colors group-hover:text-brand-blue md:text-2xl">
            {post.title}
          </h3>

          <p className="line-clamp-2 text-sm font-bold leading-relaxed text-slate-500">
            {description}
          </p>

          <div className="mt-auto flex items-center justify-between border-t-2 border-slate-50 pt-8">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy transition-colors group-hover:text-brand-blue">
              Continue Reading
            </span>
            <div className="flex h-10 w-10 items-center justify-center border-2 border-brand-navy transition-all group-hover:bg-brand-navy group-hover:text-white">
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function BlogSection({ posts = [] }: BlogSectionProps) {
```

### `lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### `lib/api.ts`

```ts
import { blogData } from "@/data/blogData" // ตรวจสอบชื่อไฟล์ให้ตรงกับ data/blogData.ts
import { BlogPost } from "@/types/blog"

/**
 * API Logic สำหรับดึงข้อมูลในโปรเจกต์
 * แก้ไขปัญหา: Attempted import error โดยการใส่ export const api
 */
export const api = {
  // ดึงบทความทั้งหมด
  getPosts: async (): Promise<BlogPost[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(blogData), 300)
    })
  },

  // ดึงบทความตาม Slug
  getPostBySlug: async (slug: string): Promise<BlogPost | undefined> => {
    return new Promise((resolve) => {
      const post = blogData.find((p) => p.slug === slug)
      setTimeout(() => resolve(post), 100)
    })
  },

  // ดึงบทความล่าสุด (Featured)
  getFeaturedPosts: async (limit: number = 3): Promise<BlogPost[]> => {
    return new Promise((resolve) => {
      // เรียงจากใหม่ไปเก่า (ถ้ามีฟิลด์ date ที่เป็น Date object จะดีมาก)
      // ในที่นี้ดึงตามจำนวน limit ที่กำหนด
      const featured = [...blogData].slice(0, limit)
      setTimeout(() => resolve(featured), 200)
    })
  },

  // ส่งข้อมูลฟอร์มติดต่อ
  submitContact: async (
    data: any
  ): Promise<{ success: boolean; message: string }> => {
    console.log("Submitting contact data:", data)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "เราได้รับข้อมูลของคุณแล้วครับ!" })
      }, 1000)
    })
  },
}
```

### `lib/helpers.ts`

```ts
/**
 * lib/helpers.ts
 * รวมฟังก์ชันอรรถประโยชน์ (Utility Functions) สำหรับโปรเจกต์ aemdevweb
 */

/**
 * 1. ฟังก์ชันสำหรับรวม Tailwind Classes (คล้ายกับ clsx หรือ tailwind-merge)
 * ช่วยให้การจัดการเงื่อนไขของ Class ทำได้สะอาดขึ้น
 */
export const cn = (...classes: (string | undefined | null | boolean)[]) => {
  return classes.filter(Boolean).join(" ")
}

/**
 * 2. ฟังก์ชันสำหรับจัดการแสดงผลวันที่ให้เป็นรูปแบบไทย
 * เพิ่มการตรวจสอบความถูกต้องของ Date เพื่อป้องกัน Runtime Error
 */
export const formatDate = (dateString: string | Date): string => {
  if (!dateString) return "-"

  try {
    const date =
      typeof dateString === "string" ? new Date(dateString) : dateString

    // ตรวจสอบว่าเป็น Invalid Date หรือไม่
    if (isNaN(date.getTime())) return String(dateString)

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }

    return date.toLocaleDateString("th-TH", options)
  } catch (error) {
    console.error("Format Date Error:", error)
    return String(dateString)
  }
}

/**
 * 3. ฟังก์ชันสำหรับตัดข้อความ (Truncate)
 * ปรับปรุงให้รองรับกรณีค่าที่ส่งมาไม่ใช่ String
 */
export const truncateText = (
  text: string | undefined | null,
  length: number
): string => {
  if (!text) return ""
  if (text.length <= length) return text
  return text.substring(0, length).trim() + "..."
}

/**
 * 4. ฟังก์ชันสำหรับการทำ Smooth Scroll
 * เพิ่ม Offset เพื่อไม่ให้หัวข้อโดน Header ทับ (กรณีมี Sticky Header)
 */
export const scrollToSection = (sectionId: string, offset: number = 80) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

/**
 * 5. ฟังก์ชันสำหรับสร้าง ID แบบสุ่ม
 * ใช้ค่าเวลาผสมเพื่อลดโอกาสซ้ำ (Collision)
 */
export const generateId = (prefix: string = "id"): string => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * 6. ฟังก์ชันสำหรับจัดหมวดหมู่ Portfolio (Helper เฉพาะทาง)
```

### `lib/supabase.ts`

```ts
/** @format */
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

/**
 * 🛠️ การสร้าง Supabase Client แบบ Singleton
 * ตรวจสอบค่า ENV เพื่อไม่ให้ Build ล่มเมื่อค่าเหล่านี้หายไปในช่วง Compile
 */
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : (null as any) // หรือคืนค่า mock object เพื่อให้ TypeScript ไม่ฟ้อง

// สำหรับกรณีใช้ใน Server Action หรือ API Route (Service Role)
export const getSupabaseAdmin = () => {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!supabaseUrl || !serviceKey) {
    return null
  }
  return createClient(supabaseUrl, serviceKey)
}
```

- Total code files: **111**
- Previewed: **111**
- Auth/Role logic: **14**
- Absolute imports: **52**

## 🗄️ JSON Validation

> JSON validity: **100%**

## 📄 CSV Preview

> CSV readable: **100%**

## 🎯 Project Intent Detection
