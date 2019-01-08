import { ISecurityGroup } from "../../../../models/ISecurityGroup";

export interface ISecurityGroupsProps {
  groups: ISecurityGroup[];
  doSecurityGroupAction: () => Promise<ISecurityGroup[]>;
}
