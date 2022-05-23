import React, { useState } from 'react'


export default function App() {

// ESTILOS
const tabu = {
  display: 'flex',
  flexDirection: 'column',
}
const tabuLinha = {
  display: 'flex',
  flexDirection: 'row'
}
const casa = {
  width: 100,
  height: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // flexDirection: 'row',
  cursor: 'pointer',
  fontSize: 60,
  border: '2px solid #000'
}


  const jogoInicial = [
    ['','',''],
    ['','',''],
    ['','','']
  ]

  const [jogo, setJogo] = useState([['','',''],['','',''],['','',''],])
  const [simboloAtual, setSimboloAtual] = useState('X')
  const [jogando, setJogando] = useState(true)
  
  const preencheCasa = (e) => {
    if (e.target.innerHTML !== "") {
      alert('Clique em uma casa vazia')
      return
    } else if (simboloAtual === 'X') {
      e.target.innerHTML = 'X'
      marcaElemento(e, e.target.innerHTML)
      setSimboloAtual('O')
    } else {
      e.target.innerHTML = 'O'
      marcaElemento(e, e.target.innerHTML)
      setSimboloAtual('X')
    }
    verificaVencedor()
  }

  const verificaVencedor = () => {
    // verificaLinhas()
    // verificaColunas()
    // verificaDiagonais()
  }

  const marcaElemento = (e, simbolo) => {
    console.log(e)
    console.log(simbolo)
    e.target.className = simbolo
  }

  // const verificaLinhas = () => {
  //   for (let l=0; l < 3; l++) {
  //     if (...jogo[])
  //   }
  // }



  // const tabuleiro = () => {
    return (
      <div style={tabu}>
        <div style={tabuLinha}>
          <div style={casa} data-pos='00' linha="0" coluna="0" className='' onClick={preencheCasa}>{jogoInicial[0][0]}</div>
          <div style={casa} data-pos='01' linha="0" coluna="1" className='' onClick={preencheCasa}>{jogoInicial[0][1]}</div>
          <div style={casa} data-pos='02' linha="0" coluna="2" className='' onClick={preencheCasa}>{jogoInicial[0][2]}</div>
        </div> 
        <div style={tabuLinha}> 
          <div style={casa} data-pos='10' linha="1" coluna="0" className='' onClick={preencheCasa}>{jogoInicial[1][0]}</div>
          <div style={casa} data-pos='11' linha="1" coluna="1" className='' onClick={preencheCasa}>{jogoInicial[1][1]}</div>
          <div style={casa} data-pos='12' linha="1" coluna="2" className='' onClick={preencheCasa}>{jogoInicial[1][2]}</div>
        </div> 
        <div style={tabuLinha}> 
          <div style={casa} data-pos='20' linha="2" coluna="0" className='' onClick={preencheCasa}>{jogoInicial[2][0]}</div>
          <div style={casa} data-pos='21' linha="2" coluna="1" className='' onClick={preencheCasa}>{jogoInicial[2][1]}</div>
          <div style={casa} data-pos='22' linha="2" coluna="2" className='' onClick={preencheCasa}>{jogoInicial[2][1]}</div>
        </div>
      </div>
    )
  }

  // const verificaVitoria = () => {
  //   // linhas
  //   let 
  // }


