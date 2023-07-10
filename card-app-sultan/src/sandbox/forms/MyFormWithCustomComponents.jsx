import { Container } from "@mui/material";
import React, { useState } from "react";
import Form from "../../forms/components/Form";
import Joi from "joi";
import ROUTES from "../../routes/routesModel";
import Input from "../../forms/components/Input";

const initialvalue = {
  first: "",
  last: "",
};

const schema = {
  first: Joi.string().max(10).required(),
  last: Joi.string().min(2).max(10).allow(""),
};

export default function MyFormWithCustomComponents() {
  const [data, setData] = useState(initialvalue);
  const [errors, setErrors] = useState(initialvalue);

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

  const handleReset = () => {
    setData(initialvalue);
  };

  const validateForm = () => {
    const schemaForValidate = Joi.object(schema);
    const { error } = schemaForValidate.validate(data);
    if (error) return error;
    return null;
  };
  return (
    <div>
      <Container
        sx={{
          mt: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          title="MY Custom Form "
          onSubmit={handleSubmit}
          onReset={handleReset}
          styles={{ maxWidth: "450 px" }}
          validateForm={validateForm}
          to={ROUTES.SANDBOX}
        >
          <Input
            label={"first name"}
            name={"first"}
            data={data}
            error={errors.first}
            onChange={handleChange}
          />
          <Input
            label={"last name"}
            name={"last"}
            data={data}
            error={errors.last}
            onChange={handleChange}
          />
        </Form>
      </Container>
    </div>
  );
}
