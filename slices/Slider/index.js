'use client'

import Container from "@/app/components/Container";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';


/**
 * @typedef {import("@prismicio/client").Content.SliderSlice} SliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SliderSlice>} SliderProps
 * @param {SliderProps}
 */
const Slider = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

      <Swiper

        modules={[Navigation]}
        navigation
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 1
          },
          1024: {
            slidesPerView: 1
          },
        }}
      >

        {slice.items.map((item, index) => (
          <SwiperSlide key={index}>
            <Container classes="slider grid-col-2">
              <PrismicNextImage field={item.image} />
              <div className="slider__text">
                <PrismicRichText field={item.heading} />
                <PrismicRichText field={item.paragraph} />
              </div>
            </Container>
          </SwiperSlide>
        ))}

      </Swiper>
    </section >
  );
};

export default Slider;
