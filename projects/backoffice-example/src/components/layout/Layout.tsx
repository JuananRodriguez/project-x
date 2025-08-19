import { Footer, Header, Main, Sidebar, LayoutWrapper } from "./Layout.styled";

type LayoutProps = {
  header: React.ReactNode;
  footer: React.ReactNode;
  main: React.ReactNode;
  sidebar?: React.ReactNode;
};

export function Layout({ header, sidebar, footer, main }: LayoutProps) {
  return (
    <LayoutWrapper>
      {header}
      {sidebar}
      {main}
      {footer}
    </LayoutWrapper>
  );
}

Layout.Header = Header;
Layout.Main = Main;
Layout.Footer = Footer;
Layout.Sidebar = Sidebar;
