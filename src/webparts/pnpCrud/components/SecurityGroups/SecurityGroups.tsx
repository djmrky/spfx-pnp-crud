import * as React from "react";

import { ISecurityGroupsProps } from "./ISecurityGroupsProps";
import { ISecurityGroup } from "../../../../models/ISecurityGroup";

export default class SecurityGroups extends React.Component<ISecurityGroupsProps, {}> {
  constructor(props: ISecurityGroupsProps) {
    super(props);

    this.doSecurityGroupAction = this.doSecurityGroupAction.bind(this);
  }
  public render(): React.ReactElement<ISecurityGroupsProps> {
    if (this.props.groups == null) {
      return (
        <button type="button" onClick={this.doSecurityGroupAction}>
          Security group action
        </button>
      );
    }
    let groups = this.props.groups.map((group: ISecurityGroup) => {
      return <li key={group.Id}>{group.Id + " - " + group.Title}</li>;
    });

    return (
      <div>
        <h3>Security groups action result</h3>
        <ul>{groups}</ul>
      </div>
    );
  }

  private doSecurityGroupAction(): void {
    this.props.doSecurityGroupAction();
  }
}
