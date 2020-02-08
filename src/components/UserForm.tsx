import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

export const employeeInitValues = {
  firstName: '',
  lastName: '',
  age: 0,
  seniority: 'junior',
  email: ''
};

const UserForm = () => {
  const [values, setValues] = useState(employeeInitValues);
  const [sentMail, setSentMail] = useState('');

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('gmail', templateId, variables)
      .then(res => {
        setSentMail('Email successfully sent!');
        console.log('Email successfully sent!');
      })
      .catch(err => {
        setSentMail('Sent mail failed');
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        );
      });
  };

  const emptyValidation = values => {
    const objValues = Object.values(values);
    return objValues.filter(value => value === '').length > 0;
  };

  const handleSubmitForm = () => {
    if (emptyValidation(values)) {
      alert('all fields should be filled');
      return null;
    }
    const templateId = 'template_fRyI4uWo';
    sendFeedback(templateId, {
      message_html: JSON.stringify(values),
      from_name: 'userFormTest',
      to_name: 'rcnavarrop@gmail.com'
    });
  };

  console.log(emptyValidation(values));
  return (
    <UserFormBox>
      <TextField
        id='firstName'
        label='First Name'
        placeholder='Name(s)'
        value={values.firstName}
        onChange={handleChange('firstName')}
        fullWidth
        margin='normal'
        variant='outlined'
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        id='lastName'
        label='Last Name'
        placeholder='Last name(s)'
        value={values.lastName}
        onChange={handleChange('lastName')}
        fullWidth
        margin='normal'
        variant='outlined'
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        id='age'
        label='Age'
        placeholder='18'
        value={values.age}
        onChange={handleChange('age')}
        fullWidth
        margin='normal'
        variant='outlined'
        InputLabelProps={{
          shrink: true
        }}
      />

      <TextField
        id='seniority'
        select
        label='Seniority'
        fullWidth
        value={values.seniority}
        onChange={handleChange('seniority')}
        margin='normal'
        variant='outlined'
      >
        {['junior', 'mid', 'senior'].map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id='email'
        label='Email'
        placeholder='Email account'
        value={values.email}
        onChange={handleChange('email')}
        fullWidth
        margin='normal'
        variant='outlined'
        InputLabelProps={{
          shrink: true
        }}
      />
      <Button onClick={handleSubmitForm} color='primary' variant='contained'>
        Submit
      </Button>
      {sentMail}
    </UserFormBox>
  );
};
const UserFormBox = styled.div`
  padding: 1rem;
  border: solid 5px blue;
  border-radius: 0.5rem;
`;

export default UserForm;
