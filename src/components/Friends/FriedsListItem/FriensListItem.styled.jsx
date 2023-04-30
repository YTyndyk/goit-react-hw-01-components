import styled from '@emotion/styled';
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 42px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(2)};
  max-width: 100%;
  width: 360px;
  border-radius: 8px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;
export const Status = styled.span`
  display: block;
  margin-left: ${({ theme }) => theme.spacing(6)};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    return props.children ? 'green' : 'red';
  }};
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
   background: ${({ theme }) => theme.colors.backgroundImg};

  }
`;
export const Name = styled.p`
  margin-left: ${({ theme }) => theme.spacing(2)};
  font-size: 16px;
  font-weight: 700;
`;
