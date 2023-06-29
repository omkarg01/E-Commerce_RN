import React, {useState} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import {text} from '../text';
import {theme} from '../constants';
import {components} from '../components';
import {useAppNavigation} from '../hooks';
import {useGetProductsQuery} from '../store/slices/productsApiSlice';
import type {ProductType, RootStackParamList} from '../types';
import {getAllColors, getAllSizes, getAllTags} from '../utils';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Filter'>;

const fillings = [
  'chocolate',
  'vanilla',
  'strawberry',
  'blueberry',
  'raspberry',
  'lemon',
  'caramel',
];

const Filter: React.FC<Props> = (): JSX.Element => {
  const {data, error, isLoading} = useGetProductsQuery();

  const navigation = useAppNavigation();

  const [sale, setSale] = useState(false);
  const [top, setTop] = useState(false);
  const [newest, setNewest] = useState(false);
  const [filling, setFilling] = useState(fillings[0]);

  const [rating1, setRating1] = useState(false);
  const [rating2, setRating2] = useState(false);
  const [rating3, setRating3] = useState(false);
  const [rating4, setRating4] = useState(false);
  const [rating5, setRating5] = useState(false);

  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [selectedColor, setSelectedColor] = useState<string>('camel');

  const products = data?.products as ProductType[];
  const allColors = getAllColors(products);
  const allSizes = getAllSizes(products);
  const allTags = getAllTags(products);
  console.log('allTags', allTags);

  if (isLoading) {
    return <components.Loader />;
  }

  const renderHeader = () => {
    return <components.Header goBack={true} title='Filter' />;
  };

  const renderStatus = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 28,
        }}
      >
        <components.Status
          onPress={() => setSale(!sale)}
          title='sale'
          active={sale}
        />
        <components.Status
          onPress={() => setTop(!top)}
          title='top'
          active={top}
        />
        <components.Status
          onPress={() => setNewest(!newest)}
          title='new'
          active={newest}
        />
      </View>
    );
  };

  const renderMarker = (e: any) => {
    return (
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: 20,
            height: 20,
            marginHorizontal: 10,
            backgroundColor: theme.colors.mainColor,
            borderRadius: 5,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            position: 'absolute',
            bottom: -30,
            ...theme.fonts.textStyle_14,
            fontSize: 14,
            color: theme.colors.textColor,
            lineHeight: 16 * 1.6,
          }}
        >
          ${e.currentValue}
        </Text>
      </View>
    );
  };

  const renderPrice = () => {
    return (
      <View style={{marginBottom: 48}}>
        <Text
          style={{
            marginBottom: 28,
            ...theme.fonts.H5,
            color: theme.colors.mainColor,
          }}
        >
          Price
        </Text>
        <MultiSlider
          isMarkersSeparated={true}
          customMarkerLeft={(e) => renderMarker(e)}
          customMarkerRight={(e) => renderMarker(e)}
          values={[0, 800]}
          min={0}
          max={800}
          step={1}
          sliderLength={theme.sizes.width - 40}
          // onValuesChange={(e) => {}}
          selectedStyle={{
            backgroundColor: theme.colors.mainColor,
            width: 300,
          }}
          unselectedStyle={{
            backgroundColor: '#DBE3F5',
            width: 300,
          }}
          containerStyle={{
            height: 20,
            width: '100%',
          }}
          trackStyle={{
            height: 3,
            width: '100%',
          }}
        />
      </View>
    );
  };

  const renderRating = () => {
    return (
      <View>
        <Text
          style={{
            marginBottom: 20,
            ...theme.fonts.H5,
            color: theme.colors.mainColor,
          }}
        >
          Rating
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginBottom: 28,
          }}
        >
          <components.Rating
            title='1,0'
            onPress={() => setRating1(!rating1)}
            active={rating1}
            version={1}
          />
          <components.Rating
            title='2,0'
            onPress={() => setRating2(!rating2)}
            active={rating2}
            version={1}
          />
          <components.Rating
            title='3,0'
            onPress={() => setRating3(!rating3)}
            active={rating3}
            version={1}
          />
          <components.Rating
            title='4,0'
            onPress={() => setRating4(!rating4)}
            active={rating4}
            version={1}
          />
          <components.Rating
            title='5,0'
            onPress={() => setRating5(!rating5)}
            active={rating5}
            version={1}
          />
        </View>
      </View>
    );
  };

  const renderColor = () => {
    return (
      <View
        style={{
          marginRight: 20,
          marginBottom: 30,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <text.H5 style={{marginRight: 20}}>Color</text.H5>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {allColors.map((item: any, index: number, array: object[]) => {
            const lastElement = index === array.length - 1;
            const marginRight = lastElement ? 0 : 14;
            return (
              <components.ProductColor
                key={index}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                item={item}
                containerStyle={{marginRight: marginRight}}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const renderSize = () => {
    return (
      <View
        style={{
          marginBottom: 28,
        }}
      >
        <text.H5
          style={{
            marginBottom: 20,
          }}
        >
          Size
        </text.H5>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {allSizes.map((item: any, index: number, array: object[]) => {
            const lastElement = index === array.length - 1;
            const marginRight = lastElement ? 0 : 10;
            return (
              <components.ProductSize
                key={index}
                item={item}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                containerStyle={{marginRight: marginRight}}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const renderTags = () => {
    return (
      <View>
        <Text
          style={{
            marginBottom: 20,
            ...theme.fonts.H5,
            color: theme.colors.mainColor,
          }}
        >
          Tags
        </Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {allTags.map((e, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={{
                  paddingHorizontal: 10,
                  borderWidth: 1,
                  paddingVertical: 5,
                  borderRadius: 3,
                  marginBottom: 10,
                  marginRight: 10,
                  backgroundColor:
                    e === filling ? theme.colors.mainColor : '#FAFCFE',
                  borderColor:
                    e === filling ? theme.colors.mainColor : '#DBE9F5',
                }}
                // onPress={() => setFilling(e)}
              >
                <Text
                  style={{
                    color: e === filling ? '#fff' : theme.colors.textColor,
                    textTransform: 'uppercase',
                    ...theme.fonts.DMSans_700Bold,
                    fontSize: 12,
                  }}
                >
                  {e}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <components.Button
        title='apply filters'
        onPress={() => {
          navigation.goBack();
        }}
        containerStyle={{
          padding: 20,
        }}
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 20,
          paddingHorizontal: 20,
        }}
      >
        {renderStatus()}
        {renderPrice()}
        {renderRating()}
        {renderColor()}
        {renderSize()}
        {renderTags()}
      </ScrollView>
    );
  };

  return (
    <components.SafeAreaView>
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </components.SafeAreaView>
  );
};

export default Filter;
