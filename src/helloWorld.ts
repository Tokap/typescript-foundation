/* eslint-disable import/prefer-default-export */
export function printHelloWorld(): boolean {
  const x = 'Hello world';
  /* eslint-disable no-console */
  console.log(x);
  return true;
}

printHelloWorld();
