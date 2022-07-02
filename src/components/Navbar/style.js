import styled from 'styled-components';
import { ReactComponent as logo } from '../../assets/icons/logo.svg';
import { ReactComponent as cart } from '../../assets/icons/cart.svg';
export const Wrap = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Wrap.Links = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #1d1f22;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  height: 40%;

  .link {
    height: 100%;
    text-decoration: none !important;
  }
`;
Wrap.Link = styled.div`
  align-items: center;
  padding: 0 16px;
  height: 100%;
  border-bottom: ${({ path }) =>
    path ? '2px solid #5ece7b' : '2px solid #fff'};
  font-weight: ${({ path }) => (path ? '600' : '400')} !important;
  color: ${({ path }) => (path ? '#5ECE7B' : '#1D1F22')} !important;
`;
Wrap.Logo = styled(logo)``;
Wrap.Sale = styled.div`
  display: flex;
  align-items: center;
`;
Wrap.Select = styled.select`
  margin-right: 30px;
  border: none;
  outline: none;
`;

Wrap.Option = styled.option`
  padding: 20px;
  width: 400px;
  border: none;
`;
Wrap.Cart = styled(cart)``;
