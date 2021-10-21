import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Message } from '../Message';
import { styles } from './styles';
import { api } from '../../services/api';
import { io } from 'socket.io-client';

type Message = {
  id: string;
  created_at: string;
  text: string;
  user: {
    avatar_url: string;
    name: string;
  };
  user_id: string;
};

let messageQueue = [] as Message[];

const API_URL = 'http://192.168.0.23:4000';
const socket = io(API_URL);

socket.on('new_message', (newMessage) => {
  messageQueue.push(newMessage);
});

export const MessageList = () => {
  const [currentMessages, setCurrentMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async (): Promise<void> => {
      const messagesResponse = await api.get<Message[]>('/messages/lastThree');

      setCurrentMessages(messagesResponse.data);
    };
    fetchMessages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messageQueue.length > 0) {
        setCurrentMessages((prevState) => [
          messageQueue[0],
          prevState[0],
          prevState[1],
        ]);

        messageQueue.shift();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages?.map((message, index) => {
        return <Message key={message.id} data={message} />;
      })}
    </ScrollView>
  );
};
