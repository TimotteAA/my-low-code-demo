// 物料市场
import React from "react";
import "./index.scss";
import Editor from "./components/Editor";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addComponent } from "./store";
import { createUUid } from "../../common/utils/createUUId";
import _ from "lodash";

import TrueComponentsList from "../Material/components";

export default function WinCenter() {
  const dispatch = useAppDispatch();
  const { ComponentsList } = useAppSelector((state) => {
    return {
      ComponentsList: state.edit.ComponentsLists,
    };
  });

  return (
    <div className="winCenter">
      <div
        className="editor-canvas"
        style={{ width: "100%", height: "80%" }}
        onDrop={(e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          e.stopPropagation();
          // 获得拖延组件名
          const componentName = e.dataTransfer.getData("componentName");
          const componentInnerText =
            e.dataTransfer.getData("componentInnerText");
          let componentDomStyle: React.CSSProperties = {};
          try {
            componentDomStyle = JSON.parse(
              e.dataTransfer.getData("componentDomStyle")
            );
          } catch (err) {
            componentDomStyle = {};
          }

          console.log(TrueComponentsList);

          const componentInstance =
            TrueComponentsList[
              componentName as keyof typeof TrueComponentsList
            ];
          // 存储组件到edit队列中
          console.log(componentInstance);
          dispatch(
            addComponent({
              componentId: createUUid(),
              componentName,
              componentInnerText,
              componentDomStyle: {
                ...componentDomStyle,
                left: e.nativeEvent.offsetX,
                top: e.nativeEvent.offsetY,
                zIndex: ComponentsList.length,
              },
              componentInstance,
            })
          );
          // dispatchAddComponentAction(componentName, componentInnerText, {
          //   ...componentDomStyle,
          //   left: e.nativeEvent.offsetX,
          //   top: e.nativeEvent.offsetY,
          //   zIndex: ComponentsList.length,
          // });
        }}
        onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
        }}
      >
        <Editor />
      </div>
    </div>
  );
}
