import React, { useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';

interface Props {
  onSubmit: (val: string) => void;
}

const ImageSearch: React.FC<Props> = ({ onSubmit }) => {

  const [currentInput, setCurrentInput] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const searchValue = e.target.value;
    setCurrentInput(searchValue);
  }

  const handleSubmit = () => {
    console.log(currentInput);
    onSubmit(currentInput);
  }

  return (
    <>
      <FormControl 
        onChange={onChange}
        value={currentInput}
        type='text'
        placeholder='Search Images'
      />
      <Button onClick={handleSubmit} variant="outline-info">
        Search
      </Button>
    </>
  );
}

export default React.memo(ImageSearch);