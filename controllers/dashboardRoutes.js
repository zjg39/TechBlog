const router = require("express").Router();
const { Posts } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const postInfo = await Posts.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const postData = postInfo.map((post) => post.get({ plain: true }));

    res.render("userPosts", {
      layout: "dashboard",
      postData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/new", withAuth, (req, res) => {
  res.render("newPost", {
    layout: "dashboard",
  });
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postInfo = await Posts.findByPk(req.params.id);

    if (postInfo) {
      const postData = postInfo.get({ plain: true });
    
      res.render("editPost", {
        layout: "dashboard",
        postData,
      });
    } else {
      res.status(404).json(err);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;