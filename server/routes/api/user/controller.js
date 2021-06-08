exports.list = (req, res) => {
  res.status(200).json({
    success: true,
    message: "success",
    data: {},
    t: req.refreshedToken,
  });
};
