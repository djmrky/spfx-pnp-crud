import { ICustomerListItem } from "../models/ICustomerListItem";
import { IWebPartContext } from "@microsoft/sp-webpart-base";
import { sp, ItemAddResult, EmailProperties } from "@pnp/sp";
import { ISecurityGroup } from "../models/ISecurityGroup";

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

  //========== GET ALL SECURITY GROUPS - WORKS ==============================
  // public async doSecurityGroupAction(): Promise<ISecurityGroup[]> {
  //   let groups: ISecurityGroup[] = null;
  //   //let groups: any = null;
  //   try {
  //     groups = await sp.web.siteGroups.get();
  //     debugger;
  //   } catch (error) {console.log(error);}

  //   return groups;
  // }

  //========== GET CURRENT USER - WORKS ==============================
  //========== GET ALL GROUP FOR CURRENT USER - WORKS ==============================
  // public async doSecurityGroupAction(): Promise<ISecurityGroup[]> {
  //   debugger;
  //   let currentUser: any = null;
  //   let groups: ISecurityGroup[] = null;
  //   //let groups: any = null;
  //   try {
  //     currentUser = await sp.web.currentUser.get();
  //     debugger;
  //     groups = await sp.web.siteUsers.getById(currentUser.Id).groups.get();
  //     debugger;
  //   } catch (error) {console.log(error);}

  //   return groups;
  // }

  //========== GET ALL USERS FROM ONE GROUP ==============================
  // public async doSecurityGroupAction(): Promise<any[]> {
  //   let users: any = null;
  //   try {
  //     users = await sp.web.siteGroups.getByName("Team Site Owners").users.get();
  //     debugger;
  //   } catch (error) {console.log(error);}

  //   return users;
  // }

  //========== CREATE GROUP ==============================
  //   public async doSecurityGroupAction(): Promise<any[]> {
  //     let group: any = null;
  //     try {
  //       const groupWritableProperties: any = {
  //         Title: "Group from CODE",
  //         //Owner: 11, //PUCA
  //         // OnlyAllowMembersViewMembership: false,
  //         Description: "This group was created from code"
  //       };

  //       group = await sp.web.siteGroups.add(groupWritableProperties);
  //       debugger;
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     return group;
  //   }

  //========== SEARCH PLAIN TEXT ==============================
  // public async doSecurityGroupAction(): Promise<any[]> {
  //   let searchResults: any = null;
  //   try {
  //     searchResults = await sp.search("cv");
  //     debugger;
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   return searchResults;
  // }

  //========== SEND EMAIL ==============================
  // public async doSecurityGroupAction(): Promise<any[]> {
  //   let sendMail: any = null;
  //   try {
  //     const emailProps: EmailProperties = {
  //       To: ["dusan.zelenovic@sharperit.onmicrosoft.com"], //THIS WORKS !!!
  //       //To: ["djmrky@gmail.com"], //THIS DOES NOT WORK !!!
  //       //CC: ["djmrky@gmail.com"],
  //       Subject: "Email from SPFx ...",
  //       Body: "Here is the body. <b>It supports html</b>"
  //     };

  //     sendMail = await sp.utility.sendEmail(emailProps);
  //     debugger;
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   return sendMail;
  // }

  //========== BREAK AND RESTORE ROLE INHERITANCE on a List==============================
  public async doSecurityGroupAction(): Promise<any[]> {
    let list: any = null;
    try {
      //list = await sp.web.lists.getByTitle("RoleInheritance").breakRoleInheritance(true);
      list = await sp.web.lists.getByTitle("RoleInheritance").resetRoleInheritance();
      debugger;
      //change
    } catch (error) {
      console.log(error);
    }

    return list;
  }
}
