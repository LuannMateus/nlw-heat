import { useContext } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';

import styles from './styles.module.scss';

export const LoginBox = () => {
  const { signInUrl } = useContext(AuthContext);

  return (
    <section className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size={32} />
        Entrar com Github
      </a>
    </section>
  );
};
