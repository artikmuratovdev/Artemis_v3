import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main_page from './Main_Components/Main_page';
import { Box, HStack, Text } from '@chakra-ui/react';
import { ImFilesEmpty } from 'react-icons/im';

const Main = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box padding={3} bg={'gray.100'}>
      <HStack shadow='lg' bg={'white'} justifyContent={'space-between'}>
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
                bg={'gray.300'}
                width={10}
                height={10}
                color={'black'}
              >
                {num}
              </Text>
            ))}
          </HStack>
      </HStack>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main_page />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default Main;
