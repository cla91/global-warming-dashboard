import App from "@/App";
import Error from "@pages/Error/Error";
import Home from "@pages/Home/Home";
import Temperature from "@pages/Temperature/Temperature";
import CarbonDioxide from "@pages/CarbonDioxide/CarbonDioxide";
import Methane from "@pages/Methane/Methane";
import NitrousOxide from "@pages/NitrousOxide/NitrousOxide";
import GlobalSeaIce from "@/pages/GlobalSeaIce/GlobalSeaIce";

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
