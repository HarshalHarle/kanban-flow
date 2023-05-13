import { useLocalStorage } from 'usehooks-ts';

import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../utils/enums';
import { TaskModel } from '../utils/models';

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>('tasks', {
    
    'Backlog  ⛔': [
    {
      id: uuidv4(),
      column: ColumnType.BACKLOG,
      title: 'Task -1',
      color: 'red.300',
    },
  ],

  'Design 🎨': [
    {
      id: uuidv4(),
      column: ColumnType.DESIGN,
      title: 'Task 2',
      color: 'purple.400',
    },
  ],

    'To Do  ⏰': [
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: 'Task 0',
        color: 'blue.300',
      },
    ],
    'In Progress  🧑🏻‍💻': [
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: 'Task 1',
        color: 'yellow.300',
      },
    ],
    
    'Code Review  📃': [
      {
        id: uuidv4(),
        column: ColumnType.CODE_REVIEW,
        title: 'Task 3',
        color: 'orange.300',
      },
    ],

    'Testing  🪲': [
      {
        id: uuidv4(),
        column: ColumnType.TESTING,
        title: 'Task 4',
        color: 'teal.400',
      },
    ],

    'Deployed  🚀': [
      {
        id: uuidv4(),
        column: ColumnType.DEPLOYED,
        title: 'Task 5',
        color: 'green.300',
      },
    ],

    'Under Maintainance  ⚙︰': [
      {
        id: uuidv4(),
        column: ColumnType.MAINTAIN,
        title: 'Task 5',
        color: 'yellow.500',
      },
    ],
    
  });
}

export default useTaskCollection;
