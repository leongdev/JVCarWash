import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import PropTypes from 'prop-types';

import HomeScreen from '../../screens/home';
import ServiceScreen from '../../screens/services';
import ProfileScreen from '../../screens/profile';
import ApoScreen from '../../screens/appointments';
import {themes} from '../../themes';

const Tab = createMaterialBottomTabNavigator();

const Application = () => {
  const theme = themes();
  /**
   *
   * @param name
   * @param tabName
   * @param component
   * @returns {JSX.Element}
   */
  function renderTabScreen(
    name: string,
    tabName: string,
    inconName: string,
    component: React.FC,
  ): Tab.Screen {
    return (
      <Tab.Screen
        name={name}
        component={component}
        options={{
          headerShown: false,
          gestureEnabled: true,
          tabBarLabel: tabName,
          tabBarIcon: ({color}) => (
            <Icon name={inconName} color={color} size={26} />
          ),
        }}
      />
    );
  }

  return (
    <Tab.Navigator
      activeColor={theme.COLOR_1}
      inactiveColor={theme.COLOR_2}
      barStyle={{
        backgroundColor: theme.HEADER_COLOR,
      }}>
      {renderTabScreen('Home', 'home', 'home', HomeScreen)}
      {renderTabScreen('Service', 'services', 'car-wash', ServiceScreen)}
      {renderTabScreen('appoints', 'appointments', 'calendar-month', ApoScreen)}
      {renderTabScreen('profile', 'profile', 'account', ProfileScreen)}
    </Tab.Navigator>
  );
};

Application.propTypes = {
  theme: PropTypes.object,
};

export default Application;
