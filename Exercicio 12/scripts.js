// Obter elementos relevantes
var modal = document.getElementById('modal');
var modalImg = document.getElementById("modal-image");

// Adicionar eventos de clique para abrir e fechar o modal
document.querySelectorAll('.thumbnail').forEach(item => {
  item.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

document.getElementsByClassName('close')[0].onclick = function() {
  modal.style.display = "none";
}