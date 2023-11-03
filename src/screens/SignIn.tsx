import React, { useState } from 'react';
import { View, Text, SafeAreaView, Pressable, ScrollView } from 'react-native';
import globalStyles from '../assets/styles/Global.style';
import styles from '../assets/styles/SignIn.style';
import ButtonWithLoader from '../components/ButtonWithLoader';
import { Strings } from '../constants/Strings';
import CutomTextInput from '../components/TextInput';
import HeaderBox from '../components/HeaderBox';
import MessageIcon from '../assets/icons/message.svg';
import LockIcon from '../assets/icons/lock.svg';
import AuthServices from '../services/AuthServices';
import isValidEmail from '../utils/ValidEmail';
import StorageServices from '../services/async-storage/StorageServices';
import { userActions } from '../redux/slices/UserSlice';
import { useDispatch } from 'react-redux';
import { Color } from '../constants/Color';

interface SignInProps {
  navigation: any;
}

const SignIn : React.FC<SignInProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [invalidCredential, setInvalidCredential] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setIsLoading(true);
    let canSendLoginRequest = true;
    setEmailError('');
    setPasswordError('');
    setInvalidCredential('');
    if (!email) {
      setEmailError('Email is required');
      setIsLoading(false);
      canSendLoginRequest = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Enter valid email');
      setIsLoading(false);
      canSendLoginRequest = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      setIsLoading(false);
      canSendLoginRequest = false;
    }

    if (canSendLoginRequest) {
      const payload = {
        email,
        password,
      };
      await AuthServices.login(payload).then( async (response) => {
        const { token, user } = response.data.data;
        await StorageServices.saveStringValue('token', token);
        setIsLoading(false);
        dispatch(userActions.logIn(true));
        dispatch(userActions.setUserProfileData(user))
      }).catch((error) => {
        if (error.response.data.statusCode === 404) {
          setInvalidCredential(error.response.data.message);
          setIsLoading(false);
        }
        throw new Error(error);
      })
    }
  };

  return (
    <SafeAreaView style={[globalStyles.safeAreaView, styles.container]}>
      <HeaderBox navigation={navigation} showButton={false} currentStep={0} handleStepSubmit={() =>{}} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.form}>
          <Text style={[globalStyles.h4, styles.title]}>{Strings.SignIn}</Text>
          <View style={styles.inputHolder}>
            <CutomTextInput
              icon={<MessageIcon />}
              title="Email"
              placeholder="Enter your email"
              onChangeText={(text: string) => setEmail(text)}
              iserror={emailError}
            />
            {emailError && (
              <View
                style={{ marginHorizontal: 8, borderTopWidth: 1, borderColor: Color.Error }}
              ></View>
            )}

            <View style={{ marginTop: 16 }}>
              <CutomTextInput
                icon={<LockIcon />}
                title="Password"
                placeholder="Enter your password"
                showSecureText={true}
                onChangeText={(text: string) => setPassword(text)}
                iserror={passwordError}
              />
            </View>
            {passwordError && (
              <View
                style={{ marginHorizontal: 8, borderTopWidth: 1, borderColor: Color.Error }}
              ></View>
            )}
          </View>
          {invalidCredential && (
            <Text style={[styles.error, styles.marginTop]}>{invalidCredential}</Text>
          )}
          <Text style={styles.forgotPassword}>{Strings.ForgotPassword}</Text>
          <View style={styles.button}>
            <ButtonWithLoader
              isLoading={isLoading}
              title={Strings.SignIn}  
              isLoginProgress={isLoading}            
              onPress={() => handleLogin()}
            />
          </View>
          <Text style={styles.or}>{Strings.Or}</Text>
          <Pressable  onPress={() => navigation.navigate('SignUp')}>
            <Text style={[globalStyles.text, styles.dontHaveAccount]}>
              {Strings.DontHaveAccount} <Text style={styles.signUp}>{Strings.SignUp}</Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
