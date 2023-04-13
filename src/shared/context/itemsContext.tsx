import { ItemsContextType } from "./itemsContext.types";

import { ReactNode, createContext } from "react";

export const ItemsContext = createContext({} as ItemsContextType);

export const ItemsProvider = ({ children }: { children: ReactNode }) => {
  return <ItemsContext.Provider value={1}>{children}</ItemsContext.Provider>;
};
