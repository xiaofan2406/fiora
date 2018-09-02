/* @flow */
export const APP_TITLE = 'React Starter Kit';

type NavLinkName = 'About' | 'Contact';
type NavLinkConfig = {
  to: string,
  name: string,
  exact?: boolean,
};
const LINK_NAMES: NavLinkName[] = ['About', 'Contact'];

export const NAV_LINKS: NavLinkConfig[] = [
  {
    to: '/',
    name: 'Home',
    exact: true,
  },
  ...LINK_NAMES.map((name: string) => ({
    to: `/${name.toLocaleLowerCase()}`,
    name,
  })),
];
