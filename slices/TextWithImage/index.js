import Container from "@/app/components/Container";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TextWithImageSlice} TextWithImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextWithImageSlice>} TextWithImageProps
 * @param {TextWithImageProps}
 */
const TextWithImage = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" &&
        <Container classes="text-with-image">
          <div>
            <div className="text-with-image__heading">
              <PrismicRichText field={slice.primary.heading} />
            </div>
            <div className="text-with-image__text">
              <PrismicRichText field={slice.primary.text} />
            </div>
          </div>
          <PrismicNextImage field={slice.primary.image} />
        </Container>}

      {slice.variation === "ImageWithText" &&
        <Container classes="image-with-text">
          <PrismicNextImage field={slice.primary.image} />
          <div>
            <div className="image-with-text__heading">
              <PrismicRichText field={slice.primary.heading} />
            </div>
            <div className="image-with-text__text">
              <PrismicRichText field={slice.primary.text} />
            </div>
          </div>
        </Container>}

      {slice.variation === "TextWithButtonAndImage" &&
        <Container classes="text-with-button-image">
          <div>
            <div className="text-with-button-image__heading">
              <PrismicRichText field={slice.primary.heading} />
            </div>
            <div className="text-with-button-image__text">
              <PrismicRichText field={slice.primary.text} />
            </div>
            <div className="text-with-button-image__link">
              <PrismicNextLink className="btn" field={slice.primary.link}><>{slice.primary.label}</></PrismicNextLink>
            </div>
          </div>
          <PrismicNextImage field={slice.primary.image} />
        </Container>}

      {slice.variation === "ImageWithTextAndButton" &&
        <Container classes="image-with-text-button">
          <PrismicNextImage field={slice.primary.image} />
          <div>
            <div className="image-with-text-button__heading">
              <PrismicRichText field={slice.primary.heading} />
            </div>
            <div className="image-with-text-button__text">
              <PrismicRichText field={slice.primary.text} />
            </div>
            <div className="image-with-text-button__link">
              <PrismicNextLink className="btn" field={slice.primary.link}><>{slice.primary.label}</></PrismicNextLink>
            </div>
          </div>
        </Container>}

    </section>
  );
};

export default TextWithImage;
