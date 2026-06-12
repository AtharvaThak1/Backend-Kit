export const response = (req, res, next) => {
  res.success = (data = null, message = "Success", meta = {}) => {
    return res.status(200).json({
      success: true,
      message,
      data,
      meta,
    });
  };

  res.created = (data = null, message = "Created successfully") => {
    return res.status(201).json({
      success: true,
      message,
      data,
    });
  };

  res.badRequest = (message = "Bad Request") => {
    return res.status(400).json({
      success: false,
      message,
    });
  };

  res.unauthorized = (message = "Unauthorized") => {
    return res.status(401).json({
      success: false,
      message,
    });
  };

  res.forbidden = (message = "Forbidden") => {
    return res.status(403).json({
      success: false,
      message,
    });
  };

  res.notFound = (message = "Not Found") => {
    return res.status(404).json({
      success: false,
      message,
    });
  };

  res.serverError = (message = "Internal Server Error") => {
    return res.status(500).json({
      success: false,
      message,
    });
  };

  next();
};
