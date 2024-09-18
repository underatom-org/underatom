/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode, createContext, useContext } from "react";

export const getGenericContext = <T,>(displayName: string) => {
  const context = createContext<T | undefined>(undefined);

  const Provider = context.Provider;
  const useComponentContext = () => {
    const ctx = useContext(context);
    if (!ctx) {
      throw new Error(`This component must be used within a ${displayName} component.`);
    }
    return ctx;
  };

  return { Provider, useComponentContext };
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export type ResponsiveValue<T> = T | Partial<Record<"initial" | "sm" | "md" | "lg" | "xl" | "2xl", T>>;

export type VariantProps = Record<string, any>;
export type VariantPropsMap = VariantProps[][];
type DataAttributeKey = `data-${string}`;

export const VariantsGrid = <T extends Record<string, any>>({
  renderVariant,
  variantPropsMap,
  isHorizontal = false,
}: {
  renderVariant: (props: T) => ReactNode;
  variantPropsMap: (Partial<T> & { [dataAttribute: DataAttributeKey]: unknown })[][];
  isHorizontal?: boolean;
}) => (
  <VariantsGridInternal
    renderVariant={renderVariant}
    variantPropsMap={variantPropsMap}
    index={0}
    variantProps={{} as any}
    isHorizontal={isHorizontal}
  />
);

export const VariantsGridInternal = <T extends Record<string, any>>({
  renderVariant,
  variantPropsMap,
  index,
  variantProps,
  isHorizontal,
}: {
  renderVariant: (props: T) => ReactNode;
  variantPropsMap: VariantPropsMap;
  index: number;
  variantProps: T;
  isHorizontal: boolean;
}) => {
  if (index === variantPropsMap.length) return renderVariant(variantProps);

  const variantPropsByProp = variantPropsMap[index];
  if (!variantPropsByProp) return null;

  return (
    <div
      style={{
        display: "flex",
        // gap: 16 * (variantPropsMap.length - index),
        gap: 16,
        ...(index % 2 === (isHorizontal ? 1 : 0)
          ? {
              flexDirection: "column",
              // justifyContent: "center",
            }
          : {
              flexDirection: "row",
              // alignItems: "center",
            }),
      }}
    >
      {variantPropsByProp.map((variant, i) => (
        <VariantsGridInternal
          key={i}
          renderVariant={renderVariant}
          variantPropsMap={variantPropsMap}
          index={index + 1}
          variantProps={{ ...variantProps, ...variant }}
          isHorizontal={isHorizontal}
        />
      ))}
    </div>
  );
};

export type RenderRoot = {
  (children: ReactNode, className: string): ReactNode;
};

export type AttributesMappings = Record<string, string>[];

export const attrs = (content: any, _attributesMapping: AttributesMappings) => {
  return content;
};
