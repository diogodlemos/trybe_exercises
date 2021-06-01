window.onload = function() {
  let bodyFather = document.body;
  let optionsColorsBG = document.createElement('div');
  optionsColorsBG.className = 'container-options-colorsbg';
  bodyFather.appendChild(optionsColorsBG);

  let containerColorsBg = document.querySelector('.container-options-colorsbg');
  let titleColorsBG = document.createElement('h4');
  titleColorsBG.innerText = 'Colors of background-color';
  containerColorsBg.appendChild(titleColorsBG);

  let optionColorBG1 = document.createElement('div');
  optionColorBG1.className = 'op-colorbg';
  optionColorBG1.id = 'op1';
  containerColorsBg.appendChild(optionColorBG1);
  optionColorBG1.addEventListener('click',function(){
    bodyFather.style.backgroundColor = '#b5e7a0';
    localStorage.setItem('preferenceBG', 'b5e7a0');
  });

  let optionColorBG2 = document.createElement('div');
  optionColorBG2.className = 'op-colorbg';
  optionColorBG2.id = 'op2';
  containerColorsBg.appendChild(optionColorBG2);
  optionColorBG2.addEventListener('click',function(){
    bodyFather.style.backgroundColor = '#618685';
    localStorage.setItem('preferenceBG', '618685');
  });

  let optionColorBG3 = document.createElement('div');
  optionColorBG3.className = 'op-colorbg';
  optionColorBG3.id = 'op3';
  containerColorsBg.appendChild(optionColorBG3);
  optionColorBG3.addEventListener('click',function(){
    bodyFather.style.backgroundColor = '#ffef96';
    localStorage.setItem('preferenceBG', 'ffef96');
  });

  let optionColorBG4 = document.createElement('div');
  optionColorBG4.className = 'op-colorbg';
  optionColorBG4.id = 'op4';
  containerColorsBg.appendChild(optionColorBG4);
  optionColorBG4.addEventListener('click',function(){
    bodyFather.style.backgroundColor = '#3e4444';
    localStorage.setItem('preferenceBG', '3e4444');
  });

  bodyFather.style.backgroundColor = localStorage.getItem('preferenceBG');

  let containerColorsText = document.createElement('div');
  containerColorsText.className = 'container-options-colorsbg';
  containerColorsText.id = 'color-text';
  bodyFather.appendChild(containerColorsText);


  let titleColorsText = document.createElement('h4');
  titleColorsText.innerText = 'Colors of text color';
  containerColorsText.appendChild(titleColorsText);

  let paragraph = document.getElementsByTagName('p')[0];

  let opColorText = document.createElement('div');
  opColorText.id = 'color-text1';
  opColorText.className = 'op-colorbg'
  containerColorsText.appendChild(opColorText);
  opColorText.addEventListener('click',function(){
    paragraph.style.color = 'white';
    localStorage.setItem('preference text Color', 'white');
  });

  let opColorText2 = document.createElement('div');
  opColorText2.id = 'color-text2';
  opColorText2.className = 'op-colorbg'
  containerColorsText.appendChild(opColorText2);
  opColorText2.addEventListener('click',function(){
    paragraph.style.color = 'black';
    localStorage.setItem('preference text Color', 'black');
  });

  let opColorText3 = document.createElement('div');
  opColorText3.id = 'color-text3';
  opColorText3.className = 'op-colorbg'
  containerColorsText.appendChild(opColorText3);
  opColorText3.addEventListener('click',function(){
    paragraph.style.color = 'red';
    localStorage.setItem('preference text Color', 'red');
  });

  paragraph.style.color = localStorage.getItem('preference text Color');

  let containerSizeText = document.createElement('div');
  containerSizeText.className = 'container-options-color';
  containerSizeText.id = 'size-text';
  bodyFather.appendChild(containerSizeText);

  let titleSizeText = document.createElement('h4');
  titleSizeText.innerText = 'Size font text ';
  containerSizeText.appendChild(titleSizeText);

  let opText1 =document.createElement('div');
  opText1.id = 'size1';
  opText1.className = 'op-size-text';
  opText1.innerText = '10px';
  containerSizeText.appendChild(opText1);
  opText1.addEventListener('click',function(){
    paragraph.style.fontSize = '10px';
    localStorage.setItem('preference Size Text', '10px');
  });

  let opText2 =document.createElement('div');
  opText2.id = 'size2';
  opText2.className = 'op-size-text';
  opText2.innerText = '15px';
  containerSizeText.appendChild(opText2);
  opText2.addEventListener('click',function(){
    paragraph.style.fontSize = '15px';
    localStorage.setItem('preference Size Text', '15px');
  });

  let opText3 =document.createElement('div');
  opText3.id = 'size2';
  opText3.className = 'op-size-text';
  opText3.innerText = '20px';
  containerSizeText.appendChild(opText3);
  opText3.addEventListener('click',function(){
    paragraph.style.fontSize = '20px';
    localStorage.setItem('preference Size Text', '20px');
  });

  paragraph.style.fontSize = localStorage.getItem('preference Size Text');
}