export const position = (
  top: number | 'auto',
  right: number | 'auto',
  bottom: number | 'auto',
  left: number | 'auto',
): Object => {
  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
  };
};
