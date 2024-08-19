let residencias = [
    {
      id: 1,
      bairro: "Centro",
      rua: "Rua Jequitiba",
      numero: 71,
      moradores: ["Rogesvaldo", "Biricutico"],
    },
    {
      id: 2,
      bairro: "Centro",
      rua: "Rua 2",
      numero: 72,
      moradores: ["Marvelinda", "Brasilsvaldo"],
    },
    {
      id: 3,
      bairro: "Uvaranas",
      rua: "Rua Tamandaré",
      numero: 10,
      moradores: ["Pietina", "Zé", "Pamonho"],
    },
  ];
  
  function listarResidencias() {
    residencias.forEach((residencia) => {
      console.log(
        `ID: ${residencia.id}, Bairro: ${residencia.bairro}, Rua: ${residencia.rua}, Número: ${residencia.numero}`
      );
      residencia.moradores.forEach((morador, indice) => {
        console.log(`Morador ${indice + 1}: ${morador}`);
      });
      console.log('---------------------------');
    });
  }
  
  function adicionarResidencia(bairro, rua, numero, moradores) {
    const novaResidencia = {
      id: residencias.length + 1,
      bairro,
      rua,
      numero,
      moradores,
    };
    residencias.push(novaResidencia);
  }
  
  function atualizarResidencia(id, bairro, rua, numero, moradores) {
    const residencia = residencias.find((res) => res.id === id);
    if (residencia) {
      residencia.bairro = bairro;
      residencia.rua = rua;
      residencia.numero = numero;
      residencia.moradores = moradores;
    } else {
      console.log(`Residência com ID ${id} não encontrada.`);
    }
  }
  
  function removerResidencia(id) {
    residencias = residencias.filter((res) => res.id !== id);
  }
  
  module.exports = {
    listarResidencias,
    adicionarResidencia,
    atualizarResidencia,
    removerResidencia,
  };