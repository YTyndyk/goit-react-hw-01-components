import styled from '@emotion/styled';
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax (240px, auto));
  gap: 24px;
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(15)};
`;
