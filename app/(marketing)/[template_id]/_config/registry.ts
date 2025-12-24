import { clinicConfig } from "../_templates/clinic/config"
import { cafeConfig } from "../_templates/cafe/config"
import { realEstateConfig } from "../_templates/realestate/config"
import { constructionConfig } from "../_templates/construction/config"
import { starterConfig } from "../_templates/starter/config"

import ClinicTemplate from "../_templates/clinic/ClinicTemplate"
import CafeTemplate from "../_templates/cafe/CafeTemplate"
import RealEstateTemplate from "../_templates/realestate/RealEstateTemplate"
import ConstructionTemplate from "../_templates/construction/ConstructionTemplate"
import StarterTemplate from "../_templates/starter/StarterTemplate"

export const TEMPLATE_REGISTRY: Record<string, any> = {
  clinic: { config: clinicConfig, component: ClinicTemplate },
  cafe: { config: cafeConfig, component: CafeTemplate },
  realestate: { config: realEstateConfig, component: RealEstateTemplate },
  construction: { config: constructionConfig, component: ConstructionTemplate },
  starter: { config: starterConfig, component: StarterTemplate },
}
