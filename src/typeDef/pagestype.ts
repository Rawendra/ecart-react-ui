export interface PageConfig {
  route: string;
  title: string;
  Component: React.FunctionComponent;
  isAuthNeeded: boolean;
}

export interface PageConfigurations {}
