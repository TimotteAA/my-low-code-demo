import React, { useRef } from "react";

import { IDragProps } from "../types";

import "./index.scss";

function Button({
  componentKey,
  componentStyles,
  componentInnerText,
  draggable,
  onDragStart,
}: IDragProps) {
  const componentRefs = useRef<HTMLDivElement>(null);

  const getComponentRefs = () => {
    return componentRefs?.current || null;
  };

  const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
    onDragStart && onDragStart(e, getComponentRefs()!);
  };
  return (
    <div
      ref={componentRefs}
      key={componentKey}
      style={componentStyles}
      className="btn"
      draggable={draggable}
      onDragStart={onDrag}
    >
      {componentInnerText || "基础按钮"}
    </div>
  );
}

export default Button;
