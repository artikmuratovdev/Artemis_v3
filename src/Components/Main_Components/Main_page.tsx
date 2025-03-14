import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Image,
  Link,
  Stack,
} from '@chakra-ui/react';
import { accordions } from '../../controllers/panel';

const Main_page = () => {
  return (
    <Accordion allowMultiple>
      <Stack spacing={5}>
      {accordions.map((item, idx) => (
        <AccordionItem key={idx}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton bg={'#f3f3f3'}>
                  <Box as='span' flex='1' fontSize={18} textAlign='left'>
                    {item.name}
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel bg={'white'} pb={4}>
                <HStack spacing={6}>
                  {item.items.map((itm , index) => (
                    <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    textAlign={'center'}
                    width={130}
                  >
                    <Image src={itm.img} width={'90px'} />
                    <Link href={itm.target} color={'blue.500'}>
                      {itm.item_name}
                    </Link>
                  </Box>
                  ))}
                </HStack>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
      </Stack>
    </Accordion>
  );
};

export default Main_page;
