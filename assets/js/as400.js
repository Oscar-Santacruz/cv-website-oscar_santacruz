const cvData = {
    profile: {
        title: "CONSULTA DE DATOS (PERFIL)",
        content: [
            "NOMBRE: Oscar Santacruz",
            "ROL: Desarrollador Full Stack",
            "UBICACION: Asunción, Paraguay",
            "ESTADO: ACTIVO",
            "CEL: 0961 853 895",
            "EMAIL: oscar.sntcrz@gmail.com",
            "",
            "RESUMEN PROFESIONAL:",
            "Más que un desarrollador, soy un artífice de la transformación digital financiera.",
            "Con más de 10 años forjando soluciones críticas, desde la migración de cores",
            "bancarios hasta la arquitectura de microservicios de alto rendimiento.",
            "Domino el ciclo completo del dato: seguridad 3DS, integración de pasarelas",
            "en tiempo real y automatización con IA. Mi código no solo funciona; escala,",
            "asegura y revoluciona la experiencia del usuario final."
        ]
    },
    experience: {
        title: "HISTORIAL DE TRANSACCIONES (EXPERIENCIA)",
        content: [
            "--------------------------------------------------",
            "TRANSACCION #001: INGENIERO PRINCIPAL",
            "ENTIDAD: BEPSA (2023 - 2025)",
            "DETALLES: Liderazgo técnico en procesadora de pagos.",
            "TAREAS:",
            " - Seguridad en Pagos no Presente (3DS).",
            " - Ciclo de Vida de tarjeta - Tokenización.",
            " - Trabajos con proveedores VCAS - HST.",
            " - ActiveMQ para servicios basados en colas.",
            " - Optimizaciones de procesos de cierre.",
            " - Monitorización de APIs.",
            " - AS400 - DB2.",
            "--------------------------------------------------",
            "TRANSACCION #002: TECH LEAD CONTACT CENTER",
            "ENTIDAD: Banco Continental (2021 - 2023)",
            "DETALLES: IVR, Bots, Integración Core Bancario.",
            "TAREAS:",
            " - Bajar las atenciones al nivel 1 modificando core de consultas.",
            " - Nivel 0 (automatizando consultas) mediante un chatbot.",
            " - Creación de un IVR con Cisco.",
            "--------------------------------------------------",
            "TRANSACCION #003: TECH LEAD TARJETAS",
            "ENTIDAD: Banco Continental (2018 - 2021)",
            "DETALLES: Transformación Digital - Integraciones.",
            "TAREAS:",
            " - Optimización de procesos de integración.",
            " - Integraciones a flujos de autorización.",
            " - Integración con procesadora Bancard/Bepsa en servicios.",
            " - Integración con procesadora Bancard/Bepsa/Cabal con archivos.",
            " - Mantenimiento del core de autorizador de débito (ISO 8583 PY).",
            " - Debitador automático al instante con Kafka.",
            " - Implementación de ATM reciclador.",
            " - Implementación de IVA LEY en débito.",
            " - Procesos de asientos contables de tarjetas.",
            " - Procesos de facturación masiva para clientes.",
            "--------------------------------------------------",
            "TRANSACCION #004: DESARROLLADOR FULL STACK",
            "ENTIDAD: Freelance / Varios (2014 - 2018)",
            "DETALLES: Sitios web y aplicaciones a medida.",
            "TAREAS:",
            " - Implementación de módulo de pagos de salarios.",
            " - Mantenimiento al core bancario.",
            " - Migración de Visual FoxPro a .NET.",
            " - Mantenimiento de sistema de archivos tipo S3.",
            "--------------------------------------------------"
        ]
    },
    portfolio: {
        title: "CATÁLOGO DE PRODUCTOS (SKILLS)",
        content: [
            "TARJETA BLACK: Full Stack (0000 0000 0000 0001)",
            "TARJETA BLACK: JavaScript (5412 7512 3412 9856)",
            "TARJETA GOLD: React (4000 1234 5678 9010)",
            "TARJETA CLASSIC: SQL / Databases (3782 8224 6310 0005)",
            "TARJETA BLACK: .NET Core (6011 0009 9013 9424)"
        ]
    },
    contact: {
        title: "CONTACTAR SOPORTE",
        content: [
            "CANALES DE COMUNICACION DISPONIBLES:",
            "",
            "1. CELULAR: 0961 853 895",
            "2. EMAIL: oscar.sntcrz@gmail.com",
            "",
            "ENVIE SU MENSAJE PARA INICIAR TICKET DE SOPORTE."
        ]
    }
};

const state = {
    currentScreen: 'boot', // boot, menu, profile, experience, portfolio, contact
    menuSelection: 0
};

const menuItems = [
    { key: '1', label: '1. CONSULTA DE DATOS', screen: 'profile' },
    { key: '2', label: '2. HISTORIAL DE TRANSACCIONES', screen: 'experience' },
    { key: '3', label: '3. CATÁLOGO DE PRODUCTOS', screen: 'portfolio' },
    { key: '4', label: '4. CONTACTAR SOPORTE', screen: 'contact' }
];

document.addEventListener('DOMContentLoaded', () => {
    startBootSequence();
    setupInputHandlers();
    updateTime();
    setInterval(updateTime, 1000);
});

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('es-PY');
    const dateString = now.toLocaleDateString('es-PY');
    document.getElementById('datetime').innerText = `${dateString} ${timeString}`;
}

function startBootSequence() {
    const screen = document.getElementById('screen-content');
    screen.innerHTML = '';

    const bootText = [
        "INICIANDO SISTEMA...",
        "CARGANDO KERNEL...",
        "VERIFICANDO MEMORIA... OK",
        "CONECTANDO CON HOST CENTRAL... OK",
        "ESTABLECIENDO ENLACE SEGURO... OK",
        "CARGANDO MODULO RRHH... OK",
        "BIENVENIDO USUARIO: OSCAR"
    ];

    let delay = 0;
    bootText.forEach((line, index) => {
        setTimeout(() => {
            const p = document.createElement('div');
            p.innerText = line;
            screen.appendChild(p);

            if (index === bootText.length - 1) {
                setTimeout(showMenu, 1000);
            }
        }, delay);
        delay += 500; // 500ms per line
    });
}

function showMenu() {
    state.currentScreen = 'menu';
    const screen = document.getElementById('screen-content');
    screen.innerHTML = '<h3>MENÚ PRINCIPAL</h3><br>';

    menuItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerText = item.label;
        div.onclick = () => loadScreen(item.screen);
        if (index === state.menuSelection) {
            div.classList.add('active');
        }
        screen.appendChild(div);
    });

    const prompt = document.createElement('div');
    prompt.className = 'input-line';
    prompt.innerHTML = 'SELECCIONE UNA OPCIÓN > <span class="cursor"></span>';
    screen.appendChild(prompt);
}

function loadScreen(screenName) {
    state.currentScreen = screenName;
    const screen = document.getElementById('screen-content');
    const data = cvData[screenName];

    screen.innerHTML = '';

    // Loading effect
    const loading = document.createElement('div');
    loading.innerText = "ACCEDIENDO A BASE DE DATOS...";
    screen.appendChild(loading);

    setTimeout(() => {
        screen.innerHTML = `<h3>${data.title}</h3><br>`;

        data.content.forEach(line => {
            const p = document.createElement('div');
            p.style.marginBottom = '10px';
            p.innerText = line;
            screen.appendChild(p);
        });

        const footer = document.createElement('div');
        footer.className = 'input-line';
        footer.innerHTML = 'PRESIONE F3 PARA VOLVER > <span class="cursor"></span>';
        screen.appendChild(footer);
    }, 800);
}

function setupInputHandlers() {
    document.addEventListener('keydown', (e) => {
        if (state.currentScreen === 'boot') return;

        // Menu Navigation
        if (state.currentScreen === 'menu') {
            if (e.key === 'ArrowDown') {
                state.menuSelection = (state.menuSelection + 1) % menuItems.length;
                showMenu();
            } else if (e.key === 'ArrowUp') {
                state.menuSelection = (state.menuSelection - 1 + menuItems.length) % menuItems.length;
                showMenu();
            } else if (e.key === 'Enter') {
                loadScreen(menuItems[state.menuSelection].screen);
            } else if (['1', '2', '3', '4'].includes(e.key)) {
                const item = menuItems.find(i => i.key === e.key);
                if (item) loadScreen(item.screen);
            }
        }

        // Global Keys
        if (e.key === 'F3' || e.key === 'Escape') {
            e.preventDefault(); // Prevent browser search on F3
            showMenu();
        }
    });
}
