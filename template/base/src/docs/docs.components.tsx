/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Body, Code, H1, H2, H3, Subheader } from "../components/no-headless/typography/Typography.atoms";
import { Window } from "../components/no-headless/window/Window.atoms";
import { useMediaQuery } from "./utils";
import { ReactNode } from "react";

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


export const ShowcaseFrame = ({ children, paddingX = 40 }: { children: React.ReactNode; paddingX?: number }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Window style={{ maxWidth: isMobile ? "90vw" : "700px" }}>
      <div
        style={{
          padding: 40,
          paddingLeft: paddingX,
          paddingRight: paddingX,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 300,
          overflow: "auto",
        }}
      >
        {children}
      </div>
    </Window>
  );
};

export const Page = ({
  children,
  title,
  subtitle,
  command
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  command?: React.ReactNode;
}) => {
  return (
    <div style={{ paddingBottom: 64 }}>
      <H1>{title}</H1>
      <div style={{ height: 4 }} />
      <Subheader color="secondary">{subtitle}</Subheader>
      <div style={{ height: 20 }} />
      {command && <Code>{command}</Code>}
      <div style={{ height: 60 }} />
      {children}
    </div>
  );
};

export const Section = ({ children, title }: { children: React.ReactNode; title: React.ReactNode }) => {
  return (
    <div style={{ paddingBottom: 64 }}>
      <H2>{title}</H2>
      <div style={{ height: 16 }} />
      {children}
    </div>
  );
};

export const Example = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
}) => {
  return (
    <div style={{ paddingBottom: 24 }}>
      {title && <H3>{title}</H3>}
      {description && <Body color="secondary">{description}</Body>}
      {(title || description) && <div style={{ height: 8 }} />}
      {children}
    </div>
  );
};

export const VariantsRow = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>{children}</div>;
};

export const VariantsColumn = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center", width: "100%" }}>
      {children}
    </div>
  );
};
