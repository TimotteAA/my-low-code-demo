import React from "react";

import "./index.scss";

export interface IScroll {
  children: React.ReactNode | null;
  width?: number;
  maxHeight?: number;
  style?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
  onScrollTop?: (scrollTop: number) => void;
}

export default function Scroll({
  children,
  width = 150,
  maxHeight = 250,
  style = {},
  innerStyle = {},
  onScrollTop,
}: IScroll) {
  // props不可变
  let outerStyle = { ...style };
  if (maxHeight) {
    outerStyle = { ...outerStyle, maxHeight: maxHeight };
  }

  const onScroll = (e: any) => {
    onScrollTop && onScrollTop(e.target.scrollTop);
  };

  return (
    <div
      className="scroll-box-outer"
      style={{ ...outerStyle, width }}
      onScroll={onScroll}
    >
      <div
        className="scroll-box-hidden"
        style={{ maxHeight: `${maxHeight}px` }}
      >
        <div className="scroll-box-inner" style={{ ...innerStyle }}>
          {children}
        </div>
      </div>
    </div>
  );
}
