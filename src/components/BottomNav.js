import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Nav } from './utilities/Nav';

const BottomNavigation = styled(Nav)`
  color: green;
  justify-content: space-between;
`;

const BottomNav = () => (
  <BottomNavigation>
    <Link to="/">Link</Link>
    <Link to="/">Link</Link>
    <Link to="/">Link</Link>
  </BottomNavigation>
);

export default BottomNav;
