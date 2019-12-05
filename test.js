const { strictEqual } = require('assert')
const md = require('markdown-it')
const highlightjs = require('./')

strictEqual(
  md().use(highlightjs).render('```js\nconsole.log(42)\n```'),
  `<pre><code class="language-js"><span class="hljs-built_in">console</span>.log(<span class="hljs-number">42</span>)
</code></pre>
`)

strictEqual(
  md().use(highlightjs).render('```\ntest\n```'),
  `<pre><code>test\n</code></pre>
`)

strictEqual(
  md().use(highlightjs).render('    test\n'),
  `<pre><code>test
</code></pre>
`)

strictEqual(
  md().use(highlightjs, { code: false }).render('    test\n'),
  `<pre><code>test
</code></pre>
`)

strictEqual(
  md().use(highlightjs).render('```\n<?php echo 42;\n```'),
  `<pre><code>&lt;?php echo 42;\n</code></pre>
`)

strictEqual(
  md().use(highlightjs, { auto: false }).render('```\n<?php echo 42;\n```'),
  `<pre><code>&lt;?php echo 42;\n</code></pre>
`)

strictEqual(
  md().use(highlightjs).render('```js/playable\nconsole.log(42)\n```'),
  `<pre><code class="language-js/playable">console.log(42)\n</code></pre>
`)

strictEqual(
  md().use(highlightjs).render('```output\nconsole.log(42)\n```'),
  `<pre><code class="language-output">console.log(42)\n</code></pre>
`)

strictEqual(
  md().use(highlightjs).render('```js/output:playable\nconsole.log(42)\n```'),
  `<pre><code class="language-js/output:playable">console.log(42)\n</code></pre>
`)
