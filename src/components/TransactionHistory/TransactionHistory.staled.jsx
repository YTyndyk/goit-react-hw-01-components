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

export const Td = styled.td`
  padding-left: 15px;
  border-right: 0.125rem solid #e9edff;
  :hover {
    color: #400075;
    text-shadow: 0.0625rem 0.0625rem 0.0625rem #fff;
    font-weight: 700;
    box-shadow: rgb(115, 120, 175) -1px 1px, rgb(115, 120, 175) -2px 2px,
      rgb(115, 120, 175) -3px 3px, rgb(115, 120, 175) -4px 4px,
      rgb(115, 120, 175) -5px 5px, rgb(115, 120, 175) -6px 6px;
    transform: translate3d(6px, -6px, 0);
    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: line;
  }
`;
export const Type = styled(Td)`
  text-transform: capitalize;
`;
