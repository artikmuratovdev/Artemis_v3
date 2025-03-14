import { Grid, GridItem, Show, Text } from '@chakra-ui/react';
import Header from './Components/Header';
import { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';

const App = () => {
  const [isOpen , setIsOpen] = useState(true);
  let column 
  if(isOpen){
    column = { lg: '230px 1fr', base: '1fr' }
  }
  else{
    column = { lg: '50px 1fr', base: '1fr' }
  }

  const transitionAside = () => {
    setIsOpen(!isOpen);
  }
  return (
    <Grid
      templateAreas={{
        lg: `"logo header" "aside main"`,
        base: `"logo" "header" "main"`,
      }}
      gridTemplateColumns={column}
      gridTemplateRows={{ lg: '50px 1fr', base: '50px 50px 1fr' }}
      transition="all 0.3s"
      color={'whiteAlpha'}
    >
       <GridItem bg='blue.400' area={'logo'}> {/* logo */}
        <Text color={'white'} cursor={'pointer'} fontSize={'xl'} bg={'blue.400'} textAlign={'center'} h={'50px'} p={1.5} fontWeight={'500'}>
          {isOpen ? "Artemis Project" : "A"}
        </Text>
      </GridItem>
      <GridItem bg='blue.500' area={'header'}> {/* header */}
        <Header toggler={transitionAside}/>
      </GridItem>
      <Show above='lg'>
        <GridItem h={`calc(100vh - 50px)`} bg={'#222d32'}  area={'aside'}> {/* aside */}
          <Sidebar  isOpen={isOpen} />
        </GridItem>
      </Show>
      <GridItem bg='' area={'main'}> {/* main */}
        <Main />
      </GridItem>
    </Grid>
  );
};

export default App;
