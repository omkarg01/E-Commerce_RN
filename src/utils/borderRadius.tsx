export const borderRadius = (
  topLeft: number,
  topRight: number,
  bottomLeft: number,
  bottomRight: number,
) => {
  return {
    borderTopLeftRadius: topLeft,
    borderTopRightRadius: topRight,
    borderBottomLeftRadius: bottomLeft,
    borderBottomRightRadius: bottomRight,
  };
};
