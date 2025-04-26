import { Home } from "@/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { RootLayout } from "@/components/layouts";
import ErrorBoundary from "@/components/organisms/Error";

function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/contact-us",
          element: <Contact />,
        },
      ],
      errorElement: <ErrorBoundary />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
