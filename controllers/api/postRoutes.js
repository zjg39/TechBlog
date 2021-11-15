const router = require("express").Router();
const { Posts } = require("../../models/");
const withAuth = require("../../utils/withAuth");

router.post("/", withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newPost = await Posts.create({ ...body, userId: req.session.userId });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  const body = req.body;

  try {
    const [updatedPost] = await Posts.update(body, {
      where: {
        id: req.params.id,
      },
    });

    if (updatedPost > 0) {
      res.status(200);
    } else {
      res.status(404).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const [updatedPost] = await Posts.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (updatedPost > 0) {
      res.status(200);
    } else {
      res.status(404).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;