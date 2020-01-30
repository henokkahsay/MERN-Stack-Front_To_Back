const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-vlidator/check");

router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    console.log(req.body);

    if (!errors.isEmpty()) {
      return res.status(400).jspn({ errors: errors.array() });
    }
    res.send("User route");
  }
);

module.exports = router;
