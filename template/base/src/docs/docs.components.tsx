/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Check, IconCode, IconCopy } from "../assets/Icons";
import { Body, H1, H2, H3, Subheader } from "../components/no-headless/typography/Typography.atoms";
import { Window } from "../components/no-headless/window/Window.atoms";
import { useMediaQuery } from "./utils";
import { ReactNode, useEffect, useState } from "react";
import { SandpackCodeEditor, SandpackLayout, SandpackProvider } from "@codesandbox/sandpack-react";
import { IconButtonToggle } from "../components/react-aria/button-toggle/ButtonToggle.atoms";
import { IconButton } from "../components/react-aria/button/Button.atoms";

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

const CodeEditor = ({ code }: { code?: string }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isCopied, setIsCopied] = useState(false);
  const trimmedCode = code?.trim();

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIsCopied(false), 1000);
    }
  }, [isCopied]);

  return (
    <SandpackProvider
      theme={{
        colors: {
          surface1: "#1d1d20",
          surface2: "#1d1d20",
          surface3: "#1d1d20",
          clickable: "#a8a9b2",
          base: "#a8a9b2",
          disabled: "#444344",
          hover: "#FCFCFA",
          accent: "#ffffff",
          error: "#ffcdca",
          errorSurface: "#c24038",
        },
        syntax: {
          plain: "rgb(252, 252, 250)",
          comment: {
            color: "#a8a9b2",
            fontStyle: "italic",
          },
          keyword: "#ef4445",
          tag: "#ffffff",
          punctuation: "#a8a9b2",
          definition: "#ffffff",
          property: "#a8a9b2",
          static: "#ffffff",
          string: "#ffffff",
        },
        font: {
          body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          mono: '"DM Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
          size: "13px",
          lineHeight: "20px",
        },
      }}
      files={{
        "/index.js": {
          code: trimmedCode ?? "",
        },
      }}
      style={{ maxWidth: isMobile ? "90vw" : "700px" }}
    >
      <SandpackLayout style={{ borderRadius: 8 }}>
        <SandpackCodeEditor
          style={{ height: "auto", maxHeight: "600px", paddingRight: "32px" }}
          readOnly
          showTabs={false}
          showLineNumbers={false}
          showInlineErrors
        />
        <div style={{ position: "absolute", top: 6, right: 6 }}>
          <IconButton
            size="sm"
            variant="primary"
            icon={(className) => (isCopied ? <Check className={className} /> : <IconCopy className={className} />)}
            onPress={() => {
              setIsCopied(true);
              navigator.clipboard.writeText(trimmedCode ?? "");
            }}
          />
        </div>
      </SandpackLayout>
    </SandpackProvider>
  );
};

export const ShowcaseFrame = ({
  children,
  paddingX = 40,
  code,
  style,
}: {
  children: React.ReactNode;
  paddingX?: number;
  code?: string;
  style?: React.CSSProperties;
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [showCode, setShowCode] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Window variant="default" style={{ maxWidth: isMobile ? "90vw" : "700px" }}>
        <div
          style={{
            padding: isMobile ? 10 : 40,
            paddingLeft: paddingX,
            paddingRight: paddingX,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 300,
            overflow: "auto",
            ...style,
          }}
        >
          {children}
        </div>
        {code && (
          <div style={{ display: "flex", justifyContent: "flex-end", paddingBottom: 16, paddingRight: 16 }}>
            <IconButtonToggle
              isSelected={showCode}
              icon={(className) => <IconCode className={className} />}
              onPress={() => setShowCode(!showCode)}
            />
          </div>
        )}
      </Window>
      {showCode && <CodeEditor code={code} />}
    </div>
  );
};

export const Page = ({
  children,
  title,
  subtitle,
  command,
  usageCode,
  defaultExample,
}: {
  children?: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  command: string;
  usageCode: string;
  defaultExample: React.ReactNode;
}) => {
  return (
    <div style={{ paddingBottom: 64 }}>
      <H1>{title}</H1>
      <div style={{ height: 4 }} />
      <Subheader color="secondary">{subtitle}</Subheader>
      <div style={{ height: 20 }} />
      {defaultExample}
      <div style={{ height: 20 }} />
      <Example title="Installation">{<CodeEditor code={command} />}</Example>
      <Example title="Usage">{<CodeEditor code={usageCode} />}</Example>
      <div style={{ height: 20 }} />
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
  return <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>{children}</div>;
};

export const VariantsColumn = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      {children}
    </div>
  );
};
