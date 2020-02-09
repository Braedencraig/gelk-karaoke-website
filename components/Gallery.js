import * as React from 'react';
import Masonry from 'react-masonry-component';
const contentful = require('contentful');

const masonryOptions = {
  transitionDuration: 0,
};

const imagesLoadedOptions = { background: '.my-bg-image-el' };

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      media: [],
    };
  }

  componentDidMount() {
    const client = contentful.createClient({
      space: 'sqmp3jmwaedr',
      accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU',
    });

    client.getEntries({ content_type: 'picsAndVideos' }).then(response => {
      this.setState({
        media: response.items,
      });
    });
  }

  render() {
    const childElements = this.state.media.map((pictures, i) => {
      if (pictures.fields.pictures) {
        return pictures.fields.pictures.map((pictures, i) => {
          return (
            <>
              <div className='image-element-class'>
                <img src={pictures.fields.file.url} />
              </div>
              <style jsx>{`
                .image-element-class {
                  width: 33.3%;
                  min-width: 33.3%;
                }
                img {
                  width: 100%;
                  height: auto;
                }
              `}</style>
            </>
          );
        });
      }
    });

    return (
      <>
        <Masonry
          className={'my-gallery-class'} // default ''
          elementType={'div'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
          {childElements}
        </Masonry>
      </>
    );
  }
}

export default Gallery;
