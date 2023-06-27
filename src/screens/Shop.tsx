import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, FlatList, TouchableOpacity} from 'react-native';

import {text} from '../text';
import {theme, sortingBy} from '../constants';
import {svg} from '../assets/svg';
import {components} from '../components';
import type {RootStackParamList} from '../types';
import {useGetProductsQuery} from '../store/slices/apiSlice';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Shop'>;

const Shop: React.FC<Props> = ({route, navigation}): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const [sort, setSort] = useState(sortingBy[0].title);

  const {data, error, isLoading} = useGetProductsQuery();

  const {products, title} = route.params || {
    products: data,
    title: 'Shop',
  };

  if (isLoading) {
    return <components.Loader />;
  }

  const renderHeader = () => {
    return (
      <components.Header
        title={title}
        border={true}
        goBack={true}
        basket={true}
      />
    );
  };

  const renderOptions = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            paddingTop: 22,
            paddingRight: 20,
            paddingBottom: 15,
            paddingLeft: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
          onPress={() => navigation.navigate('Filter')}
        >
          <svg.SettingsSvg />
          <text.T14 style={{marginLeft: 8}}>Filters</text.T14>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingTop: 22,
            paddingRight: 20,
            paddingBottom: 15,
            paddingLeft: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
          onPress={() => setShowModal(true)}
        >
          <text.T14 style={{marginRight: 7}}>Sorting by</text.T14>
          <svg.SettingsSvg />
        </TouchableOpacity>
      </View>
    );
  };

  const renderProducts = () => {
    const dataProducts = data?.products;
    return (
      <FlatList
        data={products || dataProducts}
        renderItem={({item}) => <components.ShopItem item={item} />}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        horizontal={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      />
    );
  };

  const renderPopup = () => {
    return (
      <Modal
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{margin: 0}}
        animationIn='zoomIn'
        animationOut='zoomOut'
      >
        <View
          style={{
            backgroundColor: theme.colors.white,
            marginHorizontal: 40,
            borderRadius: 5,
            paddingLeft: 20,
            paddingVertical: 6,
          }}
        >
          {sortingBy.map((item, index, array) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  height: 49,
                  borderBottomWidth: array.length - 1 === index ? 0 : 1,
                  marginBottom: 4,
                  borderBottomColor: theme.colors.lightBlue,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: 20,
                }}
                onPress={() => {
                  setSort(item.title);
                  setShowModal(false);
                }}
              >
                <text.T14
                  style={{
                    color: theme.colors.mainColor,
                  }}
                >
                  {item.title}
                </text.T14>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderWidth: 1,
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: theme.colors.textColor,
                  }}
                >
                  <View
                    style={{
                      backgroundColor:
                        sort === item.title
                          ? theme.colors.mainColor
                          : theme.colors.white,
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                    }}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </Modal>
    );
  };

  return (
    <components.SafeAreaView>
      {renderHeader()}
      {renderOptions()}
      {renderProducts()}
      {renderPopup()}
    </components.SafeAreaView>
  );
};

export default Shop;
