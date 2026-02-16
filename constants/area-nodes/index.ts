/**
 * [MASTER REGISTRY]: AREA_NODES_AGGREGATOR v18.0.01 (SOUTHERN_EXPANSION_STABLE)
 * [STRATEGY]: Centralized Entry Point | Priority-Based Ranking | Regional Domination
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { bangkokNode } from "./bangkok";
import { chiangMaiNode } from "./chiang-mai";
import { chonBuriNode } from "./chon-buri";
import { kamphaengPhetNode } from "./kamphaeng-phet";
import { khonKaenNode } from "./khon-kaen";
import { koratNode } from "./korat";
import { nakhonSawanNode } from "./nakhon-sawan";
import { phichitNode } from "./phichit";
import { phitsanulokNode } from "./phitsanulok";
import { phuketNode } from "./phuket";
import { sukhothaiNode } from "./sukhothai";
import { takNode } from "./tak";
import { uttaraditNode } from "./uttaradit";
import { lampangNode } from "./lampang";
import { chiangRaiNode } from "./chiang-rai"; // [ADD]: ยึดพื้นที่ Coffee Specialty & Gateway
import { maeHongSonNode } from "./mae-hong-son"; // [ADD]: ยึดพื้นที่ Wellness & Slow Living

// [SOUTHERN EXPANSION NODES]:
import { chumphonNode } from "./chumphon"; // [ADD]: ประตูสู่ภาคใต้ & Logistic Hub
import { phangNgaNode } from "./phang-nga"; // [ADD]: ยึดพื้นที่ Luxury Travel & Marine Resources
import { ranongNode } from "./ranong"; // [ADD]: ยึดพื้นที่ Mineral Springs & Nature Eco-tourism
import { suratThaniNode } from "./surat-thani"; // [ADD]: ยึดพื้นที่ Economic Hub & Island Destination

import type { AreaNode } from "@/types";

/**
 * [REGISTRY]: รวมทุก Node เข้าด้วยกัน
 * การเรียงลำดับตาม Priority (DESC) จะช่วยให้หน้าที่มีกำลังซื้อสูง (High-Value Nodes)
 * ถูก Crawler ของ Search Engine เข้าถึงและประมวลผลก่อนเป็นอันดับแรก
 */
export const AREA_NODES: AreaNode[] = [
  bangkokNode,
  chiangMaiNode,
  chonBuriNode,
  kamphaengPhetNode,
  khonKaenNode,
  koratNode,
  nakhonSawanNode,
  phichitNode,
  phitsanulokNode,
  phuketNode,
  sukhothaiNode,
  takNode,
  uttaraditNode,
  lampangNode,
  chiangRaiNode,
  maeHongSonNode,
  // Southern Nodes
  chumphonNode,
  phangNgaNode,
  ranongNode,
  suratThaniNode,
].sort((a, b) => b.priority - a.priority);
