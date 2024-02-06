type img = {
  file: string;
  width: number;
  height: number;
  source_url: string;
};

interface iRawPost {
  id: number;
  date: Date;
  date_gmt: Date;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: 'post';
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: false;
  };
  excerpt: {
    rendered: string;
    protected: false;
  };
  author: number;
  featured_media?: number;
  authors: Array<{
    term_id: number;
    user_id: number;
    is_guest: number;
    slug: string;
    display_name: string;
    avatar_url: string;
    description: string;
    first_name: string;
    last_name: string;
    user_url: string;
  }>;
  _embedded: {
    'wp:featuredmedia': Array<{
      media_details: {
        sizes: {
          medium: img;
          large: img;
          thumbnail: img;
          medium_large: img;
          full: img;
        };
      };
    }>;
  };
}
