require('dotenv').config();

const Discord = require('discord.js')
const client = new Discord.Client()
const fetch = require('node-fetch');
var msg = 'rien';

client.on('error', console.error);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('!a help');
})

client.on('message', message => {

   //Check if it's not a bot message

  if(message.author.bot){ return;}

   //XXXXXXXXXX !a help XXXXXXXXXX\\
  
  if (message.content.startsWith('!a help')) {
  message.reply(':arrow_right: Here are some examples of things **I can do** \n \n *Simple maths operation :* \n ```\n!a [Simple operation]\ne.g : " !a 34+78-5 "\n= 107```\n*Convert currencies :* \n ```\n!a convert [Amount] [From Currency] <to> [To Currency]\ne.g : " !a convert 50 eur to usd "\n= 50 EUR equals to 56.67 USD ```');
  return;
  }

  //XXXXXXXXXX !a credits XXXXXXXXXX\\
  
  if (message.content.startsWith('!a credits')) {
  message.reply('Bot created by Mathis#9405\n\n:arrow_right:  mathistimotei.com');
  return;
  }


  //XXXXXXXXXX !a list XXXXXXXXXX\\

  if (message.content.startsWith('!a list')) {
  message.reply(':arrow_right: Here is a list of **ALL** the currencies you can use ```\nAED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BND, BOB, BRL, BSD, BTC, BTN, BWP, BYN, BYR, BZD, CAD, CDF, CHF, CLP, CNY, COP, CRC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, INR, IQD, IRR, ISK, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LVL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, STD, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XDR, XOF, XPF, YER, ZAR, ZMW.\n```');
  return;
  }
   //XXXXXXXXXX !a convert XXXXXXXXXX\\

  if (message.content.startsWith('!a convert')) {
    currencieslist = ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BND', 'BOB', 'BRL', 'BSD', 'BTC', 'BTN', 'BWP', 'BYN', 'BYR', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LVL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XDR', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW'];
  	msg = message.content;
    if(msg == '!a convert' ||  msg == '!a convert help'){
      message.reply(':arrow_right: **!a convert** usage :\nThis command let you convert an amount form a currency to an other\n```\n!a convert [Amount] [From Currency] <to> [To Currency]\n\ne.g : " !a convert 50 eur to usd "\n\n= 50 EUR equals to 56.67 USD  \n```'); 
      return;
    }
    else{
      try{
      msg = msg.substring(11);
      data = msg.split(' ');
      amount = parseInt(data[0], 10);
      fromcu = data[1].toUpperCase();
      tocu = data[data.length - 1].toUpperCase();
      }
      catch(error){
        message.reply(':exclamation: Your syntax is incorect,  please see how to use this command with **!a convert help**');
        return;
      }
      if(currencieslist.includes(fromcu) && currencieslist.includes(tocu)){
      try{
      fetch('https://free.currconv.com/api/v7/convert?q='+fromcu+'_'+tocu+'&apiKey=3354afcea337af7653e4')
      .then(response => response.json())
      .then(recevice => {
      multiplier = eval('recevice.results.'+fromcu+'_'+tocu+'.val');
      money = (amount*multiplier).toFixed(2);
      message.reply(amount+' '+fromcu+' equals to '+money+' '+tocu);
      });
      }
      catch(TypeError){
        message.reply(':exclamation: Sorry but I do not recognize one of these currencies\nType !a list to see all avariable currencies :wink:');
        return;
      }
      }
      else{
        message.reply(':exclamation: Sorry but I do not recognize one of these currencies\nType !a list to see all avariable currencies :wink:');
        return;
      }
    return;
  }
}


  //XXXXXXXXXX !a XXXXXXXXXX\\
  

  try{
  if (message.content.startsWith('!a')) {
    msg = message.content;
    if(msg == '!a' || msg == '!a '){
      message.reply(':arrow_right: **!a** usage :\nThis command let you do some calculations, like addition, substraction, multiplication and division \n```\n!a [Calcul]\n\ne.g : " !a 34+78-5 "\n\n= 107\n```');  
      return;
    }
    else{
    msg = msg.replace('x', '*');
    msg = msg.replace('÷', '/');
    msg = msg.replace('×', '*');
    msg = msg.replace('−', '-');
    msg = msg.substring(3);
    res = eval(msg);
    message.reply('the result is' +'```Elm\n'+res+'\n```');
    return;
  }
  }
 }
 catch(SyntaxError) {
  message.reply(':x: Sorry but this calculation is too hard for me !\n Type **!a** help to see what I am capable of :muscle:\n');
}
})
client.login(process.env.BOT_TOKEN)
