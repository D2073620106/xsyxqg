/**
 * @format
 */

import React from 'react';
import { AppRegistry, View } from 'react-native';
import App from './src/index';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
