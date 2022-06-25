import React from "react";
import "./index.scss";

interface IProps {
  desc: String[];
}
function Desc({ desc }: IProps) {
  return (
    <div className="desc">
      <div className="flex">
        {desc &&
          desc.length > 0 &&
          desc.map((ds, index: number) => {
            return (
              <div className="item" key={index}>
                {ds}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Desc;
