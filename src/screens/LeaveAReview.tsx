import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';
import {useAppNavigation, useAppSelector} from '../hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import {useGetProfileQuery} from '../store/slices/usersApiSlice';
import {UserType} from '../types/UserType';
import {ReviewType} from '../types/ReviewType';
import {useCreateReviewMutation} from '../store/slices/productsApiSlice';
import {showMessage} from 'react-native-flash-message';

type Props = NativeStackScreenProps<RootStackParamList, 'LeaveAReview'>;

const LeaveAReview: React.FC<Props> = ({route}): JSX.Element => {
  const {reviews} = route.params;
  const [comment, setComment] = useState('');
  const [ratingValue, setRatingValue] = useState(0);

  const {data: userData, error, isLoading} = useGetProfileQuery();
  const [createReview] = useCreateReviewMutation();

  const navigation = useAppNavigation();

  const submitHandler = async () => {
    const profile = userData as UserType;
    let review: ReviewType = {
      id: profile.id,
      name: profile.name,
      comment: comment,
      rating: ratingValue,
      date: new Date().toString(),
      image: profile.image,
    };

    try {
      const res = await createReview(review).unwrap();
      console.log(res);
      navigation.goBack();
    } catch (err: any) {
      console.error(err);
      showMessage({
        message: 'Success',
        description: err?.data?.message,
        type: 'danger',
        icon: 'danger',
        position: 'top',
        style: {
          marginTop: 70,
        },
      });
    }
  };

  const renderHeader = () => {
    return <components.Header goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 20,
          flexGrow: 1,
          justifyContent: 'center',
        }}
        enableOnAndroid={true}
      >
        <View style={{marginBottom: 30}}>
          <svg.MessageSvg />
        </View>
        <Text
          style={{
            ...theme.fonts.H2,
            color: theme.colors.mainColor,
            textTransform: 'capitalize',
            marginBottom: 14,
          }}
        >
          {/* Please rate the quality of{'\n'}service for the order! */}
          Please rate the quality of{'\n'}the product!
        </Text>
        <components.RatingStars
          containerStyle={{
            marginBottom: 20,
          }}
          setRatingValue={setRatingValue}
          ratingValue={ratingValue}
        />
        <Text
          style={{
            ...theme.fonts.DMSans_400Regular,
            fontSize: 16,
            lineHeight: 16 * 1.7,
            color: theme.colors.textColor,
            marginBottom: 60,
          }}
        >
          Your comments and suggestions help us improve the product quality
          better!
        </Text>
        <components.InputFieldBig
          containerStyle={{
            marginBottom: 20,
          }}
          setComment={setComment}
        />
        <components.Button title='submit' onPress={submitHandler} />
      </KeyboardAwareScrollView>
    );
  };

  const renderFooter = () => {
    return (
      <components.Button
        containerStyle={{padding: 20}}
        title='submit'
        onPress={() => {
          console.log('submit');
        }}
      />
    );
  };

  return (
    <components.SafeAreaView>
      {renderHeader()}
      {renderContent()}
      {/* {renderFooter()} */}
    </components.SafeAreaView>
  );
};

export default LeaveAReview;
