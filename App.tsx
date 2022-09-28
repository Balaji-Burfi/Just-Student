/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FC, useEffect, useState} from 'react';
import InitialRoute from './src/navigation/Initial-route';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {LogBox, Text, StyleSheet} from 'react-native';
import * as Sentry from '@sentry/react-native';
// import codePush from "react-native-code-push";
import Config from './src/config/Config';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import NetInfo from '@react-native-community/netinfo';
import Container from './src/components/container/Container';
import {
  Images,
  Dimensions,
  getTheme,
  Localization,
  Fonts,
} from './src/resources';
import PrimayButton from './src/components/PrimaryButton/PrimaryButton';
import {MenuProvider} from 'react-native-popup-menu';

LogBox.ignoreLogs(['Warning: ...']); //Hide warnings

LogBox.ignoreAllLogs();

const Strings = new Localization('en').getString();
const theme = getTheme('default');

const App: FC = () => {
  // useEffect(() => {
  //   if (!__DEV__) {
  //     Sentry.init({
  //       dsn: Config.sentryKey,
  //       tracesSampleRate: 1.0,
  //     });
  //     // init code push
  //     codePush.sync({
  //       deploymentKey: Config.codePushKey,
  //       installMode: codePush.InstallMode.ON_NEXT_RESTART,
  //     });
  //   }
  // }, [])

  const [network, setNetwork] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [networkReachable, setNetworkReachable] = useState(false);
  const [networkState, setNetworkState] = useState(false);

  useEffect(() => {
    unsubscribe();
  }, []);

  function unsubscribe() {
    NetInfo.fetch().then(state => {
      setNetwork(state.isConnected);
      setNetworkReachable(state.isInternetReachable);
      setNetworkState(true);
    });

    NetInfo.addEventListener(state => {
      setNetwork(state.isConnected);
      setNetworkReachable(state.isInternetReachable);
      setNetworkState(true);
    });
  }
  let persistor = persistStore(store);

  return (
    <>
      {(!network || !networkReachable) && networkState ? (
        !network && (
          <Container style={styles.EmptyContainer}>
            <Images.no_Internet />
            <Text style={styles.EmptyTitle}>{Strings.internet_list_empty}</Text>
            <Text style={styles.EmptyDesc}>{Strings.internet_list_desc}</Text>
            <Container style={styles.buttonContainer}>
              <PrimayButton
                title={Strings.try_again}
                background={theme.primary}
                height={Dimensions.scaleHeight(4.5)}
                width={Dimensions.scaleWidth(70)}
                borderRadius={Dimensions.scaleWidth(8)}
                titleStyle={styles.buttonTitle}
                onPress={() => {
                  setIsLoading(true);
                  unsubscribe();
                }}
              />
            </Container>
          </Container>
        )
      ) : (
        <Provider store={store}>
          <MenuProvider>
            <PersistGate loading={null} persistor={persistor}>
              <InitialRoute />
            </PersistGate>
          </MenuProvider>
        </Provider>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  EmptyContainer: {
    flex: 1,
    alignItems: 'center',
    padding: Dimensions.scaleWidth(8),
    paddingTop: Dimensions.getDeviceHeight() / 5,
    backgroundColor: theme.background,
  },
  EmptyTitle: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: Dimensions.scaleFont(2.6),
    textAlign: 'center',
    color: theme.textColor,
    marginTop: Dimensions.scaleHeight(3),
  },
  EmptyDesc: {
    fontFamily: Fonts.RobotoLight,
    fontSize: Dimensions.scaleFont(1.8),
    color: theme.textColor,
    textAlign: 'center',
    marginTop: Dimensions.scaleHeight(1),
    marginHorizontal: Dimensions.scaleWidth(3),
  },
  buttonTitle: {
    fontFamily: Fonts.RobotoRegular,
    color: theme.white,
    fontSize: Dimensions.scaleFont(1.8),
  },
  buttonContainer: {
    marginTop: Dimensions.scaleHeight(25),
  },
});

export default App;
