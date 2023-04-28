import styled from '@emotion/styled';
import data from '../../Friends/friends.json';
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 42px;
  margin: 0 auto;
  padding: 10px;
  max-width: 100%;
  width: 360px;
  border-radius: 8px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  background-color: #e6e6ed;
`;
export const Status = styled.span`
  display: block;
  margin-left: 1.625rem;
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
  width: 60px;
   background: #ecf0f3;

  }
`;
export const Name = styled.p`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 700;
`;
