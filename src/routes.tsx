import { lazy } from "react";
import App from "@/App";
import Error from "@pages/Error/Error";
const Home = lazy(() => import("@pages/Home/Home"));
const Temperature = lazy(() => import("@pages/Temperature/Temperature"));
const CarbonDioxide = lazy(() => import("@pages/CarbonDioxide/CarbonDioxide"));
const Methane = lazy(() => import("@pages/Methane/Methane"));
const NitrousOxide = lazy(() => import("@pages/NitrousOxide/NitrousOxide"));
const GlobalSeaIce = lazy(() => import("@pages/GlobalSeaIce/GlobalSeaIce"));

export default [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/temperature",
        element: <Temperature />,
      },
      {
        path: "/carbon-dioxide",
        element: <CarbonDioxide />,
      },
      {
        path: "/methane",
        element: <Methane />,
      },
      {
        path: "/nitrous-oxide",
        element: <NitrousOxide />,
      },
      {
        path: "/global-sea-ice",
        element: <GlobalSeaIce />,
      },
    ],
  },
];
