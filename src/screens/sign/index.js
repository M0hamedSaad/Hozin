import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  View
} from 'react-native';
import { Tabs } from '../../components';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import { IMAGES, normalize } from '../../utils';
import SignIn from './signIn';
import SignUp from './signUp';
import * as Animatable from 'react-native-animatable';
const { createAnimatableComponent } = Animatable;
const AnimatableView = createAnimatableComponent(View);

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
              <AnimatableView animation={'slideInRight'} duration={200}>
                <SignIn navigation={navigation} />
              </AnimatableView>
              :
              <AnimatableView animation={'slideInLeft'} duration={200}>
                <SignUp navigation={navigation} />
              </AnimatableView>

          }

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Sign;