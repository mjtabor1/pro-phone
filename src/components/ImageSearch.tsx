import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const ImageSearch: React.FC = () => {

  const [currentInput, setCurrentInput] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const searchValue = e.target.value;
    setCurrentInput(searchValue);
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {

  }

  return (
    <>
      <FormControl 
        onChange={onChange}
        value={currentInput}
        type='text'
        placeholder='Search Images'
        className="mr-sm-2"
      />
      <Button onClick={handleSubmit} variant="outline-info">
        Search
      </Button>
    </>
  );
}

export default React.memo(ImageSearch);