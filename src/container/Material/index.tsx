// 物料市场
import "./index.scss";
import ComponentsList from "./components";
import Scroll from "../../common/components/Scoll";
import _ from "lodash";

import getDomStyle from "../../common/utils/dom";
import { initComponentStyleStore } from "../../type";

export default function Material() {
  const height = document.body.clientHeight;

  return (
    <div className="material">
      <Scroll maxHeight={height}>
        <div className="logo">物料市场</div>
        <div className="flex">
          {Object.keys(ComponentsList).map((componentName: any, index) => {
            const RenderComponent =
              ComponentsList[componentName as keyof typeof ComponentsList];
            return (
              <div className="item" key={`${componentName}_${index}`}>
                <RenderComponent
                  key={`${componentName}_${index}`}
                  draggable={true}
                  onDragStart={(
                    e: React.DragEvent<HTMLDivElement>,
                    componentRefs?: HTMLDivElement
                  ) => {
                    e.dataTransfer.setData("componentName", componentName);
                    if (componentRefs) {
                      const componentStore = {
                        ...initComponentStyleStore.Base,
                        ...initComponentStyleStore[
                          componentName as keyof typeof ComponentsList
                        ],
                      };
                      const styles = getDomStyle(componentRefs, componentStore);
                      e.dataTransfer.setData(
                        "componentInnerText",
                        componentRefs.innerText
                      );
                      e.dataTransfer.setData(
                        "componentDomStyle",
                        JSON.stringify(styles)
                      );
                    }
                  }}
                />
              </div>
            );
          })}
        </div>
      </Scroll>
    </div>
  );
}
