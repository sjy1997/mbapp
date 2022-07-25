import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils} from '@fortawesome/free-solid-svg-icons';


const HeaderBarBrand = () => (
  <div className="navbar-brand">
    <a
      className="navbar-item"
      href="https://reactjs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
              <FontAwesomeIcon icon={faUtensils} />
    </a>
    <NavLink to="/" className="navbar-item nav-home" >
      <span className="brand-first">RECIPE</span>
      <span className="brand-second">BLOG</span>
    </NavLink>
  </div>
);

export default HeaderBarBrand;
