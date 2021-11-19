import React, { useEffect } from 'react';
import { View, SafeAreaView, Image, StatusBar } from 'react-native';
import styles from './styles';
import { useSelector } from 'react-redux';
import { COLORS, IMAGES, normalize } from '../../utils';

import * as Animatable from 'react-native-animatable';
const { createAnimatableComponent } = Animatable;
const AnimatableView = createAnimatableComponent(View);

const Splash = ({ navigation }) => {
  const user = useSelector(state => state.userState.user);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) navigation.replace('HomeStack')
      else navigation.replace('AuthStack')
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.PRIMARY} barStyle='light-content' />
      <AnimatableView style={styles.upShape} animation={'slideInRight'}>
        <Image source={IMAGES.UP_SHAPE} style={styles.shapeSize} />
      </AnimatableView>

      <AnimatableView delay={150} animation={'fadeIn'}>
        <Image source={IMAGES.LOGO} style={styles.logo} />
      </AnimatableView>

      <AnimatableView style={styles.downShape} animation={'slideInLeft'}>
        <Image source={IMAGES.DOWN_SHAPE} style={styles.shapeSize} />
      </AnimatableView>
    </SafeAreaView>
  );
};
export default Splash;
