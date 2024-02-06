interface iRawJob {
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
  acf: {
    description: string;
    location: string;
    position: string;
    department: string;
    expire: string;
  };
}
