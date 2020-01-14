import React from 'react';
import { compose } from 'recompose';
import Spinner from 'react-spinkit';

function withIsLogged (Component) {
  return (props) => {
    return props.isLogged 
      ? <Component { ...props } />
      : <Spinner name='circle' />
  }
} 

export const withConditionalRendering = compose(
  withIsLogged
);
