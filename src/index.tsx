import React from 'react';
import { render } from 'react-dom';
import './assets/styles/reset.css';
import './assets/styles/styles.css';

import App from './app';

const ROOT = document.querySelector('[data-js="root"]');

render(<App />, ROOT);

if (process.env.NODE_ENV === 'development') {
  (module as any).hot?.accept('./app', render);
}
