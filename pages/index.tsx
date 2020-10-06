import { useState } from 'react';
import {
  Flex,
  Image,
  Button,
  Text,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/core';
import Input from '../components/Input';
import axios from 'axios';

export default function Home() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('IDLE');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignUpToNewsletter = async (e) => {
    e.preventDefault();

    setState('LOADING');
    setErrorMessage(null);

    try {
      const response = await axios.post('/api/subscribe', {
        email,
        phone,
      });
      setState('SUCCESS');
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState('ERROR');
    }
  };

  return (
    <Flex as="main" height="120vh" justifyContent="center" alignItems="center">
      <Flex
        as="form"
        onSubmit={handleSignUpToNewsletter}
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%"
        maxW="600px"
      >
        <Image marginBottom={8} src="/animais.png" alt="Animais" />

        <Text
          textAlign="center"
          fontSize="20px"
          color="gray.400"
          marginBottom={2}
        >
          Para participar do Chá de fraldas do baby Gil, digite aqui embaixo seu
          e-mail ou whatsapp e receba nossas instruções!
        </Text>

        <FormLabel
          textAlign="center"
          fontSize="16px"
          color="gray.400"
          marginTop={2}
        >
          E-mail:
        </FormLabel>
        <Input
          placeholder="Seu melhor e-mail"
          marginTop={1}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormLabel
          textAlign="center"
          fontSize="16px"
          color="gray.400"
          marginTop={4}
        >
          WhatsApp:
        </FormLabel>
        <Input
          placeholder="Seu número de WhatsApp"
          marginTop={1}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <FormHelperText style={{ color: '#fff' }}>
          Se quiser receber as orientações por WhatsApp é só preencher este
          campo, caso contrário só deixar vazio... 😊
        </FormHelperText>

        <Button
          type="submit"
          backgroundColor="green.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'purple.600' }}
        >
          INSCREVER
        </Button>
        {state === 'ERROR' && (
          <p style={{ marginTop: '10px', color: 'red' }}>{errorMessage}</p>
        )}
        {state === 'SUCCESS' && (
          <p style={{ marginTop: '10px', color: 'green' }}>Successo!🎉</p>
        )}
        <Text textAlign="center" fontSize="18px" marginTop={2} color="#fff">
          Feito com ❤️ por Igor e Dai
        </Text>
      </Flex>
    </Flex>
  );
}
