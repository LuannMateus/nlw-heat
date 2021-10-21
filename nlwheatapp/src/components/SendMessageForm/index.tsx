import React, { useState } from 'react';
import { Alert, Keyboard, TextInput, View } from 'react-native';
import { styles } from './styles';
import { Button } from '../Button';
import { COLORS } from '../../theme';
import { api } from '../../services/api';

export const SendMessageForm = () => {
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  const handleMessageSubmit = async (): Promise<void> => {
    const messageFormatted = message.trim();

    if (messageFormatted.length > 0) {
      setSendingMessage(true);

      await api.post('/messages', { message: messageFormatted });

      setMessage('');
      Keyboard.dismiss;

      setSendingMessage(false);
      Alert.alert('Mensagem enviada com sucesso!');
    } else {
      Alert.alert('Escreva a mensagem para enviar.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardAppearance="dark"
        placeholder="Qual é a sua expectativa para o evento"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
      />
      <Button
        title="ENVIAR MENSAGEM"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        onPress={handleMessageSubmit}
        disabled={sendingMessage}
      />
    </View>
  );
};
