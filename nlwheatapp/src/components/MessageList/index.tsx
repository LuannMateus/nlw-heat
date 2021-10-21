import React from 'react';
import { ScrollView } from 'react-native';
import { Message } from '../Message';
import { MESSAGES_EXAMPLE } from '../../utils/messages';
import { styles } from './styles';

export const MessageList = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {MESSAGES_EXAMPLE.map((message) => {
        return <Message key={message.id} data={message} />;
      })}
    </ScrollView>
  );
};
