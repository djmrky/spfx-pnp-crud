import { ICountry } from "./ICountryListItem";

export interface ICustomerListItem {
  Title: string;
  User: number;
  FullName: string;
  DateOfBirth: Date;
  Biography: string;
  Gender: string;
  Age: number;
  Salary: number;
  IsActive: boolean;
  Picture: string;
  Country: ICountry;
}
