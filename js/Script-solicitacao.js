
// Configuração fecha e abre do menu lado direito:

const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');

sidebar.classList.add('hidden');
toggleBtn.textContent = '◀';

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    toggleBtn.textContent = sidebar.classList.contains('hidden') ? '◀' : '▶';
});
