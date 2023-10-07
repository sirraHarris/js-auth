// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// ===
router.get('/', function (req, res) {
    // ===

    // ===
    res.render('index', {
        // ===
        name: 'index',
        // ===
        component: [],

        // ===
        title: 'Index page',
        // ===

        // ===
        data: {},
    })
    // ===
})

// ===
router.get('/home', function (req, res) {
    // ===

    // ===
    res.render('home', {
        // ===
        name: 'home',
        // ===
        component: [],

        // ===
        title: 'Home page',
        // ===

        // ===
        data: {},
    })
    // ===
})

// ===
router.get('/logout', function (req, res) {
    // ===

    // ===
    res.render('logout', {
        // ===
        name: 'logout',
        // ===
        component: [],

        // ===
        title: 'Logout page',
        // ===

        // ===
        data: {},
    })
    // ===
})

// Підключіть файли роутів
const test = require('./auth')
// Підключіть інші файли роутів, якщо є
const user = require('./user')

// Об'єднайте файли роутів за потреби
router.use('/', auth)
router.use('/', user)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
