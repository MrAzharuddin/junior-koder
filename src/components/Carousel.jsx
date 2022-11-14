import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  // console.log(style, onClick);
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
        borderRadius: '50%',
        width: '19px',
        height: '19px',
      }}
      onClick={onClick}
    />
  );
}

export default function Carousel() {
  var settings = {
    className: 'center',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };
  return (
    <div className="p-12">
      <Slider {...settings}>
        {[
          {
            text: '“Junior Koder has laid the perfect foundation for Coding which is eventually going to last forever as his skill. Thank you for making this new domain of my child learning curve so intersting “.',
            name: 'Suzain Malik',
            class: 'Class 6',
          },
          {
            text: '“Junior Koder has laid the perfect foundation for Coding which is eventually going to last forever as his skill. Thank you for making this new domain of my child learning curve so intersting “.',
            name: 'Suzain Malik',
            class: 'Class 6',
          },
          {
            text: '“Junior Koder has laid the perfect foundation for Coding which is eventually going to last forever as his skill. Thank you for making this new domain of my child learning curve so intersting “.',
            name: 'Suzain Malik',
            class: 'Class 6',
          },
          {
            text: '“Junior Koder has laid the perfect foundation for Coding which is eventually going to last forever as his skill. Thank you for making this new domain of my child learning curve so intersting “.',
            name: 'Suzain Malik',
            class: 'Class 6',
          },
          {
            text: '“Junior Koder has laid the perfect foundation for Coding which is eventually going to last forever as his skill. Thank you for making this new domain of my child learning curve so intersting “.',
            name: 'Suzain Malik',
            class: 'Class 6',
          },
          {
            text: '“Junior Koder has laid the perfect foundation for Coding which is eventually going to last forever as his skill. Thank you for making this new domain of my child learning curve so intersting “.',
            name: 'Suzain Malik',
            class: 'Class 6',
          },
          {
            text: '“Junior Koder has laid the perfect foundation for Coding which is eventually going to last forever as his skill. Thank you for making this new domain of my child learning curve so intersting “.',
            name: 'Suzain Malik',
            class: 'Class 6',
          },
        ].map((res, index) => {
          return (
            <div className="px-4" key={index}>
              <div
                key={res.name + index}
                className="p-10 bg-primary text-white space-y-6 rounded-md"
              >
                <div className="px-8 py-2">
                  <img
                    className=" rounded-md"
                    src="https://thumbs.dreamstime.com/b/indian-family-three-portrait-happy-standing-indoors-56830036.jpg"
                    alt=""
                  />
                </div>
                <p>{res.text}</p>
                <div>
                  <p>{res.name}</p>
                  <p>{res.class}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}