let personagens = ['ciclope', 'jean-grey', 'lince-negra', 'tempestade', 'vampira', 'wolverine', 'noturno', 'magneto']
let descricoes = {
    'ciclope': 'Tem o poder de disparar rajadas ópticas por um acidente que aconteceu com ele quando criança, mas não consegue controlá-los',
    'jean-grey': 'É a telepata mais poderosa do mundo, telepata; telecinética e empata ômega, sendo possivelmente ao lado de Magneto a mutante mais poderosa do universo',
    'lince-negra': 'Passa pelos objetos na mesma velocidade em que ela está se movendo antes de entrar neles. Como ela é incapaz de respirar enquanto está dentro de um objeto, ela só pode passar continuamente por objetos sólidos (como quando viaja no subsolo), desde que consiga prender a respiração.',
    'tempestade': 'Ela é capaz de controlar o clima e a atmosfera e é considerada uma das mutantes mais poderosas do planeta.',
    'vampira': 'Seu poder mutante é a habilidade de absorver a vitalidade, memórias, habilidades e poderes de outros seres vivos através do contato com a pele.',
    'wolverine': 'É um mutante que possui sentidos afiados, capacidades físicas aprimoradas, habilidade regenerativa poderosa conhecida como fator de cura e três garras retráteis de osso em cada mão.',
    'noturno': 'Possui agilidade sobre-humana e a capacidade de teletransporte, invisibilidade em sombras profundas e as mãos e os pés aderem à parede. Suas mutações físicas incluem a pele azul, três dedos nos pés e mãos (incluindo o polegar), olhos amarelos e uma cauda preênsil.',
    'magneto': 'Tem a capacidade de controle e manipulação de campos magnéticos, bem como qualquer tipo de metal. É um dos vilões mais poderosos da série'
}

function selectCharacter(char) {
  
    for (let personagem of personagens) {
      if (document.getElementById(personagem).classList.contains('selecionado')) {
        document.getElementById(personagem).classList.remove('selecionado');
        document.getElementById(char).classList.add('selecionado');

        document.querySelector('.personagem-grande').src = `./src/images/card-${char}.png`
        document.getElementById('nome-personagem').innerHTML = char
        document.getElementById('descricao-personagem').innerHTML = descricoes[char]
      }
    }
  }