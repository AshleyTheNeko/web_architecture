const router = require("express").Router();
const is_valid = require("../middleware/check_data");

router.get("/data", (req, res) => {
    if (!is_valid())
        return res.status(400).send({ "msg": "Bad Request" });
    return res.status(200).send({"msg": "cookies are quite poggers aren't they?"})
});

module.exports =router;