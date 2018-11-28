import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

const IconComponent = ({ name, size, color }) => <Icon name={name} size={size} color={color} />;

IconComponent.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string.isRequired,
};

IconComponent.defaultProps = {
  size: 24,
};

export default IconComponent;
