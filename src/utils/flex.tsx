export const flex = (
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly',
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse',
) => {
  return {
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
  };
};
