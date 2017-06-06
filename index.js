const Koa = require('koa');
const app = new Koa()

app.use(ctx => {
  params = {
    tab: ctx.query.tab || "expandtab",
    sw: parseInt(ctx.query.sw, 10) || 2,
    ts: parseInt(ctx.query.ts, 10) || 2,
    encode: ctx.query.encode || 'utf-8',
    clipboard: ctx.query.clipboard || 'unnamedplus',
    color: ctx.query.color || 'default'
  }
  ctx.body =
`
set number
set tabstop=${params.ts}
set shiftwidth=${params.sw}
set autoindent
set whichwrap=b,s,h,l,[,],<,>
set backspace=indent,eol,start
set virtualedit=block
set smartindent
set encoding=${params.encode}
set shortmess+=c
set fileencoding=%{params.encode}
set smarttab
set ${params.tab}
set shiftwidth=${params.sw}
set showmatch
set clipboard+=${params.clipboard}
set noequalalways
set splitbelow
colorscheme ${params.color}
syntax on
`
})

app.listen(3000)
