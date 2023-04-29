import styled from '@emotion/styled';
export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 10px;

  max-width: 90%;
  width: 90%;
`;

export const Tr = styled.tr`
  background-color: rgb(115, 120, 175);
`;
export const ExtendedTr = styled(Tr)`
  background-color: #e6e6ed;
`;
export const Th = styled.th`
  padding: 0.5rem 0;
  padding-left: 10px;
  text-align: left;
`;

export const Td = styled.td`
  padding-left: 15px;
  border-right: 0.125rem solid #e9edff;
`;
export const Type = styled(Td)`
  text-transform: capitalize;
`;
