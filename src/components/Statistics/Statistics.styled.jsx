import styled from '@emotion/styled';
import { getRandomHexColor } from '../../Utils';
export const CardSection = styled.section`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
export const Title = styled.h2`
  margin-block-end: 0;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  height: 60px;
  text-align: center;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: ${({ theme }) => theme.spacing(0)};
  margin: ${({ theme }) => theme.spacing(0)};
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${props => getRandomHexColor(props.index)};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
`;
export const Label = styled.span`
  font-size: 20px;
  margin-bottom: auto;
`;
export const Percentage = styled.span`
  font-size: 18px;
`;
