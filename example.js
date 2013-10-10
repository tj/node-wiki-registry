
var wiki = require('./index');

wiki('https://github.com/component/component/wiki/Components', function(err, pkgs){
  if (err) throw err;
  console.log(pkgs);
});