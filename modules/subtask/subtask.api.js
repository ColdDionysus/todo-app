const router = require("express").Router();
const subtaskController = require("./subtask.controller");

router.post("/", (req, res, next) => {
  try {
    const { payload } = req.body;
    const result = subtaskController.create(payload);
    res.json({ data: result, msg: "Success" });
  } catch (e) {
    next(e);
  }
});

router.get("/", (req, res, next) => {
  try {
    const result = subtaskController.list();
    res.json({ data: result, msg: "Success" });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const result = subtaskController.getById(id);
    res.json({ data: result, msg: "Sucess" });
  } catch (e) {
    next(e);
  }
});
router.put("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const { payload } = req.body;
    const result = subtaskController.updateById(id, payload);
    res.json({ data: result, msg: "Success" });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const result = subtaskController.deleteById(id);
    res.json({ data: result, msg: "Success" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
