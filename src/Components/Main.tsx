import { Route, Routes } from 'react-router-dom';
import Main_page from './Main_Components/Main_page';
import { Box, HStack, Show, Spacer, Stack, Text } from '@chakra-ui/react';
import { ImFilesEmpty } from 'react-icons/im';
import Study_plan from './Main_Components/Study_plan';
import { useState } from 'react';
import Time_Table from './Main_Components/Time_Table';

const Main = () => {
  const [nums, setNums] = useState([
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
    const updatedNums = nums.map((num, i) =>
      i === idx ? { ...num, checked: true } : { ...num, checked: false }
    );
    setNums(updatedNums);
  };
  return (
    <Stack zIndex={1} spacing={5} padding={3}>
      <HStack flexDirection={{base:'column',md:'row'}} shadow='md'>
        <HStack>
          <Show above='md'>
            <Box bg={'green.500'} padding={'2'}>
              <ImFilesEmpty fontSize={50} color={'white'} />
            </Box>
          </Show>
          <Text px={{base:4,md:0}} fontWeight={'bold'}>KI-223</Text>
        </HStack>
        <Spacer />
        <HStack flexDirection={{base:'column',md:'row'}} p={2}>
          <Text>SEMESTR</Text>
          <Spacer />
          <HStack>
          {nums.map((num, idx) => (
            <Text
              key={idx}
              cursor={'pointer'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              bg={num.checked ? 'green.400' : 'gray.100'}
              width={{base:8, md:10}}
              height={{base:8, md:10}}
              color={num.checked ? 'white' : 'black'}
              onClick={() => handleChange(idx)}
            >
              {num.num}
            </Text>
          ))}
          </HStack>
        </HStack>
      </HStack>
      <Routes>
        <Route index element={<Main_page />} />
        <Route path='/education'>
          <Route path='curriculum' element={<Study_plan />} />
          <Route path='time-table' element={<Time_Table />} />
        </Route>
      </Routes>
    </Stack>
  );
};

export default Main;
