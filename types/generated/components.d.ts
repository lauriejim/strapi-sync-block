import type { Schema, Attribute } from '@strapi/strapi';

export interface DefaultLogos extends Schema.Component {
  collectionName: 'components_default_logos';
  info: {
    displayName: 'Logos';
    icon: 'picture';
  };
  attributes: {
    logos: Attribute.Media;
  };
}

export interface DefaultSyncBlock extends Schema.Component {
  collectionName: 'components_default_sync_blocks';
  info: {
    displayName: 'Sync Block';
    icon: 'link';
  };
  attributes: {
    sync_block: Attribute.Relation<
      'default.sync-block',
      'oneToOne',
      'api::sync-block.sync-block'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'default.logos': DefaultLogos;
      'default.sync-block': DefaultSyncBlock;
    }
  }
}
