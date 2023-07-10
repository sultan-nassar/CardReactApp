import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import Joi from "joi";

const initialvalue = {
  firstName: "",
  lastName: "",
};

const schema = {
  firstName: Joi.string().max(10).required(),
  lastName: Joi.string().min(2).max(10).allow(""),
};

export default function MyForm() {
  const [data, setData] = useState(initialvalue);
  const [errors, setErrors] = useState(initialvalue);

  const navigate = useNavigate();
  //
  //
  //
  const validateProperty = (target) => {
    const joiPropertySchema = Joi.object({
      [target.name]: schema[target.name],
    });
    const obj = { [target.name]: target.value };
    const { error } = joiPropertySchema.validate(obj);
    return error ? error.details[0].message : null;
  };
  //
  //
  //
  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
    const errorMessage = validateProperty(target);
    if (errorMessage) {
      setErrors((prev) => ({ ...prev, [target.name]: errorMessage }));
    } else {
      setErrors((prev) => ({ ...prev, [target.name]: "" }));
    }
  };
  //
  //
  //

  const handleSubmit = () => {
    console.log(data);
  };
  const handleCancel = () => {
    navigate(ROUTES.CARDS);
  };
  const handleReset = () => {
    setData(initialvalue);
  };
  return (
    <>
      <Box
        component={"form"}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submitted");
        }}
      >
        <Typography>My Form</Typography>
        <Box>
          <TextField
            label="First Name"
            name="firstName"
            onChange={handleChange}
            value={data.firstName}
            helperText={errors.firstName}
            error={Boolean(errors.firstName)}
          />
          <TextField
            label="Last Name"
            name="lastName"
            onChange={handleChange}
            value={data.lastName}
            helperText={errors.lastName}
            error={Boolean(errors.lastName)}
          />
        </Box>
        <Box>
          <Button onClick={handleReset}>Reset</Button>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}
