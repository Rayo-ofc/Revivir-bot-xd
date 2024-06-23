import os from 'os'
import util from 'util'
import ws from 'ws';
import sizeFormatter from 'human-readable'
let MessageType =  (await import(global.baileys)).default

import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {

let pp = imagen4
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let old = performance.now()
  
  let neww = performance.now()
  let totaljadibot = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])]
  let speed = neww - old

let info = `PROBANDO BOTÓNES PERROS`
await conn.sendButton(m.chat, info, wm, pp, [
['XD', '#grupolista'],
['XD', '/play amnesia '],
['PRUEBA', '.menu']], null, [
['𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', `${md}`]], m)
}
handler.help = ['infobot']
handler.tags = ['test', 'au']
handler.command = /^(au)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
