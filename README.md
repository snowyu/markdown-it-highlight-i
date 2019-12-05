# markdown-it-highlight-i [![npm version](http://img.shields.io/npm/v/markdown-it-highlight-i.svg?style=flat-square)](https://www.npmjs.org/package/markdown-it-highlight-i)

> Preset to use [highlight.js] with [markdown-it] for [interactive markdown] only.

[highlight.js]: https://highlightjs.org/
[markdown-it]: https://github.com/markdown-it/markdown-it
[interative markdown]: https://riceball.me/imarkdown

Usage
-----

```js
const md = require('markdown-it')()
  .use(require('markdown-it-highlight-i'), opts)

// All code blocks will be highlighted unless it is playable block.
```

The `opts` object can contain:

Name   | Description                                                             | Default
-------|-------------------------------------------------------------------------|--------
`auto` | Whether to automatically detect language if not specified.              | `true`
`code` | Whether to add the `hljs` class to raw code blocks (not fenced blocks). | `true`


Thanks Original [markdown-it-highlightjs](https://github.com/valeriangalliat/markdown-it-highlightjs)
