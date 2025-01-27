import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedRichTextEditor extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_text_editors';
  info: {
    displayName: 'Rich Text Editor';
    icon: 'pencil';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface ShowpoCarousel extends Struct.ComponentSchema {
  collectionName: 'components_showpo_carousels';
  info: {
    displayName: 'Carousel';
    icon: 'play';
  };
  attributes: {
    slides: Schema.Attribute.Component<'showpo.carousel-item', true>;
  };
}

export interface ShowpoCarouselItem extends Struct.ComponentSchema {
  collectionName: 'components_showpo_carousel_items';
  info: {
    description: '';
    displayName: 'CarouselSlide';
    icon: 'picture';
  };
  attributes: {
    image_large: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    image_mobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    link: Schema.Attribute.String;
  };
}

export interface ShowpoFourImageBanner extends Struct.ComponentSchema {
  collectionName: 'components_showpo_four_image_banners';
  info: {
    displayName: 'FourImageBanner';
    icon: 'dashboard';
  };
  attributes: {
    images: Schema.Attribute.Component<'showpo.image-block', true>;
  };
}

export interface ShowpoImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_showpo_image_blocks';
  info: {
    displayName: 'ImageBlock';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.rich-text-editor': SharedRichTextEditor;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'showpo.carousel': ShowpoCarousel;
      'showpo.carousel-item': ShowpoCarouselItem;
      'showpo.four-image-banner': ShowpoFourImageBanner;
      'showpo.image-block': ShowpoImageBlock;
    }
  }
}
