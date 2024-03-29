import { extendTheme } from "@chakra-ui/react";

import { config } from "./config";
import { fonts } from "./fonts";

const customTheme = extendTheme({
  fonts,
  config,
});

export default customTheme;
