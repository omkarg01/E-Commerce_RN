import {View, Text, TextInput} from 'react-native';
import React from 'react';

import {theme} from '../../constants';

type Props = {
  containerStyle?: object;
  setComment?: any;
};

const InputFieldBig: React.FC<Props> = ({
  containerStyle,
  setComment,
}): JSX.Element => {
  return (
    <View
      style={{
        width: '100%',
        height: 131,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: theme.colors.lightBlue,
        ...containerStyle,
      }}
    >
      <TextInput
        style={{
          width: '100%',
          height: '100%',
          paddingHorizontal: 24,
          paddingTop: 23,
          paddingBottom: 23,
          color: theme.colors.mainColor,
          ...theme.fonts.DMSans_400Regular,
          fontSize: 16,
        }}
        placeholder='Enter your comment'
        textAlignVertical='top'
        multiline={true}
        placeholderTextColor='#A8BCCC'
        onChangeText={setComment}
      />
      <View
        style={{
          position: 'absolute',
          top: -12,
          left: 13,
          paddingHorizontal: 10,
          backgroundColor: theme.colors.white,
        }}
      >
        <Text
          style={{
            ...theme.fonts.DMSans_500Medium,
            fontSize: 12,
            textTransform: 'uppercase',
            color: theme.colors.textColor,
            lineHeight: 12 * 1.7,
          }}
        >
          comment
        </Text>
      </View>
    </View>
  );
};

export default InputFieldBig;
