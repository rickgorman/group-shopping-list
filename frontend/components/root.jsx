import React from 'react';
import { Provider } from 'react-redux';

export const Root = ({store}) => {
  return (
    <Provider store={store}>
      <div>
        Welcome to Basket!
      </div>
    </Provider>
  );
};

export default Root;
