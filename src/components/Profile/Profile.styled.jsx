import styled from '@emotion/styled';

export const Card = styled.div`
  color: ${({ theme }) => theme.colors.black};
  width: 300px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  text-align: center;
  border-radius: 4px;
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(17)};
`;
export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.backgroundColorAvatar};
`;
export const UserName = styled.p`
  font-size: 30px;
`;
export const Statistic = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(0)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 70px;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.backgroundColorAvatar};
  border-radius: 3px;
  :not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(2)};
  }
`;
export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
export const Label = styled.span`
  line-height: 1.17;
`;
