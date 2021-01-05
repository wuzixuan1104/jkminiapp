import path from "path";
import fs from "fs";
import { Options } from "@jkminiapp/types";

export default function getConfig(): Options {
  const configPath: string = path.join(process.cwd(), `.${path.sep}`);
  let options = {} as Options;

  const filePath = `${configPath}.js`;
  if (fs.existsSync(filePath)) {
    options = readConfig(filePath);
  }

  const jkConfig = {
    ...options,
  };
}

const readConfig = (filePath: string) => {
  delete require.cache[filePath];
  const config = require(filePath);
  return config || {};
};
