
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
    { name: 'offer1', image: 'demo1.jpg' },
    { name: 'offer2', image: 'demo2.jpg' },
    { name: 'offer3', image: 'demo3.jpg' }
];

const OfferHeader = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        
        
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {data.map((offer, index) => (
                    <div key={index} className="md:h-48">
                        <img
                            src={offer.image}
                            alt={offer.name}
                            className="w-60 h-40 object-cover md:h-full md:w-full "
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default OfferHeader;