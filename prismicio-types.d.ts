// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice =
  | VideoSlice
  | HeadingAndTextSlice
  | TextWithImageSlice
  | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>
  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>
  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *Settings → Social Media Nav*
 */
export interface SettingsDocumentDataSocialItem {
  /**
   * Link field in *Settings → Social Media Nav*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Social Media Nav*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;

  /**
   * Footer Text field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  footer_text: prismic.RichTextField;

  /**
   * Social Media Nav field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social: prismic.GroupField<Simplify<SettingsDocumentDataSocialItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | HomepageDocument
  | PageDocument
  | SettingsDocument;

/**
 * Primary content in *HeadingAndText → Primary*
 */
export interface HeadingAndTextSliceDefaultPrimary {
  /**
   * Heading field in *HeadingAndText → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: heading_and_text.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Text field in *HeadingAndText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: heading_and_text.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for HeadingAndText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadingAndTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeadingAndTextSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *HeadingAndText → Primary*
 */
export interface HeadingAndTextSliceVerticalPrimary {
  /**
   * Heading field in *HeadingAndText → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: heading_and_text.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Text field in *HeadingAndText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: heading_and_text.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Vertical variation for HeadingAndText Slice
 *
 * - **API ID**: `vertical`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadingAndTextSliceVertical = prismic.SharedSliceVariation<
  "vertical",
  Simplify<HeadingAndTextSliceVerticalPrimary>,
  never
>;

/**
 * Slice variation for *HeadingAndText*
 */
type HeadingAndTextSliceVariation =
  | HeadingAndTextSliceDefault
  | HeadingAndTextSliceVertical;

/**
 * HeadingAndText Shared Slice
 *
 * - **API ID**: `heading_and_text`
 * - **Description**: HeadingAndText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadingAndTextSlice = prismic.SharedSlice<
  "heading_and_text",
  HeadingAndTextSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Paragraph field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceHomeHeroPrimary {
  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Paragraph field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * Link 1 field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.link_1
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_1: prismic.LinkField;

  /**
   * Label 1 field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.label_1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label_1: prismic.KeyTextField;

  /**
   * Link 2 field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.link_2
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_2: prismic.LinkField;

  /**
   * Label 2 field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.label_2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label_2: prismic.KeyTextField;
}

/**
 * Home Hero variation for Hero Slice
 *
 * - **API ID**: `homeHero`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceHomeHero = prismic.SharedSliceVariation<
  "homeHero",
  Simplify<HeroSliceHomeHeroPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceHomeHero;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *TextWithImage → Primary*
 */
export interface TextWithImageSliceDefaultPrimary {
  /**
   * Heading field in *TextWithImage → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Text field in *TextWithImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *TextWithImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for TextWithImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextWithImageSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *TextWithImage → Primary*
 */
export interface TextWithImageSliceImageWithTextPrimary {
  /**
   * Image field in *TextWithImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Heading field in *TextWithImage → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Text field in *TextWithImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * ImageWithText variation for TextWithImage Slice
 *
 * - **API ID**: `imageWithText`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceImageWithText = prismic.SharedSliceVariation<
  "imageWithText",
  Simplify<TextWithImageSliceImageWithTextPrimary>,
  never
>;

/**
 * Primary content in *TextWithImage → Primary*
 */
export interface TextWithImageSliceTextWithButtonAndImagePrimary {
  /**
   * Heading field in *TextWithImage → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Text field in *TextWithImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Link field in *TextWithImage → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *TextWithImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Image field in *TextWithImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * TextWithButtonAndImage variation for TextWithImage Slice
 *
 * - **API ID**: `textWithButtonAndImage`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceTextWithButtonAndImage =
  prismic.SharedSliceVariation<
    "textWithButtonAndImage",
    Simplify<TextWithImageSliceTextWithButtonAndImagePrimary>,
    never
  >;

/**
 * Primary content in *TextWithImage → Primary*
 */
export interface TextWithImageSliceImageWithTextAndButtonPrimary {
  /**
   * Image field in *TextWithImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Heading field in *TextWithImage → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Text field in *TextWithImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Link field in *TextWithImage → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *TextWithImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * ImageWithTextAndButton variation for TextWithImage Slice
 *
 * - **API ID**: `imageWithTextAndButton`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceImageWithTextAndButton =
  prismic.SharedSliceVariation<
    "imageWithTextAndButton",
    Simplify<TextWithImageSliceImageWithTextAndButtonPrimary>,
    never
  >;

/**
 * Slice variation for *TextWithImage*
 */
type TextWithImageSliceVariation =
  | TextWithImageSliceDefault
  | TextWithImageSliceImageWithText
  | TextWithImageSliceTextWithButtonAndImage
  | TextWithImageSliceImageWithTextAndButton;

/**
 * TextWithImage Shared Slice
 *
 * - **API ID**: `text_with_image`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSlice = prismic.SharedSlice<
  "text_with_image",
  TextWithImageSliceVariation
>;

/**
 * Primary content in *Video → Primary*
 */
export interface VideoSliceDefaultPrimary {
  /**
   * Video field in *Video → Primary*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: video.primary.video
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  video: prismic.EmbedField;
}

/**
 * Default variation for Video Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<VideoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Video*
 */
type VideoSliceVariation = VideoSliceDefault;

/**
 * Video Shared Slice
 *
 * - **API ID**: `video`
 * - **Description**: Video
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoSlice = prismic.SharedSlice<"video", VideoSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      SettingsDocumentDataSocialItem,
      AllDocumentTypes,
      HeadingAndTextSlice,
      HeadingAndTextSliceDefaultPrimary,
      HeadingAndTextSliceVerticalPrimary,
      HeadingAndTextSliceVariation,
      HeadingAndTextSliceDefault,
      HeadingAndTextSliceVertical,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceHomeHeroPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceHomeHero,
      TextWithImageSlice,
      TextWithImageSliceDefaultPrimary,
      TextWithImageSliceImageWithTextPrimary,
      TextWithImageSliceTextWithButtonAndImagePrimary,
      TextWithImageSliceImageWithTextAndButtonPrimary,
      TextWithImageSliceVariation,
      TextWithImageSliceDefault,
      TextWithImageSliceImageWithText,
      TextWithImageSliceTextWithButtonAndImage,
      TextWithImageSliceImageWithTextAndButton,
      VideoSlice,
      VideoSliceDefaultPrimary,
      VideoSliceVariation,
      VideoSliceDefault,
    };
  }
}
