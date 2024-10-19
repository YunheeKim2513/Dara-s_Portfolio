import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  backgroundColor: "#333",
  color: "#fff",
  position: "fixed",
  width: "100%",
  top: 0,
  left: 0,
  zIndex: 100,
});

export const logoStyle = style({
  display: "flex",
  alignItems: "center",
  fontSize: "1.5rem",
  fontWeight: "bold",
});

export const logoImageStyle = style({
  marginRight: "10px",
});

export const menuButtonStyle = style({
  display: "none",
  background: "none",
  border: "none",
  color: "#fff",
  fontSize: "1.5rem",
  cursor: "pointer",

  "@media": {
    "screen and (max-width: 768px)": {
      display: "block",
    },
  },
});

export const navStyle = style({
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  flexGrow: 1,

  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
      flexDirection: "column",
      position: "absolute",
      top: "100%",
      left: 0,
      width: "100%",
      backgroundColor: "#444",
      padding: "20px",
    },
  },
});

export const navOpenStyle = style({
  "@media": {
    "screen and (max-width: 768px)": {
      display: "flex",
    },
  },
});

export const navListStyle = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "inherit",
  gap: "inherit",
});

export const navItemStyle = style({
  margin: 0,
});

export const linkStyle = style({
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem",
  transition: "color 0.3s",

  selectors: {
    "&:hover": {
      color: "#f0a500",
    },
    "&:focus": {
      outline: "2px solid #f0a500",
    },
  },
});
