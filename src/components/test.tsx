import { useEffect, useState } from 'react';

const TestChild = ({ state, setState }: any) => {
  console.log('state in child', state);
  useEffect(() => {
    console.log('use effect child !');
    setState(state + 1);
  }, []);
  return <div>child</div>;
};

const Test = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log('use effect mother !');
    setState(state + 1);
    console.log(state);
  }, []);
  return (
    <div>
      test component
      <TestChild state={state} setState={setState}>
        child
      </TestChild>
    </div>
  );
};

export default Test;
