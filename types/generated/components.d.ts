import type { Schema, Struct } from '@strapi/strapi';

export interface TitleTitle extends Struct.ComponentSchema {
  collectionName: 'components_title_titles';
  info: {
    displayName: 'title';
    icon: 'alien';
  };
  attributes: {
    sectionMedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    sectionTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'title.title': TitleTitle;
    }
  }
}
