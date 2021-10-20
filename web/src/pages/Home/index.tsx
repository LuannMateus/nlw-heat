import { LoginBox } from '../../components/LoginBox';
import { MessageList } from '../../components/MessageList';
import styles from './styles.module.scss';

export const Home = () => {
  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  );
};
