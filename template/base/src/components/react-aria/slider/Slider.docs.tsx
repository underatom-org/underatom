import React from "react";
import { DocsRoute } from "../../../docs/docs.types";
import { Slider } from "./Slider.atoms";

const SliderDocs = () => {
  let [value, setValue] = React.useState<number | number[]>([25, 75]);
  return <Slider value={value} onChange={setValue} />;
};
const sliderRoute = "/slider";
export const sliderRouteObj: DocsRoute<typeof sliderRoute> = {
  path: sliderRoute,
  group: "react-aria",
  label: "slider",
  component: SliderDocs,
};
