import React from 'react';
import {ScrollView} from 'react-native';

import {text} from '../../text';
import {svg} from '../../assets/svg';
import {useAppDispatch} from '../../hooks';
import {useAppSelector} from '../../hooks';
import {components} from '../../components';
import {setScreen} from '../../store/slices/tabSlice';

const Wishlist: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.wishlist.list);

  const renderProducts = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 20,
          paddingLeft: 20,
        }}
      >
        {wishlist.map((item, index, array) => {
          const lastElement = index === array.length - 1;
          const marginBottom = lastElement ? 0 : 14;

          return (
            <components.WishlistItem
              key={index}
              item={item}
              containerStyle={{marginBottom: marginBottom}}
            />
          );
        })}
      </ScrollView>
    );
  };

  const renderEmptyWishlist = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}
      >
        <svg.ShoppingBagSvg />
        <text.H2 style={{marginTop: 30, marginRight: 14}}>
          Your wishlist is empty!
        </text.H2>
        <text.T16>
          Add items to your wishlist by {'\n'}clicking on the heart icon.
        </text.T16>
      </ScrollView>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title={'go to home'}
        containerStyle={{padding: 20}}
        transparent={true}
        onPress={() => {
          if (wishlist.length === 0) {
            dispatch(setScreen('Home'));
            // navigation.navigate('Shop', {title: 'Shop'});
          }
        }}
      />
    );
  };

  return (
    <components.SmartView>
      {wishlist.length > 0 ? renderProducts() : renderEmptyWishlist()}
      {wishlist.length === 0 && renderButton()}
    </components.SmartView>
  );
};

export default Wishlist;
