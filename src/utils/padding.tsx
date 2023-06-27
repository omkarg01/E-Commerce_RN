export const padding = (
  top: number | 'auto',
  right: number | 'auto',
  bottom: number | 'auto',
  left: number | 'auto',
): object => {
  return {
    paddingTop: top,
    paddingRight: right,
    paddingBottom: bottom,
    paddingLeft: left,
  };
};
