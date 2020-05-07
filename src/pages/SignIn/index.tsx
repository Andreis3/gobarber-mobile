import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/input';
import Button from '../../components/button';

import logoInf from '../../assets/logo.png';

import { Container, Title } from './styled';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoInf} />

      <Title>Faça seu Logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button
        onPress={() => {
          console.log('deu');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
