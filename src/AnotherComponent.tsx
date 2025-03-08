import { useRef, useEffect } from 'react';

type AnotherComponentProps<T> = { // T is inferred from the prop that is drilled in
  items: Array<T & { id?: string }>,
}

export function AnotherComponent<T>({items}: AnotherComponentProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(containerRef.current) {
      containerRef.current.innerHTML='done';
    }

    if(containerRef.current) {
      const otherItem = containerRef.current.querySelectorAll<HTMLElement>('[data-item]');
      console.log(otherItem);      
    }
  }, [])

  return (
    <>
      { items.map(i => <div key={i.id}>{i.id}</div>) }
      <div ref={containerRef}>
        <div data-item="another">Another data item 1</div>
        <div data-item="another">Another data item 2</div>
      </div>
    </>
  )
}