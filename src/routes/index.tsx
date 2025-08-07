import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import PageLoader from "../components/common/PageLoader";
import RootLayout from "../layouts/RootLayout";

// Lazy load pages for better performance
const Dashboard = lazy(() => import("../pages/dashboard"));
const Contacts = lazy(() => import("../pages/contacts"));
const Deals = lazy(() => import("../pages/deals"));
const Pipeline = lazy(() => import("../pages/pipeline"));
const Accounts = lazy(() => import("../pages/accounts"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/" replace />,
      },
      {
        path: "dashboard",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "contacts",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Contacts />
          </Suspense>
        ),
      },
      {
        path: "deals",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Deals />
          </Suspense>
        ),
      },
      {
        path: "pipeline",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Pipeline />
          </Suspense>
        ),
      },
      {
        path: "accounts",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Accounts />
          </Suspense>
        ),
      },
    ],
  },
]);
