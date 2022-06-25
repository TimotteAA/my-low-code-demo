import "./index.scss";
import Scroll from "../../common/components/Scoll";
import Code from "./components/Code";
import Content from "./components/Content";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { updateCurrentComponentText } from "../WinCenter/store";

const ResourceContentList = ["Button", "Text"];

export default function Toolba() {
  const height = document.body.clientHeight;
  const dispatch = useAppDispatch();
  const { currentComponent } = useAppSelector((state) => {
    return {
      currentComponent: state.edit.currentComponent,
    };
  });

  const onUpdateInnerText = (e: any) => {
    console.log(e.target.value);
    dispatch(updateCurrentComponentText({ text: e.target.value }));
  };

  if (!currentComponent) {
    return <div>当前暂无选中组件</div>;
  }
  return (
    <Scroll maxHeight={height}>
      {currentComponent?.style && <Code styles={currentComponent?.style} />}
      {ResourceContentList.includes(currentComponent.componentName) && (
        <Content
          componentInnerText={currentComponent?.componentInnerText || ""}
          onUpdateInnerText={onUpdateInnerText}
        />
      )}
    </Scroll>
  );
}
