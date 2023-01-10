window.onload = () => {
  const btn = document.getElementById('btn');
  const icon01 = document.querySelector('.btn_icon_01');
  const icon02 = document.querySelector('.btn_icon_02');

  btn.addEventListener('click', () => {
    icon01.classList.toggle('hide');
    icon02.classList.toggle('hide');
  });
}