import { Box } from '@mui/material';
import React from 'react';
import { A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ExerciseCard from '../Home/ExerciseCard';

const ExerciseSlider = ({data}) => {
    return (
        <Box>
      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        speed={3000}
        autoplay={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
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
          data.map(item => <SwiperSlide
            key={item.id || item}
          >
                <Box>
                   <ExerciseCard exercise={item} />
                </Box>
          </SwiperSlide>)
        }
      </Swiper>
    </Box>
    );
};

export default ExerciseSlider;