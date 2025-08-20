import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
`;

export const Sidebar = styled.aside`
  grid-area: sidebar;
  background: ${({ theme }) => theme.colors.sidebar};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing(4)};
  border-right: 1px solid #ddd;
  height: 100%;
`;

export const Header = styled.header`
  grid-area: header;
  background-color: #282c34;
  padding: 0.25rem;
  color: white;
  text-align: center;
`;

export const Main = styled.main`
  grid-area: main;
  flex: 1;
  padding: 0.25rem;
  background-color: #f0f0f0;
`;

export const Footer = styled.footer`
  grid-area: footer;
  background-color: #282c34;
  padding: 0.25rem;
  color: white;
  text-align: center;
`;
