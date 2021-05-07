const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3003;
const es6Renderer = require("express-es6-template-engine");
require("dotenv").config();

app.use(express.static('../styles'));
app.use(express.static('../client'));
app.use(express.static('../images'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.engine("html", es6Renderer);
app.set("views", "../client");
app.set("view engine", "html");

const SUPABASE_KEY = process.env.SUPABASE_KEY

const { createClient } = require("@supabase/supabase-js");

const url = "https://swtappturnninmlazeqo.supabase.co";

const supabase =  createClient(url,SUPABASE_KEY);


app.get('/', (req, res) => {
  res.render('homepage')
})


app.get('/loginpage', (req, res) => {
  res.render('loginpage')
});

app.get('/chirp',  (req, res) => {
  res.render("acctCreation")
});

app.get('/newsfeed', async (req, res) => {
   const { data, error } = await supabase
    .from('Post')
    .select()
    const dataSorted = data.sort((a,b) => a.createdAt - b.createdAt )
  res.render("newsfeed", {locals: {url: dataSorted}})
});

app.post('/logout', (req, res) => {
  const { error } = supabase.auth.signOut()
  res.redirect('/loginpage')
})

app.post('/newsfeed', async (req, res) => {
  console.log(req.body.newpost)
  const { data, error } = await supabase
    .from('Post')
    .insert([
      {url: req.body.newpost},
    ])

    if (data) {
      res.status(200).redirect('/newsfeed')
    } else {
      res.status(400).redirect('/newsfeed')
    }
});

app.post('/login', async (req, res) => {
  // console.log(req)
  const { user, session, error } = await supabase.auth.signIn({
  password: req.body.password,
  email: req.body.email,
  })
  if (user){
    res.status(200).render('newsfeed');
  } else {
    res.status(400).render('loginpage')
  }

});

app.post('/chirp', async (req, res) => {
  // console.log(req)
  const { user, session, error } = await supabase.auth.signUp({
  password: req.body.user_password,
  email: req.body.email,
  })
  res.render('loginpage')
});


app.post('/cheep', async (req, res) => {
  const { data, error } = await supabase
  .from('User')
  .update({ username: 'imnew' })
  .match({ username: 'newguys' })
  console.log(data)
});

app.delete('/bleep', async (req, res) => {
const { data, error } = await supabase
  .from('User')
  .delete()
  .match({ id: 3 })
});

app.listen(PORT, () => console.log(`${PORT} is running`));
