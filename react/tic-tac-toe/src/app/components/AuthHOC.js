import React from 'react';
import { compose } from 'recompose';
import Spinner from 'react-spinkit';

const withIsLogged = (isLogged) => (Component) => (props) => {
  console.log(props);
  return isLogged(props) 
    ? <Component { ...props } />
    : <Spinner name='circle' />
}

const isLogged = (props) => props.isLogged;

export const withConditionalRendering = compose(
  withIsLogged(isLogged)
);
