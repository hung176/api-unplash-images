import { Button } from 'antd';
import 'antd/dist/antd.css';

import ImagesGrid from '../components/ImagesGrid';

const ImagesPage = ( { images, isLoading, error, onLoadImages }) => {

  return (
    <div className='container'>
      <ImagesGrid 
        images={images}
      />

      <Button
        type="text"
        style={{ fontSize: '25px'}}
        loading={isLoading}
        onClick={onLoadImages}
      >
        More...
      </Button>
    </div>
  )
}

export default ImagesPage;