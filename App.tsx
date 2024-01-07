import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
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
          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            RightComponent={<Icon name="eyeOn" color="gray2" />}
            boxProps={{mb: 's10'}}
          />
          <Text color="primary" preset="paragraphSmall" bold>
            Esqueci minha senha
          </Text>
          <Button mt="s48" title="Entrar" />
          <Button mt="s12" title="Criar uma conta" preset="outline" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
