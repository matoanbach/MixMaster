import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/Newsletter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    }
  }
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      {
        path: "cocktail/:id",
        errorElement: <SinglePageError />,
        element: <Cocktail />,
        loader: singleCocktailLoader(queryClient),
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "company",
            element: <h2>our company</h2>,
          },
          {
            path: "person",
            element: <h2>john doe</h2>,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
};
export default App;
