import { Carousel } from 'react-carousel-minimal';

const image1 ='https://cdn.pixabay.com/photo/2021/11/12/07/04/china-6788187_1280.jpg';
const image2 = require('../../../../assets/principalImages/4.jpg');
const image3 = require('../../../../assets/principalImages/6.jpg');
const image4 = require('../../../../assets/principalImages/7.jpg');


export function Image () {
    let arrayImage = [
        {
            image: image1,
            caption: "San Francisco"
        },
        {
            image: image2,
            caption: "San Francisco"
        },
        {
            image: image3,
            caption: "San Francisco"
        },
        {
            image: image4,
            caption: "San Francisco"
        }
    ];

    const captionStyle = {
        fontSize: '1em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    }

    return (
            <div className="flex justify-center w-full relative z-[0]" >
                <div className='w-4/5'>
                    <Carousel
                        data={arrayImage}
                        time={2000}
                        height="300px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={false}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        style={{
                            textAlign: "center",
                            maxWidth: "1000px",
                            maxHeight: "500px",
                            padding: "20px",
                        }}
                        thumbnails={false}
                        thumbnailHeight="50px"
                        thumbnailWidth="100px"
                        className="w-fit"
                    />
                </div>
            </div>
    )
}