import * as React from "react";
import styles from "./PnpCrud.module.scss";
import { IPnpCrudProps } from "./IPnpCrudProps";
import { escape } from "@microsoft/sp-lodash-subset";

import AddCustomer from "./addCustomer/AddCustomer";
import CustomersList from "./customersList/CustomersList";

export default class PnpCrud extends React.Component<IPnpCrudProps, {}> {
  public render(): React.ReactElement<IPnpCrudProps> {
    return (
      <div className={styles.pnpCrud}>
        <AddCustomer />

        <CustomersList />
      </div>
    );
  }
}
