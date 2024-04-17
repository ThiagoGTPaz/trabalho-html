// Definir a data de lançamento (formato: 'ano-mês-dia horas:minutos:segundos')
const launchDate = new Date('2024-05-01T00:00:00');

function updateCountdown() {
  const currentDate = new Date();
  const difference = launchDate - currentDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (difference <= 0) {
    clearInterval(interval);
    document.getElementById('countdown').innerHTML = 'Produto Lançado!';
  }
}

// Atualizar a contagem regressiva a cada segundo
updateCountdown();
const interval = setInterval(updateCountdown, 1000);