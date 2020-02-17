const express = require("express");
const router = express.Router();
const auth = require("../../routes/api/middleware/auth");
const Profile = require("../../routes/api/modules/Profile");
const User = require("../../routes/api/modules/User");

//@route   GET api/profile/me
//@desc    Get current users profile
//@access  Private
router.get("/", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate("user", ["name", "avatar"]);
    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
