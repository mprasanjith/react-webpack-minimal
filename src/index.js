import React from 'react';
import ReactDOM from 'react-dom';

const title = 'React Webpack Minimal';

ReactDOM.render(
<div>{title}</div>,
document.getElementById('app')
);

if (process.env.NODE_ENV !== "production") {
  module.hot.accept();
}