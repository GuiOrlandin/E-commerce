import { styled } from "..";

export const HomeContainer = styled("div", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - (100vw - 1180px) / 2)",
  marginLeft: "auto",
  minHeight: 656,
});

export const Product = styled("div", {
  img: {
    objectFit: "cover",
  },
});

export const CardContainer = styled("div", {
  display: "flex",
  position: "relative",
  background: "linear-gradient(188deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,

  overflow: "hidden",
  color: "$gray100",

  alignItems: "center",
  justifyContent: "center",

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "1.25rem",
    borderRadius: 6,

    display: "flex",
    justifyContent: "space-between",

    background: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
      lineHeight: "32px",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      lineHeight: "32px",
      color: "$green300",
    },

    div: {
      display: "flex",
      flexDirection: "column",
    },

    button: {
      padding: "0.75rem",
      background: "$green500",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",

      "&:hover": {
        backgroundColor: "$green300",
      },
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});

export const AddNewItemButton = styled("button", {});
