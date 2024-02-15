const Course = require("../models/Course")

const CreateCourse = async (req, res) => {
    try {
        const newCourse = new Course(req.body)
        const savedCourse = await newCourse.save()
        res.status(201).json(savedCourse)
    }
    catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const GetallCourses = async (req, res) => {
    try {
        const courses = await Course.find()
        res.json(courses)
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
const SingleCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
        if (!course) {
            return res.status(404).json({
                error: "Product not found"
            })
        }
        res.json(course)
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = { CreateCourse, GetallCourses, SingleCourse }