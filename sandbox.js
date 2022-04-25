const clock = document.querySelector('.clock');

const tick = () => {

  const now = new Date();

  const d8 = dateFns.format(now, 'dddd, MMMM Do, YYYY')  
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  
  const html = `
    <h3>${d8}</h1>
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span>
  `;

  clock.innerHTML = html;

};

setInterval(tick, 1000);