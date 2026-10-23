/**
 * EXICAR - Confecciones & Sublimaciones
 * Catálogo Digital Dinámico con Panel de Administración Oculto
 * Optimizado para móvil en 2 columnas compactas
 */

// ==========================================
// CONFIGURACIÓN GENERAL
// ==========================================
const CONFIG = {
  companyName: "EXICAR Confecciones & Sublimaciones",
  whatsappNumber: "5215512345678", // Número internacional para WhatsApp (código país + lada + número)
  whatsappDisplay: "+52 (55) 1234-5678",
  currencySymbol: "$",
  adminPin: "1234" // PIN por defecto para el panel de administración
};

// ==========================================
// CATEGORÍAS VÁLIDAS
// ==========================================
const CATEGORIES = {
  todas: { label: "Todos", icon: "layout-grid" },
  tazas: { label: "Tazas", icon: "coffee" },
  camisas: { label: "Camisas", icon: "shirt" },
  gorras: { label: "Gorras", icon: "hard-hat" },
  termos: { label: "Termos", icon: "thermometer" }
};

// ==========================================
// PRODUCTOS INICIALES POR DEFECTO
// ==========================================
const DEFAULT_PRODUCTS = [
  // --- TAZAS ---
  {
    id: "taza-blanca-11oz",
    name: "Taza Clásica 11oz",
    category: "tazas",
    price: 65,
    bulkPrice: 42,
    minBulkQty: 12,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    badge: "Más Vendido",
    description: "Cerámica brillante de alta calidad con polímero especial para sublimación full color. Apta para microondas y lavavajillas."
  },
  {
    id: "taza-magica-termosensible",
    name: "Taza Mágica 11oz",
    category: "tazas",
    price: 110,
    bulkPrice: 85,
    minBulkQty: 12,
    image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=80",
    badge: "Efecto Revelado",
    description: "Taza negra mate en frío que revela tu fotografía o diseño al entrar en contacto con líquidos calientes."
  },
  {
    id: "taza-peltre-vintage",
    name: "Taza Peltre Vintage",
    category: "tazas",
    price: 130,
    bulkPrice: 95,
    minBulkQty: 12,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    badge: "Estilo Rústico",
    description: "Taza de acero esmaltado con borde de acero inoxidable. Ideal para café de especialidad y recuerdos duraderos."
  },

  // --- CAMISAS ---
  {
    id: "playera-tacto-algodon",
    name: "Playera Tacto Algodón HD",
    category: "camisas",
    price: 160,
    bulkPrice: 115,
    minBulkQty: 12,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    badge: "100% Suave",
    description: "Tejido spun poliéster con sensación de algodón puro. La tinta se funde en la tela: tacto cero, transpirable y nunca se despinta."
  },
  {
    id: "sudadera-hoodie-canguro",
    name: "Sudadera Hoodie con Capucha",
    category: "camisas",
    price: 420,
    bulkPrice: 330,
    minBulkQty: 12,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    badge: "Otoño / Invierno",
    description: "Felpa premium afelpada con bolsillo frontal y cordón ajustable. Personalización en pecho, espalda o mangas."
  },
  {
    id: "playera-algodon-estampada",
    name: "Playera Algodón DTF",
    category: "camisas",
    price: 180,
    bulkPrice: 135,
    minBulkQty: 12,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
    badge: "Corte Unisex",
    description: "Playera de algodón peinado con impresión de alta resolución en DTF o vinil premium para colores vivos sobre prendas oscuras."
  },

  // --- GORRAS ---
  {
    id: "gorra-trucker-malla",
    name: "Gorra Trucker Malla",
    category: "gorras",
    price: 85,
    bulkPrice: 49,
    minBulkQty: 15,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    badge: "Top Eventos",
    description: "Gorra con frente acolchado blanco especial para sublimar, malla ventilada y broche snapback regulable en varios colores."
  },
  {
    id: "gorra-beisbolera-cerrada",
    name: "Gorra Beisbolera Gabardina",
    category: "gorras",
    price: 115,
    bulkPrice: 75,
    minBulkQty: 15,
    image: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=800&q=80",
    badge: "Elegante",
    description: "Gorra estilo béisbol de gabardina de 6 gajos con visera curva y parche sublimable o transfer HD de alta definición."
  },

  // --- TERMOS ---
  {
    id: "termo-digital-inteligente-500ml",
    name: "Termo LED Digital 500ml",
    category: "termos",
    price: 210,
    bulkPrice: 155,
    minBulkQty: 10,
    image: "https://images.unsplash.com/photo-1570572866595-6ac7bebd7c39?auto=format&fit=crop&w=800&q=80",
    badge: "Pantalla LED",
    description: "Termo doble pared con sensor digital táctil en la tapa que marca la temperatura exacta de tu bebida. 12h caliente y 24h frío."
  },
  {
    id: "skinny-tumbler-20oz",
    name: "Skinny Tumbler 20oz",
    category: "termos",
    price: 240,
    bulkPrice: 175,
    minBulkQty: 10,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    badge: "Sublimación 360°",
    description: "El vaso térmico cilíndrico más popular. Permite sublimación panorámica completa. Incluye tapa antiderrames y popote metálico."
  },
  {
    id: "botella-deportiva-aluminio",
    name: "Botella Deportiva 600ml",
    category: "termos",
    price: 125,
    bulkPrice: 89,
    minBulkQty: 12,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    badge: "Aluminio Ligero",
    description: "Botella ligera con tapón hermético de rosca y mosquetón para colgar en mochilas. Acabado blanco brillante de alta resistencia."
  }
];

// ==========================================
// ESTADO DE LA APLICACIÓN
// ==========================================
let products = [];
let currentCategory = 'todas';
let searchQuery = '';
let sortBy = 'featured';
let cart = [];
let editingProductId = null;
let tempImageBase64 = '';

// Contador para acceso secreto al panel haciendo clics en el logo
let logoClickCount = 0;
let logoClickTimer = null;

// ==========================================
// INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
  loadCart();
  renderCategoryPills();
  renderCatalog();
  setupEventListeners();
  checkSecretAdminUrl();
  lucide.createIcons();
});

// Comprobar si se ingresó con el enlace secreto: index.html#admin
function checkSecretAdminUrl() {
  if (window.location.hash === '#admin') {
    openAdminAccessModal();
  }
}
window.addEventListener('hashchange', checkSecretAdminUrl);

// Acceso secreto tocando el logo 4 veces seguidas
function handleSecretLogoClick(e) {
  logoClickCount++;
  clearTimeout(logoClickTimer);

  logoClickTimer = setTimeout(() => {
    logoClickCount = 0;
  }, 2200);

  if (logoClickCount >= 4) {
    logoClickCount = 0;
    openAdminAccessModal();
  }
}

// Cargar productos desde localStorage o defaults
function loadProducts() {
  try {
    const stored = localStorage.getItem('exicar_products_catalog');
    if (stored) {
      products = JSON.parse(stored);
    } else {
      products = [...DEFAULT_PRODUCTS];
      saveProducts();
    }
  } catch (e) {
    products = [...DEFAULT_PRODUCTS];
  }
}

function saveProducts() {
  localStorage.setItem('exicar_products_catalog', JSON.stringify(products));
}

// Cargar y guardar carrito
function loadCart() {
  try {
    const stored = localStorage.getItem('exicar_cart');
    cart = stored ? JSON.parse(stored) : [];
  } catch (e) {
    cart = [];
  }
  updateCartBadge();
}

function saveCart() {
  localStorage.setItem('exicar_cart', JSON.stringify(cart));
  updateCartBadge();
}

// ==========================================
// RENDERIZADO DE PESTAÑAS DE CATEGORÍA
// ==========================================
function renderCategoryPills() {
  const container = document.getElementById('categoryTabsContainer');
  if (!container) return;

  const counts = {
    todas: products.length,
    tazas: products.filter(p => p.category === 'tazas').length,
    camisas: products.filter(p => p.category === 'camisas').length,
    gorras: products.filter(p => p.category === 'gorras').length,
    termos: products.filter(p => p.category === 'termos').length
  };

  const categoriesKeys = ['todas', 'tazas', 'camisas', 'gorras', 'termos'];

  container.innerHTML = categoriesKeys.map(catKey => {
    const cat = CATEGORIES[catKey];
    const isActive = currentCategory === catKey;
    const count = counts[catKey] || 0;

    return `
      <button 
        onclick="selectCategory('${catKey}')"
        class="category-tab-btn px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl border text-[11px] sm:text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap shadow-2xs ${
          isActive 
            ? 'category-tab-active' 
            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
        }"
      >
        <i data-lucide="${cat.icon}" class="w-3.5 h-3.5"></i>
        <span>${cat.label}</span>
        <span class="text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
          isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
        }">
          ${count}
        </span>
      </button>
    `;
  }).join('');

  lucide.createIcons();
}

function selectCategory(catKey) {
  currentCategory = catKey;
  renderCategoryPills();
  renderCatalog();
}

// ==========================================
// RENDERIZADO DEL CATÁLOGO (2 COLUMNAS EN MÓVIL)
// ==========================================
function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  const countDisplay = document.getElementById('catalogResultsCount');
  if (!grid) return;

  // Filtrado
  let filtered = products.filter(p => {
    const matchCategory = (currentCategory === 'todas') || (p.category === currentCategory);
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  // Ordenamiento
  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Contador
  if (countDisplay) {
    const catName = CATEGORIES[currentCategory] ? CATEGORIES[currentCategory].label : 'Productos';
    countDisplay.textContent = `${filtered.length} ${filtered.length === 1 ? 'producto' : 'productos'} en "${catName}"`;
  }

  // Si no hay productos
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
        <div class="w-12 h-12 mx-auto mb-3 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
          <i data-lucide="package-search" class="w-6 h-6"></i>
        </div>
        <h3 class="text-sm sm:text-base font-bold text-slate-800">No encontramos productos</h3>
        <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
          Prueba seleccionando otra categoría o borrando tu búsqueda.
        </p>
        <button 
          onclick="selectCategory('todas'); document.getElementById('catalogSearchInput').value = ''; searchQuery = '';" 
          class="mt-3 px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition"
        >
          Ver Todos
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  // Renderizar tarjetas compactas (2 columnas en celular / 3-4-5 en PC)
  grid.innerHTML = filtered.map(p => {
    const catInfo = CATEGORIES[p.category] || { label: p.category, icon: 'tag' };
    const imageSrc = p.image || 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80';

    return `
      <div class="product-card rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 flex flex-col justify-between group shadow-2xs bg-white">
        
        <!-- Contenedor Imagen (Click abre detalle) -->
        <div class="relative aspect-square bg-slate-100 overflow-hidden cursor-pointer" onclick="openProductDetailModal('${p.id}')">
          <img 
            src="${imageSrc}" 
            alt="${p.name}" 
            loading="lazy"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onerror="this.src='https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'"
          />
          
          <!-- Badge de categoría compacto -->
          <span class="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 bg-white/95 backdrop-blur text-slate-800 text-[9px] sm:text-[11px] font-bold px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-md sm:rounded-full border border-slate-200/80 shadow-2xs flex items-center gap-1">
            <i data-lucide="${catInfo.icon}" class="w-2.5 h-2.5 sm:w-3 sm:h-3 text-rose-500"></i>
            <span class="truncate max-w-[65px] sm:max-w-none">${catInfo.label}</span>
          </span>

          <!-- Badge destacado opcional -->
          ${p.badge ? `
            <span class="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 bg-rose-500 text-white text-[8px] sm:text-[10px] font-extrabold px-1.5 py-0.5 rounded-md sm:rounded-full shadow-2xs">
              ${p.badge}
            </span>
          ` : ''}
        </div>

        <!-- Información compacta de producto -->
        <div class="p-2.5 sm:p-3.5 flex-1 flex flex-col justify-between">
          <div>
            <h3 
              class="font-bold text-slate-900 text-xs sm:text-sm line-clamp-1 group-hover:text-rose-600 transition cursor-pointer leading-tight"
              onclick="openProductDetailModal('${p.id}')"
              title="${p.name}"
            >
              ${p.name}
            </h3>
            
            <!-- Descripción visible solo en pantallas medianas/grandes para mantener móvil compacto -->
            <p class="hidden sm:block text-[11px] text-slate-500 mt-1 line-clamp-2 leading-tight">
              ${p.description || 'Personalización de alta resolución.'}
            </p>
          </div>

          <!-- Precios y Botón de Cotización Directo -->
          <div class="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between gap-1.5">
            <div class="min-w-0">
              <span class="text-xs sm:text-base font-black text-slate-900 block leading-tight">
                ${CONFIG.currencySymbol}${p.price}
              </span>
              ${p.bulkPrice ? `
                <span class="text-[9px] sm:text-[10px] font-bold text-emerald-600 block truncate leading-tight">
                  May: ${CONFIG.currencySymbol}${p.bulkPrice} (${p.minBulkQty || 12}+)
                </span>
              ` : ''}
            </div>

            <!-- Botón Cotizar Rápido -->
            <button 
              onclick="quickAddToCart('${p.id}')"
              class="py-1.5 px-2 sm:px-3 rounded-lg sm:rounded-xl bg-slate-900 hover:bg-rose-600 text-white font-bold text-[10px] sm:text-xs transition flex items-center gap-1 shadow-2xs flex-shrink-0"
              title="Añadir a mi cotización"
            >
              <i data-lucide="plus" class="w-3 h-3"></i>
              <span class="hidden xs:inline sm:inline">Cotizar</span>
            </button>
          </div>
        </div>

      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// ==========================================
// MODAL DE DETALLE DE PRODUCTO
// ==========================================
function openProductDetailModal(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const modal = document.getElementById('productDetailModal');
  const container = document.getElementById('productDetailContent');
  if (!modal || !container) return;

  const catInfo = CATEGORIES[product.category] || { label: product.category, icon: 'tag' };
  const imageSrc = product.image || 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80';

  container.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
      
      <!-- Imagen -->
      <div class="rounded-xl sm:rounded-2xl overflow-hidden aspect-square bg-slate-100 border border-slate-200 relative">
        <img src="${imageSrc}" alt="${product.name}" class="w-full h-full object-cover">
        <span class="absolute top-2.5 left-2.5 bg-white/95 text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs flex items-center gap-1">
          <i data-lucide="${catInfo.icon}" class="w-3 h-3 text-rose-500"></i> ${catInfo.label}
        </span>
      </div>

      <!-- Información y Opciones -->
      <div class="flex flex-col justify-between">
        <div>
          <span class="text-[10px] sm:text-xs font-bold text-rose-500 uppercase tracking-widest block">${catInfo.label}</span>
          <h2 class="text-lg sm:text-2xl font-black text-slate-900 mt-0.5 leading-tight">${product.name}</h2>
          <p class="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">${product.description || 'Personalización de alta resolución con tintas originales.'}</p>
          
          <!-- Bloque de precios -->
          <div class="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-[11px] text-slate-500 block">Precio por unidad:</span>
                <span class="text-xl sm:text-2xl font-black text-slate-900">${CONFIG.currencySymbol}${product.price}</span>
              </div>
              ${product.bulkPrice ? `
                <div class="text-right">
                  <span class="text-[11px] font-bold text-emerald-600 block">Mayoreo (${product.minBulkQty || 12}+ pzas):</span>
                  <span class="text-base sm:text-lg font-black text-emerald-700">${CONFIG.currencySymbol}${product.bulkPrice} c/u</span>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Nota de personalización -->
          <div class="mt-3">
            <label class="block text-xs font-bold text-slate-700 mb-1">
              Detalle del diseño o estampado (opcional):
            </label>
            <input 
              type="text" 
              id="detailCustomNote" 
              placeholder="Ej: Logo al frente, talla G, color negro..." 
              class="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
            />
          </div>

          <!-- Selector de cantidad -->
          <div class="mt-3 flex items-center justify-between">
            <span class="text-xs font-bold text-slate-700">Cantidad:</span>
            <div class="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-white">
              <button onclick="adjustDetailQty(-1)" class="px-3 py-1 bg-slate-100 hover:bg-slate-200 font-bold text-slate-800 text-sm">-</button>
              <input type="number" id="detailQtyInput" value="1" min="1" max="5000" class="w-14 text-center text-xs font-bold text-slate-900 border-0 focus:outline-none" oninput="updateDetailSubtotal('${product.id}')">
              <button onclick="adjustDetailQty(1)" class="px-3 py-1 bg-slate-100 hover:bg-slate-200 font-bold text-slate-800 text-sm">+</button>
            </div>
          </div>

          <div class="mt-2.5 flex justify-between items-center text-xs text-slate-600">
            <span>Subtotal estimado:</span>
            <span id="detailSubtotalDisplay" class="font-black text-base text-slate-900">${CONFIG.currencySymbol}${product.price}</span>
          </div>
        </div>

        <!-- Botones de Acción -->
        <div class="mt-4 pt-3 border-t border-slate-200 flex gap-2">
          <button 
            onclick="addDetailToCart('${product.id}')"
            class="flex-1 py-2.5 px-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-bold text-xs shadow-md transition flex items-center justify-center gap-1.5"
          >
            <i data-lucide="shopping-cart" class="w-4 h-4"></i> Añadir a Cotización
          </button>
          <button 
            onclick="closeProductDetailModal()"
            class="py-2.5 px-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold text-xs transition"
          >
            Cerrar
          </button>
        </div>

      </div>

    </div>
  `;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  lucide.createIcons();
}

function closeProductDetailModal() {
  const modal = document.getElementById('productDetailModal');
  if (modal) modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

function adjustDetailQty(delta) {
  const input = document.getElementById('detailQtyInput');
  if (!input) return;
  let val = parseInt(input.value) || 1;
  val = Math.max(1, val + delta);
  input.value = val;
}

function updateDetailSubtotal(productId) {
  const p = products.find(x => x.id === productId);
  const input = document.getElementById('detailQtyInput');
  const display = document.getElementById('detailSubtotalDisplay');
  if (!p || !input || !display) return;

  const qty = parseInt(input.value) || 1;
  const unitPrice = (p.bulkPrice && qty >= (p.minBulkQty || 12)) ? p.bulkPrice : p.price;
  display.textContent = `${CONFIG.currencySymbol}${(unitPrice * qty).toLocaleString()}`;
}

function addDetailToCart(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;

  const input = document.getElementById('detailQtyInput');
  const noteInput = document.getElementById('detailCustomNote');
  const qty = parseInt(input.value) || 1;
  const note = noteInput ? noteInput.value.trim() : '';

  addItemToCart(p, qty, note);
  closeProductDetailModal();
  showToast(`¡${qty}x "${p.name}" añadido!`);
}

function quickAddToCart(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  addItemToCart(p, 1, '');
  showToast(`¡"${p.name}" añadido!`);
}

// ==========================================
// CARRITO Y MENSAJE DE WHATSAPP
// ==========================================
function addItemToCart(product, qty, note) {
  const existing = cart.find(item => item.id === product.id && item.note === note);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      bulkPrice: product.bulkPrice,
      minBulkQty: product.minBulkQty || 12,
      image: product.image,
      quantity: qty,
      note: note
    });
  }
  saveCart();
  renderCartDrawer();
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadgeCount');
  if (!badge) return;
  const total = cart.reduce((sum, i) => sum + i.quantity, 0);
  badge.textContent = total;
  if (total > 0) {
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

function openCartDrawer() {
  renderCartDrawer();
  const drawer = document.getElementById('cartDrawer');
  if (drawer) drawer.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  lucide.createIcons();
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) drawer.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

function renderCartDrawer() {
  const container = document.getElementById('cartItemsList');
  const totalEl = document.getElementById('cartTotalEstimated');
  const countEl = document.getElementById('cartHeaderCount');
  if (!container) return;

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  let totalMoney = 0;

  if (countEl) countEl.textContent = `(${totalItems} productos)`;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-slate-400">
        <div class="w-14 h-14 mx-auto mb-3 bg-slate-100 rounded-full flex items-center justify-center text-slate-300">
          <i data-lucide="shopping-bag" class="w-7 h-7"></i>
        </div>
        <p class="font-bold text-slate-700 text-xs sm:text-sm">Tu cotización está vacía</p>
        <p class="text-[11px] text-slate-400 mt-1 max-w-xs mx-auto">Selecciona tazas, camisas, gorras o termos del catálogo para cotizar en un clic.</p>
        <button onclick="closeCartDrawer()" class="mt-3 px-3.5 py-1.5 bg-slate-900 text-white rounded-xl text-xs font-bold">
          Ver Catálogo
        </button>
      </div>
    `;
    if (totalEl) totalEl.textContent = `${CONFIG.currencySymbol}0`;
    lucide.createIcons();
    return;
  }

  container.innerHTML = cart.map((item, idx) => {
    const isBulk = item.bulkPrice && item.quantity >= (item.minBulkQty || 12);
    const unitPrice = isBulk ? item.bulkPrice : item.price;
    const subtotal = unitPrice * item.quantity;
    totalMoney += subtotal;

    return `
      <div class="p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex gap-2.5 items-center">
        <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-lg object-cover bg-white border border-slate-200 flex-shrink-0" onerror="this.src='https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'">
        
        <div class="flex-1 min-w-0">
          <div class="flex justify-between items-start">
            <h4 class="font-bold text-slate-800 text-xs truncate" title="${item.name}">${item.name}</h4>
            <button onclick="removeCartItem(${idx})" class="text-slate-400 hover:text-rose-500 p-0.5 transition" title="Eliminar">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
          ${item.note ? `<p class="text-[10px] text-slate-500 italic truncate mt-0.5">Nota: ${item.note}</p>` : ''}
          
          <div class="flex items-center justify-between mt-1.5">
            <div>
              <span class="text-xs font-black text-slate-900">${CONFIG.currencySymbol}${unitPrice} c/u</span>
            </div>

            <!-- Contador de cantidad -->
            <div class="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
              <button onclick="changeCartQty(${idx}, -1)" class="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs">-</button>
              <span class="px-2 text-xs font-bold text-slate-800">${item.quantity}</span>
              <button onclick="changeCartQty(${idx}, 1)" class="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs">+</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (totalEl) totalEl.textContent = `${CONFIG.currencySymbol}${totalMoney.toLocaleString()}`;
  lucide.createIcons();
}

function changeCartQty(index, delta) {
  if (!cart[index]) return;
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  renderCartDrawer();
}

function removeCartItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCartDrawer();
  showToast("Producto eliminado");
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm("¿Deseas vaciar toda tu lista de cotización?")) {
    cart = [];
    saveCart();
    renderCartDrawer();
  }
}

function sendCartToWhatsApp() {
  if (cart.length === 0) {
    alert("Agrega al menos un producto a tu cotización.");
    return;
  }

  const nameInput = document.getElementById('clientNameInput');
  const noteInput = document.getElementById('clientNotesInput');

  const clientName = nameInput ? nameInput.value.trim() : '';
  const clientNote = noteInput ? noteInput.value.trim() : '';

  let message = `*¡HOLA EXICAR! 👋*\n`;
  message += `Quisiera cotizar los siguientes productos de su catálogo:\n\n`;

  if (clientName) message += `👤 *Cliente:* ${clientName}\n\n`;

  message += `📋 *PRODUCTOS SELECCIONADOS:*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;

  let totalEst = 0;
  cart.forEach((item, i) => {
    const isBulk = item.bulkPrice && item.quantity >= (item.minBulkQty || 12);
    const unitPrice = isBulk ? item.bulkPrice : item.price;
    const subtotal = unitPrice * item.quantity;
    totalEst += subtotal;

    message += `${i + 1}. *${item.name}*\n`;
    message += `   • Cantidad: *${item.quantity} piezas*\n`;
    message += `   • Precio: ${CONFIG.currencySymbol}${unitPrice} c/u (${CONFIG.currencySymbol}${subtotal})\n`;
    if (item.note) {
      message += `   • Detalle: _${item.note}_\n`;
    }
    message += `\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *TOTAL ESTIMADO:* ${CONFIG.currencySymbol}${totalEst.toLocaleString()}\n`;
  if (clientNote) {
    message += `📝 *Observaciones:* ${clientNote}\n`;
  }
  message += `\n¿Me confirman disponibilidad y tiempos de entrega? ¡Gracias!`;

  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// ==========================================
// PANEL DE ADMINISTRACIÓN OCULTO (PARA LA DUEÑA)
// ==========================================
function openAdminAccessModal() {
  const modal = document.getElementById('adminLoginModal');
  if (modal) modal.classList.remove('hidden');
  const pinInput = document.getElementById('adminPinInput');
  if (pinInput) {
    pinInput.value = '';
    pinInput.focus();
  }
}

function closeAdminAccessModal() {
  const modal = document.getElementById('adminLoginModal');
  if (modal) modal.classList.add('hidden');
  if (window.location.hash === '#admin') {
    history.replaceState(null, null, ' ');
  }
}

function verifyAdminPin() {
  const pinInput = document.getElementById('adminPinInput');
  const pin = pinInput ? pinInput.value.trim() : '';

  if (pin === CONFIG.adminPin) {
    closeAdminAccessModal();
    openAdminPanel();
  } else {
    alert("PIN incorrecto. (PIN por defecto: 1234)");
  }
}

function openAdminPanel() {
  resetAdminForm();
  renderAdminProductsList();
  const panel = document.getElementById('adminPanelModal');
  if (panel) panel.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  lucide.createIcons();
}

function closeAdminPanel() {
  const panel = document.getElementById('adminPanelModal');
  if (panel) panel.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
  renderCategoryPills();
  renderCatalog();
}

function renderAdminProductsList() {
  const container = document.getElementById('adminProductsTableBody');
  const countEl = document.getElementById('adminProductsCount');
  if (!container) return;

  if (countEl) countEl.textContent = `${products.length} productos`;

  if (products.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="5" class="py-6 text-center text-xs text-slate-400">
          No hay productos registrados en el catálogo. ¡Añade el primero arriba!
        </td>
      </tr>
    `;
    return;
  }

  container.innerHTML = products.map((p, idx) => {
    const cat = CATEGORIES[p.category] || { label: p.category };
    const img = p.image || 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80';

    return `
      <tr class="border-b border-slate-100 hover:bg-slate-50/80 transition text-xs">
        <td class="py-2.5 px-3">
          <img src="${img}" alt="${p.name}" class="w-10 h-10 rounded-lg object-cover border border-slate-200" onerror="this.src='https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'">
        </td>
        <td class="py-2.5 px-3 font-bold text-slate-800">
          ${p.name}
          ${p.badge ? `<span class="ml-1 text-[9px] bg-rose-100 text-rose-700 px-1 py-0.5 rounded font-semibold">${p.badge}</span>` : ''}
        </td>
        <td class="py-2.5 px-3">
          <span class="px-2 py-0.5 rounded bg-slate-100 font-semibold text-slate-700 capitalize text-[11px]">${cat.label}</span>
        </td>
        <td class="py-2.5 px-3 font-black text-slate-900">
          ${CONFIG.currencySymbol}${p.price}
          ${p.bulkPrice ? `<span class="block text-[10px] font-medium text-emerald-600">May: ${CONFIG.currencySymbol}${p.bulkPrice}</span>` : ''}
        </td>
        <td class="py-2.5 px-3 text-right">
          <div class="flex items-center justify-end gap-1.5">
            <button onclick="editProduct('${p.id}')" class="p-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition" title="Editar">
              <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
            </button>
            <button onclick="deleteProduct('${p.id}')" class="p-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 transition" title="Eliminar">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  lucide.createIcons();
}

function handleAdminImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const maxDim = 800;
      let width = img.width;
      let height = img.height;

      if (width > height && width > maxDim) {
        height = Math.round((height * maxDim) / width);
        width = maxDim;
      } else if (height > maxDim) {
        width = Math.round((width * maxDim) / height);
        height = maxDim;
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      tempImageBase64 = canvas.toDataURL('image/jpeg', 0.85);
      showImagePreview(tempImageBase64);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function showImagePreview(src) {
  const preview = document.getElementById('adminImagePreview');
  const imgEl = document.getElementById('adminPreviewImg');
  if (preview && imgEl) {
    imgEl.src = src;
    preview.classList.remove('hidden');
  }
}

function saveProductFromAdmin(event) {
  event.preventDefault();

  const nameInput = document.getElementById('adminProdName');
  const categorySelect = document.getElementById('adminProdCategory');
  const priceInput = document.getElementById('adminProdPrice');
  const bulkPriceInput = document.getElementById('adminProdBulkPrice');
  const minBulkInput = document.getElementById('adminProdMinBulk');
  const descInput = document.getElementById('adminProdDesc');
  const badgeInput = document.getElementById('adminProdBadge');
  const urlInput = document.getElementById('adminProdImageUrl');

  const name = nameInput.value.trim();
  const category = categorySelect.value;
  const price = parseFloat(priceInput.value) || 0;
  const bulkPrice = bulkPriceInput.value ? parseFloat(bulkPriceInput.value) : null;
  const minBulkQty = minBulkInput.value ? parseInt(minBulkInput.value) : 12;
  const description = descInput.value.trim();
  const badge = badgeInput.value.trim();
  
  let finalImage = tempImageBase64;
  if (!finalImage && urlInput.value.trim()) {
    finalImage = urlInput.value.trim();
  }
  if (!finalImage && editingProductId) {
    const existing = products.find(p => p.id === editingProductId);
    if (existing) finalImage = existing.image;
  }
  if (!finalImage) {
    finalImage = 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80';
  }

  if (!name || price <= 0) {
    alert("Ingresa al menos el nombre y el precio unitario.");
    return;
  }

  if (editingProductId) {
    const index = products.findIndex(p => p.id === editingProductId);
    if (index !== -1) {
      products[index] = {
        ...products[index],
        name,
        category,
        price,
        bulkPrice,
        minBulkQty,
        description,
        badge,
        image: finalImage
      };
      showToast("¡Producto actualizado!");
    }
  } else {
    const newProduct = {
      id: `prod-${Date.now()}`,
      name,
      category,
      price,
      bulkPrice,
      minBulkQty,
      description,
      badge,
      image: finalImage
    };
    products.unshift(newProduct);
    showToast("¡Nuevo producto añadido!");
  }

  saveProducts();
  resetAdminForm();
  renderAdminProductsList();
  renderCategoryPills();
  renderCatalog();
}

function editProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  editingProductId = p.id;
  document.getElementById('adminProdName').value = p.name;
  document.getElementById('adminProdCategory').value = p.category;
  document.getElementById('adminProdPrice').value = p.price;
  document.getElementById('adminProdBulkPrice').value = p.bulkPrice || '';
  document.getElementById('adminProdMinBulk').value = p.minBulkQty || 12;
  document.getElementById('adminProdDesc').value = p.description || '';
  document.getElementById('adminProdBadge').value = p.badge || '';
  document.getElementById('adminProdImageUrl').value = (p.image && !p.image.startsWith('data:')) ? p.image : '';

  tempImageBase64 = p.image || '';
  if (p.image) {
    showImagePreview(p.image);
  }

  document.getElementById('adminSubmitBtnText').textContent = "Guardar Cambios";
  document.getElementById('adminCancelEditBtn').classList.remove('hidden');

  document.getElementById('adminFormContainer').scrollIntoView({ behavior: 'smooth' });
}

function cancelEditAdmin() {
  resetAdminForm();
}

function resetAdminForm() {
  editingProductId = null;
  tempImageBase64 = '';
  const form = document.getElementById('adminProductForm');
  if (form) form.reset();
  const preview = document.getElementById('adminImagePreview');
  if (preview) preview.classList.add('hidden');
  const submitText = document.getElementById('adminSubmitBtnText');
  if (submitText) submitText.textContent = "Añadir Producto al Catálogo";
  const cancelBtn = document.getElementById('adminCancelEditBtn');
  if (cancelBtn) cancelBtn.classList.add('hidden');
}

function deleteProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  if (confirm(`¿Eliminar "${p.name}" del catálogo?`)) {
    products = products.filter(x => x.id !== id);
    saveProducts();
    renderAdminProductsList();
    renderCategoryPills();
    renderCatalog();
    showToast("Producto eliminado");
  }
}

function exportProductsBackup() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(products, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `catalogo-exicar-backup-${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importProductsBackup(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported)) {
        if (confirm(`Se cargarán ${imported.length} productos. ¿Deseas reemplazar el catálogo actual?`)) {
          products = imported;
          saveProducts();
          renderAdminProductsList();
          renderCategoryPills();
          renderCatalog();
          showToast("Catálogo restaurado");
        }
      } else {
        alert("El archivo no tiene el formato correcto.");
      }
    } catch (err) {
      alert("Error al leer el archivo JSON.");
    }
  };
  reader.readAsText(file);
}

function resetToDefaultProducts() {
  if (confirm("¿Restablecer el catálogo a los productos originales?")) {
    products = [...DEFAULT_PRODUCTS];
    saveProducts();
    renderAdminProductsList();
    renderCategoryPills();
    renderCatalog();
    showToast("Catálogo restablecido");
  }
}

function showToast(msg) {
  const toast = document.getElementById('toastNotification');
  const textEl = document.getElementById('toastMessageText');
  if (!toast || !textEl) return;

  textEl.textContent = msg;
  toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.remove('opacity-100', 'translate-y-0');
  }, 2800);
}

function setupEventListeners() {
  const searchInput = document.getElementById('catalogSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (val.toLowerCase() === 'admin' || val.toLowerCase() === '/admin') {
        e.target.value = '';
        searchQuery = '';
        openAdminAccessModal();
        return;
      }
      searchQuery = val;
      renderCatalog();
    });
  }

  const sortSelect = document.getElementById('catalogSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      renderCatalog();
    });
  }

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      e.preventDefault();
      openAdminAccessModal();
    }
    if (e.key === 'Escape') {
      closeProductDetailModal();
      closeCartDrawer();
      closeAdminAccessModal();
      closeAdminPanel();
    }
  });
}
