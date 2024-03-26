import * as lodash from "lodash";
import { CSSProperties } from "react";

declare module "mmenu-js";

type TubBrandType =
  | "MP Legend"
  | "Twilight"
  | "Clarity"
  | "LH Series"
  | "Getaway"
  | "";

export interface HotTubsDataInterface {
  image: string;
  name: string;
  seat: number;
  brand: TubBrandType;
  price: number;
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
