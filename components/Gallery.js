import * as React from 'react';
import Masonry from 'react-masonry-component';
const contentful = require('contentful');

const masonryOptions = {
  transitionDuration: 0,
};

const style = {
  backgroundColor: 'rgb(25,3,22)',
  padding: '25px 0px',
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
                  width: calc(33.3% - 40px);
                  min-width: calc(33.3% - 40px);
                  background: rgb(25, 3, 22);
                  padding: 20px;
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
          style={style}
        >
          {childElements}
        </Masonry>
      </>
    );
  }
}

export default Gallery;
