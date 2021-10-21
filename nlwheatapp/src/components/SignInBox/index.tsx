import React from 'react';
import { View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export const SignInBox = () => {
  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <Button
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
      />
    </View>
  );
};
