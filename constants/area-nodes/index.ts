/**
 * [MASTER REGISTRY]: AREA_NODES_AGGREGATOR v17.9.96 (STABLE_EXPANDED)
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
import { lampangNode } from "./lampang"; // [ADD]: ยึดพื้นที่เซรามิกและอุตสาหกรรมภาคเหนือ

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
].sort((a, b) => b.priority - a.priority);
