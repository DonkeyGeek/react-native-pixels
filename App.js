import React from 'react';
import AppLoading from 'expo-app-loading';
import MainNavigator from './routes/DrawerNav';
import {
  useFonts,
  InriaSans_300Light,
  InriaSans_300Light_Italic,
  InriaSans_400Regular,
  InriaSans_400Regular_Italic,
  InriaSans_700Bold,
  InriaSans_700Bold_Italic,
} from '@expo-google-fonts/inria-sans';

import store from './redux/store';
import { Provider } from 'react-redux';

export default function App() {

  let [fontsLoaded] = useFonts({
    InriaSans_300Light,
    InriaSans_300Light_Italic,
    InriaSans_400Regular,
    InriaSans_400Regular_Italic,
    InriaSans_700Bold,
    InriaSans_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
        <Provider store={store}>
          <MainNavigator />
        </Provider>
      )
  }
}