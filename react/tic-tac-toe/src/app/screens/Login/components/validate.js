import React from 'react'

const minValue = min => value => 
	value && value.length < min ? `Most be at least ${min}` : undefined;

const validateActions = {
	required: value => value ? undefined : 'Required field',
	email: value => 
		value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
		'Invalid email address' : undefined,
	minValue8: minValue(8)
}

export default validateActions;
