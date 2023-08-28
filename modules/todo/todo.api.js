const router = require("express").Router();
const todoController = require("./todo.controller");
router.get("/", async (req, res, next) => {
  try {
    const result = await todoController.list();
    res.json({ data: result, msg: "Success" });
  } catch (e) {
    next(e);
  }
});
router.get("/:id", (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { payload } = req.body;
    const result = await todoController.create(payload);
    res.json({ data: result, msg: "Success" });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", (req, res, next) => {});

router.delete("/:id", (req, res, next) => {});

module.exports = router;
