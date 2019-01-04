import { ICountry } from "./ICountryListItem";

export interface ICustomerListItem {
  Title: string;
  UserId: number;
  FullName: string;
  DateOfBirth: Date;
  Biography: string;
  Gender: string;
  Age: number;
  Salary: number;
  IsActive: boolean;
  Picture: { Description: string; Url: string };
  CountryId: number;
}
