const express = require('express');


const app = express();

const PORT = process.env.PORT || 3000;




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });
  
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  
  });


require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);


app.listen(PORT, function() {
  console.log(`Server is listening on PORT: ${PORT}`);
});