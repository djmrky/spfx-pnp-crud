import { ICustomerListItem } from "../../../models/ICustomerListItem";
import { ISecurityGroup } from "../../../models/ISecurityGroup";

export interface IPnpCrudState {
  customers: ICustomerListItem[];
  groups: ISecurityGroup[];
}
