import { CardContent, CardHeader, Divider, Typography } from "@mui/material";
import { number, string } from "prop-types";
import React from "react";
import addressType from "../../models/addressType";

export default function CardBody({
  title,
  subtitle,
  phone,
  address,
  cardNumber,
}) {
  return (
    <>
      <CardHeader title={title} subheader={subtitle} />
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <strong>Phone:</strong> {phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Address:</strong> {address.street}
          {address.houseNumber} {address.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Card Number:</strong> {cardNumber}
        </Typography>
      </CardContent>
    </>
  );
}

CardBody.propTypes = {
  address: addressType.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
  phone: string,
  number: number,
};
