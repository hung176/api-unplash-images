import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ImagesPage from './page/ImagesPage';

function App() {
  const { isLoading, images, error } = useSelector(state => state.images);
  const dispatch = useDispatch();
  
  const onLoadImages = () => {
    dispatch({ type: 'IMAGE_LOAD' });
  }

  useEffect(() => {
    onLoadImages();
  }, [])

  return (
    <div className="App">
      <ImagesPage
        isLoading={isLoading}
        images={images}
        error={error}
        onLoadImages={onLoadImages}
      />
    </div>
  );
}

export default App;
