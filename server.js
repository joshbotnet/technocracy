var express = require('express');
app = express();
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    next()
});
app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);
app.use(express.static('dist'))
app.use(function(req, res) {
  // res.sendFile streams instead of reading the file into memory
  res.sendFile(__dirname + '/dist/index.html')
})
app.listen(app.get('port'), function() {
  console.log('Server is running on port ', app.get('port'))
})
