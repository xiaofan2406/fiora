export const APP_TITLE = 'Fiora';

const baseUrl = 'https://xiaofan2406.github.io/fiora';

export const ROUTES = {
  HOME: {
    path: baseUrl,
    name: 'Home',
    exact: true
  },
  ABOUT: {
    path: `${baseUrl}/about`,
    name: 'About'
  },
  CONTACT: {
    path: `${baseUrl}/contact`,
    name: 'Contact'
  }
};
