import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router';
import { accordions } from '../controllers/panel';

const Main_page = () => {
  return accordions.map((item, idx) => (
    <Accordion defaultIndex={[0]} key={idx} allowMultiple>
      <AccordionItem borderTop={'3px solid forestgreen'}>
        {({ isExpanded = true }) => (
          <>
            <h2>
              <AccordionButton bg={''}>
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
            <AccordionPanel pb={4}>
              <Grid
                templateColumns={{
                  base: 'repeat(2, 1fr)',
                  sm: 'repeat(3, 1fr)',
                  md: 'repeat(6, 1fr)',
                }}
                gap={6}
              >
                {item.items.map((itm, index) => (
                  <Link key={index} to={itm.target}>
                    <Box
                      display={'flex'}
                      flexDirection={'column'}
                      alignItems={'center'}
                      textAlign={'center'}
                    >
                      <Image src={itm.img} width={'90px'} />
                      {itm.item_name}
                    </Box>
                  </Link>
                ))}
              </Grid>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  ));
};

export default Main_page;
