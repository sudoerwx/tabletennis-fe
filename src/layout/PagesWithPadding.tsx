import { Box } from "@mui/material";
import styled from "@mui/styled-engine";
import { Outlet } from "react-router-dom";

const BoxWithPadding = styled(Box)({ padding: "20px" });

export const PagesWithPadding = () => (
  <BoxWithPadding>
    <Outlet />
  </BoxWithPadding>
);
