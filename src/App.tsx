import {} from '@chakra-ui/icons';
import { Container, Heading, Box, HStack } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import DarkModeIconButton from './components/DarkModeIconButton';
import { ColumnType } from './utils/enums';

function App() {
  return (
    <main>
      <Heading
        fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
        fontWeight="bold"
        textAlign="center"
        bgGradient="linear(to-l, #FC466B, #3F5EFB)"
        bgClip="text"
        mt={2}
      >
        KanbanFlow → Manage your workflow
      </Heading>
      <DarkModeIconButton position="absolute" top={0} right={2} />
      <DndProvider backend={HTML5Backend}>
        <Container maxWidth="container.lg" px={4} py={10}>
        <Box overflowX="scroll">
  <HStack spacing={{ base: 16, md: 4 }}>
    <Column column={ColumnType.BACKLOG} />
    <Column column={ColumnType.DESIGN} />
    <Column column={ColumnType.TO_DO} />
    <Column column={ColumnType.IN_PROGRESS} />
    <Column column={ColumnType.CODE_REVIEW} />
    <Column column={ColumnType.TESTING} />
    <Column column={ColumnType.DEPLOYED} />
    <Column column={ColumnType.MAINTAIN} />
  </HStack>
</Box>


        </Container>
      </DndProvider>
    </main>
  );
}

export default App;
