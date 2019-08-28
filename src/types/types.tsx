import {
  updateHero,
  updateHeader,
  updateFooter
} from "../reducers/selectedSection";

export interface InitState {
  selectedSection: string;
  header: string;
  hero: string;
  footer: string;
}

export const CURRENT_UPDATE = "CURRENT_UPDATE";
export const HEADER_UPDATE = "HEADER_UPDATE";
export const HERO_UPDATE = "HERO_UPDATE";
export const FOOTER_UPDATE = "FOOTER_UPDATE";

interface UpdateCurrent {
  type: typeof CURRENT_UPDATE;
  payload: string;
}

interface UpdateHeader {
  type: typeof HEADER_UPDATE;
  payload: string;
}

interface UpdateHero {
  type: typeof HERO_UPDATE;
  payload: string;
}

interface UpdateFooter {
  type: typeof FOOTER_UPDATE;
  payload: string;
}

export type ActionTypes =
  | UpdateCurrent
  | UpdateHeader
  | UpdateHero
  | UpdateFooter;

export interface HeaderProps extends InitState {
  updateHeader: typeof updateHeader;
}

export interface HeroProps extends InitState {
  updateHero: typeof updateHero;
}

export interface FooterProps extends InitState {
  updateFooter: typeof updateFooter;
}
