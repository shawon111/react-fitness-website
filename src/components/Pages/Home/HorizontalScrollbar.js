import { Box } from '@mui/system';
import React from 'react';
import BodyPart from './BodyPart';
import { A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => {
    return (
        <Box>
        <Swiper
        modules={[A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={4}
                speed={1500}
                autoplay={true}
                breakpoints={{ 
                    1024: {
                      slidesPerView: 4,
                    },
                    576: {
                      slidesPerView: 2,
                    },
                    320: {
                      slidesPerView: 1,
                    }
                  }}
        >
            {
                data.map(item=> <SwiperSlide
                    key={item.id || item}
                ><Box>
                    <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                </Box></SwiperSlide>)
            }
        </Swiper>
        </Box>
    );
};

export default HorizontalScrollbar;