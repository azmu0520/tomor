import styled from 'styled-components';
import { ReactComponent as Cart } from '../../assets/icons/cart.svg';
export const Wrap = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

Wrap.Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #1d1f22;
  margin: 80px 0;
`;

Wrap.Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #5ece7b;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  position: absolute;
  bottom: 105px;
  right: 50px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
`;
Cards.Each = styled.div`
  width: 386px;
  height: 444px;
  background: #fff;
  padding: 16px;
  position: relative;
  &:hover ${Wrap.Cart} {
    display: ${({ opacity }) => (opacity ? 'flex' : 'none')};
    opacity: 1;
  }
  opacity: ${({ opacity }) => (opacity ? 1 : 0.5)};
`;
Cards.Img = styled.img`
  width: 354px;
  height: 330px;
  cursor: ${({ opacity }) => (opacity ? 'pointer' : 'no-drop')};
`;
Cards.Title = styled.div`
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #1d1f22;
  margin-top: 30px;
`;
Cards.Stock = styled.div`
  position: absolute;
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  display: ${({ opacity }) => (opacity ? 'none' : 'flex')};
  align-items: center;
  color: #8d8f9a;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

Cards.Price = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 160%;
  text-align: left;
  color: #1d1f22;
`;

Cards.Icon = styled(Cart)`
  path {
    fill: #fff;
  }
`;
