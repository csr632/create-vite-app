import type { UserConfig } from 'vite'
import * as vpr from 'vite-plugin-react'
import pages from 'vite-plugin-react-pages'
import mdx from 'vite-plugin-mdx'
import * as path from 'path'

module.exports = {
  root: __dirname,
  jsx: 'react',
  plugins: [vpr, mdx(), pages(path.join(__dirname, 'docs'))],
  alias: {
    'my-library': '/src',
    '/@src/': '/src/'
  },
  minify: false,
  outDir: 'docs-dist'
} as UserConfig
