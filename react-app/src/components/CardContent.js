import React from 'react';
import {Like } from '../components';

const CardContent = ({ name, description, image }) => (
  <div className="card-content">
    <div className="content">
      <div className="name">{name}</div>
      <div className="description">{description}</div>
      <div className="image">{image}</div>
    </div>
    <Like />

  </div>
);

export default CardContent;
