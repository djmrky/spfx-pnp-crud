import * as React from "react";
import { ICustomersListProps } from "./ICustomersListProps";

export default class CustomersList extends React.Component<ICustomersListProps, {}> {
  public render(): React.ReactElement<ICustomersListProps> {
    return <div>This is a customers list here CHANGED</div>;
  }
}
