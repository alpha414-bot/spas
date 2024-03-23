import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./modules/middleware";
import CustomerSupport from "@/pages/CustomerSupport";
import ErrorPage from "@/pages/ErrorPage";

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
]);

export default router;
