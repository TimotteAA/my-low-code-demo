import _ from "lodash";

export function formatRgbaTo16Color(color: string) {
  var values = color
    .replace(/rgba?\(/, "")
    .replace(/\)/, "")
    .replace(/[\s+]/g, "")
    .split(",");

  const opacity = values[3] ? parseFloat(values[3]) : 1;
  const red = Math.floor(opacity * parseInt(values[0]) + (1 - opacity) * 255);
  const green = Math.floor(opacity * parseInt(values[1]) + (1 - opacity) * 255);
  const blue = Math.floor(opacity * parseInt(values[2]) + (1 - opacity) * 255);

  return (
    "#" +
    ("0" + red.toString(16)).slice(-2) +
    ("0" + green.toString(16)).slice(-2) +
    ("0" + blue.toString(16)).slice(-2)
  );
}

// 返回对象不存在[props]的属性值
export function omitStyle(styles: React.CSSProperties, props: string[]) {
  return _.omit(styles, props);
}
// 返回对象[props]的属性值
export function pickStyle(styles: React.CSSProperties, props: string[]) {
  return _.pick(styles, props);
}

function getDomStyle(
  dom: HTMLDivElement,
  dataStyles: React.CSSProperties
): {
  [key: string]: any;
} {
  if (dom) {
    let resultStyle: React.CSSProperties = {};
    const computedStyle = window.getComputedStyle(dom);
    Object.keys(dataStyles).forEach((styleName: string) => {
      // @ts-ignore
      if (!resultStyle[styleName]) {
        // @ts-ignore
        const styleValue = computedStyle[styleName];
        if (/color/i.test(styleName)) {
          if (!/#/.test(styleValue)) {
            // @ts-ignore
            resultStyle[styleName] = formatRgbaTo16Color(styleValue);
          } else {
            // @ts-ignore
            resultStyle[styleName] = styleValue;
          }
        } else {
          // @ts-ignore
          resultStyle[styleName] = styleValue;
        }
      }
    });
    return resultStyle;
  }
  return {};
}

export default getDomStyle;
