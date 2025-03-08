import { useContext } from 'react';
import { Context } from './Something';

export function useSomething() {
  const value = useContext(Context);
  if(value === null) {
    throw new Error('useSomething must be used within a provider')
  }
  return value;
}