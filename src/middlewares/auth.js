const jwt = require("jsonwebtoken");
require("dotenv/config");
module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).send("Error: No token provided");
  } else {
    const parts = authHeader.split(" ");

    if (!parts.length === 2) {
      res.status(401).send("Error: Invalid token");
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      res.status(401).send("Error: Invalid token");
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) res.status(401).send("Error: Invalid token");

      req.userId = decoded.id;
      next();
    });
  }
};
