import { ReactNode, createContext, useEffect, useState } from "react";

type MiddlewareItems = "admin" | "guest_admin";

interface ChildrenProps {
  children?: ReactNode | undefined;
  middlewares?: MiddlewareItems[];
}

// Step 5: Use the useMiddleware hook to access the middleware state
export const useMiddleware = (middleware: any | null | undefined) => {
  const [state, setState] = useState({
    loading: true,
    user: null,
    middleware: [],
  });
  useEffect(() => {
    // Step 3: Perform your middleware tasks here, e.g., checking authentication status
    const fetchUser = async () => {
      () => {
        return middleware;
      };
      // Fetch user data from an API
      //   const user = await getUserFromAPI();

      // Update the state
      setState({
        loading: false,
        user: null,
        middleware: [],
        // user,
      });
    };

    fetchUser();
  }, []);
  return state;
};

// Step 6: Implement a middleware guard in your route component
export const ProtectedRoute = ({ children, middlewares }: ChildrenProps) => {
  const { loading, user, middleware } = useMiddleware(middlewares);

  if (loading) {
    return <div>Loading... {middleware}</div>;
  }

  if (!user) {
    // redirect to anywhere
    // return <Redirect to="/login" />;
  }
  // ret
  return children;
};

export const AppContext = createContext({});
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showMobileMenu, setShowMobile] = useState(false);
  const setShowMobileMenu = (value: boolean) => {
    setShowMobile(value);
    let htmlBody: HTMLHtmlElement = document.getElementsByTagName("html")[0];
    if (htmlBody) {
      if (!value) {
        // the mobile menu is opened
        htmlBody.className = "webp webp-alpha webp-animation webp-lossless";
      } else {
        htmlBody.className =
          "webp webp-alpha webp-animation webp-lossless mm-opened mm-blocking mm-background mm-right mm-opening";
      }
      // htmlBody.classList = "";
    }
  };
  return (
    <AppContext.Provider value={{ showMobileMenu, setShowMobileMenu }}>
      {children}
    </AppContext.Provider>
  );
};
