import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Tabs } from '../../components';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import { IMAGES, normalize } from '../../utils';
import SignIn from './signIn';
import SignUp from './signUp';

const Sign = ({ navigation }) => {
  const [tab, setTab] = useState(0)
  return (
    <SafeAreaView style={styles.container}>
      <FastImage
        source={IMAGES.LOGO_GREEN}
        style={styles.logo} />

      <Tabs
        tab={tab}
        setTab={setTab} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == 'ios' ? 'padding' : null}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: normalize(25) }}>
          {
            tab == 0 ?
              <SignIn />
              : <SignUp />
          }

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Sign;