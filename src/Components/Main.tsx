import { Route, Routes } from 'react-router-dom';
import Main_page from './Main_Components/Main_page';
import { Box, HStack, Stack, Text} from '@chakra-ui/react';
import { ImFilesEmpty } from 'react-icons/im';
import Study_plan from './Main_Components/Study_plan';
import { useState } from 'react';

const Main = () => {
  const [nums , setNums] = useState([
    { num: 1, checked: false },
    { num: 2, checked: false },
    { num: 3, checked: false },
    { num: 4, checked: true },
    { num: 5, checked: false },
    { num: 6, checked: false },
    { num: 7, checked: false },
    { num: 8, checked: false },
  ]);
  const handleChange = (idx: number) => {
    setNums(nums.map((num, i) => 
      i === idx ? { ...num, checked: true } : { ...num, checked: false }
    ));
  };
  return (
    <Stack spacing={5} padding={3}>
      <HStack shadow='md'  justifyContent={'space-between'}>
        <HStack>
          <Box bg={'green.500'} padding={'2'}>
            <ImFilesEmpty fontSize={50} color={'white'} />
          </Box>
          <Text>KI-223</Text>
        </HStack>
        <HStack px={2} justifyContent={'space-between'}>
          <Text>SEMESTR</Text>
          {nums.map((num,idx) => (
            <Text
              key={idx}
              cursor={'pointer'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              bg={num.checked ? "green.400" : 'gray.100'}
              width={10}
              height={10}
              color={num.checked ? "white" : 'black'}
              onClick={() => handleChange(idx)}
            >
              {num.num}
            </Text>
          ))}
        </HStack>
      </HStack>
        <Routes>
          <Route index element={<Main_page />} />
          <Route path='/education'>
            <Route path='curriculum' element={<Study_plan />} />
          </Route>
        </Routes>
    </Stack>
  );
};

export default Main;
