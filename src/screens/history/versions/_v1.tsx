import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';

import {components} from '../../../components';
import {history} from '../../../constants';

const _v1 = () => {
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const setSections = (sections: any) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const contentStyles = {
    paddingRight: 20,
    marginLeft: 20,
  };

  const accordionHeader = (section: any) => {
    return <components.HistoryDataHeader section={section} />;
  };

  const accordionContent = (section: object) => {
    return (
      <View style={{...contentStyles}}>
        <components.ContainerData type='history' section={section} />
        <components.HistoryDataFooter version={2} />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <Accordion
        activeSections={activeSections}
        sections={history}
        touchableComponent={TouchableOpacity}
        renderHeader={accordionHeader}
        renderContent={accordionContent}
        duration={400}
        onChange={setSections}
      />
    );
  };

  return renderContent();
};

export default _v1;
