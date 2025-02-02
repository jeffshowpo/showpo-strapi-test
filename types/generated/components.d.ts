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
    description: '';
    displayName: 'Carousel';
    icon: 'play';
  };
  attributes: {
    schedule: Schema.Attribute.Component<'showpo.schedule', false>;
    slides: Schema.Attribute.Component<'showpo.carousel-item', true>;
    title: Schema.Attribute.String;
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
    title: Schema.Attribute.String;
  };
}

export interface ShowpoFourImageBanner extends Struct.ComponentSchema {
  collectionName: 'components_showpo_four_image_banners';
  info: {
    description: '';
    displayName: 'FourImageBanner';
    icon: 'dashboard';
  };
  attributes: {
    images: Schema.Attribute.Component<'showpo.image-block', true>;
    title: Schema.Attribute.String;
  };
}

export interface ShowpoImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_showpo_image_blocks';
  info: {
    description: '';
    displayName: 'ImageBlock';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ShowpoMegamenuCalloutItem extends Struct.ComponentSchema {
  collectionName: 'components_showpo_megamenu_callout_items';
  info: {
    description: '';
    displayName: 'MegamenuCalloutItem';
    icon: 'priceTag';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ShowpoMegamenuCallouts extends Struct.ComponentSchema {
  collectionName: 'components_showpo_megamenu_callouts';
  info: {
    displayName: 'MegamenuCallouts';
    icon: 'priceTag';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'showpo.megamenu-callout-item', true>;
  };
}

export interface ShowpoMegamenuLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_showpo_megamenu_link_items';
  info: {
    displayName: 'MegamenuLinkItem';
    icon: 'link';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ShowpoMegamenuLinks extends Struct.ComponentSchema {
  collectionName: 'components_showpo_megamenu_links';
  info: {
    displayName: 'MegamenuLinks';
    icon: 'link';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'showpo.megamenu-link-item', true>;
  };
}

export interface ShowpoSchedule extends Struct.ComponentSchema {
  collectionName: 'components_showpo_schedules';
  info: {
    displayName: 'Schedule';
    icon: 'calendar';
  };
  attributes: {
    endDate: Schema.Attribute.DateTime;
    startDate: Schema.Attribute.DateTime;
  };
}

export interface ShowpoTopBanner extends Struct.ComponentSchema {
  collectionName: 'components_showpo_top_banners';
  info: {
    description: '';
    displayName: 'Top Banner';
    icon: 'apps';
  };
  attributes: {
    blocks: Schema.Attribute.Component<'showpo.top-banner-block', true>;
    title: Schema.Attribute.String;
  };
}

export interface ShowpoTopBannerBlock extends Struct.ComponentSchema {
  collectionName: 'components_showpo_top_banner_blocks';
  info: {
    description: '';
    displayName: 'Top Banner Block';
    icon: 'apps';
  };
  attributes: {
    hideOnMobile: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isClickable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
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
      'showpo.megamenu-callout-item': ShowpoMegamenuCalloutItem;
      'showpo.megamenu-callouts': ShowpoMegamenuCallouts;
      'showpo.megamenu-link-item': ShowpoMegamenuLinkItem;
      'showpo.megamenu-links': ShowpoMegamenuLinks;
      'showpo.schedule': ShowpoSchedule;
      'showpo.top-banner': ShowpoTopBanner;
      'showpo.top-banner-block': ShowpoTopBannerBlock;
    }
  }
}
