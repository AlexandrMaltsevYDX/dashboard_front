import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {examplePageRoute} from "~pages/example";
import {DashboardLayout} from "~pages/layouts/dashboard.component.tsx";

const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: [examplePageRoute],
  },
]);

const BrowserProvider = () => {
  return <RouterProvider router={router} />;
};

export default BrowserProvider;
