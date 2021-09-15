// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider(props) {
  const [state, setState] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  function moveCar(car, side) {
    setState({
      ...state,
      [car]: side,
    });
  };

  return (
    <CarsContext.Provider value={{ state, moveCar }}>
      {props.children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
