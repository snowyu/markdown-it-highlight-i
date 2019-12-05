const hljs = require('highlight.js')

// Wrap a render function to add `hljs` class to code blocks.
// const wrap = render =>
//   function (...args) {
//     return render.apply(this, args)
//       .replace('<code class="', '<code class="hljs ')
//       .replace('<code>', '<code class="hljs">')
//   }

function highlight (str, lang) {
  if (!lang || lang === 'output' || lang.indexOf('playable') >= 0) return ''
  if (hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value
    } catch (__) {}
  }

  return '' // use external default escaping
}

const highlightjs = (md, opts) => {
  opts = Object.assign({}, highlightjs.defaults, opts)

  // md.options.highlight = opts.auto ? highlightAuto : highlight
  // md.renderer.rules.fence = wrap(md.renderer.rules.fence)

  // if (opts.code) {
  //   md.renderer.rules.code_block = wrap(md.renderer.rules.code_block)
  // }
  md.options.highlight = highlight
}

highlightjs.defaults = {
  auto: true,
  code: true
}

module.exports = highlightjs
