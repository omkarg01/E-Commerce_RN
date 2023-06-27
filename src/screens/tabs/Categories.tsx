import React, {useState} from 'react';
import {ScrollView} from 'react-native';

import {components} from '../../components';
import {categories_1, categories_2} from '../../constants/constants';

const Categories: React.FC = (): JSX.Element => {
  const renderCategories_1 = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories_1[1]);

    return (
      <ScrollView
        contentContainerStyle={{paddingLeft: 20}}
        style={{flexGrow: 0, marginVertical: 20}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
      >
        {categories_1.map((item, index, array) => {
          const lastElement = index === array.length - 1;

          return (
            <components.CategoryItem
              key={index}
              item={item}
              version={1}
              lastElement={lastElement}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          );
        })}
      </ScrollView>
    );
  };

  const renderCategories_2 = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingLeft: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {categories_2.map((item, index, array) => {
          const lastElement = index === array.length - 1;

          return (
            <components.CategoryItem
              key={index}
              item={item}
              version={2}
              lastElement={lastElement}
            />
          );
        })}
      </ScrollView>
    );
  };

  return (
    <components.SmartView>
      {renderCategories_1()}
      {renderCategories_2()}
    </components.SmartView>
  );
};

export default Categories;
