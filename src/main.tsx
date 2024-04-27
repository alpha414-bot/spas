import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import { RouterProvider } from "react-router-dom";
// import "./main.css";
import router from "./services/router";
import { AppProvider } from "./services/modules/middleware";

const Client = new QueryClient({
  defaultOptions: { queries: { refetchInterval: false, staleTime: Infinity } },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <QueryClientProvider client={Client}>
        <RouterProvider router={router} />
        {/*<ReactQueryDevtools />*/}
      </QueryClientProvider>
    </AppProvider>
  </React.StrictMode>
);
