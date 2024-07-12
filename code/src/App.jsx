import React, { useEffect } from "react";

import Grid from "./templates/Grid";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div>
      <Grid />
    </div>
  );
}
