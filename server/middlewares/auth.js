const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // read the token from header or url
  let token = req.headers["x-access-token"] || req.query.token;
  const refreshToken = req.headers["x-refresh-token"] || req.query.reftoken;

  // token does not exist
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "not logged in",
      error,
    });
  }

  // create a promise that decodes the token
  const p = new Promise((resolve, reject) => {
    jwt.verify(
      token,
      req.app.get("jwt-secret") || process.env.JWTSECRET_KEY,
      (err, decoded) => {
        if (err) reject(err);
        resolve(decoded);
      }
    );
  });

  // re-tokenVerify function
  const refreshTokenVerify = new Promise((resolve, reject) => {
    jwt.verify(
      refreshToken,
      req.app.get("jwt-secret") || process.env.REF_JWTSECRET_KEY,
      (err, decoded) => {
        if (err) reject(err);
        resolve(decoded);
      }
    );
  });

  // if it has failed to verify, it will return an error message
  const onError = (error) => {
    if (error.name === "TokenExpiredError") {
      if (!refreshToken) {
        return res.status(403).json({
          success: false,
          message:
            "jwtTokenExpiredError. you don't have refreshToken in header. [You must login or add refresh token in header]",
          error,
        });
      } else {
        refreshTokenVerify
          .then((decoded) => {
            //token refresh issue function
            //console.log(decoded);
            token = jwt.sign(
              { username: decoded.username },
              process.env.JWTSECRET_KEY,
              { algorithm: "HS256", expiresIn: "1m" }
            );
            req.headers["x-access-token"] = token;
            console.log(req.headers["x-access-token"]);
            // res.status(200).json({
            //   success: true,
            //   message: "issued new token",
            //   data: { newToken: token },
            // });
            req.decoded = decoded;
            req.refreshedToken = { newToken: token };
            next();
          })
          .catch((error) => {
            res.status(403).json({
              success: false,
              message: error.message,
            });
          });
      }
    } else {
      res.status(403).json({
        success: false,
        message: error.message,
      });
    }
  };

  // process the promise
  p.then((decoded) => {
    req.decoded = decoded;
    next();
  }).catch(onError);
};

module.exports = authMiddleware;
