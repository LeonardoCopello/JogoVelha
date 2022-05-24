import React, { useState } from 'react'


export default function App() {

// ESTILOS
const tabu = {
  display: 'flex',
  height: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
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
  cursor: 'pointer',
  fontSize: 60,
  border: '2px solid #000'
}
const btn = {
  width: 120,
  height: 60,
  backgroundColor: 'red',
  border: '2px solid red',
  borderRadius: 10,
  color: 'white',
  fontSize: 17,
}
function MouseOver(event) {
  event.target.style.background = 'gray';
  event.target.style.border = 'gray';
  event.target.style.transition = '0.3s';
  

}
function MouseOut(event){
  event.target.style.background="red";
}

  const [jogo, setJogo] = useState([['','',''],['','',''],['','','']])
  const [simboloAtual, setSimboloAtual] = useState('X')
  const [vitoria, setVitoria] = useState(false)
  const [empate, setEmpate] = useState(false)

  
  const inicio = (e) => {
    if (!vitoria && !empate) {
    if (e.target.innerHTML !== "") {
      alert('Clique em uma casa vazia')
      return
    } else {
      marcaCasa(e)
      marcaElemento(e, simboloAtual)
    }
  }
  }
  const marcaCasa = (e) => {
    e.target.innerHTML = simboloAtual
      if (simboloAtual == "X") {
        setSimboloAtual('O')
      } else {
        setSimboloAtual('X')
      }
  }

  const marcaElemento = (e, simboloAtual) => {
    e.target.className = simboloAtual
    let linha = e.target.getAttribute('linha')
    let coluna = e.target.getAttribute('coluna')
    setJogo([...jogo], jogo[linha][coluna] = simboloAtual)
    verificaEmpate()
    verificaVencedor(simboloAtual)
  }

  const verificaVencedor = (simboloAtual) => {
    verificaLinhas(simboloAtual)
    verificaColunas(simboloAtual)
    verificaDiagonais1(simboloAtual)
    verificaDiagonais2(simboloAtual)

  }

  const verificaLinhas = (simboloAtual) => {
    for (let l = 0; l < 3; l++) {
      let pontos = 0
      for(let c = 0; c < 3; c++) {
        if (jogo[l][c] == simboloAtual) {
          pontos++
          pontos == 3 && celebraVitoria(simboloAtual, 1)
        }
      }
    }
  }
  const verificaColunas = () => {
    for (let c = 0; c < 3 ; c++) {
      let pontos = 0
      for (let l = 0; l < 3; l++) {
        if(jogo[l][c] == simboloAtual) {
          pontos++
          pontos == 3 && celebraVitoria(simboloAtual, 2)
        }
      }
    }
  }
  const verificaDiagonais1 = (simboloAtual) => {
    let pontos = 0;
    for (let i = 0; i < 3; i++) {
      if (jogo[i][i] == simboloAtual) {
        pontos++
        pontos == 3 && celebraVitoria(simboloAtual, 3)
      }
    }
  }
  const verificaDiagonais2 = (simboloAtual) => {
      if (jogo[2][0] == simboloAtual && jogo[1][1] == simboloAtual && jogo[0][2] == simboloAtual ){

      celebraVitoria(simboloAtual, 4)
    }
  }
  const verificaEmpate = () => {
    let elmsX = document.getElementsByClassName("X")
    let elmsO = document.getElementsByClassName("O")
    if (elmsO.length + elmsX.length == 9) {
      setEmpate(true)
    } 
  }

  const celebraVitoria = (simboloAtual, t) => {
    console.log(jogo)
    console.log(t)
    setSimboloAtual(simboloAtual)
    setVitoria(true)
    travaTabela()
  }
  const travaTabela = () => {
    let elmsTabela = document.getElementsByTagName('div')
    for (let i = 0; i < elmsTabela.length; i++) {
      if (elmsTabela[i].className == '' || elmsTabela[i].className == '') {
        elmsTabela[i].style.backgroundColor = 'gray'
      }
      if (elmsTabela[i].id == "root") {
        elmsTabela[i].style.backgroundColor = 'white'
      }
    }
  }
  const recarregar = () => {
    document.location.reload(true)
  }

    return (
      <main style={tabu}>
        {<h1>{(!vitoria && !empate) && (`É a vez do jogador "${simboloAtual}" jogar`)}</h1>}
        <section style={tabuLinha}>
          <div style={casa} linha="0" coluna="0" onClick={inicio}></div>
          <div style={casa} linha="0" coluna="1" onClick={inicio}></div>
          <div style={casa} linha="0" coluna="2" onClick={inicio}></div>
        </section>
        <section style={tabuLinha}>
          <div style={casa} linha="1" coluna="0" onClick={inicio}></div>
          <div style={casa} linha="1" coluna="1" onClick={inicio}></div>
          <div style={casa} linha="1" coluna="2" onClick={inicio}></div>
        </section> 
        <section style={tabuLinha}> 
          <div style={casa} linha="2" coluna="0" onClick={inicio}></div>
          <div style={casa} linha="2" coluna="1" onClick={inicio}></div>
          <div style={casa} linha="2" coluna="2" onClick={inicio}></div>
        </section>
        {vitoria && (<h1>{`O jogador "${simboloAtual}" foi o vencedor`}</h1>)}
        {(empate && !vitoria) && (<h1>{`O jogo terminou empatado`}</h1>)}
        {(empate || vitoria) && (<button style={btn} id='btn' onClick={recarregar} onMouseOver={MouseOver} onMouseOut={MouseOut}>Jogar Novamente</button>)}
        
      </main>
    )
  }
