import { ICustomerListItem } from "../../../../models/ICustomerListItem";

export interface ICustomersListProps {
  customers: ICustomerListItem[];
  getCustomers: () => Promise<ICustomerListItem[]>;
}
