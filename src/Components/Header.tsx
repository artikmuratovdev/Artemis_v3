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
  MenuOptionGroup,
  Select,
  Show,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { GoBellFill  } from 'react-icons/go';

interface Props {
  toggler: () => void;
}

const Header = ({ toggler }: Props) => {
  const langs = ["O'zbekcha", 'English', 'Русский'];
  const [lang, setLang] = useState('');
  console.log(lang);

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
      />
      <HStack  spacing={5}>
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
          <GoBellFill  fontSize={23} />
        </Show>
        <Menu closeOnSelect={false}>
          <MenuButton>
            <Flex alignItems={'center'}>
              <Show above='md'>
                <Avatar size={'sm'} src={'src/img/Sharingan.jpg'} />
              </Show>
              <Box textAlign={'start'} ml='3'>
                <Text fontWeight='bold'>Ortiqmuratov D. J</Text>
                <Text fontSize='sm'>KI-223</Text>
              </Box>
            </Flex>
          </MenuButton>
          <MenuList minWidth='240px'>
            <MenuOptionGroup defaultValue='light' title='Theme' type='radio'>
              <MenuItemOption value='light'>Light</MenuItemOption>
              <MenuItemOption value='dark'>Dark</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup type='checkbox'>
              <MenuItemOption value='profil'>Profil</MenuItemOption>
              <MenuItemOption value='person_data'>
                Shaxsiy ma'lumotlar
              </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </HStack>
    </HStack>
  );
};

export default Header;
