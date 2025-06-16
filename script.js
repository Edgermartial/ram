// Auth button toggle
const authButton = document.getElementById('auth-button');
authButton?.addEventListener('click', () => {
  alert('Authentication modal would appear here.');
});

// Medicine filter and search (demo logic)
const medicines = [
  { name: 'Paracetamol', category: 'Pain Relief', price: 5.99 },
  { name: 'Amoxicillin', category: 'Antibiotics', price: 12.5 },
  { name: 'Lisinopril', category: 'Cardiovascular', price: 8.99 },
];

function displayMedicines(list) {
  const container = document.getElementById('medicine-list');
  if (!container) return;
  container.innerHTML = '';
  list.forEach((med) => {
    const card = document.createElement('div');
    card.className = 'bg-white p-4 shadow rounded-lg';
    card.innerHTML = `
      <h4 class="text-lg font-semibold text-green-700">${med.name}</h4>
      <p class="text-gray-500">Category: ${med.category}</p>
      <p class="text-gray-700 font-bold">$${med.price.toFixed(2)}</p>
      <button class="mt-2 bg-green-600 text-white px-3 py-1 rounded">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

// Search filter
const searchInput = document.getElementById('search-input');
searchInput?.addEventListener('input', (e) => {
  const val = e.target.value.toLowerCase();
  const filtered = medicines.filter(med => med.name.toLowerCase().includes(val));
  displayMedicines(filtered);
});

// On load
window.addEventListener('DOMContentLoaded', () => {
  displayMedicines(medicines);
});