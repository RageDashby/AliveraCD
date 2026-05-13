/**
 * Alivera Creative Designs - Motor de Parallax Matemático y UI
 * Doble Núcleo: Rigor Técnico (Cálculo JS) + Innovación Artística (Fluidez Visual)
 */

// --- 1. Sistema de Pestañas del Portafolio (UI) ---
function openTab(evt, tabName) {
    // Obtener todos los elementos con clase "tab-content" y ocultarlos
    const tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Obtener todos los botones y quitar la clase "active"
    const tablinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Mostrar el tab actual y añadir "active" al botón clickeado
    const currentTab = document.getElementById(tabName);
    if (currentTab) {
        currentTab.classList.add("active");
    }
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add("active");
    }
}
// Función para el banner de cookies
function acceptCookies() {
    localStorage.setItem('cookiesAceptadas', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
}

// Mostrar banner si no se ha aceptado
window.onload = function() {
    if (!localStorage.getItem('cookiesAceptadas')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
}

// Función para el Modal de Privacidad
function togglePrivacy() {
    const modal = document.getElementById('privacy-modal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Habilita scroll
    } else {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Bloquea scroll
    }
}
/* 
// --- 2. Motor de Parallax Matemático (Optimizado con rAF) ---
document.addEventListener('DOMContentLoaded', () => {
    const backgrounds = document.querySelectorAll('.js-parallax');
    const elements = document.querySelectorAll('.js-parallax-element');

    // Función de cálculo que se ejecuta en cada frame de animación (más eficiente que el evento scroll directo)
    function updateParallax() {
        const windowHeight = window.innerHeight;
        const scrolled = window.pageYOffset;

        // Parallax para Fondos (.parallax-bg)
        backgrounds.forEach(bg => {
            const speed = bg.getAttribute('data-speed') || 0.3;
            const parent = bg.parentElement;
            if (!parent) return;
            
            const rect = parent.getBoundingClientRect();

            // Verificar si el elemento es visible
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                // Calcular la posición relativa al centro de la pantalla
                const centerDistance = rect.top + rect.height / 2 - windowHeight / 2;
                const yPos = -(centerDistance * speed);
                bg.style.transform = `translateY(${yPos}px) translateZ(0)`;
            }
        });

        // Parallax para Elementos Frontales (.js-parallax-element)
        elements.forEach(el => {
            const speed = el.getAttribute('data-speed') || 0.1;
            const parent = el.parentElement;
            if (!parent) return;

            const rect = parent.getBoundingClientRect();

            if (rect.top <= windowHeight && rect.bottom >= 0) {
                const centerDistance = rect.top + rect.height / 2 - windowHeight / 2;
                const yPos = -(centerDistance * speed);
                el.style.transform = `translateY(${yPos}px) translateZ(0)`;
            }
        });

        // Registrar el siguiente frame
        requestAnimationFrame(updateParallax);
    }

    // Iniciar el bucle de animación
    requestAnimationFrame(updateParallax);
});

// --- 3. Suavidad adicional para enlaces internos (Navegación fluida) ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});
*/
