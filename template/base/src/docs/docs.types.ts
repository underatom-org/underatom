import { RouteComponent } from "@tanstack/react-router";

export type DocsRoute<T extends string> = {
  path: T;
  group: string;
  label: string;
  component: RouteComponent;
};
