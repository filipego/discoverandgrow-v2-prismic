import Container from "@/app/components/Container";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.CardsSlice} CardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CardsSlice>} CardsProps
 * @param {CardsProps}
 */
const Cards = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container classes={`
      cards
      container--smaller
      container--${slice.primary.background}
      container--${slice.primary.padding}
      `}>
        {slice.primary.heading && <PrismicRichText field={slice.primary.heading} />}

        <ul className="cards__item">
          {slice.items.map((item, index) => (
            <li className={`
            card
            ${slice.primary.align}
            `} key={index}>
              {item.image && <PrismicNextImage field={item.image} />}
              <PrismicRichText field={item.heading} />
              <PrismicRichText field={item.paragraph} />
              {slice.primary.label && <PrismicNextLink className="btn" field={slice.primary.link}>{slice.primary.label}</PrismicNextLink>}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Cards;
