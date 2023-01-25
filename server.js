const express = require('express'); 
const app = express();
const PORT = 4010; 
const cookieParser = require('cookie-parser'); 

app.use(cookieParser()); 



app.use(express.json()); 
app.use(express.urlencoded({extended: true })); 


app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)); 