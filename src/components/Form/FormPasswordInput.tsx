import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {PasswordInput, PasswordInputProps} from '@components';

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...passwordInputProps
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <PasswordInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...passwordInputProps}
        />
      )}
    />
  );
}

// Referencia anterior

/* <Controller
control={control}
name="password"
rules={{
  required: 'Senha obrigatória',
  minLength: {value: 8, message: 'Senha minimo 8'},
}}
render={({field, fieldState}) => (
  <PasswordInput
    value={field.value}
    onChangeText={field.onChange}
    errorMessage={fieldState.error?.message}
    label="Senha"
    placeholder="Digite sua senha"
    boxProps={{mb: 's48'}}
  />
)}
/> */
