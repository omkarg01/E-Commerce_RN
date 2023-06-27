export const size = (
  width:
    | 'auto'
    | '100%'
    | 'none'
    | 'inherit'
    | 'initial'
    | 'unset'
    | number
    | string,
  height:
    | 'auto'
    | '100%'
    | 'none'
    | 'inherit'
    | 'initial'
    | 'unset'
    | number
    | string,
): object => {
  return {
    width: width,
    height: height,
  };
};
