export const theme = {
  colors: {
    primary: "#1E88E5",
    secondary: "#1565C0",
    background: "#F4F6F8",
    sidebar: "rgb(17 24 39)",
    text: "#212121",
    textSecondary: "#757575",
    danger: "#E53935",
    success: "#43A047",
  },
  spacing: (factor: number) => `${factor / 16}rem`, // ej. spacing(2) = 16px
  borderRadius: "12px",
  shadows: {
    card: "0 2px 8px rgba(0,0,0,0.1)",
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: "2rem",
    h2: "1.5rem",
    body: "1rem",
    small: "0.875rem",
  },
};
