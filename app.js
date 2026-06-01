async function init() {
  const response = await fetch('content.md');
  const md = await response.text();
  document.getElementById('content').innerHTML = marked.parse(md);
  
  const headings = document.querySelectorAll('#content h1');
  const toc = document.getElementById('toc');
  headings.forEach(h => {
    const id = h.textContent.toLowerCase().replace(/\s+/g, '-');
    h.id = id;
    const a = document.createElement('a');
    a.href = '#' + id;
    a.textContent = h.textContent;
    toc.appendChild(a);
  });

  const footer = document.getElementById('page-footer');
  window.addEventListener('scroll', () => {

    if (window.scrollY > 150) {
      footer.classList.add('visible');
    } else {
      footer.classList.remove('visible');
    }
  });

}
init();
