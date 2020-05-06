import React from 'react';
import { Image } from 'react-native';

import { Container } from './styled';

import logoInf from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoInf} />
    </Container>
  );
};

export default SignIn;
