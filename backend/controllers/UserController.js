import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";

import User from "../models/User.js";

export const register = async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array());
        }

        const email = req.body.email       

        //const isUsed = await User.findOne({ email })
        const isUsed = await User.findOne({ where: { email } });

        if (isUsed) {
            return res.json({
                message: 'Данный email уже занят.',
            })
        }

         
        
        const p = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const passwordHash = bcrypt.hashSync(p, salt);

        const doc = new User({
            email,            
            password: passwordHash,
        });
        
        const user = await doc.save();

        const token = jwt.sign(
            {
                _id: user.id,
            }, 
            'se72jkpq.',
            {
                expiresIn: '30d',
            }
        );

        const {password, ... userData} = user.dataValues;

        //res.json(userData);
        res.json({
            doc,
            token,
            message: 'Регистрация успешно пройдена.',
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'failed to register',
        })
    }
}

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });

        if (!user) {
            return res.status(404).json({
                message: 'User with this email is not found',
            })
        }

        const isValidPass = await bcrypt.compare(req.body.password, user.dataValues.password)
        
        if (!isValidPass) {
            return res.status(400).json({
                message: 'Invalid email or password',
            })
        }

        const token = jwt.sign(
            {
                _id: user.id,
            }, 
            'se72jkpq.',
            {
                expiresIn: '30d',
            }
        );

        const {password, ... userData} = user.dataValues;

        // res.status(200).json({
        //     ... userData,
        //     token,
        //     message: 'Вы вошли в систему.',
        // });
        res.json({
            user,
            token,
            message: 'Вы вошли в систему.',
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'failed to login',
        })
    }
}

export const getMe = async (req, res) => {
    try {
        const user = await User.findByPk(req.userId);
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            })
        }

        const token = jwt.sign(
            {
                _id: user.id,
            }, 
            'se72jkpq.',
            {
                expiresIn: '30d',
            }
        );

        const {password, ... userData} = user.dataValues;

        res.json({
            userData,
            token,});
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'no access',
        })
    }
}