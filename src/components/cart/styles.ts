import { styled } from "@/styles";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay, {
  background: "none",
});

export const Content = styled(Dialog.Content, {
  width: "30rem",
  height: "100%",
  background: "$gray800",

  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(50%, -50%)",
});

export const Close = styled(Dialog.Close, {
  background: "none",
  border: "none",
  margin: "1.5rem 1.5rem auto 27rem",
  cursor: "pointer",

  svg: {
    color: "$gray300",

    "&:hover": {
      color: "$gray100",
    },
  },
});

export const Title = styled(Dialog.Content, {
  fontSize: "$lg",
  fontWeight: "700",
  margin: "1.5rem auto auto 3rem",
  color: "$gray100",
});

export const ItemContainer = styled("div", {
  display: "flex",
  width: "100%",
  height: "5.8125rem",
  margin: "1.5rem 20.625rem auto 3rem",
  position: "relative",
});

export const ImageContainer = styled("div", {
  height: "5.8125rem",
  background: "linear-gradient(188deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "8px",
});

export const ItemDescription = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  margin: "auto 3rem auto 1.25rem",
  width: "16.375rem",

  h2: {
    fontSize: "$md",
    fontWeight: "400",
    color: "$gray300",
    lineHeight: "160%",
  },
  strong: {
    fontSize: "$md",
    fontWeight: "700",
    color: "$gray100",
    lineHeight: "160%",
  },

  button: {
    marginTop: "0.5rem",
    background: "none",

    border: "none",

    color: "$green500",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const PaymentDetails = styled("div", {
  position: "fixed",
  top: "76%",
});

export const QuantityContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  padding: "0 3rem",
  lineHeight: "160%",

  p: {
    fontSize: "1rem",
    color: "$gray100",
  },

  span: {
    color: "$gray300",
    fontSize: "$md",
  },
});

export const TotalPriceContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  color: "$gray100",
  padding: "0.4375rem 3rem 0 3rem",
  lineHeight: "160%",

  p: {
    fontSize: "$md",
    fontWeight: "700",
  },

  strong: {
    fontSize: "$xl",
    fontWeight: "700",
  },
});

export const FinishPaymentButton = styled("button", {
  width: "24rem",
  padding: "1.25rem 7.78125rem",
  margin: "3.5625rem 3rem 0  3rem",

  borderRadius: "8px",
  border: "none",
  overflow: "hidden",
  boxShadow: "none",

  fontSize: "$md",
  color: "$white",
  background: "$green500",

  cursor: "pointer",

  "&:hover": {
    background: "$green300",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },
});
