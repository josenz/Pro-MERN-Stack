// Note that we are using const and not var / This is because we are using the
//  ECMAScript 2015 (ES2015) | ES6 
const express = require('express'); // "require" is a Javascript keyword specific
                                    //   to Node.js, and it is used to import other
                                    //   modules.
const app = express();
app.use(express.static('static'));

app.listen(3000, function () {
    console.log('App started on port 3000');
});

