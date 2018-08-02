import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Provider } from 'react-redux';

const reduxWrapper = (ComponentToWrap, store) => {
  const wrappedComponent = props => (
    <Provider store={store}>
      <ComponentToWrap {...props} />
    </Provider>
  );
  hoistNonReactStatics(wrappedComponent, ComponentToWrap);
  return wrappedComponent;
};

export default reduxWrapper;
