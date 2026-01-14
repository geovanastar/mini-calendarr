function calendario() {
  const hoje = new Date();
  const dia = hoje.getDate();
  const mes_nome = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "dezembro",
  ];

  const mes = mes_nome[hoje.getMonth()];

  document.getElementById("dia").textContent = dia;
  document.getElementById("mes").textContent = mes;
}

calendario();
