import { ICustomerListItem } from "../models/ICustomerListItem";
import { IWebPartContext } from "@microsoft/sp-webpart-base";
import { sp, ItemAddResult } from "@pnp/sp";

export class CustomersService {
  constructor(context: IWebPartContext) {
    this.context = context;
    sp.setup({
      spfxContext: this.context
    });
  }
  private context: IWebPartContext;

  public async getCustomers(): Promise<ICustomerListItem[]> {
    const result: ICustomerListItem[] = await sp.web.lists.getByTitle("Customers").items.getAll();
    console.log(result);
    return result;
  }

  // public addCustomer(customer: ICustomerListItem): void {
  //   debugger;
  //   sp.web.lists
  //     .getByTitle("Customers")
  //     .items.add(customer)
  //     .then(
  //       (result: ItemAddResult): void => {
  //         //debugger;
  //         const item: ICustomerListItem = result.data as ICustomerListItem;
  //         console.log(item);
  //       },
  //       (error: any): void => {
  //         console.log(error);
  //       }
  //     );
  // }

  public async addCustomer(customer: ICustomerListItem): Promise<ICustomerListItem> {
    let item: ICustomerListItem = null;
    try {
      const addResult: ItemAddResult = await sp.web.lists.getByTitle("Customers").items.add(customer);
      item = addResult.data as ICustomerListItem;
    } catch (error) {
      console.log(error);
    }
    return item;
  }
}
