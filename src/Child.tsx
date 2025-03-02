import { ReactNode } from 'react';
import { TitleStatus } from './types';

interface ChildProps {
  status: TitleStatus
}

type Board = TitleStatus[][]

const fn = () : Board => {
  return [['hidden', 'hidden'], ['marked', 'here']];
}

function Child({ status }: ChildProps): ReactNode {
  const board = fn();
  const boardAltered = JSON.stringify(board) as string;
  return (
    <>
      Hello from Child: {status}
      {boardAltered}
    </>
  )
}

export default Child;
