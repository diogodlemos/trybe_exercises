let info = {
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
      recorrente: 'Sim'
    };
let segundaInfo = {
      personagem: 'Tio Patinhas',
      origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
      nota: 'O último MacPatinhas',
      recorrente: 'Sim'
    };

  for (let key in info) {
    console.log(info[key] + ' e '+segundaInfo[key]);
  }