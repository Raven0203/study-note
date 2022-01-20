import styled from "styled-components";

export const DragIconWrapper = styled.div`
  display: inline-block;
  svg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    padding-right: 1rem;
  }
`;
export const DistanceItem = styled.div`
  padding: 5px 0px 5px 25px;
  border-bottom: 1px solid #dddddd;
`;
export const ListItem = styled.div`
  color: #444444;
  padding: 0.8rem 0.3rem;
  border-bottom: 1px solid #dddddd;
   &:last-child {
    border-bottom: none;
  }
  span {
    display: inline-block;
    vertical-align: middle;
  }
  button{
    float:right;
  }
  background: white;
`;
