// *📲  Búsqueda de Mods de WhatsApp  *
// *By Code Titans*

import axios from 'axios';

let handler = async (m, { conn, usedPrefix, command }) => {
  await m.react('🕓');
  
  try {
    const response = await axios.get('https://vajira-official-api.vercel.app/search/modwhatsapp?q=gbwhatsapp');

    if (response.status === 200 && response.data.status) {
      const results = response.data.result;

      let txt = '`乂  M O D S  D E  W H A T S A P P`\n\n';
      results.forEach(item => {
        txt += `> *Título:* ${item.title}\n`;
        txt += `> *Enlace:* ${item.link}\n\n`;
      });

      await conn.sendMessage(m.chat, { text: txt }, { quoted: m });
      await m.react('✅');
    } else {
      await m.react('✖️');
      await conn.reply(m.chat, 'Error al buscar mods de WhatsApp.', m);
    }
  } catch (error) {
    console.error(error);
    await m.react('✖️');
    await conn.reply(m.chat, 'Hubo un error al procesar la solicitud. Intenta de nuevo más tarde.', m);
  }
}

handler.tags = ['tools'];
handler.help = ['modwhatsapp', 'whatsappmods'];
handler.command = /^(modwhatsapp|whatsappmods)$/i;
handler.register = true;

export default handler;