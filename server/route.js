const express = require("express")
const { signup, login } = require("./controller/userapi")
const { CreateCourse, GetallCourses, SingleCourse } = require("./controller/courseapi")
const route = express.Router()

route.post("/signup", signup)
route.post("/login", login)
route.post("/createcourse", CreateCourse)
route.get("/getallcourses", GetallCourses)
route.get("/singlecourse/:id", SingleCourse)

module.exports = route