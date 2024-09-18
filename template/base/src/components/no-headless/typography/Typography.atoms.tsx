import { TypographyLayout, TypographyStyleProps } from "../../../styles/typography";
import { UTypographyRoot, UTypographyRootProps, UTypographyText } from "./Typography.underatoms";

export type TypographyProps = UTypographyRootProps & Partial<TypographyStyleProps>;
export const Typography = (props: TypographyProps) => {
  return (
    <TypographyLayout
      renderRoot={(children, className) => (
        <UTypographyRoot {...props} className={className}>
          {children}
        </UTypographyRoot>
      )}
      styleProps={{ className: props.className, typographyProps: props }}
      textSlot={<UTypographyText>{props.children}</UTypographyText>}
    />
  );
};

export type H1Props = TypographyProps;
export const H1 = (props: H1Props) => {
  return <Typography {...props} type="h1" />;
};

export type SubheaderProps = TypographyProps;
export const Subheader = (props: SubheaderProps) => {
  return <Typography {...props} type="subheader" />;
};

export type H2Props = TypographyProps;
export const H2 = (props: H2Props) => {
  return <Typography {...props} type="h2" />;
};

export type H3Props = TypographyProps;
export const H3 = (props: H3Props) => {
  return <Typography {...props} type="h3" />;
};

export type BodyProps = TypographyProps;
export const Body = (props: BodyProps) => {
  return <Typography {...props} type="body" />;
};

export type LabelProps = TypographyProps;
export const Label = (props: LabelProps) => {
  return <Typography {...props} type="label" />;
};

export type CodeProps = TypographyProps;
export const Code = (props: CodeProps) => {
  return <Typography {...props} type="code" />;
};
