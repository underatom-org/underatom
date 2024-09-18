import { useEffect, useState } from "react";

export const useTemporaryToggle = (defaultState: boolean = false, timeout: number = 600) => {
  const [isToggled, setIsToggled] = useState(defaultState);

  useEffect(() => {
    if (isToggled) {
      const timer = setTimeout(() => setIsToggled(false), timeout);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [isToggled]);

  return [isToggled, setIsToggled] as const;
};
