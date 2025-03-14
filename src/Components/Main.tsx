import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main_page from './Main_Components/Main_page';
import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import { ImFilesEmpty } from 'react-icons/im';

const Main = () => {
  const nums = [
    { num: 1, checked: false },
    { num: 2, checked: false },
    { num: 3, checked: false },
    { num: 4, checked: true },
    { num: 5, checked: false },
    { num: 6, checked: false },
    { num: 7, checked: false },
    { num: 8, checked: false },
  ];
  return (
    <Stack spacing={5} padding={3}>
      <HStack shadow='md' bg={'white'} justifyContent={'space-between'}>
        <HStack>
          <Box bg={'green.500'} padding={'2'}>
            <ImFilesEmpty fontSize={50} color={'white'} />
          </Box>
          <Text>KI-223</Text>
        </HStack>
        <HStack px={2} justifyContent={'space-between'}>
          <Text>SEMESTR</Text>
          {nums.map((num) => (
            <Text
              cursor={'pointer'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              bg={num.checked ? "green.400" : 'gray.100'}
              width={10}
              height={10}
              color={num.checked ? "white" : 'black'}
            >
              {num.num}
            </Text>
          ))}
        </HStack>
      </HStack>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main_page />} />
        </Routes>
      </BrowserRouter>
    </Stack>
  );
};

export default Main;
