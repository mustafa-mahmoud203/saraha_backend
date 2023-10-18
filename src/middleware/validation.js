const methodeData = ["body", "params", "headers", "query"];
const validation = (schema) => {
  const validationArr = [];
  methodeData.forEach((key) => {
    if (schema[key]) {
      const validation = schema[key].validate(req[key], {
        abortEarly: false,
      });
      if (validation.error) {
        validationArr.push(validation.error.details);
      }
    }
  });

  if (validationArr.length) {
    return res.json({ message: "Validator error", validationArr });
  } else {
    return next();
  }
};
