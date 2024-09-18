import { RateItemLayout, RateLayout } from "../../../styles/rate";
import {
  URateItemRoot,
  URateItemRootProps,
  URateRoot,
  URateRootProps,
  URateItemIcon,
  useRateInternalProvider,
} from "./Rate.underatoms";

/*
  ====================================
  Rate
  ====================================
*/

export type RateProps = URateRootProps;
export const Rate = (props: RateProps) => {
  return (
    <RateLayout
      renderRoot={(children, className) => (
        <URateRoot className={className} {...props}>
          {children}
        </URateRoot>
      )}
      styleProps={{ className: props.className, rateProps: props }}
      itemSlots={Array.from({ length: props.count ?? 3 }, (_, index) => (
        <RateItem key={index} index={index + 1} />
      ))}
    />
  );
};

/*
  ====================================
  RateItem
  ====================================
*/

export type RateItemProps = URateItemRootProps;
export const RateItem = (props: RateItemProps) => {
  const rateProps = useRateInternalProvider();
  return (
    <RateItemLayout
      renderRoot={(children, className) => (
        <URateItemRoot {...props} className={className + " " + (props.className ?? "")}>
          {children}
        </URateItemRoot>
      )}
      styleProps={{ className: props.className, rateProps }}
      iconSlot={<URateItemIcon />}
    />
  );
};
