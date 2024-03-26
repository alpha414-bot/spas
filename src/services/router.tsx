import CustomerSupport from "@/pages/CustomerSupport";
import ErrorPage from "@/pages/ErrorPage";
import GeneralOverview from "@/pages/GeneralOverview";
import Home from "@/pages/Home";
import ShopHotTubs from "@/pages/ShopHotTubs";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./modules/middleware";

export async function loader({ request }: { request?: any }) {
  const url = new URL(request.url);
  const filter_price = url.searchParams.get("filter-price") || "";
  const filter_seat = url.searchParams.get("filter-seating") || "";
  return { filter_price, filter_seat };
}
const router = createBrowserRouter([
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
    path: "/customer-support",
    element: (
      <ProtectedRoute>
        <CustomerSupport />
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
]);

export default router;
