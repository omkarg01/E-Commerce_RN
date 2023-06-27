export const border = (
  top: number,
  right: number,
  bottom: number,
  left: number,
  borderColor?: string,
) => {
  return {
    borderTopWidth: top,
    borderRightWidth: right,
    borderBottomWidth: bottom,
    borderLeftWidth: left,
    borderColor: borderColor,
  };
};
