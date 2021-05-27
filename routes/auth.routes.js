const{Router} = require('express')
const bcript = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult}= require('express-validator')
const User = require('../models/User')
const router = Router()


router.post(
    '/register',
    [
        check('email', 'Некоректный email').isEmail(),
        check('password', 'Минимальная длинна пароля 6 символов').isLength({min:6})
    ],
    async (req,res)=>{
    try{

        const errors = validationResult(req)

        if (!errors.isEmpty){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            })
        }

        const {email, password} = req.body

        const candidate = await User.findOne({email});

        if(candidate) {
           return res.status(400).json({ message:'Такой пользователь уже существует'})
        }
        
        const hashPassword = await bcript.hash.apply(password, 12)
        const user = new User({email, password:hashPassword})

        await user.save()

        res.status(201).json({message: 'Пользователь создан'})

    }catch(e){
        res.status(500).json({message:'Что-то пошло не так, попробуйте снова'})
    }
})

router.post('/login',
[
    check('email', 'Введите коректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists()
],
async (req,res)=>{
    try{

        const errors = validationResult(req)

        if (!errors.isEmpty){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при входе в систму'
            })
        }
        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user){
            return   res.status(400).json({message:'Пользователь не найден'})
         }
         const isMatch = await bcript.compare(password, user.password)
        
         if (!isMatch){
            res.status(400).json({message:'Неверный пароль'})
         }
         const token = jwt.sign(
             {
                 userId: user.id
             },
             config.get('jwtSecret'),
             {expiresIn:'1h'}
         )
         res.json({token, userId: user.id})

    }catch(e){
        res.status(500).json({message:'Что-то пошло не так, попробуйте снова'})
    }
})


module.exports = router