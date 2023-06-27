import {TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {fullRemoveFromCart} from '../../store/slices/cartSlice';
import {ProductType} from '../../types';

import {svg} from '../../assets/svg';

type Props = {
  item: ProductType;
};

const Trash: React.FC<Props> = ({item}): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={{
        width: 60,
        height: 100,
        backgroundColor: '#F84C6B',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => dispatch(fullRemoveFromCart(item))}
    >
      <svg.TrashSvg />
    </TouchableOpacity>
  );
};

export default Trash;
