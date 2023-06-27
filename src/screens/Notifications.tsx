import React from 'react';
import {ScrollView} from 'react-native';

import {components} from '../components';
import {NotificationType} from '../types';
import {notifications} from '../constants';

const Notifications = () => {
  const renderHeader = () => {
    return <components.Header title='Notifications' goBack={true} />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 25,
          paddingBottom: 25,
          paddingHorizontal: 20,
        }}
      >
        {notifications.map(
          (
            item: NotificationType,
            index: number,
            array: NotificationType[],
          ) => {
            const lastElement = index === array.length - 1;

            return (
              <components.NotificationItem
                key={index}
                item={item}
                containerStyle={{
                  marginBottom: lastElement ? 0 : 14,
                }}
              />
            );
          },
        )}
      </ScrollView>
    );
  };

  return (
    <components.SafeAreaView>
      {renderHeader()}
      {renderContent()}
    </components.SafeAreaView>
  );
};

export default Notifications;
