import BecomeDealer from "@/pages/BecomeDealer";
import CategoryFeaturePage from "@/pages/CategoryFeaturePage";
import CategoryGalleryPage from "@/pages/CategoryGalleryPage";
import CategoryPage from "@/pages/CategoryPage";
import ContactUs from "@/pages/ContactUs";
import CustomerSupport from "@/pages/CustomerSupport";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import HotTubBenefits from "@/pages/HotTubBenefits";
import ProductPage from "@/pages/ProductPage";
import ShopHotTubs from "@/pages/ShopHotTubs";
import ShopSwimSpas from "@/pages/ShopSwimSpas";
import HotTubElectricalRequirement from "@/pages/Support/HotTubElectricalRequirement";
import HotTubMaintenanceGuide from "@/pages/Support/HotTubMaintenanceGuide";
import HotTubOwnersManuals from "@/pages/Support/HotTubOwnersManuals";
import SpaRegistration from "@/pages/Support/SpaRegistration";
import GeneralOverview from "@/pages/SwimSpas";
import { useLayoutEffect } from "react";
import { createBrowserRouter, useLocation } from "react-router-dom";
import { CategoryLoader, ProductLoader } from "./modules/data";
import { ProtectedRoute } from "./modules/middleware";

export async function loader({ request }: { request?: any }) {
  const url = new URL(request.url);
  const filter_price = url.searchParams.get("filter-price") || "";
  const filter_seat = url.searchParams.get("filter-seating") || "";
  return { filter_price, filter_seat };
}

// Create a higher-order component to wrap the router with scroll-to-top functionality
const withScrollToTop = (routerConfig?: any) => {
  return routerConfig.map((route?: any) => {
    return {
      ...route,
      element: <ScrollToTop>{route.element}</ScrollToTop>,
    };
  });
};

// Define ScrollToTop component
const ScrollToTop = ({ children }: { children?: any }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    loader: () => <p>create a spinner</p>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact-us",
    element: (
      <ProtectedRoute>
        <ContactUs />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/become-a-dealer",
    element: (
      <ProtectedRoute>
        <BecomeDealer />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/hot-tubs",
    loader: loader,
    element: (
      <ProtectedRoute>
        <ShopHotTubs />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/swim-spas",
    element: (
      <ProtectedRoute>
        <GeneralOverview />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop-swim-spas",
    element: (
      <ProtectedRoute>
        <ShopSwimSpas />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/hot-tub-benefits",
    element: (
      <ProtectedRoute>
        <HotTubBenefits />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/customer-support",
    element: (
      <ProtectedRoute>
        <CustomerSupport />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/hot-tub-electrical-requirements",
    element: (
      <ProtectedRoute>
        <HotTubElectricalRequirement />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/hot-tub-owners-manuals",
    element: (
      <ProtectedRoute>
        <HotTubOwnersManuals />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },

  {
    path: "/hot-tub-maintenance-guide",
    element: (
      <ProtectedRoute>
        <HotTubMaintenanceGuide />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/spa-registration",
    element: (
      <ProtectedRoute>
        <SpaRegistration />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },

  {
    path: "/category/:category_name",
    loader: CategoryLoader,
    element: (
      <ProtectedRoute>
        <CategoryPage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/gallery/:category_name",
    loader: CategoryLoader,
    element: (
      <ProtectedRoute>
        <CategoryGalleryPage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/features/:category_name",
    loader: CategoryLoader,
    element: (
      <ProtectedRoute>
        <CategoryFeaturePage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/products/:category_slug/:product_slug",
    loader: ProductLoader,
    element: (
      <ProtectedRoute>
        <ProductPage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
];

const router = createBrowserRouter(withScrollToTop(routes));
export default router;
