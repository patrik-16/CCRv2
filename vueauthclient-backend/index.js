const axios = require('axios')
const express = require('express')
const crypto = require('crypto')
const fs = require('fs')

// creating a node express instance
const app = express()

const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const passport = require('passport')

// getting the local authentication type
const LocalStrategy = require('passport-local').Strategy

const publicRoot = '/'
app.use(express.static(publicRoot))

app.use(bodyParser.json())
app.use(cookieSession({
    name: 'ccrsession',
    keys: [crypto.randomBytes(16).toString('base64')],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(passport.initialize());
app.use(passport.session());

let users = require("./users.json");
const {response} = require("express");

// catches frontend request to load Home
app.get("/", (req, res, next) => {
    res.sendFile("index.html", {root: publicRoot})
})

// catches frontend request to login user
app.post("/api/login", (req, res, next) => {
    //authentication of user, verifies who you are
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(400).send([user, "Cannot log in", info])
        }
        req.login(user, (err) => {
            res.send("Logged in")
        })
    })(req, res, next)
})

// catches frontend request to logout user
app.get('/api/logout', function (req, res, next) {
    req.logout();
    res.redirect("/login")
});

/**
 * authMiddleware = you can only do this, if you are logged in
 */
const authMiddleware = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.status(401).send('You are not authenticated')
    } else {
        return next()
    }
}

// catches frontend request to request user data
app.get("/api/user", authMiddleware, (req, res) => {
    let user = users.find((user) => {
        return user.userId === req.session.passport.user
    })
    // console.log([user, req.session])
    res.send({user: user})
})


// catches frontend request to update user data
app.put('/api/update-user/:id', authMiddleware, (req, res) => {
    // read user database file (users.json)
    fs.readFile('./users.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        //parses content into 'users'
        let users = JSON.parse(jsonString)
        //searches user by id in 'users'
        let user = users.find((users => users.userId === req.body.id))
        //rewrites user params (update)
        user.firstName = req.body.firstName
        user.lastName = req.body.lastName
        user.email = req.body.email
        user.password = req.body.password
        //reformat 'users' as string
        const userString = JSON.stringify(users)
        //write 'users'(now as string) back into users.json
        fs.writeFile('./users.json', userString, err => {
            if (err) {
                res.send('Error writing file')
            } else {
                res.send('Successfully updated user data')
            }
        })
    })
})

// catches frontend request to delete current user data by id
app.delete('/api/delete-user/:id', authMiddleware, (req, res) => {
    // read user database file (users.json)
    fs.readFile('./users.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        //parses content into 'users'
        let users = JSON.parse(jsonString)
        /*
        defines method, searches user by id in userList and removes them
         */
        const removeById = (userList, id) => {
            const requiredIndex = userList.findIndex(el => {
                return el.userId === String(id);
            });
            if (requiredIndex === -1) {
                return false;
            }
            //removes elements from array, starting at given index, removes amount of elements
            return !!userList.splice(requiredIndex, 1);
        };
        //calls method
        removeById(users, req.params.id);
        //reformat userList as string
        const userString = JSON.stringify(users)
        //write userList(now as string, without deleted user) back into users.json
        fs.writeFile('./users.json', userString, err => {
            if (err) {
                res.send('Error writing file')
            } else {
                res.send('Successfully updated user data')
            }
        })
    })
})

// catches frontend request to convert currencies
app.get("/api/convert", async (req, res,) => {
    const token1 = '2DC86A86-5F6D-469A-B861-7F67F6CBF48D'
    const token2 = 'DFED3223-7BB6-4501-B1FB-62CB2D5DA8DD'
    //building of API request URL
    const url = "https://rest.coinapi.io/v1/exchangerate/" + req.query.asset_id_base + "/" + req.query.asset_id_quote
    //sends API req to coinapi.io, packs res into 'data'
    let data = await axios.get(url, {
        headers: {
            'X-CoinAPI-Key': token1
        }
    })
        .catch((error) => {
            console.error(error)
            res.send(error)
        })
    //returns responded (from coinapi.io) data to frontend
    res.send(data.data)
})


// catches frontend request to check, if a user is logged in
app.get("/api/check-login", (req, res) => {
    if (req.user) {
        res.send(true)
    } else {
        res.send(false)
    }
})

//handles authentication process
passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    (username, password, done) => {
        let user = users.find((user) => {
            return user.email === username && user.password === password
        })

        if (user) {
            done(null, user)
        } else {
            done(null, false, {message: 'Incorrect username or password'})
        }
    }
))

//serialization
passport.serializeUser((user, done) => {
    done(null, user.userId)
})

//de-serialization
passport.deserializeUser((id, done) => {
    let user = users.find((user) => {
        return user.userId === id
    })

    done(null, user)
})

app.listen(3000, () => {
    console.log("CCR listening on port 3000")
})