import { VscGithubInverted } from 'react-icons/vsc';

import styles from './styles.module.scss';

export const LoginBox = () => {
  return (
    <section className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href="#" className={styles.signInWithGithub}>
        <VscGithubInverted size={32} />
        Entrar com Github
      </a>
    </section>
  );
};
