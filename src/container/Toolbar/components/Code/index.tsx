/**
 * @desc Code 代码区域
 */
import React from "react";
import "./index.scss";
import Title from "../../../../common/components/Toolbar/Title";

interface IProps {
  styles: React.CSSProperties;
}
function Code({ styles }: IProps) {
  return (
    <div className="code">
      <Title text="代码" />
      <div className="block">
        {styles &&
          Object.keys(styles).length > 0 &&
          Object.keys(styles).map((className: string, styleIndex: number) => {
            return (
              <p className="property" key={styleIndex}>
                <span className="key">{className}</span>
                <span className="line">: </span>
                <span className="value">
                  {styles[className as keyof typeof styles]}
                </span>
                <span className="line">;</span>
              </p>
            );
          })}
      </div>
    </div>
  );
}

export default Code;
