
var wiki = require('./index');

wiki('https://github.com/clibs/clib/wiki/Packages', function(err, pkgs){
  if (err) throw err;
  console.log(pkgs);
});