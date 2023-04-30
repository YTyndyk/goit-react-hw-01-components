import styled from '@emotion/styled';
export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};
  max-width: 90%;
  width: 90%;
`;

export const Tr = styled.tr`
  background-color: ${({ theme }) => theme.colors.backgroundColorTr};
`;
export const ExtendedTr = styled(Tr)`
  background-color: ${({ theme }) => theme.colors.backgroundColorExtendedTr};
`;
export const Th = styled.th`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(0)};
  padding-left: ${({ theme }) => theme.spacing(2)};
  text-align: left;
`;

export const Td = styled.td`
  padding-left: ${({ theme }) => theme.spacing(4)};
`;
export const Type = styled(Td)`
  text-transform: capitalize;
`;
