import { ReactNode, useEffect, useState } from "react";

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

  return children;
};