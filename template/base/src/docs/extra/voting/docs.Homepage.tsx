import { Body, H1, H3, Subheader } from "../../../components/no-headless/typography/Typography.atoms";

export const Homepage = () => {
  return (
    <div>
      <H1 style={{ marginBottom: "6px" }}>Getting Started</H1>
      <Subheader color="secondary">Ambitious Component Library Builder.</Subheader>
      <Subheader color="secondary">Choose your favorite Framework, Headless, CSS library and Design.</Subheader>

      <H3 style={{ marginTop: "32px", marginBottom: "6px" }}>Documentation</H3>
      <Body>All components are showcased and documented. Let us know what you think!</Body>

      <H3 style={{ marginTop: "32px", marginBottom: "6px" }}>Community Driven Development</H3>
      <Body>We can try guessing what you need. But we won't. Let's build something great together.</Body>
      <Body style={{ marginTop: "4px" }}>
        Check the voting page 👀. Also, see you on{" "}
        <a style={{ color: "#7289da", textDecoration: "underline" }} href="https://discord.gg/BcSvJefqFC">
          Discord 💬
        </a>
        .
      </Body>

      <H3 style={{ marginTop: "32px", marginBottom: "6px" }}>Technical Details and Installation Guide</H3>
      <Body>
        Check our{" "}
        <a style={{ textDecoration: "underline" }} href="https://github.com/underatom-org/underatom">
          Github
        </a>
        .
      </Body>
    </div>
  );
};
