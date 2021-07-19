import React from 'react';
import { OffersModal } from './OffersModal';

import ClockRepairs from './assets/clock-repairs.svg';
import ShieldCheck from './assets/shield-check.svg';
import LiveSupport from './assets/live-support.svg';

export default {
  title: 'UI/Offers Modal',
  component: OffersModal,
  argTypes: {}
};

const Template = (args) => <OffersModal {...args} />;

export const Preview = Template.bind({})
Preview.args = {
  offers: [
    { id: 1, termLength: 12, price: { amount: 7499, currencyCode: 'USD' } },
    { id: 2, termLength: 24, price: { amount: 12999, currencyCode: 'USD' } },
    { id: 3, termLength: 36, price: { amount: 18999, currencyCode: 'USD' } },
  ],
  planDetails: [
    { 
      imgSrc: ClockRepairs, 
      description: 'Fast replacement + repairs' 
    },
    {
      imgSrc:  ShieldCheck,
      description: 'Easy online claims' 
    },
    { 
      imgSrc: LiveSupport,
      description: '24/7 live support' 
    },
  ]
};
