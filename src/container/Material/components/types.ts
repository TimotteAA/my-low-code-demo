export interface IDragProps {
  draggable: boolean;
  componentKey?: string;
  componentStyles?: React.CSSProperties;
  componentInnerText?: string;
  onDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    componentRefs?: HTMLDivElement
  ) => void;
}
