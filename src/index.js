const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {  
  let holder = [];
  let result = '';
  for (let i = 0; i<expr.length/10; i++){
  holder.push(expr.slice(i*10,i*10+10))
  }
  for(let i=0; i<holder.length; i++){
  if (holder[i]==='**********'){
    result = result + ' '
  }else{
    let encodedWord = wordDecode(holder[i])
    result = result + MORSE_TABLE[encodedWord]
  }
}return result
}

function wordDecode(encoded){
  let word = ''
  for (let i=0; i<5;i++){
    if(encoded.slice(i*2,i*2+2)==='00'){
      word = word + '';
    }else if(encoded.slice(i*2,i*2+2)==='10'){
      word = word + '.'
    }else if(encoded.slice(i*2,i*2+2)==='11'){
      word = word + '-'
    }
  }return word
}

module.exports = {
    decode
}
