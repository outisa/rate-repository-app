import React from 'react';
import { SignInForm } from '../../components/SignInForm';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';

describe('SignIn', () => {
  describe('SignInForm', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInForm onSubmit={onSubmit} />);

      await act(async () => {
        await fireEvent.changeText(getByTestId('usernameField'), 'kalle');
      });
      await act(async () => {
        await fireEvent.changeText(getByTestId('passwordField'), 'password');
      });
      await act(async () => {
        await fireEvent.press(getByTestId('submitButton'));
      });


      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
        });
      });
    });
  });
  
});