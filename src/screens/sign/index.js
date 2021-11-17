import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Button, Input } from '../../components';
import styles from './styles';
import { COLORS, IMAGES, normalize, showToast } from '../../utils';
import Feather from 'react-native-vector-icons/Feather';

const Sign = ({ navigation }) => {
  const [phone, onChangePhone] = useState('');
  const [password, onChangePassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [loading, setLoading] = useState(false);

  // signInWithPhoneNumber
  async function signInWithPhoneNumber() {

  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }}
        behavior={Platform.OS == 'ios' ? 'padding' : null}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}>


        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Sign;