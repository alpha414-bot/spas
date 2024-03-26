import { RouteErrorInterface } from ".";
import { useEffect } from "react";

// toberemoved
export const getErrorMessageViaStatus = (error: RouteErrorInterface) => {
  switch (error.status) {
    case 404:
      return {
        status: 404,
        shortMessage: "404 Not Found | We can't find that page!",
        longMessage:
          "Sorry, the page you're looking for does not exist anymore, or we've moved it somewhere else. Try selecting a link from the navigation at the top of the page. ",
      };
    default:
      return {
        ...error,
        shortMessage: error.statusText,
        longMessage: error.data,
      };
  }
};

export const importScript = (resourceUrl: string) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = resourceUrl;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [resourceUrl]);
};
