const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    img1: {
        type: String,
        required: true
    },
    img2: {
        type: String,
        required: true
    },
    img3: {
        type: String,
        required: true
    },
    img4: {
        type: String,
        required: true
    },
    img5: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    name1: {
        type: String,
        required: true
    },
    name2: {
        type: String,
        required: true
    },
    name3: {
        type: String,
        required: true
    },
    name4: {
        type: String,
        required: true
    },
    cat: {
        type: String,
        required: true
    },
    sub: {
        type: String,
        required: true
    },
    thing: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }

})

const Course = mongoose.model("courses", CourseSchema)

module.exports = Course