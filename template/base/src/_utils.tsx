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

export type RenderRoot = {
  (children: ReactNode, className: string): ReactNode;
};
