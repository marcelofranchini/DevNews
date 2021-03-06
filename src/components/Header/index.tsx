import { useRouter } from 'next/router';
import { ActiveLink } from '../ActiveLink';
import SEO from '../../components/SEO';
import styles from './styles.module.scss';

export function Header() {
      const { asPath } = useRouter();
  return (
      <div>
      <SEO title='Home' />
    <header className={styles.container}>
        <div className={styles.content}>
        <img src="/logo.svg" alt="DevNews!" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
      </div>
    )

}