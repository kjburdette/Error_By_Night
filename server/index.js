if(process.env.NODE_ENV !== "production" ){
    require("dotenv").config()
}
const express = require ("express")
const cors = require("cors")
const app = express()
const bcrypt = require("bcrypt")
const passport = require("passport")
const flash = require("express-flash")
const session = require("express-session")
const es6rennderer = require("express-es6-template-engine")
const initializedPassport = require("./passport-config")

const user = [];

pp.use(express.static("../styles"))
app.use(express.json())
app.use(cors())
app.use(flash())

app.engine("html", es6Renderer);
app.set("views", "../");
app.set("view engine", "html");

app.use(express.urlencoded({ extended: false}))

const { createClient } = require('@supabase/supabase-js');
const SUPABASE_URL = 'https://swtappturnninmlazeqo.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDEzODkwMiwiZXhwIjoxOTM1NzE0OTAyfQ.CKKYzyll0koBSP1qC8gpFuwHh-ydSRCeQ5xJeDkTots'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

app.get("/", (req, res) =>{
    res.render("Home")
})

app.listen( PORT, () => console.log(`On port ${PORT}`));