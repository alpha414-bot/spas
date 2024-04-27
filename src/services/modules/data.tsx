import { HotTubsBrandInterface, ProductHotTubsInterface } from "@/function";
import _ from "lodash";

export const _TubsData = [
  {
    brand: "Coastal Series",
    name: "CS5L",
    seat: 6,
    image: "cs5l",
    price: 1,
  },
  {
    brand: "Trident Series",
    name: "TS7",
    seat: 6,
    image: "ts7",
    price: 1,
  },
  {
    brand: "Coastal Series",
    name: "CS7L",
    seat: 6,
    image: "cs7l",
    price: 1,
  },
  {
    brand: "Nautical Series",
    name: "NS8L",
    seat: 6,
    image: "ns8l",
    price: 1,
  },
  {
    brand: "Trident Series",
    name: "TS8",
    seat: 6,
    image: "ts8",
    price: 1,
  },
  {
    brand: "Nautical Series",
    name: "NS7",
    seat: 7,
    image: "ns7",
    price: 1,
  },
  {
    brand: "Coastal Series",
    name: "CS6.1L",
    seat: 6,
    image: "cs61l",
    price: 2,
  },
  {
    brand: "Coastal Series",
    name: "CS6.2L",
    seat: 6,
    image: "cs62l",
    price: 2,
  },
  {
    brand: "Nautical Series",
    name: "NS8",
    seat: 7,
    image: "ns8",
    price: 2,
  },
  {
    brand: "Trident Series",
    name: "TS7L",
    seat: 5,
    image: "ts7l",
    price: 3,
  },
  {
    brand: "Nautical Series",
    name: "NS7L",
    seat: 6,
    image: "ns7l",
    price: 3,
  },
  {
    brand: "Coastal Series",
    name: "CS6.1",
    seat: 6,
    image: "cs61",
    price: 4,
  },
  {
    brand: "Coastal Series",
    name: "CS6.2",
    seat: 6,
    image: "cs62",
    price: 4,
  },
  {
    brand: "Trident Series",
    name: "TS8.2L",
    seat: 7,
    image: "ts82l",
    price: 4,
  },
  {
    brand: "Trident Series",
    name: "TS8.1L",
    seat: 6,
    image: "ts81l",
    price: 4,
  },
] as ProductHotTubsInterface[];

export async function CategoryLoader({ params }: { params?: any }) {
  const hotTubBrands = [
    {
      slug: "trident-series",
      title: "Trident Series",
      slogan: "Relaxation EXPERIENCE!",
      heroImage: "/img/Trident.jpg",
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
      brandLogo: "/img/gallery/coastal-logo.png",
      brandDarkLogo: "/img/gallery/coastal-logo-dark.png",
      textDescription:
        "Are you dreaming of buying an affordable spa? The Coastal Series therapeutic spas are a great choice. This series is perfect for families looking to buy their first spa at a good price. It also features a smaller spa for tighter spaces or urban setting.",
    },
  ] as HotTubsBrandInterface[];
  const category_name = params?.category_name;
  let category = _.find(hotTubBrands, (item) => item.slug === category_name);
  let products = _.filter(_TubsData, (item) => item.brand === category?.title);
  if (category) {
    category.products = products;
  }
  // category = !category ? null : category;
  return { category };
}
