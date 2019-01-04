import * as React from "react";
import styles from "./PnpCrud.module.scss";
import { IPnpCrudProps } from "./IPnpCrudProps";
import { escape } from "@microsoft/sp-lodash-subset";

import AddCustomer from "./AddCustomer/AddCustomer";
import CustomersList from "./CustomersList/CustomersList";
import { ICustomerListItem } from "../../../models/ICustomerListItem";
import { CustomersService } from "../../../api/services";
import { IPnpCrudState } from "./IPnpCrudState";

export default class PnpCrud extends React.Component<IPnpCrudProps, IPnpCrudState> {
  public state: IPnpCrudState = {
    customers: null
  };
  constructor(props: IPnpCrudProps) {
    super(props);

    this.getCustomers = this.getCustomers.bind(this);
    this.addCustomer = this.addCustomer.bind(this);

    this.service = new CustomersService(this.context);
  }

  private service: CustomersService;
  public render(): React.ReactElement<IPnpCrudProps> {
    return (
      <div className={styles.pnpCrud}>
        <AddCustomer addCustomer={this.addCustomer} />

        <CustomersList customers={this.state.customers} getCustomers={this.getCustomers} />
      </div>
    );
  }

  private async getCustomers(): Promise<ICustomerListItem[]> {
    const customers: ICustomerListItem[] = await this.service.getCustomers();
    this.setState({ customers });
    return null;
  }

  private async addCustomer(): Promise<ICustomerListItem> {
    const newCustomer: ICustomerListItem = {
      Title: "C1",
      FullName: "Milan Zelenovic",
      DateOfBirth: new Date(),
      Biography: "<div>Ajde BIO</div>",
      Gender: "Male",
      UserId: 11,
      Age: 4,
      Salary: 0,
      IsActive: true,
      Picture: {
        Description: "Mrky",
        Url: "https://pbs.twimg.com/profile_images/738303502456233986/c9zYrzK7_400x400.jpg"
      },
      CountryId: 1
    };

    const createdCustomer: ICustomerListItem = await this.service.addCustomer(newCustomer);
    console.log("NEW ITEM");
    console.log(createdCustomer);
    return null;
  }

  // private addCustomer(): void {
  //   const newCustomer: ICustomerListItem = {
  //     Title: "C1",
  //     FullName: "Milan Zelenovic",
  //     DateOfBirth: new Date(),
  //     Biography: "<div>Ajde BIO</div>",
  //     Gender: "Male",
  //     UserId: 11,
  //     Age: 4,
  //     Salary: 0,
  //     IsActive: true,
  //     Picture: {
  //       Description: "Mrky",
  //       Url: "https://pbs.twimg.com/profile_images/738303502456233986/c9zYrzK7_400x400.jpg"
  //     },
  //     CountryId: 1
  //   };

  //   this.service.addCustomer(newCustomer);
  // }
}
