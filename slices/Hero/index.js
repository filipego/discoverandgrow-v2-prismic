import Container from "@/app/components/Container";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const Hero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" &&
        <Container classes="hero">
          <PrismicRichText field={slice.primary.heading} />
          <PrismicRichText field={slice.primary.paragraph} />
          <PrismicNextImage field={slice.primary.image} />
        </Container>
      }

      {slice.variation === "homeHero" &&
        <Container classes="hero hero--home container--smaller">
          <PrismicRichText field={slice.primary.heading} />
          <div className="hero--home__text grid-col-2">
            <PrismicRichText field={slice.primary.paragraph} />
            <ul>
              <li><PrismicNextLink field={slice.primary.link_1}>{slice.primary.label_1} &#62;</PrismicNextLink></li>
              <li><PrismicNextLink field={slice.primary.link_2}>{slice.primary.label_2} &#62;</PrismicNextLink></li>
            </ul>
          </div>
        </Container>
      }
    </section>
  );
};

export default Hero;
