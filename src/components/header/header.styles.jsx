import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 120px;
  padding: 25px;
  cursor: pointer;
`;
export const OptionContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 30px;
`;

export const OptinLink = styled(Link)`
  margin: 50px 10px 0px 0px;
  cursor: pointer;
`;
