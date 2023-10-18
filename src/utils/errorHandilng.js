export const asyncHandler = (fun) => {
  return (req, res, next) => {
    fun(req, res, next).catch((err) => {
      return next(new Error(err));
    });
  };
};

export const errorHandilng = (err, req, res, next) => {
  if (err) {
    return res.json({ message: err.message, err, stack: err.stack });
  }
};
