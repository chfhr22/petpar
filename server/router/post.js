const express = require("express");
const router = express.Router();

// 스키마
const { Post } = require("../model/Post.js");
const { User } = require("../model/User.js");
const { Counter } = require("../model/Counter.js");

// 이미지 업로드
const setUpload = require("../util/upload.js");

// 글쓰기
router.post("/write", (req, res) => {
    let temp = {
        category: req.body.category,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
    };

    Counter.findOne({ name: "counter" })
        .exec()
        .then((counter) => {
            temp.postNum = counter.postNum;

            User.findOne({ uid: req.body.uid })
                .exec()
                .then((userInfo) => {
                    temp.author = userInfo._id;

                    const postWrite = new Post(temp);
                    postWrite
                        .save()
                        .then(() => {
                            Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } })
                                .then(() => {
                                    res.status(200).json({ success: true })
                                })
                        })
                })
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false })
        })
})

// 이미지 업로드
router.post("/image/upload", setUpload("petpar-rlan/post"), (req, res, next) => {
    // console.log(res.req);
    res.status(200).json({ success: true, filePath: res.req.file.location })
})

// 글목록
router.post("/list", (req, res) => {
    Post
        .find()
        .populate("author")
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