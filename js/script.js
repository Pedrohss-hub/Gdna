function generate() {
    var m = Math.trunc(Math.random() * (11-0)+0);
    console.log(m)
    
    document.getElementById('numjs').innerText = m
  
      if (m<5) 
      {
          document.getElementById('respjs').innerText = "Sua média está baixa"
          document.querySelector('div.boxresp').style.border = "2px solid gray"
          document.querySelector('div.boxresp').style.width = "230px"
          document.querySelector('div#respjs').style.textShadow = "1px 1px 15px gray"
  
      } else if (m<7)
      {
          document.getElementById('respjs').innerText = "Você está na média"
          document.querySelector('div.boxresp').style.border = "2px solid yellow"
          document.querySelector('div.boxresp').style.width = "210px"
          document.querySelector('div#respjs').style.textShadow = "1px 1px 15px yellow"
  
      } else
      {
          document.getElementById('respjs').innerText = "Sua média está alta"
          document.querySelector('div.boxresp').style.border = "2px solid blue"
          document.querySelector('div.boxresp').style.width = "210px"
          document.querySelector('div#respjs').style.textShadow = "1px 1px 15px blue"
  
      }
  
  }
  
  function hum() {
    humor.innerText = ";-;"
    humor.style.background = "lightblue"
  }
  function triste() {
    humor.innerText = ":("
    humor.style.background = "yellow"
  
  }
  function saiu() {
    humor.innerText = "._."
    humor.style.background = "gray"
  
  }
  
  var humor = document.getElementById('humor');
  
  var btn = document.querySelector('div.btjs');
  btn.addEventListener("click", refresh);