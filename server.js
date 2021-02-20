const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

const connectDB = require('./config/db');
connectDB();

//template 
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index');
 });

//routes
app.use('/files', require('./routes/files'));
app.use('/files', require('./routes/downloadpage'));
app.use('/files/download', require('./routes/download'));

app.listen(PORT, () => {
    console.log(`Listning on port ${PORT}`);
});