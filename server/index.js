const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3003;
require("dotenv").config();
const SUPABASE_KEY = process.env.SUPABASE_KEY

const { createClient } = require("@supabase/supabase-js");

const url = "https://swtappturnninmlazeqo.supabase.co";

const supabase =  createClient(url,SUPABASE_KEY);

app.get('/', async (req, res) => {
  const { data, error } = await supabase
  .from('User')
  .select()
  console.log(data)
});

app.post('/chirp', async (req, res) => {
  const { data, error } = await supabase
  .from('User')
  .insert([
    { username: 'thatnewerguy', password: 'wowser', email: 'evennewerguys@aol.com' },
    { username: 'newguyssss', password: 'thisisapasswordssss', email: 'newestofguys@yahoo.com' },
  ])
  console.log(data)
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
