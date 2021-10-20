import { useEffect, useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { api } from '../../services/api';

import styles from './styles.module.scss';

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

export const MessageList = () => {
  const [messages, setMessages] = useState<Message[]>();

  useEffect(() => {
    api
      .get<Message[]>('/messages/lastThree')
      .then((res) => setMessages(res.data));
  }, []);

  return (
    <section className={styles.messageListWrapper}>
      <img src={logoImg} alt="DOWhile 2021" />

      <ul className={styles.messageList}>
        {messages?.map((message) => {
          return (
            <li key={message.id} className={styles.message}>
              <p className={styles.messageContent}>{message.text}</p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </div>
                <span>{message.user.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
