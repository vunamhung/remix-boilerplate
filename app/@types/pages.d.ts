interface iPage {
  title: string;
  yoast_head_json: Yoast;
  blocks?: iBlock[];
}

interface iRawPage {
  id: number;
  date: Date;
  date_gmt: Date;
  slug: string;
  status: string;
  type: 'page';
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  yoast_head_json: Yoast;
  acf?: {
    blocks?: iBlock[];
    translate?: 'auto' | 'manual';
  };
}
