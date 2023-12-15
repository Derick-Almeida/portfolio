import { IChildrenProps } from "../types";

import SettingsProvider from "./settings.context";

const Providers = ({ children }: IChildrenProps) => {
  return <SettingsProvider>{children}</SettingsProvider>;
};

export default Providers;
