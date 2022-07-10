//THIS ONE WAS REALLY HARD, STIL DONT QUITE UNDERSTAND THE DECRYPT FUNCTION, WILL COME BACK TO THIS ONE
function encrypt(text, n) {
  if(!text || n <= 0 ){
    return text
  } else {
    for(let i = 0; i < n; i++ ){
      let result = "";
      for(let j = 1; j < text.length; j+=2){
        result+=text[j]
      }
      for(let j = 0; j < text.length; j+=2){
        result+=text[j]
      }
      text = result
    }
  return text
  }
}


function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0){
     return encryptedText;
  }
  const result = new Array(encryptedText.length);
  for(let i = 0; i < n; i++) {
    let j = 0;
    for (let i = 1; i < result.length; i += 2) {
      result[i] = encryptedText[j++];
    }
    for (let i = 0; i < result.length; i += 2) {
      result[i] = encryptedText[j++];
    }
    encryptedText = result.join('');
  }
 return encryptedText
}

//other solutions
function encrypt(text, n) {
  if (!text || !text.length || n <= 0)
  {
    return text;
  }

  var res = "";
  var oth = "";

  for (var i = 0; i < text.length; ++i)
  {
    if (i % 2 == 0)
    {
      oth += text[i];
    }
    else
    {
      res += text[i];
    }
  }

  return encrypt(res + oth, --n);
}

function decrypt(encryptedText, n) {
  if (!encryptedText || !encryptedText.length || n <= 0)
  {
    return encryptedText;
  }

  var first = encryptedText.slice(0, encryptedText.length / 2);
  var second = encryptedText.slice(encryptedText.length / 2);
  
  var res = "";
  var i = 0;
  var j = 0;

  while (res.length < encryptedText.length)
  {
    if (res.length % 2 == 0)
    {
      res += second[i];
      i++;
    }
    else
    {
      res += first[j];
      j++;
    }
  }

  return decrypt(res, --n);
}

const encrypt = (s, n) => {
  if (!s) return s;
  const l = s.length;
  for (let i = 0; i < n; i++) {
    let x = '', y = '';
    for (let j = 0; j < l; j++) {
      if (j % 2) x += s[j];
      else y += s[j];
    }
    s = x + y;
  }
  return s;
}

const decrypt = (s, n) => {
  if (!s) return s;
  const l = Math.floor(s.length / 2);
  for (let i = 0; i < n; i++) {
    let x = s.slice(0, l), y = s.slice(l);
    s = '';
    for (let j = 0; j < l + 1; j++) 
      s += (y[j] ? y[j] : '') + (x[j] ? x[j] : '');
  }
  return s;
}
