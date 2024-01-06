import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            HelpTomorrow
          </Text>
          <Icon name="eyeOff" color="carrotSecondary" size={150} />
          <Icon name="eyeOn" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
