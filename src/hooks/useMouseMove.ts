import { IStoreComponentProps } from "../type";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { updateComponent } from "../container/WinCenter/store";

export default function useMouseMove() {
  const dispatch = useAppDispatch();
  const { editorComponentList } = useAppSelector((state) => {
    return {
      editorComponentList: state.edit.ComponentsLists,
    };
  });

  return (componentIndex: number, e: React.MouseEvent) => {
    const currentEditComponent: IStoreComponentProps =
      editorComponentList[componentIndex];

    if (e.button != 0) {
      // 屏蔽左键以外的按键
      return;
    }

    // 获得最开始，鼠标按下时的客户端区域的坐标
    const x = e.clientX;
    const y = e.clientY;

    // 获得元素之前的定位偏移量
    const top = Number(currentEditComponent?.style?.top) || 0;
    const left = Number(currentEditComponent?.style?.left) || 0;

    // 是否鼠标按下
    let isMouseDown = false;

    // 设置手势
    const cursor = "move";
    // 鼠标选中
    const mouseMove = (moveEvent: MouseEvent) => {
      isMouseDown = true;

      // 获得元素移动过程中的客户端区域坐标
      const currentX = moveEvent.clientX;
      const currentY = moveEvent.clientY;
      console.log(currentX - x + left, currentY - y + top);
      // 重置组件的位置
      const repaintStyle = {
        ...currentEditComponent.style,
        top: currentY - y + top,
        left: currentX - x + left,
        cursor,
      };
      //   更小到redux中
      dispatch(
        updateComponent({
          index: componentIndex,
          componentStyles: repaintStyle,
        })
      );
      //   dispatchUpdateComponentPositionAction(componentIndex, repaintStyle);
    };

    const mouseUp = () => {
      isMouseDown = false;
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
    };
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  };
}
