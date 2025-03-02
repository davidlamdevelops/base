import { useState, useEffect, useRef } from 'react';
import { Todo } from './types';

interface AppProps {
  toDo: Todo
}

function App(props: AppProps) {
  const { toDo: { name } } = props;
  const [item, setItem] = useState<string | null>(null);
  const somethingElse = useRef<string>('beginning string');
  const somethingElseDiv = document.querySelector<HTMLDivElement>("#something-else-container");
  const somethingElseContainer = useRef<HTMLDivElement>(somethingElseDiv);

  useEffect(() => {
    if(item !== null) {
      localStorage.setItem('item', item);
      setItem(item + 'hey');
      console.log(somethingElseContainer)
    }
  }, [item])

  useEffect(() => {
    const newItem = localStorage.getItem('item') as string;
    somethingElse.current = newItem;
  }, [item])

  return (
    <>
      Hello world: {name}
      <div id="something-else-container">Something else: {somethingElse.current}</div>
    </>
  )
}

export default App
