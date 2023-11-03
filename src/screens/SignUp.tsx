import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import globalStyles from '../assets/styles/Global.style';
import styles from '../assets/styles/SignUp.style';
import ButtonPrimary from '../components/ButtonPrimary';
import { Strings } from '../constants/Strings';
import CutomTextInput from '../components/TextInput';
import CutomTextPasswordInput from '../components/TextPasswordInput';
import MessageIcon from '../assets/icons/message.svg';
import LockIcon from '../assets/icons/lock.svg';
import PersonIcon from '../assets/icons/person.svg';
import { Color } from '../constants/Color';
import { useSelector, useDispatch } from 'react-redux';
import HeaderBox from '../components/HeaderBox';
import isValidEmail from '../utils/ValidEmail';
import AuthServices from '../services/AuthServices';
import StorageServices from '../services/async-storage/StorageServices';
import { userActions } from '../redux/slices/UserSlice';

interface SignUpProps {
  navigation: any;
}

const SignUp : React.FC <SignUpProps> = ({ navigation }) => {

  const [firstName, setFirstName] =  useState<string>('');
  const [lastName, setLastName] =  useState<string>('');
  const [email, setEmail] =  useState<string>('');
  const [password, setPassword] =  useState<string>('');
  const [confirmPassword, setConfirmPassword] =  useState<string>('');
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] =  useState<boolean>(false);

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleValidation = () => {
    let formIsValid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!firstName) {
      newErrors.firstName = 'First Name is required';
      formIsValid = false;
    }

    if (!lastName) {
      newErrors.lastName = 'Last Name is required';
      formIsValid = false;
    }

    if (!email) {
      newErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Invalid email';
    }

    if (!password) {
      newErrors.password = 'Password is required';
      formIsValid = false;
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      formIsValid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const submitHandler = async () => {
    if (handleValidation()) {
      const payload = {
        email,
        password,
        firstName,
        lastName
      };
      await AuthServices.signUp(payload).then(async (response) => {
        const { token, user } = response.data.data;
        await StorageServices.saveStringValue('token', token);
        setIsLoading(false);
        dispatch(userActions.logIn(true));
        dispatch(userActions.setUserProfileData(user))
      }).catch((error) => {
        setIsLoading(false);
        throw new Error(error);
      })
    }
  }



  const [hasSubmit, setHasSubmit] = React.useState(false);
  return (
    <>
      <HeaderBox navigation={navigation} showButton={false} currentStep={0} handleStepSubmit={undefined} />

      <View style={{ flexGrow: 1, backgroundColor: Color.White }}>
        <View style={styles.titleOuter}>
          <Text style={[globalStyles.h4, styles.title]}>{Strings.SignUp}</Text>
        </View>
        <View style={styles.form}>
          <View
            style={[
              styles.inputHolder,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 0,
              },
            ]}
          >
            <View style={styles.doubleInput}>
              <CutomTextInput
                name="firstName"
                icon={<PersonIcon />}
                value={firstName}
                onChangeText={(text: string) => setFirstName(text)}
                title="first_name"
                placeholder="First Name"
                iserror={errors.firstName ? true : false}
              />
              {errors.firstName && (
                <View
                  style={{ marginHorizontal: 8, borderTopWidth: 1, borderColor: Color.Error }}
                ></View>
              )}
            </View>

            <View style={styles.doubleInput}>
              <CutomTextInput
                name="lastName"
                icon={<PersonIcon />}
                value={lastName}
                onChangeText={(text: string) => setLastName(text)}
                title="last_name"
                placeholder="Last Name"
                iserror={errors.lastName ? true : false}
              />
              {errors.lastName && (
                <View
                  style={{ marginHorizontal: 8, borderTopWidth: 1, borderColor: Color.Error }}
                ></View>
              )}
            </View>
          </View>
          <View style={styles.inputHolder}>
            <View style={{ marginTop: 16 }}>
              <CutomTextInput
                name="email"
                icon={<MessageIcon />}
                onChangeText={(text: string) => setEmail(text)}
                title="Email"
                value={email}
                placeholder="Enter your email"
                iserror={errors.email ? true : false}
              />
              {errors.email && (
                <View
                  style={{ marginHorizontal: 8, borderTopWidth: 1, borderColor: Color.Error }}
                >
                  {errors.email === 'Invalid email' && (
                    <Text style={{ marginTop: 10, color: Color.Error }}>{errors.email}</Text>
                  )}
                </View>
              )}
            </View>
            <View style={{ marginTop: 16 }}>
              <CutomTextPasswordInput
                name="pswd"
                value={password}
                icon={<LockIcon />}
                showSecureText={true}
                title="password"
                placeholder="Password"
                onChangeText={(text: string) => setPassword(text)}
                isPasswordIcon={true}
              />
              {errors.password && (
                <View
                  style={{ marginHorizontal: 8, borderTopWidth: 1, borderColor: Color.Error }}
                >
                  {errors.password === 'Password must be at least 8 characters' && (
                    <Text style={{ marginTop: 10, color: Color.Error }}>{errors.password}</Text>
                  )}
                </View>
              )}
            </View>
            <View style={{ marginTop: 16 }}>
              <CutomTextPasswordInput
                value={confirmPassword}
                icon={<LockIcon />}
                showSecureText={true}
                title="repeat_password"
                placeholder="Re enter Password"
                onChangeText={(text: string) => setConfirmPassword(text)}
                isPasswordIcon={true}
              />
              {errors.confirmPassword && (
                <View
                  style={{ marginHorizontal: 8, borderTopWidth: 1, borderColor: Color.Error }}
                >
                  {errors.confirmPassword === "Password doesn't match" && (
                    <Text style={{ marginTop: 10, color: Color.Error }}>
                      {errors.confirmPassword}
                    </Text>
                  )}
                </View>
              )}
            </View>
          </View>

          <View style={styles.button}>
            <ButtonPrimary
              title={Strings.SignUp}
              onPress={submitHandler}
              smallSize={false} PrimaryBack={false}
            />
          </View>
          <Pressable
            style={{ marginTop: 'auto' }}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={[globalStyles.text, styles.dontHaveAccount]}>
              {Strings.AlreadyHaveAccount} <Text style={styles.signUp}>{Strings.SignIn}</Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default SignUp;
