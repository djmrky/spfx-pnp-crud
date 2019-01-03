import * as React from "react";
import { IAddCustomerProps } from "./IAddCustomerProps";

export default class AddCustomer extends React.Component<IAddCustomerProps, {}> {
  public render(): React.ReactElement<IAddCustomerProps> {
    return (
      <div>
        <button>Add</button>
      </div>
    );
  }
}
