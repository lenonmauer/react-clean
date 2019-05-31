import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 80px;
  background: #e5556e;
  padding: 5px;
`;

export const Brand = styled.img`
  height: 70px;
  width: 70px;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const NavigationLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  padding: 1px 25px;
`;

export const MenuRightWrapper = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
