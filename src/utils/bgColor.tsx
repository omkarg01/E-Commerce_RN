import {theme} from '../constants';

export const bgColor = (color: string) => {
  return color === 'champagne'
    ? '#F8E7CD'
    : color === 'paleCerulean'
    ? '#FFA462'
    : color === 'opal'
    ? '#67A0A4'
    : color === 'camel'
    ? '#6B6D7B'
    : color === 'squidInk'
    ? '#142535'
    : theme.colors.white;
};
