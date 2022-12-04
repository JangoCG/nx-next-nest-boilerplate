import {AppShell, Footer, Header} from '@mantine/core';
import styles from './index.module.scss';


/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {

  return (
    <AppShell
      padding="md"
      header={<Header height={60} p="xs" className={styles.header}>Jango</Header>}
      footer={<Footer height={60} className={styles.footer}>Jango</Footer>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
}

export default Layout;
