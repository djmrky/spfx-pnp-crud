import * as React from "react";
import { ICustomersListProps } from "./ICustomersListProps";
import styles from "./CustomersList.module.scss";

export default class CustomersList extends React.Component<ICustomersListProps, {}> {
  constructor(props: ICustomersListProps) {
    super(props);

    this.getCustomers = this.getCustomers.bind(this);
  }
  public render(): React.ReactElement<ICustomersListProps> {
    if (this.props.customers == null) {
      return (
        <div>
          <button onClick={this.getCustomers}>Get Customers</button>
        </div>
      );
    }
    return (
      <div className={styles.customersList}>
        <div className={styles.container}>This is a customers list here</div>
        {this.props.customers[0].FullName}
      </div>
    );
  }

  private getCustomers(): void {
    this.props.getCustomers();
  }
}
