
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
   [ { name: 'clibs/hash',
       url: 'https://github.com/visionmedia/hash.c' },
     { name: 'clibs/rgba',
       url: 'https://github.com/visionmedia/rgba.c' },
     { name: 'clibs/unlikely',
       url: 'https://github.com/visionmedia/unlikely.c' },
     { name: 'clibs/timestamp',
       url: 'https://github.com/visionmedia/timestamp.c' },
     { name: 'clibs/commander',
       url: 'https://github.com/visionmedia/commander.c' },
     { name: 'clibs/ms', url: 'https://github.com/visionmedia/ms.c' },
     { name: 'clibs/bytes',
       url: 'https://github.com/visionmedia/bytes.c' },
     { name: 'clibs/term',
       url: 'https://github.com/visionmedia/term.c' },
     { name: 'clibs/buffer',
       url: 'https://github.com/visionmedia/buffer.c' },
     { name: 'nami-doc/trim.c',
       url: 'https://github.com/Nami-Doc/trim.c' },
     { name: 'nami-doc/strlen.c',
       url: 'https://github.com/Nami-Doc/strlen.c' },
     { name: 'jwerle/url.h', url: 'https://github.com/jwerle/url.h' },
     { name: 'jwerle/progress.h',
       url: 'https://github.com/jwerle/progress.h' },
     { name: 'jwerle/fs.h',
       url: 'https://github.com/jwerle/progress.h' },
     { name: 'jwerle/path.h',
       url: 'https://github.com/jwerle/path.h' },
     { name: 'stephenmathieson/trim.c',
       url: 'https://github.com/stephenmathieson/trim.c' },
     { name: 'stpehenmathieson/case.c',
       url: 'https://github.com/stephenmathieson/case.c' } ],
  Executables: 
   [ { name: 'visionmedia/watch',
       url: 'https://github.com/visionmedia/watch' },
     { name: 'visionmedia/every',
       url: 'https://github.com/visionmedia/every' },
     { name: 'visionmedia/mon',
       url: 'https://github.com/visionmedia/mon' },
     { name: 'visionmedia/histo',
       url: 'https://github.com/visionmedia/histo/issues/2' } ] }

```

# License

  MIT
