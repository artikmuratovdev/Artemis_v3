import { GiHamburgerMenu } from 'react-icons/gi';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  Select,
  Show,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { useState } from 'react';
import { GoBellFill } from 'react-icons/go';

interface Props {
  toggler: () => void;
}

const Header = ({ toggler }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const langs = ["O'zbekcha", 'English', 'Русский'];
  const [lang, setLang] = useState('');
  console.log(colorMode, lang);

  return (
    <HStack
      alignItems={'center'}
      justifyContent={'space-between'}
      px={3}
      h={'50px'}
    >
      <Icon
        as={GiHamburgerMenu}
        onClick={toggler}
        fontSize={'xl'}
        fontWeight={'bold'}
        cursor={'pointer'}
        color={'white'}
      />
      <HStack spacing={5}>
        <Select
          cursor={'pointer'}
          width={120}
          onChange={(e) => setLang(e.target.value)}
          border={0}
        >
          {langs.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Show above='md'>
          <GoBellFill color={'white'} fontSize={23} />
        </Show>
        <Menu closeOnSelect={false}>
          <MenuButton>
            <Flex color={'white'} alignItems={'center'}>
              <Show above='md'>
                <Avatar size={'sm'} src={'src/assets/image/Sharingan.jpg'} />
              </Show>
              <Box textAlign={'start'} ml='3'>
                <Text fontWeight='bold'>Ortiqmuratov D. J</Text>
                <Text fontSize='sm'>KI-223</Text>
              </Box>
            </Flex>
          </MenuButton>
          <MenuList
            color={colorMode === 'dark' ? 'white' : '#0f1319'}
            minWidth='240px'
          >
            <Box as='div'>
              <MenuItemOption onClick={toggleColorMode} value='light'>
                {colorMode}
              </MenuItemOption>
            </Box>
            <MenuDivider />
            <Box>
              <MenuItemOption value='profil'>Profil</MenuItemOption>
              <MenuItemOption value='person_data'>
                Shaxsiy ma'lumotlar
              </MenuItemOption>
            </Box>
          </MenuList>
        </Menu>
      </HStack>
    </HStack>
  );
};

export default Header;
