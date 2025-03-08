import { useState, useEffect, useRef } from 'react';
import { Todo } from './types';
import { UnionOmit } from './utils/types';
import Child from './Child';

type Event = {
  id: string,
  test: string,
}

interface AppProps {
  toDo: Todo,
  name: UnionOmit<Event, 'id'>
}

function App(props: AppProps) {
  const { toDo: { name } } = props;
  const [item, setItem] = useState<string | null>(null);
  const [eventList, setEventList] = useState<Event[] | null>(null);
  const somethingElse = useRef<string>('beginning string');
  const somethingElseDiv = document.querySelector<HTMLDivElement>("#something-else-container");
  const somethingElseContainer = useRef<HTMLDivElement>(somethingElseDiv);

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if(e.key === 'Escape') console.log("hey");
      const modal = document.querySelector("#modal-container") as HTMLElement;
      console.log("er: this is your modal", modal)
    }
    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    }
  }, [somethingElse])

  useEffect(() => {
    if(item !== null) {
      localStorage.setItem('item', item);
      setEventList([
        ...(eventList ? eventList : []),
        {id: 'hey', test: 'another'}
      ]);
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
      <Child status="marked" />
    </>
  )
}

export default App
