import { ReactNode } from "react";
import { TypographyStyleProps, typographyClass, typographyTextClass } from "../../../styles/typography";
import { getGenericContext } from "../../../_utils";

const elementMap: Record<NonNullable<TypographyStyleProps["type"]>, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  subheader: "div",
  code: "span",
  label: "span",
};

const displayMap: Record<NonNullable<TypographyStyleProps["type"]>, string> = {
  h1: "flex",
  h2: "flex",
  h3: "flex",
  body: "flex",
  subheader: "flex",
  code: "inline-flex",
  label: "inline-flex",
};

export const { Provider: TypographyInternalProvider, useComponentContext: useTypographyInternalProvider } =
  getGenericContext<UTypographyRootProps>("TypographyInternalProvider");

export type UTypographyRootProps = TypographyStyleProps & {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};
export const UTypographyRoot = (props: UTypographyRootProps) => {
  const Component = elementMap[props.type ?? "body"];
  return (
    <Component
      className={typographyClass({ className: props.className, typographyProps: props })}
      style={{ ...props.style, display: displayMap[props.type ?? "body"] }}
    >
      <TypographyInternalProvider value={props}>{props.children}</TypographyInternalProvider>
    </Component>
  );
};

export type UTypographyTextProps = {
  children?: ReactNode;
  className?: string;
};
export const UTypographyText = (props: UTypographyTextProps) => {
  const typographyProps = useTypographyInternalProvider();
  return <span className={typographyTextClass({ className: props.className, typographyProps })}>{props.children}</span>;
};
