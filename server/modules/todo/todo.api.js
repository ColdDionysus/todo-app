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
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await todoController.getById(id);
    res.json({ data: result, msg: "Success" });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const result = await todoController.create(req.body);
    res.json({ data: result, msg: "Success" });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await todoController.updateById(id, req.body);
    res.json({ data: result, msg: "Success" });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await todoController.deleteById(id);
    res.json({ data: result, msg: "Success" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
