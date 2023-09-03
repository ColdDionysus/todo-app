const router = require("express").Router();
const todoRouter = require("../modules/todo/todo.api");
const subtaskRouter = require("../modules/subtask/subtask.api");

router.use("/todos", todoRouter);
router.use("/subtask", subtaskRouter);

module.exports = router;
