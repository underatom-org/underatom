import { DocsRoute } from "../../../docs/docs.types";
import { Slider } from "./Slider.atoms";

const SliderDocs = () => {
  return <Slider />;
};
const sliderRoute = "/slider";
export const sliderRouteObj: DocsRoute<typeof sliderRoute> = {
  path: sliderRoute,
  group: "react-aria",
  label: "slider",
  component: SliderDocs,
};
