import styled from '@emotion/styled';

export const Card = styled.div`
  color: #010101;
  width: 300px;
  background-color: #e6e6ed;
  text-align: center;
  border-radius: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 0px;
  margin-bottom: 70px;
`;
export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
  background-color: #d28484;
`;
export const UserName = styled.p`
  font-size: 30px;
`;
export const Statistic = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-bottom: 10px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 70px;
  padding: 10px;
  background-color: #d28484;
  border-radius: 3px;
  :not(:last-child) {
    margin-right: 10px;
  }
`;
export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
export const Label = styled.span`
  line-height: 1.17;
`;
