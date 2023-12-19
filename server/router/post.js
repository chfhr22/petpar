const express = require("express");
const router = express.Router();

// 스키마
const { Post } = require("../model/Post.js");
const { Counter } = require("../model/Counter.js");

// 이미지 업로드
const setUpload = require("../util/upload.js");

// 글쓰기
router.post("/write", (req, res) => {
    let temp = req.body;

    Counter.findOne({ name: "counter" })
        .exec()
        .then((counter) => {
            temp.postNum = counter.postNum;

            const BlogWrite = new Post(temp);
            BlogWrite
                .save()
                .then(() => {
                    Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } })
                        .then(() => {
                            res.status(200).json({ success: true })
                        })
                })
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false })
        })
})

// 이미지 업로드
router.post("/image/upload", setUpload("reactblog/post"), (req, res, next) => {
    // console.log(res.req);
    res.status(200).json({ success: true, filePath: res.req.file.location })
})

// 글목록
router.post("/list", (req, res) => {
    Post
        .find()
        .exec()
        .then((result) => {
            res.status(200).json({ success: true, postList: result })
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false })
        })
})

module.exports = router;