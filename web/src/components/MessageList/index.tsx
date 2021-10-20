import logoImg from '../../assets/logo.svg';

import styles from './styles.module.scss';

export const MessageList = () => {
  return (
    <section className={styles.messageListWrapper}>
      <img src={logoImg} alt="DOWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            DOWhile!
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/LuannMateus.png" alt="Luan Mateus" />
            </div>
            <span>Luan Mateus</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            DOWhile!
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/LuannMateus.png" alt="Luan Mateus" />
            </div>
            <span>Luan Mateus</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            DOWhile!
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/LuannMateus.png" alt="Luan Mateus" />
            </div>
            <span>Luan Mateus</span>
          </div>
        </li>
      </ul>
    </section>
  );
};
