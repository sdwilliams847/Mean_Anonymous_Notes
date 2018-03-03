let express     = require("express");
let bodyParser  = require("body-parser");
let mongoose    = require("mongoose");
let path        = require("path");
let app         = express();
let port        = 8000;

app.use(express.static(path.join(__dirname,'/client/notes/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, function() {
    console.log("listening on port "+port);
});

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);