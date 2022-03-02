export default {
  gtmId: 'GTM-SAMPLE_ID',
  meta: {
    'google-site-verification': 'sample-key',
  },
  logo: {
    width: 112,
    height: 32,
  },
  favicon: '/images/favicon.ico',
  country: {
    name: 'United States',
    currency: 'USD',
    code: 'US',
    flag: '🇺🇸',
  },
  checkout: {
    payments: {
      default: 'stripe',
    },
  },
  footer: {
    description: ['Thousands of creative designs', 'Limitless colors, sizes and style combinations', 'Worldwide shipping with trusted carriers'],
    copyrightText: 'All rights reserved',
  },
  menus: {
    main: [
      {
        title: 'Men',
        path: '/shop/men',
        child: [
          {
            title: 'T-Shirts',
            path: '/shop/clothing/tshirts/men',
          },
          {
            title: 'Hoodies',
            path: '/shop/clothing/hoodies/men',
          },
          {
            title: 'Zip Up Hoodies',
            path: '/shop/clothing/hoodies/men/zip-up',
          },
          {
            title: 'Sweat Shirts',
            path: '/shop/clothing/sweat-shirts',
          },
          {
            title: 'Baseball Shirts',
            path: '/shop/clothing/baseball-shirts',
          },
          {
            title: 'Long Sleeves',
            path: '/shop/clothing/long-sleeves',
          },
          {
            title: 'Tank Tops',
            path: '/shop/clothing/tank-tops',
          },
        ],
      },
      {
        title: 'Women',
        path: '/shop/women',
        child: [
          {
            title: 'T-Shirts',
            path: '/shop/clothing/tshirts/women',
          },
          {
            title: 'Hoodies',
            path: '/shop/clothing/hoodies/women',
          },
          {
            title: 'Sweat Shirts',
            path: '/shop/clothing/sweat-shirts',
          },
          {
            title: 'Long Sleeves',
            path: '/shop/clothing/long-sleeves',
          },
          {
            title: 'Tank Tops',
            path: '/shop/clothing/tank-tops',
          },
          {
            title: 'Flowy Tanks',
            path: '/shop/clothing/flowy-tanks',
          },
        ],
      },
      {
        title: 'Kids',
        path: '/shop/kids',
        child: [
          {
            title: 'T-Shirts',
            path: '/shop/clothing/tshirts/kids',
          },
          {
            title: 'Hoodies',
            path: '/shop/clothing/hoodies/kids',
          },
          {
            title: 'Baby Onesies',
            path: '/shop/clothing/baby-onesies',
          },
        ],
      },
      {
        title: 'Home & Living',
        path: '/shop/home-living',
        child: [
          {
            title: 'Mugs',
            path: '/shop/home-living/mugs',
          },
          {
            title: 'Ornaments',
            path: '/shop/home-living/ornaments',
          },
          {
            title: 'Blankets',
            path: '/shop/home-living/blankets',
          },
          {
            title: 'Bedding Sets',
            path: '/shop/home-living/bedding-sets',
          },
          {
            title: 'Doormats',
            path: '/shop/home-living/doormats',
          },
          {
            title: 'Tumblers',
            path: '/shop/home-living/tumblers',
          },
          {
            title: 'Tote Bags',
            path: '/shop/home-living/tote-bags',
          },
          {
            title: 'Pillows',
            path: '/shop/home-living/pillows',
          },
          {
            title: 'Metal Signs',
            path: '/shop/home-living/metal-signs',
          },
        ],
      },
      {
        title: 'Gift for',
        path: '#',
        child: [
          {
            title: 'Boyfriend',
            path: '/shop/boy-friend',
          },
          {
            title: 'Girlfriend',
            path: '/shop/girl-friend',
          },
          {
            title: 'Mom',
            path: '/shop/mom',
          },
        ],
      },
    ],
    footer: [
      {
        title: 'Company',
        links: [
          {
            title: 'About Us',
            href: '/about-us',
          },
          {
            title: 'Contact Us',
            href: '/contact-us',
          },
          {
            title: 'Terms of Services',
            href: '/tos',
          },
          {
            title: 'Privacy Policy',
            href: '/privacy-policy',
          },
          {
            title: 'Intellectual Property Claim',
            href: '/intellectual-property-claim',
          },
        ],
      },
      {
        title: 'Help',
        links: [
          {
            title: 'Return & Refund',
            href: '/return-refund',
          },
          {
            title: 'Payment Methods',
            href: '/payment-methods',
          },
          {
            title: 'Shipping & Handling',
            href: '/shipping-handling',
          },
          {
            title: 'Order Tracking',
            href: '/order-tracking',
          },
        ],
      },
    ],
  },
};
