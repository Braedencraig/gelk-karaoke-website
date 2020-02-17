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

class Videos extends React.Component {
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

    client
      .getEntries({ limit: 1, content_type: 'picsAndVideos' })
      .then(response => {
        this.setState({
          media: response.items,
        });
      });
  }

  render() {
    const childElements = this.state.media.map((videos, i) => {
      if (videos.fields.videos) {
        return videos.fields.videos.map((videos, i) => {
          return (
            <>
              <div className='image-element-class'>
                <video width='450' height='345' controls preload='metadata'>
                  <source
                    src={`${videos.fields.file.url}#t=0.5`}
                    type='video/mp4'
                  />
                </video>
              </div>
              <style jsx>{`
                .image-element-class {
                  width: calc(33.3% - 20px);
                  min-width: calc(33.3% - 20px);
                  background: rgb(25, 3, 22);
                  padding: 10px;
                }
                video {
                  width: 100%;
                  height: auto;
                }

                @media screen and (max-width: 1000px) {
                  .image-element-class {
                    width: calc(50% - 20px);
                    min-width: calc(50% - 20px);
                    background: rgb(25, 3, 22);
                    padding: 10px;
                  }
                }

                @media screen and (max-width: 600px) {
                  .image-element-class {
                    width: calc(100% - 20px);
                    min-width: calc(100% - 20px);
                    background: rgb(25, 3, 22);
                    padding: 10px;
                  }
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

export default Videos;
