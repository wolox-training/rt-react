import React from 'react'

import { MIN_PASSWORD_LENGTH } from '../constants';

const minValue = min => value => 
  value && value.length < min ? `Most be at least ${min}` : undefined;

const validateActions = {
  required: value => value ? undefined : 'Required field',
  email: value => 
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined,
    minValuePassword: minValue(MIN_PASSWORD_LENGTH)
}

export default validateActions;
