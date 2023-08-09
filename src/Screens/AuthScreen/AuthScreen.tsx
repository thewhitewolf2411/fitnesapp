import {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

import useForm from '../../Hooks/useForm';
import useHttpClient from '../../Hooks/useHttp';

import {AuthContext} from '../../Context/AuthContext';

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../Helpers/Validate';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import ErrorMessage from '../../Components/ErrorMessage';

import {styles} from './AuthScreenStyles';

const AuthScreen = () => {
  const auth = useContext(AuthContext);

  const [isLoginMode, setIsLoginMode] = useState(true);
  const {isLoading, error, sendRequest, clearError} = useHttpClient();
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false,
  );

  const authSubmitHandler = async (
    event: GestureResponderEvent,
  ): Promise<void> => {
    event.preventDefault();

    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/users/login',
          'POST',
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {'Content-Type': 'application/json'},
        );

        auth.login(responseData.userId, responseData.token, new Date());
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const formData = new FormData();

        formData.append('email', formState.inputs.email.value);
        formData.append('name', formState.inputs.name.value);
        formData.append('password', formState.inputs.password.value);
        formData.append('image', formState.inputs.image.value);

        const responseData = await sendRequest(
          'http://localhost:5000/api/users/signup',
          'POST',
          formData,
        );

        auth.login(responseData.userId, responseData.token, new Date());
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.authTitle}>Fitness App</Text>
      <Text style={styles.authSubTitle}>Sign in to your account</Text>
      <View>
        <Input
          element="input"
          id="email"
          type="email"
          label="Your email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a valid password address, at least 6 characters."
          onInput={inputHandler}
        />
        {error && <ErrorMessage message={error} />}
        <View style={styles.forgotPasswordContainer}>
          <View style={styles.forgotPasswordSingleRow}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.forgotPasswordText}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button
          title="Sign in"
          testID="loginButton"
          onPress={authSubmitHandler}
          disabled={isLoading}
        />
        <View style={styles.authTextContainer}>
          <View style={styles.authTextSingleRow}>
            <Text style={styles.text}>Don’t have an account yet?</Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.textLink} >Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
