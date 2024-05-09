import React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import routes from "@/routes";

import "@/styles/index.scss";
import "swiper/css";
import { Toaster } from "sonner";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={routes} />
      <Toaster position="top-right" expand={false} />
    </ThemeProvider>
  );
};

export default App;
