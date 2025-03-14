import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon,
  IconButton,
  Link,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from '@chakra-ui/react';
import { FaBook, FaRegCircle } from 'react-icons/fa6';
import { panel } from './panel';
import { ElementType } from 'react';

interface Panel {
  name: string;
  icons: ElementType;
  items: Items[];
}
interface Items {
  item_name: string;
  target: string;
}
interface Props {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: Props) => {
  const panels: Panel[] = panel;
  return (
    <>
      {isOpen ? (
        <Accordion defaultIndex={[0]} allowToggle>
          {panels.map((item, idx) => (
            <AccordionItem color={'white'} border={'none'} key={idx}>
              <h2>
                <AccordionButton  bg='#222d32'>
                  <Icon as={item.icons} />
                  <Box as='span' flex='1' ml={2} textAlign='left'>
                    {item.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel bg={'#2c3b41'} pb={4}>
                <List spacing={3}>
                  {item.items.map((data, idx) => (
                    <ListItem key={idx} alignItems={'center'}>
                      <ListIcon as={FaRegCircle} />
                      <Link href={data.target}>{data.item_name}</Link>
                    </ListItem>
                  ))}
                </List>
              </AccordionPanel>
            </AccordionItem>
          ))}
          <AccordionItem color={'white'} border={'none'}>
            <h2>
              <AccordionButton  bg='#222d32'>
                <Icon as={FaBook} />
                <Link href='#' as='span' flex='1' ml={2} textAlign='left'>
                  Elektron kutubxona
                </Link>
              </AccordionButton>
            </h2>
          </AccordionItem>
        </Accordion>
      ) : (
        <Stack my={2}>
          {panels.map((item, idx) => (
            <Menu key={idx}>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<item.icons />}
                variant='outline'
              />
              <MenuList position={'absolute'} left={3} top={-45}>
                {item.items.map((i, index) => (
                  <MenuItem key={index}>
                    <Link href={i.target}>{i.item_name}</Link>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          ))}
          <Menu>
            <Link
              href='#'
              as={IconButton}
              aria-label='Options'
              icon={<FaBook />}
              variant='outline'
            ></Link>
          </Menu>
        </Stack>
      )}
    </>
  );
};

export default Sidebar;
