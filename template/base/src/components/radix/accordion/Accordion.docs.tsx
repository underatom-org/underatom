import {
  Accordion,
  AccordionItem,
  AccordionItemHeader,
  AccordionItemHeaderBadge,
  AccordionItemHeaderBadgeWithIcon,
  AccordionItemHeaderRate,
  AccordionItemHeaderVoting,
  AccordionProps,
} from "./Accordion.atoms";
import { DocsRoute } from "../../../docs/docs.types";
import { Example, Page, Section, ShowcaseFrame, VariantsColumn, VariantsGrid } from "../../../docs/docs.components";
import { Body } from "../../no-headless/typography/Typography.atoms";
import { Atom } from "../../../assets/Icons";
import { IconInfinity, IconStars } from "@tabler/icons-react";

const QUANTUM_MECHANICS_TEXT =
  "Quantum mechanics is a fundamental theory in physics that describes nature at the smallest scales of energy levels of atoms and subatomic particles. It provides a mathematical description of much of the dual particle-like and wave-like behavior and interactions of energy and matter.";
const RELATIVITY_THEORY_TEXT =
  "Albert Einstein's theory of relativity is a cornerstone of modern physics, revolutionizing our understanding of space, time, and gravity. It encompasses both the Special Theory of Relativity and the General Theory of Relativity, providing profound insights into the fabric of the universe.";
const ASTROPHYSICS_TEXT =
  "Astrophysics is the branch of astronomy that employs the principles of physics and chemistry to understand how stars, planets, and galaxies form and evolve. It addresses fundamental questions about the origin and fate of the universe";

const Default = () => {
  return (
    <ShowcaseFrame>
      <Accordion
        type="multiple"
        variant="attached"
        itemSlots={[
          <AccordionItem
            value="1"
            headerSlot={<AccordionItemHeader label="Quantum Mechanics" />}
            contentSlot={<Body>{QUANTUM_MECHANICS_TEXT}</Body>}
            attachment="start"
          />,
          <AccordionItem
            value="2"
            headerSlot={<AccordionItemHeader label="Relativity Theory" />}
            contentSlot={<Body>{RELATIVITY_THEORY_TEXT}</Body>}
            attachment="center"
          />,
          <AccordionItem
            value="3"
            headerSlot={<AccordionItemHeader label="Astrophysics" />}
            contentSlot={<Body>{ASTROPHYSICS_TEXT}</Body>}
            attachment="end"
          />,
        ]}
      />
    </ShowcaseFrame>
  );
};

const WithIcon = () => {
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <Accordion
          type="multiple"
          variant="separated"
          itemSlots={[
            <AccordionItem
              value="1"
              headerSlot={
                <AccordionItemHeader label="Quantum Mechanics" icon={(className) => <Atom className={className} />} />
              }
              contentSlot={<Body>{QUANTUM_MECHANICS_TEXT}</Body>}
            />,
            <AccordionItem
              value="2"
              headerSlot={
                <AccordionItemHeader
                  label="Relativity Theory"
                  icon={(className) => <IconInfinity className={className} />}
                />
              }
              contentSlot={<Body>{RELATIVITY_THEORY_TEXT}</Body>}
            />,
            <AccordionItem
              value="3"
              headerSlot={
                <AccordionItemHeader label="Astrophysics" icon={(className) => <IconStars className={className} />} />
              }
              contentSlot={<Body>{ASTROPHYSICS_TEXT}</Body>}
            />,
          ]}
        />
        <Accordion
          type="multiple"
          variant="attached"
          itemSlots={[
            <AccordionItem
              value="4"
              headerSlot={
                <AccordionItemHeader label="Quantum Mechanics" icon={(className) => <Atom className={className} />} />
              }
              contentSlot={<Body>{QUANTUM_MECHANICS_TEXT}</Body>}
              attachment="start"
            />,
            <AccordionItem
              value="5"
              headerSlot={
                <AccordionItemHeader
                  label="Relativity Theory"
                  icon={(className) => <IconInfinity className={className} />}
                />
              }
              contentSlot={<Body>{RELATIVITY_THEORY_TEXT}</Body>}
              attachment="center"
            />,
            <AccordionItem
              value="6"
              headerSlot={
                <AccordionItemHeader label="Astrophysics" icon={(className) => <IconStars className={className} />} />
              }
              contentSlot={<Body>{ASTROPHYSICS_TEXT}</Body>}
              attachment="end"
            />,
          ]}
        />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const WithBadge = () => {
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <Accordion
          type="multiple"
          variant="separated"
          itemSlots={[
            <AccordionItem
              value="1"
              headerSlot={
                <AccordionItemHeader
                  label="Quantum Mechanics"
                  badgeSlot={<AccordionItemHeaderBadge label="Niels Bohr" color="primary" />}
                />
              }
              contentSlot={<Body>{QUANTUM_MECHANICS_TEXT}</Body>}
            />,
            <AccordionItem
              value="2"
              headerSlot={
                <AccordionItemHeader
                  label="Relativity Theory"
                  badgeSlot={<AccordionItemHeaderBadge label="Albert Einstein" color="green" />}
                />
              }
              contentSlot={<Body>{RELATIVITY_THEORY_TEXT}</Body>}
            />,
            <AccordionItem
              value="3"
              headerSlot={
                <AccordionItemHeader
                  label="Astrophysics"
                  badgeSlot={<AccordionItemHeaderBadge label="Edwin Hubble" color="red" />}
                />
              }
              contentSlot={<Body>{ASTROPHYSICS_TEXT}</Body>}
            />,
          ]}
        />
        <Accordion
          type="multiple"
          variant="attached"
          itemSlots={[
            <AccordionItem
              value="4"
              headerSlot={
                <AccordionItemHeader
                  label="Quantum Mechanics"
                  badgeSlot={<AccordionItemHeaderBadge label="Niels Bohr" color="primary" />}
                />
              }
              contentSlot={<Body>{QUANTUM_MECHANICS_TEXT}</Body>}
              attachment="start"
            />,
            <AccordionItem
              value="5"
              headerSlot={
                <AccordionItemHeader
                  label="Relativity Theory"
                  badgeSlot={<AccordionItemHeaderBadge label="Albert Einstein" color="green" />}
                />
              }
              contentSlot={<Body>{RELATIVITY_THEORY_TEXT}</Body>}
              attachment="center"
            />,
            <AccordionItem
              value="6"
              headerSlot={
                <AccordionItemHeader
                  label="Astrophysics"
                  badgeSlot={<AccordionItemHeaderBadge label="Edwin Hubble" color="red" />}
                />
              }
              contentSlot={<Body>{ASTROPHYSICS_TEXT}</Body>}
              attachment="end"
            />,
          ]}
        />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const WithBadgeWithIcon = () => {
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <Accordion
          type="multiple"
          variant="separated"
          itemSlots={[
            <AccordionItem
              value="1"
              headerSlot={
                <AccordionItemHeader
                  label="Quantum Mechanics"
                  badgeSlot={
                    <AccordionItemHeaderBadgeWithIcon
                      label="Niels Bohr"
                      color="primary"
                      icon={(className) => <Atom className={className} />}
                    />
                  }
                />
              }
              contentSlot={<Body>{QUANTUM_MECHANICS_TEXT}</Body>}
            />,
            <AccordionItem
              value="2"
              headerSlot={
                <AccordionItemHeader
                  label="Relativity Theory"
                  badgeSlot={
                    <AccordionItemHeaderBadgeWithIcon
                      label="Albert Einstein"
                      color="green"
                      icon={(className) => <IconInfinity className={className} />}
                    />
                  }
                />
              }
              contentSlot={<Body>{RELATIVITY_THEORY_TEXT}</Body>}
            />,
            <AccordionItem
              value="3"
              headerSlot={
                <AccordionItemHeader
                  label="Astrophysics"
                  badgeSlot={
                    <AccordionItemHeaderBadgeWithIcon
                      label="Edwin Hubble"
                      color="red"
                      icon={(className) => <IconStars className={className} />}
                    />
                  }
                />
              }
              contentSlot={<Body>{ASTROPHYSICS_TEXT}</Body>}
            />,
          ]}
        />
        <Accordion
          type="multiple"
          variant="attached"
          itemSlots={[
            <AccordionItem
              value="4"
              headerSlot={
                <AccordionItemHeader
                  label="Quantum Mechanics"
                  badgeSlot={<AccordionItemHeaderBadge label="Niels Bohr" color="primary" />}
                />
              }
              contentSlot={<Body>{QUANTUM_MECHANICS_TEXT}</Body>}
              attachment="start"
            />,
            <AccordionItem
              value="5"
              headerSlot={
                <AccordionItemHeader
                  label="Relativity Theory"
                  badgeSlot={<AccordionItemHeaderBadge label="Albert Einstein" color="green" />}
                />
              }
              contentSlot={<Body>{RELATIVITY_THEORY_TEXT}</Body>}
              attachment="center"
            />,
            <AccordionItem
              value="6"
              headerSlot={
                <AccordionItemHeader
                  label="Astrophysics"
                  badgeSlot={<AccordionItemHeaderBadge label="Edwin Hubble" color="red" />}
                />
              }
              contentSlot={<Body>{ASTROPHYSICS_TEXT}</Body>}
              attachment="end"
            />,
          ]}
        />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const WithVotingHeader = () => {
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <Accordion
          type="multiple"
          variant="separated"
          itemSlots={[
            <AccordionItem
              value="1"
              headerSlot={
                <AccordionItemHeaderVoting
                  progressProps={{ value: 67 }}
                  label="Quantum Mechanics"
                  rateSlot={<AccordionItemHeaderRate count={3} />}
                  badgeSlot={<AccordionItemHeaderBadge label="Niels Bohr" color="primary" />}
                />
              }
              contentSlot={<Body>{QUANTUM_MECHANICS_TEXT}</Body>}
            />,
            <AccordionItem
              value="2"
              headerSlot={
                <AccordionItemHeaderVoting
                  progressProps={{ value: 67 }}
                  label="Relativity Theory"
                  rateSlot={<AccordionItemHeaderRate count={3} />}
                  badgeSlot={<AccordionItemHeaderBadge label="Albert Einstein" color="green" />}
                />
              }
              contentSlot={<Body>{RELATIVITY_THEORY_TEXT}</Body>}
            />,
            <AccordionItem
              value="3"
              headerSlot={
                <AccordionItemHeaderVoting
                  progressProps={{ value: 67 }}
                  label="Astrophysics"
                  rateSlot={<AccordionItemHeaderRate count={3} />}
                  badgeSlot={<AccordionItemHeaderBadge label="Edwin Hubble" color="red" />}
                />
              }
              contentSlot={<Body>{ASTROPHYSICS_TEXT}</Body>}
            />,
          ]}
        />
        <Accordion
          type="multiple"
          variant="attached"
          itemSlots={[
            <AccordionItem
              value="1"
              attachment="start"
              headerSlot={
                <AccordionItemHeaderVoting
                  progressProps={{ value: 67 }}
                  label="Quantum Mechanics"
                  rateSlot={<AccordionItemHeaderRate count={3} />}
                  badgeSlot={<AccordionItemHeaderBadge label="Niels Bohr" color="primary" />}
                />
              }
              contentSlot={<Body>{QUANTUM_MECHANICS_TEXT}</Body>}
            />,
            <AccordionItem
              value="2"
              attachment="center"
              headerSlot={
                <AccordionItemHeaderVoting
                  progressProps={{ value: 100 }}
                  label="Relativity Theory"
                  rateSlot={<AccordionItemHeaderRate count={3} />}
                  badgeSlot={<AccordionItemHeaderBadge label="Albert Einstein" color="green" />}
                />
              }
              contentSlot={<Body>{RELATIVITY_THEORY_TEXT}</Body>}
            />,
            <AccordionItem
              value="3"
              attachment="end"
              disabled
              headerSlot={
                <AccordionItemHeaderVoting
                  progressProps={{ value: 33 }}
                  label="Astrophysics"
                  rateSlot={<AccordionItemHeaderRate count={3} />}
                  badgeSlot={<AccordionItemHeaderBadge label="Edwin Hubble" color="red" />}
                />
              }
              contentSlot={<Body>{ASTROPHYSICS_TEXT}</Body>}
            />,
          ]}
        />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const Disabled = () => {
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <VariantsGrid<AccordionProps>
          renderVariant={(props) => {
            return (
              <Accordion
                {...props}
                itemSlots={[
                  <AccordionItem
                    value="1"
                    headerSlot={
                      <AccordionItemHeader
                        icon={(className) => <Atom className={className} />}
                        label="Quantum Mechanics"
                        badgeSlot={<AccordionItemHeaderBadge label="Niels Bohr" color="primary" />}
                      />
                    }
                    contentSlot={<Body>{QUANTUM_MECHANICS_TEXT}</Body>}
                  />,
                  <AccordionItem
                    value="2"
                    headerSlot={
                      <AccordionItemHeader
                        icon={(className) => <IconInfinity className={className} />}
                        label="Relativity Theory"
                        badgeSlot={<AccordionItemHeaderBadge label="Albert Einstein" color="green" />}
                      />
                    }
                    contentSlot={<Body>{RELATIVITY_THEORY_TEXT}</Body>}
                  />,
                  <AccordionItem
                    value="3"
                    disabled
                    headerSlot={
                      <AccordionItemHeader
                        icon={(className) => <IconStars className={className} />}
                        label="Astrophysics"
                        badgeSlot={<AccordionItemHeaderBadge label="Edwin Hubble" color="red" />}
                      />
                    }
                    contentSlot={<Body>{ASTROPHYSICS_TEXT}</Body>}
                  />,
                ]}
              />
            );
          }}
          variantPropsMap={[[{ variant: "separated" }, { variant: "attached" }]]}
        />
        <VariantsGrid<AccordionProps>
          renderVariant={(props) => {
            return (
              <Accordion
                {...props}
                itemSlots={[
                  <AccordionItem
                    value="1"
                    headerSlot={
                      <AccordionItemHeaderVoting
                        progressProps={{ value: 33 }}
                        label="Quantum Mechanics"
                        rateSlot={<AccordionItemHeaderRate count={3} />}
                        badgeSlot={<AccordionItemHeaderBadge label="Niels Bohr" color="primary" />}
                      />
                    }
                    contentSlot={<Body>{QUANTUM_MECHANICS_TEXT}</Body>}
                  />,
                  <AccordionItem
                    value="2"
                    headerSlot={
                      <AccordionItemHeaderVoting
                        progressProps={{ value: 100 }}
                        label="Relativity Theory"
                        rateSlot={<AccordionItemHeaderRate count={3} />}
                        badgeSlot={<AccordionItemHeaderBadge label="Albert Einstein" color="green" />}
                      />
                    }
                    contentSlot={<Body>{RELATIVITY_THEORY_TEXT}</Body>}
                  />,
                  <AccordionItem
                    value="3"
                    disabled
                    headerSlot={
                      <AccordionItemHeaderVoting
                        progressProps={{ value: 67 }}
                        label="Astrophysics"
                        rateSlot={<AccordionItemHeaderRate count={3} />}
                        badgeSlot={<AccordionItemHeaderBadge label="Edwin Hubble" color="red" />}
                      />
                    }
                    contentSlot={<Body>{ASTROPHYSICS_TEXT}</Body>}
                  />,
                ]}
              />
            );
          }}
          variantPropsMap={[[{ variant: "separated" }, { variant: "attached" }]]}
        />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const AccordionDocs = () => {
  return (
    <Page title="Accordion" subtitle="Accordion" command="npx underatom@latest add accordion">
      <Section title="Showcase">
        <Example title="Default">
          <Default />
        </Example>
        <Example title="With Icon">
          <WithIcon />
        </Example>
        <Example title="With Badge">
          <WithBadge />
        </Example>
        <Example title="With Badge With Icon">
          <WithBadgeWithIcon />
        </Example>
        <Example title="Disabled">
          <Disabled />
        </Example>
      </Section>
      <Section title="Layouts">
        <Example title="Voting Header">
          <WithVotingHeader />
        </Example>
      </Section>
    </Page>
  );
};

const accordionRoute = "/accordion";
export const accordionRouteObj: DocsRoute<typeof accordionRoute> = {
  path: accordionRoute,
  group: "radix",
  label: "Accordion",
  component: AccordionDocs,
};
