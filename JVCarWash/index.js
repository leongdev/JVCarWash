/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './src/router';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Router);
