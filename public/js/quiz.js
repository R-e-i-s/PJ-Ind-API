var vt_respostas = [];
var resultado_final = 0;

function pergunta1() {
  document.getElementById("apresentacao").style.display = "none";
  document.getElementById("pergunta1").style.display = "flex";
  document.getElementById("quiz").scrollIntoView({ behavior: "auto" });
}
function pergunta2(rp) {
  vt_respostas.push(Number(rp));
  document.getElementById("pergunta1").style.display = "none";
  document.getElementById("pergunta2").style.display = "flex";
  document.getElementById("quiz").scrollIntoView({ behavior: "auto" });
}
function pergunta3(rp) {
  vt_respostas.push(Number(rp));
  document.getElementById("pergunta2").style.display = "none";
  document.getElementById("pergunta3").style.display = "flex";
  document.getElementById("quiz").scrollIntoView({ behavior: "auto" });
}
function pergunta4(rp) {
  vt_respostas.push(Number(rp));
  document.getElementById("pergunta3").style.display = "none";
  document.getElementById("pergunta4").style.display = "flex";
  document.getElementById("quiz").scrollIntoView({ behavior: "auto" });
}
function pergunta5(rp) {
  vt_respostas.push(Number(rp));
  document.getElementById("pergunta4").style.display = "none";
  document.getElementById("pergunta5").style.display = "flex";
  document.getElementById("quiz").scrollIntoView({ behavior: "auto" });
}
function pergunta6(rp) {
  vt_respostas.push(Number(rp));
  document.getElementById("pergunta5").style.display = "none";
  document.getElementById("pergunta6").style.display = "flex";
  document.getElementById("quiz").scrollIntoView({ behavior: "auto" });
}
function pergunta7(rp) {
  vt_respostas.push(Number(rp));
  document.getElementById("pergunta6").style.display = "none";
  document.getElementById("pergunta7").style.display = "flex";
  document.getElementById("quiz").scrollIntoView({ behavior: "auto" });
}
function final(rp) {
  vt_respostas.push(Number(rp));
  for (let i = 0; i < vt_respostas.length; i++) {
    resultado_final += vt_respostas[i];
  }
  if (resultado_final <= 3) {
    document.getElementById("pergunta7").style.display = "none";
    document.getElementById("final_errado").style.display = "flex";
    document.getElementById("quiz").scrollIntoView({ behavior: "auto" });
    quizResultado(0);
  } else {
    document.getElementById("pergunta7").style.display = "none";
    document.getElementById("final_certo").style.display = "flex";
    document.getElementById("quiz").scrollIntoView({ behavior: "auto" });
    quizResultado(1);
  }
}
function reiniciar() {
  vt_respostas.splice(0, vt_respostas.length)
  resultado_final = 0
  document.getElementById("final_errado").style.display = "none";
  document.getElementById("apresentacao").style.display = "flex";
  document.getElementById("quiz").scrollIntoView({ behavior: "auto" });
}
