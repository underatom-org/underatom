import { Body, H1, H2, H3, Subheader } from "../components/no-headless/typography/Typography.atoms";
import { Window } from "../components/no-headless/window/Window.atoms";
import { useMediaQuery } from "./utils";

export const ShowcaseFrame = ({
  children,
  paddingX = 40,
  style,
}: {
  children: React.ReactNode;
  paddingX?: number;
  style?: React.CSSProperties;
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Window style={{ maxWidth: isMobile ? "90vw" : "700px" }}>
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
    </Window>
  );
};

export const Page = ({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
}) => {
  return (
    <div style={{ paddingBottom: 64 }}>
      <H1>{title}</H1>
      <div style={{ height: 4 }} />
      <Subheader color="secondary">{subtitle}</Subheader>
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
