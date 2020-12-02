import React from 'react';
import '../page/styles.css';

function ImagesGrid( { images }) {
  return (
    <div>
      {/* <Row gutter={[8,6]}>
        {images.map(image => (
          
          <Col 
            className="gutter-row"
            key={image.id}
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <span>{image.width}/{image.height}</span>
            <Card
              bordered={false}
              cover={<img alt={image.alt_description} src={image.urls.small} />}
              className='card-test'
            />
          </Col>
        ))}
        </Row> */}
      <div className="grid">
        {images.map(image => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(
                image.height / image.width,
            )}`}
          >
            <img
                src={image.urls.small}
                alt={image.user.username}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImagesGrid;
