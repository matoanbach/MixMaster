import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from './pages';


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {loader as landingLoader} from "./pages/Landing"
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Landing/>,
        errorElement: <SinglePageError/>,
        loader: landingLoader,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail/>,
      },
      {
        path: "newsletter",
        element: <Newsletter/>,
      },
      {
        path: "about",
        element: <About/>,
        children: [
          {
            path: "company",
            element: <h2>our company</h2>
          },
          {
            path: "person",
            element: <h2>john doe</h2>
          }
        ]
      },
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router}/>
};
export default App;
