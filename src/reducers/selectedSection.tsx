import {
  InitState,
  ActionTypes,
  CURRENT_UPDATE,
  HEADER_UPDATE,
  HERO_UPDATE,
  FOOTER_UPDATE
} from "../types/types";

const initState: InitState = {
  selectedSection: "",
  header: "",
  hero: "",
  footer: ""
};

export const updateCurrent = (val: string) => ({
  type: CURRENT_UPDATE,
  payload: val
});

export const updateHeader = (id: string) => ({
  type: HEADER_UPDATE,
  payload: id
});

export const updateHero = (id: string) => ({
  type: HERO_UPDATE,
  payload: id
});

export const updateFooter = (id: string) => ({
  type: FOOTER_UPDATE,
  payload: id
});

export const reducer = (state = initState, action: ActionTypes) => {
  switch (action.type) {
    case CURRENT_UPDATE:
      return { ...state, selectedSection: action.payload };
      break;
    case HEADER_UPDATE:
      return {
        ...state,
        header: action.payload
      };
      break;
    case HERO_UPDATE:
      return {
        ...state,
        hero: action.payload
      };
      break;
    case FOOTER_UPDATE:
      return {
        ...state,
        footer: action.payload
      };
      break;
    default:
      return state;
  }
};
