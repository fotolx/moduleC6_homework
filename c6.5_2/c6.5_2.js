window.onload = () => {
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const screen_width = window.screen.width;
    const screen_height = window.screen.height;
    const inner_width = window.innerWidth;
    const inner_height = window.innerHeight;
    const client_width = document.documentElement.clientWidth;
    const client_height = document.documentElement.clientHeight;
    alert('Ширина экрана '+ screen_width+ ' пикс, высота экрана '
          + screen_height+' пикс. \nШирина окна с учетом полосы прокрутки '+inner_width+' пикс, высота '+inner_height
          +' пикс. \nШирина окна без учета полосы прокрутки '+client_width+' пикс, высота '+client_height+' пикс.');
  });
}