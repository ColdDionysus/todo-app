const router = require("express").Router();
const subtaskController = require("./subtask.controller");

router.post("/", async (req, res, next) => {
  try {
    const result = await subtaskController.create(req.body);
    res.json({ data: result, msg: "Success" });
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await subtaskController.list();
    console.log(result);
    res.json({ data: result, msg: "Success" });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await subtaskController.getById(id);
    res.json({ data: result, msg: "Sucess" });
  } catch (e) {
    next(e);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await subtaskController.updateById(id, req.body);
    res.json({ data: result, msg: "Success" });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await subtaskController.deleteById(id);
    res.json({ data: result, msg: "Success" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
