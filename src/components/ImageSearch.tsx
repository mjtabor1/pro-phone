import React from 'react';

const ImageSearch: React.FC = () => {

  return (
    // <div>This is the home search page</div>
    <form className="image-search">
      <input 
        className="input-search"
        placeholder='Search Images'
      />
      <button 
        className="input-button"
        type="submit"
      >
        Search
      </button>
    </form>
  )
}

export default React.memo(ImageSearch);