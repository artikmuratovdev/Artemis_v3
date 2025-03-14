import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { study_table } from '../controllers/panel';

interface Data {
  dars_nomi?: string;
  head: { key: string; value: string };
  body: { key: string; value: string }[];
}

const Study_plan = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalData, setModalData] = useState<Data[]>([]);
  const [science, setScience] = useState('');
  const handleClick = (idx: number, index: number, sience: string) => {
    onOpen();
    setScience(sience);
    const data = study_table[idx].table[index].about;
    setModalData([
      {
        head: { key: "Mashg'ulot", value: 'Yuklama' },
        body: [
          { key: "Ma'ruza", value: `${data.maruza}` },
          { key: 'Amaliy', value: `${data.amaliy}` },
          { key: "Mustaqil ta'lim", value: `${data.mustaqil}` },
          { key: 'Jami', value: `${data.jami}` },
        ],
      },
      {
        head: { key: 'Nazorat turi', value: 'Maks. ball' },
        body: [
          { key: 'Joriy nazorat', value: '20 ball' },
          { key: 'Oraliq nazorat', value: '30 ball' },
          { key: 'Yakuniy nazorat', value: '50 ball' },
          { key: 'Umumiy', value: '100 ball' },
        ],
      },
    ]);
  };
  console.log(modalData);

  return (
    <>
      <Accordion defaultIndex={[0]} allowMultiple>
        {study_table.map((item, idx) => (
          <AccordionItem key={idx} borderTop={'3px solid forestgreen'}>
            {({ isExpanded = true }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' fontSize={18} textAlign='left'>
                      {idx + 1}-semestr
                      <Box as='span' fontWeight={'bold'} fontSize={14} ml={7}>
                        {item.date}
                      </Box>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize='12px' />
                    ) : (
                      <AddIcon fontSize='12px' />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <TableContainer>
                    <Table
                      key={idx}
                      size='sm'
                      variant='striped'
                      colorScheme='gray'
                    >
                      <Thead>
                        <Tr>
                          <Th>№</Th>
                          <Th>Fan Nomi</Th>
                          <Th>Fan turi</Th>
                          <Th textAlign={'center'}>yuklama</Th>
                          <Th textAlign={'center'}>kredit</Th>
                          <Th></Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {item.table.map((i, index) => (
                          <Tr key={index}>
                            <Td>{index + 1}</Td>
                            <Td>{i.fan_nomi}</Td>
                            <Td>{i.fan_turi}</Td>
                            <Td textAlign={'center'}>{i.yuklama}</Td>
                            <Td textAlign={'center'}>{i.kredit}.0</Td>
                            <Td textAlign={'end'}>
                              <Button
                                bg={''}
                                onClick={() =>
                                  handleClick(idx, index, i.fan_nomi)
                                }
                              >
                                Batafsil
                              </Button>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{science}</ModalHeader>
          <ModalCloseButton />
          <ModalBody gap={'5'}>
            {modalData.map((item, idx) => (
              <Table key={idx} size='sm' variant='striped' colorScheme='gray'>
                <Thead>
                  <Tr>
                    <Th fontSize={16}>{item.head.key}</Th>
                    <Th fontSize={16}>{item.head.value}</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {item.body.map((i, index) => (
                    <Tr key={index}>
                      <Td py={'3'} fontSize={17}>
                        {i.key}
                      </Td>
                      <Td fontSize={17}>{i.value}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Study_plan;
