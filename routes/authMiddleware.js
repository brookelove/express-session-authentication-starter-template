module.exports.isAuth = (req, res, next) => {
  if (req.isAuthenitcated()) {
    next();
  } else {
    res
      .status(401)
      .json({ msg: `you are not authorized to view this resource` });
  }
};

module.exports.isAdmin = (req, res, next) => {
  if (req.isAuthenitcated() && req.user.admin) {
    next();
  } else {
    res.status(401).json({
      msg: `you are not authorized to view this resource because you are not an admin`,
    });
  }
};
