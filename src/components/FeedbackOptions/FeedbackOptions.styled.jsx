import styled from '@emotion/styled';

export const BtnsWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
`;

export const FeedbackBtn = styled.button`
  font-size: 17px;
  font-weight: 700;
  height: 40px;
  width: 100px;
  border: 2px solid #c7c7c7;
  border-radius: 10px;
  color: black;
  text-transform: uppercase;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  ${props => {
    switch (props.children) {
      case 'good':
        return 'color: green';
      case 'neutral':
        return 'color: orange';
      case 'bad':
        return 'color: red';
      default:
        return;
    }
  }};
  &:hover {
    border-color: transparent;
    color: #fff;
    ${props => {
      switch (props.children) {
        case 'good':
          return 'background-color: green';
        case 'neutral':
          return 'background-color: orange';
        case 'bad':
          return 'background-color: red';
        default:
          return;
      }
    }};
  }
`;