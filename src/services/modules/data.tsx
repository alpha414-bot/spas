import { HotTubsBrandInterface, ProductHotTubsInterface } from "@/function";
import _ from "lodash";

export const _TubsData = [
  {
    brand: "Coastal Series",
    type: "5l",
    name: "CS5L",
    seats: 6,
    image: "cs5l",
    measurements: '62" x 82.5" x 33"',
    gallons: 225,
    jets: 30,
    led_lighting: 1,
    weight_dry: 375,
    weight_filled: 2275,
    power_requirement: "220 volt (1) x 3 BHP",
    exclusive_features: ["Digital Topside"],
    price: 0,
  },
  {
    brand: "Trident Series",
    type: "7",
    name: "TS7",
    seats: 6,
    image: "ts7",
    price: 0,
    gallons: 425,
    jets: 48,
    led_lighting: 26,
    measurements: '84" x 84" x 39"',
    power_requirement: "220 volt (2) x 7 BHP",
    weight_dry: 675,
    eth_water_fall: 1,
    fountains: 2,
    weight_filled: 3595,
    exclusive_features: [
      "K.1000 Digital Topside",
      "Comfortable Headrests",
      "Choice of Arcylic and Skirt Color",
      "In.Touch 2®",
    ],
  },
  {
    brand: "Coastal Series",
    type: "7l",
    name: "CS7L",
    seats: 6,
    image: "cs7l",
    price: 0,
    gallons: 350,
    jets: 35,
    led_lighting: 3,
    water_fall: 1,
    measurements: '82" x 82" x 36"',
    power_requirement: "220 volt (1) x 7 BHP",
    weight_dry: 625,
    weight_filled: 3426,
    exclusive_features: [
      "Digital Topside",
      "Comfortable Headrests",
      "Choice of Arcylic and Skirt Color",
    ],
  },
  {
    brand: "Nautical Series",
    type: "8l",
    name: "NS8L",
    seats: 6,
    image: "ns8l",
    price: 0,
    gallons: 425,
    jets: 53,
    led_lighting: 23,
    measurements: '92" x 92" x 39"',
    power_requirement: "220 volt (2) x 6 BHP",
    weight_dry: 860,
    weight_filled: 4407,
    exclusive_features: [
      "Choice of Arcylic and Skirt Color",
      "Comfortable Headrests",
      "K.1000 Digital Topside",
    ],
    fountains: 4,
  },
  {
    brand: "Trident Series",
    type: "8",
    name: "TS8",
    seats: 6,
    image: "ts8",
    price: 0,
    gallons: 425,
    jets: 62,
    led_lighting: 26,
    measurements: '92" x 92" x 39"',
    power_requirement: "220 volt (2) x 7 BHP",
    weight_dry: 860,
    weight_filled: 4407,
    eth_water_fall: 1,
    fountains: 2,
    exclusive_features: [
      "Choice of Arcylic and Skirt Color",
      "Comfortable Headrests",
      "K.1000 Digital Topside",
      "In.Touch 2®",
    ],
  },
  {
    brand: "Nautical Series",
    type: "7",
    name: "NS7",
    seats: 7,
    image: "ns7",
    price: 0,
    gallons: 350,
    jets: 53,
    led_lighting: 23,
    measurements: '83" x 83" x 36"',
    power_requirement: "220 volt (2) x 6 BHP",
    weight_dry: 675,
    weight_filled: 3595,
    fountains: 4,
    exclusive_features: [
      "K.1000 Digital Topside",
      "Choice of Arcylic and Skirt Color",
      "Comfortable Headrests",
    ],
  },
  {
    brand: "Coastal Series",
    type: "6.1l",
    name: "CS6.1L",
    seats: 6,
    image: "cs61l",
    price: 0,
    gallons: 350,
    jets: 30,
    led_lighting: 3,
    measurements: '81" x 79" x 36"',
    power_requirement: "110 volt (1) x 3 BHP",
    weight_dry: 675,
    weight_filled: 3426,
    exclusive_features: ["Digital Topside", "Comfortable Headrests"],
  },
  {
    brand: "Coastal Series",
    type: "6.2l",
    name: "CS6.2L",
    seats: 6,
    image: "cs62l",
    price: 0,
    gallons: 350,
    jets: 30,
    led_lighting: 3,
    measurements: '81" x 79" x 36"',
    power_requirement: "220 volt (1) x 6 BHP",
    weight_dry: 675,
    weight_filled: 3426,
    exclusive_features: [
      "Comfortable Headrests",
      "Choice of Arcylic and Skirt Color",
      "Digital Topside",
    ],
  },
  {
    brand: "Nautical Series",
    type: "8",
    name: "NS8",
    seats: 7,
    image: "ns8",
    price: 0,
    gallons: 450,
    jets: 53,
    led_lighting: 3,
    measurements: '92" x 92" x 39"',
    power_requirement: "220 volt (2) x 6 BHP",
    weight_dry: 625,
    weight_filled: 3426,
    exclusive_features: [
      "K.1000 Digital Topside",
      "Comfortable Headrests",
      "Choice of Arcylic and Skirt Color",
    ],
    fountains: 4,
  },
  {
    brand: "Trident Series",
    type: "7l",
    name: "TS7L",
    seats: 5,
    image: "ts7l",
    price: 0,
    gallons: 425,
    jets: 48,
    led_lighting: 25,
    measurements: '82" x 82" x 39"',
    power_requirement: "220 volt (2) x 7 BHP",
    weight_dry: 675,
    weight_filled: 3595,
    eth_water_fall: 1,
    exclusive_features: [
      "Choice of Arcylic and Skirt Color",
      "Comfortable Headrests",
      "K.1000 Digital Topside",
      "In.Touch 2®",
    ],
    fountains: 2,
  },
  {
    brand: "Nautical Series",
    type: "7l",
    name: "NS7L",
    seats: 6,
    image: "ns7l",
    price: 0,
    gallons: 350,
    jets: 54,
    led_lighting: 28,
    measurements: '82" x 82" x 36"',
    power_requirement: "220 volt (2) x 6 BHP",
    weight_dry: 650,
    weight_filled: 3571,
    water_fall: 1,
    exclusive_features: [
      "Comfortable Headrests",
      "Choice of Arcylic and Skirt Color",
      "K.1000 Digital Topside",
    ],
  },
  {
    brand: "Coastal Series",
    type: "6.1",
    name: "CS6.1",
    seats: 6,
    image: "cs61",
    price: 0,
    gallons: 350,
    jets: 32,
    led_lighting: 3,
    measurements: '81" x 79" x 36"',
    power_requirement: "110 volt (1) x 3 BHP",
    weight_dry: 675,
    weight_filled: 3426,
    exclusive_features: [
      "Comfortable Headrests",
      "Digital Topside",
      "Choice of Arcylic and Skirt Color",
    ],
  },
  {
    brand: "Coastal Series",
    type: "6.2",
    name: "CS6.2",
    seats: 6,
    image: "cs62",
    price: 0,
    gallons: 350,
    jets: 32,
    led_lighting: 3,
    measurements: '81" x 79" x 36"',
    power_requirement: "220 volt (1) x 6 BHP",
    weight_dry: 675,
    weight_filled: 3426,
    exclusive_features: [
      "Digital Topside",
      "Choice of Arcylic and Skirt Color",
      "Comfortable Headrests",
    ],
  },
  {
    brand: "Trident Series",
    type: "8.2l",
    name: "TS8.2L",
    seats: 7,
    image: "ts82l",
    price: 0,
    gallons: 425,
    jets: 51,
    led_lighting: 34,
    measurements: '92" x 92" x 39"',
    power_requirement: "220 volt (2) x 7 BHP",
    weight_dry: 860,
    weight_filled: 4407,
    sth_water_fall: 1,
    exclusive_features: [
      "K.1000 Digital Topside",
      "In.Touch 2®",
      "Choice of Arcylic and Skirt Color",
      "Comfortable Headrests",
    ],
  },
  {
    brand: "Trident Series",
    type: "8.1l",
    name: "TS8.1L",
    seats: 6,
    image: "ts81l",
    price: 0,
    gallons: 425,
    jets: 62,
    led_lighting: 24,
    measurements: '92" x 92" x 39"',
    power_requirement: "220 volt (2) x 7 BHP",
    weight_dry: 860,
    weight_filled: 4407,
    eth_water_fall: 1,
    fountains: 2,
    exclusive_features: [
      "Choice of Arcylic and Skirt Color",
      "K.1000 Digital Topside",
      "In.Touch 2®",
      "Comfortable Headrests",
    ],
  },
  {
    brand: "Trident Series",
    type: "9llp",
    name: "TS9LLP",
    seats: 6,
    image: "ts9llp",
    price: 0,
    gallons: 550,
    jets: 51,
    led_lighting: 34,
    measurements: '92" x 132" x 39"',
    power_requirement: "220 volt (2) x 7 BHP",
    weight_dry: 1727,
    weight_filled: 6000,
    water_fall: 3,
    exclusive_features: [
      "K.1000 Digital Topside",
      "In.Touch 2®",
      "Comfortable Headrests",
      "Choice of Arcylic and Skirt Color",
    ],
  },
  {
    brand: "Swim Series",
    type: "TS11p",
    name: "SS11P",
    seats: 6,
    image: "ss11p",
    price: 0,
    gallons: 550,
    jets: 51,
    led_lighting: 34,
    measurements: '92" x 132" x 39"',
    power_requirement: "220 volt (2) x 7 BHP",
    weight_dry: 1727,
    weight_filled: 6000,
    water_fall: 3,
    exclusive_features: [
      "K.1000 Digital Topside",
      "In.Touch 2®",
      "Comfortable Headrests",
      "Choice of Arcylic and Skirt Color",
    ],
    therapy_fitness: 1,
  },
  {
    brand: "Swim Series",
    type: "12",
    name: "SS12",
    seats: 4,
    image: "ss12",
    price: 0,
    gallons: 1400,
    jets: 21,
    swim_jets: 4,
    led_lighting: 12,
    measurements: '92" x 144" x 55"',
    power_requirement: "220 volt (2) x 5 BHP and (1) x 7 BHP",
    weight_dry: 2000,
    weight_filled: 13199,
    fountains: 6,
    exclusive_features: [
      "Deluxe Cover",
      "K.1000 Digital Topside",
      "UV Ozonator",
      "Rmax® Insulation",
      '5" LED Footwell Light',
      "Ash or Coastal Gray Skirting",
      "Comfortable Headrests",
      "Sterling Marble Acrylic Standard",
    ],
    therapy_fitness: 1,
    fast_sprint: 1,
  },
  {
    brand: "Swim Series",
    type: "p13",
    name: "SSP13",
    seats: 4,
    image: "ssp13",
    price: 0,
    gallons: 1400,
    jets: 29,
    swim_jets: 4,
    led_lighting: 12,
    measurements: '92" x 144" x 55"',
    power_requirement: "220 volt (2) x 5 BHP and (1) x 7 BHP",
    weight_dry: 2000,
    weight_filled: 13199,
    fountains: 6,
    exclusive_features: [
      "Deluxe Cover",
      "K.1000 Digital Topside",
      "UV Ozonator",
      "Rmax® Insulation",
      '5" LED Footwell Light',
      "Ash or Coastal Gray Skirting",
      "Comfortable Headrests",
      "Sterling Marble Acrylic Standard",
    ],
    therapy_fitness: 1,
    endurance_swim_training: 1,
  },
  {
    brand: "Swim Series",
    type: "14",
    name: "SS14",
    seats: 5,
    image: "ss14",
    price: 0,
    gallons: 1400,
    jets: 27,
    swim_jets: 4,
    led_lighting: 20,
    measurements: '92" x 168" x 55"',
    power_requirement: "220 volt (2) x 5 BHP and (1) x 7 BHP",
    weight_dry: 2200,
    weight_filled: 16195,
    fountains: 6,
    exclusive_features: [
      "Exercise Equipment",
      "Deluxe Cover",
      "K.1000 Digital Topside",
      "UV Ozonator",
      "Rmax® Insulation",
      "In.Stream Stereo",
      '5" LED Footwell Light',
      "Ash or Coastal Gray Skirting",
      "Comfortable Headrests",
      "Sterling Marble Acrylic Standard",
    ],
    recreation_swim_fitness: 1,
    fast_sprint: 1,
  },
  {
    brand: "Swim Series",
    type: "16",
    name: "SS16",
    seats: 5,
    image: "ss16",
    price: 0,
    gallons: 2113,
    jets: 29,
    swim_jets: 3,
    led_lighting: 26,
    measurements: '92" x 192" x 55"',
    power_requirement: "220 volt (3) x 5 BHP and (1) x 7 BHP",
    weight_dry: 2500,
    weight_filled: 18500,
    fountains: 8,
    exclusive_features: [
      "Exercise Equipment",
      "Deluxe Cover",
      "K.1000 Digital Topside",
      "UV Ozonator",
      "Rmax® Insulation",
      "In.Stream Stereo",
      '5" LED Footwell Light',
      "Ash or Coastal Gray Skirting",
      "Comfortable Headrests",
      "Sterling Marble Acrylic Standard",
    ],
    recreation_swim_fitness: 1,
  },
  {
    brand: "Swim Series",
    type: "19",
    name: "SS19",
    seats: 6,
    image: "ss19",
    price: 0,
    gallons: 2430,
    jets: 39,
    swim_jets: 3,
    led_lighting: 37,
    measurements: '92" x 244" x 55"',
    power_requirement: "220 volt (3) x 5 BHP and (2) x 7 BHP",
    weight_dry: 3500,
    weight_filled: 20300,
    fountains: 8,
    exclusive_features: [
      "Exercise Equipment",
      "Deluxe Cover",
      "K.1000 Digital Topside",
      "UV Ozonator",
      "Rmax® Insulation",
      "In.Stream Stereo",
      '5" LED Footwell Light',
      "Ash or Coastal Gray Skirting",
      "Comfortable Headrests",
      "Sterling Marble Acrylic Standard",
    ],
    therapy_fitness: 1,
  },
] as ProductHotTubsInterface[];

const hotTubBrands = [
  {
    slug: "trident-series",
    title: "Trident Series",
    slogan: "Relaxation EXPERIENCE!",
    heroImage: "/img/home-page/line-display/trident-home3.jpg",
    heroMobileImage: "/img/home-page/line-display/trident-home3.jpg",
    brandLogo: "/img/gallery/trident-logo.png",
    brandDarkLogo: "/img/gallery/trident-logo-dark.png",
    textDescription:
      "Our Trident Series, has all the comfort and options you would like in your backyard, with all options to upgrade included to further complete your relaxation experience. Your GulfSouth Spa is built to suit your needs and desires for everything from entertaining friends and family to you.",
  },
  {
    slug: "nautical-series",
    title: "Nautical Series",
    slogan: "Sense of SERENITY!",
    heroImage: "/img/home-page/line-display/nautical-home3.jpg",
    heroMobileImage: "/img/home-page/line-display/nautical-home3-mobile.jpg",
    brandLogo: "/img/gallery/nautical-logo.png",
    brandDarkLogo: "/img/gallery/nautical-logo-dark.png",
    textDescription:
      "Our Nautical Series, Nautical Series is a even more soothing relaxation. Our Nautical Series is a deeper (39”) version for the most discerning spa owners crave. The Nautical Series will bring a sense of beauty to your backyard and senseof serenity to your life.",
  },
  {
    slug: "coastal-series",
    title: "Coastal Series",
    slogan: "Affordable RELAXATION!",
    heroImage: "/img/home-page/line-display/coastal-home3.jpg",
    heroMobileImage: "/img/home-page/line-display/coastal-home3-mobile.jpg",
    brandLogo: "/img/gallery/coastal-logo.png",
    brandDarkLogo: "/img/gallery/coastal-logo-dark.png",
    textDescription:
      "Are you dreaming of buying an affordable spa? The Coastal Series therapeutic spas are a great choice. This series is perfect for families looking to buy their first spa at a good price. It also features a smaller spa for tighter spaces or urban setting.",
  },
  {
    slug: "swim-series",
    title: "Swim Series",
    slogan: "Swim. Exercise. Relax.",
    heroImage: "/img/swimspapic.png",
    heroMobileImage: "/img/swimspapic.png",
    brandLogo: "/img/gallery/swimspa-logo.png",
    brandDarkLogo: "/img/gallery/swimspa-logo-dark.png",
    textDescription:
      "Swim, jog, walk, and exercise in water without the stress gravity has on your body. Relax with massaging spa jets in the perfect water temperature, year-round. This alternative to a pool has benefits for you and your entire family.",
  },
] as HotTubsBrandInterface[];
export async function CategoryLoader({ params }: { params?: any }) {
  const category_name = params?.category_name;
  let category = _.find(
    hotTubBrands,
    (item) => item.slug.toLowerCase() === category_name.toLowerCase()
  );
  let products = _.filter(
    _TubsData,
    (item) => item.brand.toLowerCase() === category?.title.toLowerCase()
  );
  if (category) {
    category.products = _.sortBy(products, (item) => item.name);
  }
  if (!category) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { category };
}

export async function ProductLoader({ params }: { params?: any }) {
  // params: {category_slug, product_slug}
  let product = _.find(
    _TubsData,
    (item) => item.image.toLowerCase() === params?.product_slug.toLowerCase()
  );
  let category = _.find(
    hotTubBrands,
    (item) => item.slug.toLowerCase() === params?.category_slug.toLowerCase()
  );
  if (!product || !category) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { product, category };
}
