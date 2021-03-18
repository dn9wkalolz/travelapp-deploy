/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import DataTime from './DataTime';
import Exchange from './Exchange';
import Weather from './Weather';

const CountryWidgets = ({ lang, countryInf }) => {
  const { rates, weatherState, country: { timezone } } = countryInf;
  const [isOpen, isOpenChange] = useState(false);
  return (
    <div className="country__widgets">
      <div className={isOpen ? 'country__widgets_block country__widgets_block_active' : 'country__widgets_block'}>
        <DataTime {...{ lang, timezone }} />
        <Weather {...{ lang, weatherState }} />
        <Exchange {...{ lang, rates }} />
        <div className="country__widgets_button" onClick={() => isOpenChange(!isOpen)}>
          {isOpen ? <KeyboardArrowUpIcon fontSize="large" /> : <KeyboardArrowDownIcon fontSize="large" />}
        </div>
      </div>

    </div>
  );
};

CountryWidgets.propTypes = {
  lang: PropTypes.string.isRequired,
  countryInf: PropTypes.instanceOf(Object).isRequired,
};

export default CountryWidgets;
