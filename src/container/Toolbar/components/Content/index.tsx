/**
 * @desc Layout 内容模块
 */
import React from "react";
import "./index.scss";
import Title from "../../../../common/components/Toolbar/Title";
import Label from "../../../../common/components/Toolbar/Label";
// import Input from "../../../../common/components/input/Input";
import { Input } from "antd";

interface IProps {
  componentInnerText?: string;
  onUpdateInnerText?: (e: any) => void;
}
class Content extends React.Component<IProps> {
  render() {
    return (
      <div className="toolbar-content">
        <Title text="信息" />
        <div className="box">
          <Label label="内容" />
          <Input
            type="textarea"
            defaultValue=""
            value={this.props.componentInnerText}
            onChange={this.props.onUpdateInnerText}
          />
        </div>
      </div>
    );
  }
}

export default Content;
