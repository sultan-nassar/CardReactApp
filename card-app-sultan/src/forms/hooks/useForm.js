import Joi from "joi";
import { func, object } from "prop-types";
import { useCallback, useMemo, useState } from "react";

export default function useForm(initialForm, schema, handleSubmit) {
  const [data, setData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleReset = useCallback(() => {
    setData(initialForm);
    setErrors({});
  }, [initialForm]);

  const validateProperty = useCallback(
    (target) => {
      const generateSchema = Joi.object({
        [target.name]: schema[target.name],
      });
      const obj = { [target.name]: target.value };
      const { error } = generateSchema.validate(obj);
      return error ? error.details[0].message : null;
    },
    [schema]
  );

  const handleChange = useCallback(
    ({ target }) => {
      setData((prev) => ({ ...prev, [target.name]: target.value }));
      const errorMessage = validateProperty(target);
      if (errorMessage) {
        setErrors((prev) => ({ ...prev, [target.name]: errorMessage }));
      } else {
        setErrors((prev) => ({ ...prev, [target.name]: "" }));
      }
    },
    [validateProperty]
  );

  const validateForm = useCallback(() => {
    const schemaForValidate = Joi.object(schema);
    const { error } = schemaForValidate.validate(data);
    if (error) return error;
    return null;
  }, [data, schema]);

  const onSubmit = useCallback(() => {
    handleSubmit(data);
  }, [handleSubmit, data]);

  const value = useMemo(() => {
    return { data, errors };
  }, [data, errors]);

  return {
    data,
    errors,
    validateProperty,
    handleChange,
    validateForm,
    onSubmit,
    handleReset,
    value,
    setData,
  };
}

useForm.propTypes = {
  initialForm: object.isRequired,
  schema: object.isRequired,
  handleSubmit: func.isRequired,
};
