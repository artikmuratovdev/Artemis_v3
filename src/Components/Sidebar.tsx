import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon,
  Link,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { FaRegCircle } from 'react-icons/fa6';
import { panel } from './panel';
import { ElementType} from 'react';

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
            <AccordionItem key={idx}>
              <h2>
                <AccordionButton bg='#1d272b'>
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
                      <Link>{data.item_name}</Link>
                    </ListItem>
                  ))}
                </List>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      ) : null}
    </>
  );
};

export default Sidebar;
