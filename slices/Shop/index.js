'use client'

import Container from "@/app/components/Container";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client"

import { Swiper, SwiperSlide } from "swiper/react";


/**
 * @typedef {import("@prismicio/client").Content.ShopSlice} ShopSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ShopSlice>} ShopProps
 * @param {ShopProps}
 */
const Shop = async ({ slice }) => {

  const client = createClient()

  const shopItems = await Promise.all(
    slice.items.map((item) => {
      if (
        isFilled.contentRelationship(item.shop_items) && item.shop_items.uid
      ) {
        return client.getByUID('shop_item', item.shop_items.uid)
      }
    })
  )

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="shop"
    >
      <>
        <Container classes="container--smaller container--no-padding-bottom">
          <PrismicRichText field={slice.primary.heading} />

        </Container>

        <div className="slider">
          <Swiper
            slidesPerView={3}
            spaceBetween={100}
            breakpoints={{
              640: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 1
              },
              1024: {
                slidesPerView: 3
              },
            }}
          >


            {shopItems && shopItems.map((item, index) => (
              <SwiperSlide key={index}>

                <PrismicNextImage field={item.data.image} />

                <div>
                  <PrismicRichText field={item.data.title} />
                  <PrismicRichText field={item.data.paragraph} />
                  <PrismicNextLink field={item.data.link}>{item.data.label}</PrismicNextLink>
                </div>

              </SwiperSlide>
            ))}


          </Swiper>
        </div>




      </>


    </section >
  );
};

export default Shop;
