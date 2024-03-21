import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./modules/middleware";

const router = createBrowserRouter([
     {
       path: "/",
       element: (
         <ProtectedRoute>
           <Home />
         </ProtectedRoute>
       )
     }
])

export default router;