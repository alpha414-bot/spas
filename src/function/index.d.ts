import * as lodash from "lodash";
import { CSSProperties } from "react";

declare module "mmenu-js";

export type TubBrandType =
  | "Trident Series"
  | "Coastal Series"
  | "Nautical Series"
  | "Swim Series"
  | "";

type ExclusiveFeaturesType =
  | "Exercise Equipment"
  | "In.Stream Stereo"
  | "Comfortable Headrests"
  | "Choice of Arcylic and Skirt Color"
  | "K.1000 Digital Topside"
  | "Deluxe Cover"
  | "UV Ozonator"
  | "Rmax® Insulation"
  | '5" LED Footwell Light'
  | "Ash or Coastal Gray Skirting"
  | "Sterling Marble Acrylic Standard"
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
  swim_jets: number;
  weight_dry: number;
  weight_filled: number;
  power_requirement: string;
  led_lighting: number;
  water_fall?: number;
  eth_water_fall?: number;
  sth_water_fall?: number;
  fountains?: number;
  exclusive_features?: ExclusiveFeaturesType[];
  // for swim series
  therapy_fitness?: number;
  recreation_swim_fitness?: number;
  endurance_swim_training?: number;
  fast_sprint?: number;
}

export interface HotTubsBrandInterface {
  slug: string;
  title: TubBrandType;
  slogan: string;
  heroImage: string;
  heroMobileImage: string;
  brandLogo: string;
  brandDarkLogo: string;
  textDescription: string;
  products: ProductHotTubsInterface[];
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
