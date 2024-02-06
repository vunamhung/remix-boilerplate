interface iLink {
  title: string;
  url: string;
  target?: string;
}

interface iHero {
  acf_fc_layout: 'hero';
  title: string;
  content?: string;
  link?: iLink;
  image: string;
  mobile_image?: string;
  class_names?: string;
}

type iBlock = iHero;

interface Yoast {
  title: string;
  description: string;
  robots: {
    index: string;
    follow: string;
    'max-snippet': string;
    'max-image-preview': string;
    'max-video-preview': string;
  };
  og_locale: string;
  og_type: string;
  og_title: string;
  og_description: string;
  og_url: string;
  og_site_name: string;
  article_modified_time: string;
  twitter_card: string;
  twitter_misc: {
    'Est. reading time': string;
  };
  schema: {
    '@context': string;
    '@graph': Record<string, string>[];
  };
}

interface iMenu {
  term_id: number;
  name: string;
  slug: string;
  term_group: number;
  term_taxonomy_id: number;
  taxonomy: string;
  description: string;
  parent: number;
  count: number;
  filter: string;
  items: iMenuItem[];
}

interface iMenuItem {
  ID: number;
  post_author: string;
  post_date: Date;
  post_date_gmt: Date;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: Date;
  post_modified_gmt: Date;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
  db_id: number;
  menu_item_parent: string;
  object_id: string;
  object: string;
  type: string;
  type_label: string;
  url: string;
  title: string;
  target: string;
  attr_title: string;
  description: string;
  classes?: string[];
  xfn: string;
  slug: string;
  child_items?: iMenuItem[];
  acf?: {
    urdu?: string;
  };
}

interface iSettings {
  isMobile: boolean;
  isPhone: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  menu: {
    primary: iPrimaryMenuItem[];
    footer: iPrimaryMenuItem[];
    socials: Array<{ url: string }>;
  };
  lastUpdate: string;
}

interface iPrimaryMenuItem {
  title: string;
  path: string;
  child?: iPrimaryMenuItem[];
}
