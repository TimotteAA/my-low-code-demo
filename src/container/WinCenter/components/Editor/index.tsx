import React from "react";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { pickStyle, omitStyle } from "../../../../common/utils/dom";
import { IStoreComponentProps } from "../../../../type";
import { clearCurrentComponent, setCurrentComponent } from "../../store";
import useMouseMove from "../../../../hooks/useMouseMove";

import "./index.scss";

export default function Editor() {
  const dispatch = useAppDispatch();
  const { ComponentsList, currentComponent } = useAppSelector((state) => ({
    ComponentsList: state.edit.ComponentsLists,
    currentComponent: state.edit.currentComponent,
  }));
  const mouseComponentInEditor = useMouseMove();
  // 组件随便移动
  function handleOnMouseDown(e: React.MouseEvent, componentIndex: number) {
    e.stopPropagation();
    mouseComponentInEditor(componentIndex, e);
  }

  // 点击选中一个组件
  function handleOnComponentClick(e: React.MouseEvent, componentIndex: number) {
    e.stopPropagation();
    dispatch(setCurrentComponent({ idx: componentIndex }));
  }

  // 点击画布空白区域
  function handleUnComponentAreaClick(e: React.MouseEvent) {
    e.stopPropagation();
    dispatch(clearCurrentComponent());
  }
  return (
    <div className="editor" onMouseDown={handleUnComponentAreaClick}>
      {/* // step1. 遍历所有加入的组件数组 */}
      {ComponentsList.length > 0 &&
        ComponentsList.map(
          (EditComponent: IStoreComponentProps, componentIndex: number) => {
            return (
              <div
                className="wrapper-component"
                key={EditComponent.componentId}
                style={pickStyle(EditComponent.style, [
                  "left",
                  "top",
                  "zIndex",
                  "cursor",
                ])}
                // step2. 元素拖拽，鼠标按下之后的回调事件
                onMouseDown={(e: React.MouseEvent) => {
                  handleOnMouseDown(e, componentIndex);
                }}
                // step3. 点击选中当前需要操作的组件
                onClick={(e: React.MouseEvent) => {
                  handleOnComponentClick(e, componentIndex);
                }}
              >
                {EditComponent.componentInstance && (
                  <EditComponent.componentInstance
                    componentKey={EditComponent.componentId}
                    componentInnerText={
                      (EditComponent as any).componentInnerText
                    }
                    componentStyles={omitStyle(EditComponent.style, [
                      "left",
                      "top",
                      "zIndex",
                      "cursor",
                    ])}
                  />
                )}
              </div>
            );
          }
        )}
    </div>
  );
}
