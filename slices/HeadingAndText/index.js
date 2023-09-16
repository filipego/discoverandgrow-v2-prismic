import Container from "@/app/components/Container";
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
      <Container classes={`heading-text ${slice.variation === 'vertical' ? `heading-text--vertical` : ''}`}>
        <div className="heading-text__heading">
          <PrismicRichText field={slice.primary.heading} />
        </div>
        <div className="heading-text__text">
          <PrismicRichText field={slice.primary.text} />
        </div>
      </Container>
    </section>
  );
};

export default HeadingAndText;
