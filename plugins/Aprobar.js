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
  
  

let info = `PROBANDO BOTÓNES PERROS`
await conn.sendButton(m.chat, info, `xd`, pp, [
['XD', '#grupolista'],
['XD', '/play amnesia '],
['PRUEBA', '.menu']], null, [
['𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', `${md}`]], m)
}
handler.help = ['infobot']
handler.tags = ['test', 'au']
handler.command = /^(au)$/i
export default handler

