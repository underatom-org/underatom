import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../styles.css";
import "../assets/fonts/fonts.css";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useLocation,
} from "@tanstack/react-router";
import {
  SideNav,
  SideNavGroup,
  SideNavGroupHeader,
  SideNavGroupItemBox,
  SideNavGroupItemLink,
} from "../components/radix/side-nav/SideNav.atoms";

import { votingRouteObj } from "./extra/voting/Voting";
import { sideNavRouteObj } from "../components/radix/side-nav/SideNav.docs";
import { commandRouteObj } from "../components/cmdk/command/Command.docs";
import { actionPanelRouteObj } from "../components/radix/action-panel/ActionPanel.docs";
import { avatarRouteObj } from "../components/radix/avatar/Avatar.docs";
import { avatarButtonRouteObj } from "../components/radix/avatar-button/AvatarButton.docs";
import { avatarGroupRouteObj } from "../components/radix/avatar-group/AvatarGroup.docs";
import { avatarToggleRouteObj } from "../components/radix/avatar-toggle/AvatarToggle.docs";
import { selectPanelRouteObj } from "../components/radix/select-panel/SelectPanel.docs";
import { alertRouteObj } from "../components/react-aria/alert/Alert.docs";
import { buttonRouteObj } from "../components/react-aria/button/Button.docs";
import { chipToggleRouteObj } from "../components/react-aria/chip-toggle/ChipToggle.docs";
import { chipRouteObj } from "../components/react-aria/chip/Chip.docs";
import { datePanelRouteObj } from "../components/react-aria/date-panel/DatePanel.docs";
import { inputRouteObj } from "../components/react-aria/input/Input.docs";
import { tagRouteObj } from "../components/react-aria/tag/Tag.docs";
import { textareaRouteObj } from "../components/react-aria/textarea/Textarea.docs";
import { buttonToggleRouteObj } from "../components/react-aria/button-toggle/ButtonToggle.docs";
import { textRouteObj } from "../components/no-headless/typography/Typography.docs";
import { windowRouteObj } from "../components/no-headless/window/Window.docs";
import { tabsRouteObj } from "../components/radix/tabs/Tabs.docs";
import { Logo, MobileLogo } from "../assets/brand/Brand";
import { radioGroupRouteObj } from "../components/radix/radio-group/RadioGroup.docs";
import { checkboxGroupRouteObj } from "../components/react-aria/checkbox-group/CheckboxGroup.docs";
import { selectTriggerRouteObj } from "../components/radix/select-trigger/SelectTrigger.docs";
import { accordionRouteObj } from "../components/radix/accordion/Accordion.docs";
import { rateRouteObj } from "../components/ark-ui/rate/Rate.docs";
import { switchRouteObj } from "../components/radix/switch/Switch.docs";

import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";
import ThirdParty from "supertokens-web-js/recipe/thirdparty";
import { AuthCallback } from "./extra/AuthCallback";
import { LoginButton } from "./extra/LoginButton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { API_BASE_URL } from "./extra/voting/utils/constants";
import { Body } from "../components/no-headless/typography/Typography.atoms";
import { useMediaQuery } from "./utils";
import { Sheet, SheetTrigger } from "../components/react-aria/sheet/Sheet.atoms";
import { IconButton } from "../components/react-aria/button/Button.atoms";
import { IconArrowNarrowLeft, IconMenu2 } from "../assets/Icons";

const queryClient = new QueryClient();

SuperTokens.init({
  appInfo: {
    apiDomain: API_BASE_URL,
    apiBasePath: "/auth",
    appName: "Underatom",
  },
  recipeList: [Session.init(), ThirdParty.init()],
  enableDebugLogs: false,
});

const routes = [
  votingRouteObj,
  commandRouteObj,
  actionPanelRouteObj,
  avatarRouteObj,
  avatarButtonRouteObj,
  avatarGroupRouteObj,
  avatarToggleRouteObj,
  selectPanelRouteObj,
  sideNavRouteObj,
  alertRouteObj,
  buttonRouteObj,
  buttonToggleRouteObj,
  chipRouteObj,
  chipToggleRouteObj,
  datePanelRouteObj,
  inputRouteObj,
  tagRouteObj,
  textareaRouteObj,
  textRouteObj,
  windowRouteObj,
  radioGroupRouteObj,
  checkboxGroupRouteObj,
  tabsRouteObj,
  selectTriggerRouteObj,
  accordionRouteObj,
  rateRouteObj,
  switchRouteObj,
];
const groups = [...new Set(routes.map((route) => route.group))];
const routesByGroup = Object.fromEntries(
  groups.map((group) => [group, routes.filter((route) => route.group === group)]),
);

const rootRoute = createRootRoute({
  component: () => {
    const { pathname } = useLocation();
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isVotingPage = pathname === "/voting";
    const [isOpen, setIsOpen] = useState(false);

    const IntermediateSideNav = () => {
      return (
        <SideNav
          accordionProps={{ defaultValue: groups, type: "multiple" }}
          value={pathname}
          groupSlots={[
            Object.entries(routesByGroup).map(([group, routes]) => (
              <SideNavGroup
                key={group}
                value={group}
                headerSlot={<SideNavGroupHeader label={group} hasCaret />}
                itemSlots={routes.map((route) => (
                  <SideNavGroupItemLink
                    linkProps={{ to: route.path }}
                    value={route.path}
                    boxSlot={<SideNavGroupItemBox label={route.label} />}
                  />
                ))}
              />
            )),
          ]}
        />
      );
    };
    return (
      <>
        <div
          style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            backgroundColor: "#F7F7F7",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              padding: "10px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {isMobile ? (
              <>
                <SheetTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
                  <IconButton
                    size="sm"
                    variant="base"
                    icon={(className) =>
                      isOpen ? <IconArrowNarrowLeft className={className} /> : <IconMenu2 className={className} />
                    }
                  />
                  <Sheet side="left" style={{ width: "65%", top: 52, overflowY: "auto" }}>
                    <div style={{ padding: 10 }}>
                      <LoginButton variant="base" fullWidth size="sm" />
                    </div>
                    <div style={{ position: "relative", zIndex: 20 }}>
                      <IntermediateSideNav />
                    </div>
                  </Sheet>
                </SheetTrigger>
                <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
                  <MobileLogo />
                </div>
              </>
            ) : (
              <>
                <Logo />
                <LoginButton />
              </>
            )}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: "1000px",
            margin: isVotingPage ? "42px auto 0" : "80px auto 0",
            padding: "20px",
          }}
        >
          {!isMobile && (
            <div
              style={{
                width: "220px",
                marginRight: "40px",
                height: "calc(100vh - 110px)",
                position: "sticky",
                top: "82px",
                overflowY: "auto",
              }}
            >
              <IntermediateSideNav />
            </div>
          )}
          <div style={{ flex: 1 }}>
            <Outlet />
          </div>
        </div>
      </>
    );
  },
});

const createdRoutes = routes.map((route) => {
  return createRoute({
    getParentRoute: () => rootRoute,
    path: route.path,
    component: route.component,
  });
});

const Home = () => {
  return <Body>Underatom Docs</Body>;
};

const newCreatedRoutes = [
  ...createdRoutes,
  createRoute({ getParentRoute: () => rootRoute, path: "/auth/callback", component: AuthCallback }),
  createRoute({ getParentRoute: () => rootRoute, path: "/", component: Home }),
];

const routeTree = rootRoute.addChildren(newCreatedRoutes);

const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
