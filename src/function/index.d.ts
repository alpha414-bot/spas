import * as lodash from "lodash";
import { CSSProperties } from "react";

declare module "mmenu-js";

export type TubBrandType =
  | "Trident Series"
  | "Coastal Series"
  | "Nautical Series"
  | "";

type ExclusiveFeaturesType =
  | "Comfortable Headrests"
  | "Choice of Arcylic and Skirt Color"
  | "K.1000 Digital Topside"
  | "In.Touch 2®"
  | "Digital Topside";

export interface ProductHotTubsInterface {
  image: string;
  name: string;
  type: string;
  seats: number;
  brand: TubBrandType;
  price: number;
  measurements: string;
  gallons: number;
  jets: number;
  weight_dry: number;
  weight_full: number;
  power_requirement: string;
  led_lighting: number;
  water_fall?: number;
  eth_water_fall?: number;
  sth_water_fall?: number;
  fountains?: number;
  exclusive_features?: ExclusiveFeaturesType[] | string;
  premium_options?: string[] | string;
  standard_features?: string[];
}

export interface HotTubsBrandInterface {
  slug: string;
  title: "Trident Series" | "Nautical Series" | "Coastal Series";
  slogan: string;
  heroImage: string;
  heroMobileImage: string;
  brandLogo: string;
  brandDarkLogo: string;
  textDescription: string;
  products: any;
}

export interface CustomSliderArrowType {
  type: "prev" | "next";
  "data-role"?: string | undefined;
  classes?: string | undefined;
  svgClassName?: string | undefined;
  style?: CSSProperties | undefined;
  currentSlide?: number;
  slideCount?: number;
  onClick?: any;
}

export interface LoaderInterface {
  filter_price?: any;
  filter_seat?: any;
}

export interface RouteErrorInterface {
  status: string | number;
  statusText: string;
  internal: boolean;
  data: string;
  error?: Object;
}

declare global {
  var _: typeof lodash;
}
