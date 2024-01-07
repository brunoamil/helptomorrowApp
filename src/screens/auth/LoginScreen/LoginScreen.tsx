import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }
  return (
    <Screen>
      <Text preset="headingLarge" marginBottom="s8">
        Olá
      </Text>
      <Text marginBottom="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        boxProps={{mb: 's20'}}
        errorMessage="error message"
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
      />
      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>
      <Button mt="s48" title="Entrar" />
      <Button
        onPress={navigateToSignUpScreen}
        mt="s12"
        title="Criar uma conta"
        preset="outline"
      />
    </Screen>
  );
}
