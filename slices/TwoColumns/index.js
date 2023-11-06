import Container from "@/app/components/Container";
import CircleOfSecurityInterestForm from "@/app/components/Forms/CircleOfSecurityInterestForm";
import SelfLoveFeelingsForm from "@/app/components/Forms/SelfLoveFeelingsForm";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";


/**
 * @typedef {import("@prismicio/client").Content.TextWithImageSlice} TextWithImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextWithImageSlice>} TextWithImageProps
 * @param {TextWithImageProps}
 */
const TwoColumns = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" &&
        <Container classes={`
        text-image text-with-image
        container--smaller
      container--${slice.primary.background}
      container--${slice.primary.padding}
        
        `}>
          <div>
            <div className="text-with-image__heading">
              <PrismicRichText field={slice.primary.heading} />
            </div>
            <div className="text-with-image__text">
              <PrismicRichText field={slice.primary.paragraph} />
            </div>

            {slice.primary.label && <div className="text-with-image__link">
              <PrismicNextLink className="btn" field={slice.primary.link}><>{slice.primary.label}</></PrismicNextLink>
            </div>}

          </div>
          <PrismicNextImage field={slice.primary.image} />
        </Container>}

      {slice.variation === "imageWithText" &&
        <Container classes={`
        text-image image-with-text
        container--smaller
      container--${slice.primary.background}
      container--${slice.primary.padding}
        `}>
          <PrismicNextImage field={slice.primary.image} />
          <div>
            <div className="image-with-text__heading">
              <PrismicRichText field={slice.primary.heading} />
            </div>
            <div className="image-with-text__text">
              <PrismicRichText field={slice.primary.paragraph} />
            </div>
            {slice.primary.label && <div className="image-with-text__link">
              <PrismicNextLink className="btn" field={slice.primary.link}><>{slice.primary.label}</></PrismicNextLink>
            </div>}

          </div>
        </Container>}

      {slice.variation === "defaultForm" &&
        <Container classes={`
        text-image default-form
        container--smaller
      container--${slice.primary.background}
      container--${slice.primary.padding}
        
        `}>
          <div>
            <div className="default-form__heading">
              <PrismicRichText field={slice.primary.heading} />
            </div>
            <div className="default-form__text">
              <PrismicRichText field={slice.primary.paragraph} />
            </div>

            {slice.primary.label && <div className="default-form__link">
              <PrismicNextLink className="btn" field={slice.primary.link}><>{slice.primary.label}</></PrismicNextLink>
            </div>}

          </div>
          {slice.primary.forms === "Self Love Feelings" && <SelfLoveFeelingsForm FORMSPARK_FORM_ID={slice.primary.form_id} />}

          {slice.primary.forms === "Circle Of Security Interest" && <CircleOfSecurityInterestForm FORMSPARK_FORM_ID={slice.primary.form_id} />}
        </Container>}


    </section>
  );
};

export default TextWithImage;
