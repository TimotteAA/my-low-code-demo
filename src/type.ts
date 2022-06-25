export interface IStoreComponentProps {
  componentId: string; // 组件id
  componentInstance: any; // 组件实例
  style: React.CSSProperties; // 组件样式
  componentName: string;
  componentInnerText: string;
}

interface ISizeProps {
  DPR: number;
  WIDTH: number;
  HEIGHT: number;
}

export declare type PositionType =
  | "static"
  | "inherit"
  | "relative"
  | "absolute"
  | "fixed";
export declare type textAlignType =
  | "left"
  | "center"
  | "right"
  | "justify"
  | "inherit";

interface BaseComponentStyle {
  opacity?: number; // 透明度
  position?: PositionType; // 定位
  width?: number | string; // 宽度
  height?: number | string; // 宽度
  left?: number | string;
  right?: number | string;
  top?: number | string;
  bottom?: number | string;
  cursor?: string;
  zIndex?: number;
}

/**
 * @description 各个组件允许编辑的属性
 */
// Button 组件
export interface ButtonComponentStyle extends BaseComponentStyle {
  textAlign?: textAlignType; // 对齐方式
  backgroundColor?: string; //背景颜色
  color?: string; // 字体颜色
  fontFamily?: string; // 字体类型
  fontSize?: number | string; // 字体大小
  lineHeight?: number | string; // 字体行高
  letterSpacing?: number | string; // 字体间距
  borderColor?: string; // 边框颜色
  borderWidth?: number | string; // 边框大小
  borderRadius?: number | string; // 圆角
}

// Text 组件
export interface TextComponentStyle extends BaseComponentStyle {
  textAlign?: textAlignType; // 对齐方式
  backgroundColor?: string; //背景颜色
  color?: string; // 字体颜色
  fontFamily?: string; // 字体类型
  fontSize?: number | string; // 字体大小
  lineHeight?: number | string; // 字体行高
  letterSpacing?: number | string; // 字体间距
  borderColor?: string; // 边框颜色
  borderWidth?: number | string; // 边框大小
  borderRadius?: number | string; // 圆角
}

// Cover 组件
export interface CoverComponentStyle extends BaseComponentStyle {
  backgroundColor?: string; //背景颜色
  borderColor?: string; // 边框颜色
  borderWidth?: number | string; // 边框大小
  borderRadius?: number | string; // 圆角
}

export const initComponentStyleStore: {
  Base: BaseComponentStyle;
  Button: ButtonComponentStyle;
  Text: ButtonComponentStyle;
  Cover: ButtonComponentStyle;
} = {
  Base: {
    opacity: 1,
    width: 0,
    height: 0,
    position: "relative",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    cursor: "default",
    zIndex: 0,
  },
  Button: {
    textAlign: "left",
    backgroundColor: "#ffffff",
    color: "#000000",
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 12,
  },
  Text: {
    textAlign: "left",
    backgroundColor: "#ffffff",
    color: "#000000",
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 12,
  },
  Cover: {
    backgroundColor: "#ffffff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 12,
  },
};
