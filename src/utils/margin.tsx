export const margin = (
  top: number | 'auto',
  right: number | 'auto',
  bottom: number | 'auto',
  left: number | 'auto',
): object => {
  return {
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
  };
};
