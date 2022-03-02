export interface iContact {
  address1: string;
  address2?: string;
  postcode?: string;
  city?: string;
  state?: string;
  country: string;
}

export interface iSettings {
  env: {
    API_BASE_URL: string;
    HOST: string;
  };
  gtmId: string;
  meta?: {
    name: string;
    content: string;
  };
  isBot: boolean;
  isMobile: boolean;
  isPhone: boolean;
  isTablet: boolean;
  brand: string;
  irUrl: string;
  siteLocation: string;
  stripePublishableKey: string;
  paypalClientId: string;
  logo: {
    url: string;
    width: number;
    height: number;
  };
  favicon: string;
  country: {
    name: string;
    code: string;
    flag: string;
    currency: string;
  };
  checkout: {
    payments: {
      default: string;
    };
  };
  footer: {
    copyrightText: string;
    description: string[];
  };
  menus: {
    main: [
      {
        title: string;
        path: string;
        child: iLink[];
      },
    ];
    footer: [
      {
        title: string;
        links: [
          {
            title: string;
            href: string;
          },
        ];
      },
    ];
  };
}

export interface iContact {
  type: string;
  title: string;
  isPrimary: boolean;
  detail: iContact;
}

type iLink = {
  title: string;
  path: string;
};
