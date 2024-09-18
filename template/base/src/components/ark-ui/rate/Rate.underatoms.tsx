import { RatingGroup } from "@ark-ui/react";
import { rateClass, rateItemClass, rateItemIconClass, RateStyleProps } from "../../../styles/rate";
import { IconRosette } from "@tabler/icons-react";
import { getGenericContext } from "../../../_utils";
import { mergeProps, useFocusRing } from "react-aria";

/*
  ====================================
  Rate
  ====================================
*/

export const { Provider: RateInternalProvider, useComponentContext: useRateInternalProvider } =
  getGenericContext<URateRootProps>("RateInternalProvider");

export type URateRootProps = RatingGroup.RootProps & RateStyleProps;
export const URateRoot = ({ children, ...props }: URateRootProps) => {
  return (
    <RatingGroup.Root {...props}>
      <RatingGroup.Control className={rateClass({ className: props.className, rateProps: props })}>
        <RateInternalProvider value={props}>{children}</RateInternalProvider>
      </RatingGroup.Control>
    </RatingGroup.Root>
  );
};

/*
  ====================================
  RateItem
  ====================================
*/

export type URateItemRootProps = RatingGroup.ItemProps & RateStyleProps;
export const URateItemRoot = (props: URateItemRootProps) => {
  const rateProps = useRateInternalProvider();
  const { focusProps, isFocusVisible } = useFocusRing();
  return (
    <RatingGroup.Item
      {...mergeProps(props, focusProps)}
      data-ring={isFocusVisible}
      className={rateItemClass({ className: props.className, rateProps })}
    />
  );
};

export type URateItemIconProps = {
  className?: string;
};
export const URateItemIcon = (props: URateItemIconProps) => {
  const rateProps = useRateInternalProvider();
  return (
    <RatingGroup.ItemContext>
      {({ highlighted }) =>
        highlighted ? (
          <IconRosette fill="currentColor" className={rateItemIconClass({ className: props.className, rateProps })} />
        ) : (
          <IconRosette className={rateItemIconClass({ className: props.className, rateProps })} />
        )
      }
    </RatingGroup.ItemContext>
  );
};
