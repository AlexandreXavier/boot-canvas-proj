const getContext = require('./lib/getContext')
const context = getContext('2d')
const fit=require('./lib/fitCanvas')
const canvas = context.canvas
const dpr = window.devicePixelRatio
document.body.appendChild(canvas)
fit(canvas,window,dpr)

