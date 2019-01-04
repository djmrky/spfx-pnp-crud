import * as React from "react";
import { IAddCustomerProps } from "./IAddCustomerProps";
import { ICustomerListItem } from "../../../../models/ICustomerListItem";

export default class AddCustomer extends React.Component<IAddCustomerProps, {}> {
  constructor(props: IAddCustomerProps) {
    super(props);

    //this.addCustomer = this.addCustomer.bind(this);
  }
  public render(): React.ReactElement<IAddCustomerProps> {
    return (
      <div>
        <button onClick={() => this.addCustomer()}>Add</button>
      </div>
    );
  }

  addCustomer = (): void => {
    this.props.addCustomer();
  };
}
