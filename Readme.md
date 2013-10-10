
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
       url: 'https://github.com/visionmedia/hash.c',
       description: 'hash library built on zhash' },
     { name: 'clibs/rgba',
       url: 'https://github.com/visionmedia/rgba.c',
       description: 'rgba color string parser' },
     { name: 'clibs/unlikely',
       url: 'https://github.com/visionmedia/unlikely.c',
       description: 'gcc branch prediction macros ' },
     { name: 'clibs/timestamp',
       url: 'https://github.com/visionmedia/timestamp.c',
       description: 'millisecond resolution timestamps' },
     { name: 'clibs/commander',
       url: 'https://github.com/visionmedia/commander.c',
       description: 'expressive argument parser ' },
     { name: 'clibs/ms',
       url: 'https://github.com/visionmedia/ms.c',
       description: 'millisecond parser / formatter util' },
     { name: 'clibs/bytes',
       url: 'https://github.com/visionmedia/bytes.c',
       description: 'byte-length parser / formatter util' },
     { name: 'clibs/term',
       url: 'https://github.com/visionmedia/term.c',
       description: 'terminal utilities' },
     { name: 'clibs/buffer',
       url: 'https://github.com/visionmedia/buffer.c',
       description: 'tiny c-string library' },
     { name: 'nami-doc/trim.c',
       url: 'https://github.com/Nami-Doc/trim.c',
       description: 'trim a string, in place' },
     { name: 'nami-doc/strlen.c',
       url: 'https://github.com/Nami-Doc/strlen.c',
       description: 'get a string\'s length' },
     { name: 'jwerle/url.h',
       url: 'https://github.com/jwerle/url.h',
       description: 'Parse URLs in C much like Node\'s url module.' },
     { name: 'jwerle/progress.h',
       url: 'https://github.com/jwerle/progress.h',
       description: 'Progress display lib for c' },
     { name: 'jwerle/fs.h',
       url: 'https://github.com/jwerle/progress.h',
       description: 'File system API much like Node\'s fs module' },
     { name: 'jwerle/path.h',
       url: 'https://github.com/jwerle/path.h',
       description: 'Split a delimited path string into a char array like the $PATH variable' },
     { name: 'stephenmathieson/trim.c',
       url: 'https://github.com/stephenmathieson/trim.c',
       description: 'string trim with left and right support' },
     { name: 'stpehenmathieson/case.c',
       url: 'https://github.com/stephenmathieson/case.c',
       description: 'string case conversion' } ],
  Executables: 
   [ { name: 'visionmedia/watch',
       url: 'https://github.com/visionmedia/watch',
       description: 'periodically execute commands' },
     { name: 'visionmedia/every',
       url: 'https://github.com/visionmedia/every',
       description: 'simple crontab alternative' },
     { name: 'visionmedia/mon',
       url: 'https://github.com/visionmedia/mon',
       description: 'simple process monitoring' },
     { name: 'visionmedia/histo',
       url: 'https://github.com/visionmedia/histo/issues/2',
       description: 'display histograms from static or streaming input' } ] }

```

# License

  MIT
