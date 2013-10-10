
# Wiki registry

  Build registries out of Github wiki pages like [Clib](https://github.com/clibs/clib/wiki/Packages)
  or [Component](https://github.com/component/component/wiki/Components).

## Installation

    $ npm install wiki-registry

## API

```js
var wiki = require('wiki-registry');

wiki('https://github.com/clibs/clib/wiki/Packages', function(err, pkgs){
  if (err) throw err;
  console.log(pkgs);
});
```

## Example

  For example scraping an early version of https://github.com/clibs/clib/wiki/Packages
  resulted in:

```js
{ Utilities: 
   { 'clibs/hash': 
      { name: 'clibs/hash',
        url: 'https://github.com/visionmedia/hash.c' },
     'clibs/rgba': 
      { name: 'clibs/rgba',
        url: 'https://github.com/visionmedia/rgba.c' },
     'clibs/unlikely': 
      { name: 'clibs/unlikely',
        url: 'https://github.com/visionmedia/unlikely.c' },
     'clibs/timestamp': 
      { name: 'clibs/timestamp',
        url: 'https://github.com/visionmedia/timestamp.c' },
     'clibs/commander': 
      { name: 'clibs/commander',
        url: 'https://github.com/visionmedia/commander.c' },
     'clibs/ms': { name: 'clibs/ms', url: 'https://github.com/visionmedia/ms.c' },
     'clibs/bytes': 
      { name: 'clibs/bytes',
        url: 'https://github.com/visionmedia/bytes.c' },
     'clibs/term': 
      { name: 'clibs/term',
        url: 'https://github.com/visionmedia/term.c' },
     'clibs/buffer': 
      { name: 'clibs/buffer',
        url: 'https://github.com/visionmedia/buffer.c' },
     'nami-doc/trim.c': 
      { name: 'nami-doc/trim.c',
        url: 'https://github.com/Nami-Doc/trim.c' },
     'nami-doc/strlen.c': 
      { name: 'nami-doc/strlen.c',
        url: 'https://github.com/Nami-Doc/strlen.c' },
     'jwerle/url.h': { name: 'jwerle/url.h', url: 'https://github.com/jwerle/url.h' },
     'jwerle/progress.h': 
      { name: 'jwerle/progress.h',
        url: 'https://github.com/jwerle/progress.h' },
     'jwerle/fs.h': 
      { name: 'jwerle/fs.h',
        url: 'https://github.com/jwerle/progress.h' },
     'jwerle/path.h': 
      { name: 'jwerle/path.h',
        url: 'https://github.com/jwerle/path.h' },
     'stephenmathieson/trim.c': 
      { name: 'stephenmathieson/trim.c',
        url: 'https://github.com/stephenmathieson/trim.c' },
     'stpehenmathieson/case.c': 
      { name: 'stpehenmathieson/case.c',
        url: 'https://github.com/stephenmathieson/case.c' } },
  Executables: 
   { 'visionmedia/watch': 
      { name: 'visionmedia/watch',
        url: 'https://github.com/visionmedia/watch' },
     'visionmedia/every': 
      { name: 'visionmedia/every',
        url: 'https://github.com/visionmedia/every' },
     'visionmedia/mon': 
      { name: 'visionmedia/mon',
        url: 'https://github.com/visionmedia/mon' },
     'visionmedia/histo': 
      { name: 'visionmedia/histo',
        url: 'https://github.com/visionmedia/histo/issues/2' } } }
```

# License

  MIT
