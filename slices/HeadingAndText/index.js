import Container from "@/app/components/Container";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeadingAndTextSlice} HeadingAndTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeadingAndTextSlice>} HeadingAndTextProps
 * @param {HeadingAndTextProps}
 */
const HeadingAndText = ({ slice }) => {


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container
        // wrapperClasses={
        //   `wrapper--${slice.primary.background_elipse}`
        // }
        classes={
          `container--smaller 
        heading-text ${slice.variation === 'vertical' ? `heading-text--vertical grid-col-1` : 'grid-col-2'}
        container--${slice.primary.background}
        container--${slice.primary.padding}
        `}>
        <div className="heading-text__heading">
          <PrismicRichText field={slice.primary.heading} />
        </div>
        <div className="heading-text__text">
          <PrismicRichText field={slice.primary.text} />
          {slice.primary.label && <PrismicNextLink className="btn" field={slice.primary.link}>{slice.primary.label}</PrismicNextLink>}
        </div>
      </Container>
    </section>
  );
};

export default HeadingAndText;
