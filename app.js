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
 document.getElementById('search').addEventListener('input', e => {
   const term = e.target.value.toLowerCase();
   document.querySelectorAll('#content p, #content li').forEach(el => {
     el.style.display = el.textContent.toLowerCase().includes(term) ? '' : 'none';
   });
 });
}
init();
