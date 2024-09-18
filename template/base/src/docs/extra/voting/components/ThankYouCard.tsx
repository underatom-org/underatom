import { IconDiscountCheckFilled } from "@tabler/icons-react";
import { Body, H3 } from "../../../../components/no-headless/typography/Typography.atoms";

export const ThankYouCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <IconDiscountCheckFilled color="#6DB400" size={32} />
      <H3>Thank you for your vote</H3>
      <Body>Make sure to vote monthly</Body>
    </div>
  );
};
