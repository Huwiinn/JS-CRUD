// 바닐라 자바스크립트로 CRUD 구현하기

const express = require("express");
const path = require("path");

const app = express();

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "public")));

// 루트 url로 접속했을 때, index.html을 open
app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3050);
