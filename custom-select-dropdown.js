for (const dropdown of document.querySelectorAll('.custom-select')) {
  dropdown.addEventListener('click', function() {
    this.classList.toggle('open');
  });
}

for (const option of document.querySelectorAll('.custom-option')) {
  option.addEventListener('click', function() {
    if (!this.classList.contains('selected')) {
      this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
      this.classList.add('selected');
      this.closest('.custom-select').querySelector('.custom-select__trigger div').innerHTML = this.innerHTML;
    }
  });
}

window.addEventListener('click', function(e) {
  const select = document.querySelector('.custom-select');
  if (!select.contains(e.target)) {
    select.classList.remove('open');
  }
});