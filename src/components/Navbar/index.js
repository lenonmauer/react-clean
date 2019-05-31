import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BrandIcon from '~/assets/images/brand.png';

import {
  Container, Brand, Navigation, NavigationLink, MenuRightWrapper,
} from './styles';

const Navbar = ({ pathname }) => (
  <Container>
    <Brand src={BrandIcon} />

    <Navigation>
      <NavigationLink to="/dashboard">Início</NavigationLink>

      <MenuRightWrapper>
        <NavigationLink to="/logout">
          <i className="material-icons">exit_to_app</i>
        </NavigationLink>
      </MenuRightWrapper>
    </Navigation>
  </Container>
);

Navbar.propTypes = {
  pathname: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
});

export default connect(mapStateToProps)(Navbar);
