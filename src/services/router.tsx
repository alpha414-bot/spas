import ContactUs from "@/pages/ContactUs";
import ErrorPage from "@/pages/ErrorPage";
import GeneralOverview from "@/pages/GeneralOverview";
import Home from "@/pages/Home";
import ShopHotTubs from "@/pages/ShopHotTubs";
import { useLayoutEffect } from "react";
import { createBrowserRouter, useLocation } from "react-router-dom";
import { ProtectedRoute } from "./modules/middleware";
import CategoryPage from "@/pages/CategoryPage";
import { CategoryLoader } from "./modules/data";
import CustomerSupport from "@/pages/CustomerSupport";
import HotTubElectricalRequirement from "@/pages/Support/HotTubElectricalRequirement";
import HotTubOwnersManuals from "@/pages/Support/HotTubOwnersManuals";
import HotTubMaintenanceGuide from "@/pages/Support/HotTubMaintenanceGuide";
import ShopSwimSpas from "@/pages/ShopSwimSpas";

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
  },
  {
    path: "/hot-tubs",
    loader: loader,
    element: (
      <ProtectedRoute>
        <ShopHotTubs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/swim-spas",
    element: (
      <ProtectedRoute>
        <GeneralOverview />
      </ProtectedRoute>
    ),
  },
  {
    path: "/shop-swim-spas",
    element: (
      <ProtectedRoute>
        <ShopSwimSpas />
      </ProtectedRoute>
    ),
  },
  {
    path: "/customer-support",
    element: (
      <ProtectedRoute>
        <CustomerSupport />
      </ProtectedRoute>
    ),
  },
  {
    path: "/hot-tub-electrical-requirements",
    element: (
      <ProtectedRoute>
        <HotTubElectricalRequirement />
      </ProtectedRoute>
    ),
  },
  {
    path: "/hot-tub-owners-manuals",
    element: (
      <ProtectedRoute>
        <HotTubOwnersManuals />
      </ProtectedRoute>
    ),
  },

  {
    path: "/hot-tub-maintenance-guide",
    element: (
      <ProtectedRoute>
        <HotTubMaintenanceGuide />
      </ProtectedRoute>
    ),
  },

  {
    path: "/category/:category_name",
    loader: CategoryLoader,
    element: (
      <ProtectedRoute>
        <CategoryPage />
      </ProtectedRoute>
    ),
  },
];

const router = createBrowserRouter(withScrollToTop(routes));
export default router;
