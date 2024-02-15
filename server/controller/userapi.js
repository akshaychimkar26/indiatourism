const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                error: "Email is already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ name, email, password: hashedPassword })
        const savedUser = await newUser.save()
        const token = jwt.sign({ userId: savedUser._id }, process.env.SECRET_KEY, { expiresIn: "1h" })
        res.status(201).json({ user: savedUser, token })
    }
    catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({
                error: "Invalid credentials"
            })
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.status(401).json({
                error: "Invalid credentials"
            })
        }

        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1h" })
        res.json({ user, token })
    }
    catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}


module.exports = { signup, login }