export const meaningOfLife = 42;

export interface BuildOptions {
  input?: string[] | string | { [key: string]: string };
  output: string;
  rootDir: string;
  watch?: boolean;
}

export type Options = BuildOptions;
