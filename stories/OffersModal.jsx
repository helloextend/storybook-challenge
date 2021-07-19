import React from 'react';
import ExtendLogo from './assets/extend-logo.svg';
import VendorLogo from './assets/vendor-logo.svg';
import ExternalLink from './assets/external-link.svg';
import CloseIcon from './assets/close.svg';

import './offers-modal.css'

export const OffersModal = ({ offers, planDetails }) => {
  const getMonthsToYearsText = (months) => {
    const monthsInYears = Math.floor(months / 12)
    return `${monthsInYears} Year${monthsInYears > 1 ? 's' : ''}`
  }

  const priceToText = ({ amount, currencyCode }) => {
    const price = (amount / 100)
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
    }).format(price)
  }

  return (
    <div className="offers-modal">
      <div>
        <img src={CloseIcon} alt="close" />
      </div>
      <div>
        <img src={ExtendLogo} alt="shield logo" />
        <span>+</span>
        <img src={VendorLogo} alt="Nixplay" />
      </div>
      <header>
        <h2>Get protection from accidents with Extend.</h2>
      </header>
      <ul>
        {
          offers.map(({ id, termLength, price }) => {
            return (<li key={id}>
              <button>
                <div>
                  {getMonthsToYearsText(termLength)}
                </div>
                <div>
                  {priceToText(price)}
                </div>
              </button>
            </li>)
          })
        }
      </ul>
      <ul>
        {
          planDetails.map(({ id, description, imgSrc }) => {
            return (
              <li key={id}>
                <img src={imgSrc} alt="" />
                <span>{description}</span>
              </li>
            )
          })
        }
      </ul>
      <div>
        <button>
          Add protection
        </button>
        <button>
          No thanks
        </button>
      </div>
      <footer>
        <a href="">
          Plan Details &#38; FAQ
          <img src={ExternalLink} alt="external link" />
        </a>
        <div>
          Offered and sold by Extend
        </div>
      </footer>
    </div>
  );
}