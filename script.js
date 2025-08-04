document.addEventListener('DOMContentLoaded', function() {
    // DOM elementlari
    const productGrid = document.getElementById('productGrid');
    const orderModal = document.getElementById('orderModal');
    const orderProductInfo = document.getElementById('orderProductInfo');
    const orderForm = document.getElementById('orderForm');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const testDriveModal = document.getElementById('testDriveModal');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const testDriveForm = document.getElementById('testDriveForm');
    const contactForm = document.getElementById('contactForm');
    const loginButtons = document.querySelectorAll('.login-btn');
    const registerButtons = document.querySelectorAll('.register-btn');
    const testDriveBtn = document.querySelector('.test-drive-btn');
    const scrollToModelsBtn = document.querySelector('.scroll-to-models');
    const showLoginLinks = document.querySelectorAll('.show-login');
    const showRegisterLinks = document.querySelectorAll('.show-register');

    // Mahsulotlar ma'lumotlari
    const products = [
        {
            id: 1,
            name: "Chevrolet Cobalt",
            image: "https://s.auto.drom.ru/img1/catalog/photos/fullsize/chevrolet/cobalt/chevrolet_cobalt_34120.jpg",
            price: "245,000,000 so'm",
            year: "2023",
            engine: "1.5L Turbo",
            transmission: "Avtomat",
            color: "Oq"
        },
        {
            id: 2,
            name: "Chevrolet Gentra",
            image: "https://car24.uz/wp-content/uploads/2024/01/4a4a27f468ef5856e02e30a3f4e123b6e7d620a3.jpg",
            price: "210,000,000 so'm",
            year: "2022",
            engine: "1.6L",
            transmission: "Mexanika",
            color: "Qora"
        },
        {
            id: 3,
            name: "Chevrolet Onix",
            image: "https://www.gazeta.uz/media/img/2022/10/ft8n9k16672249744928_l.jpg",
            price: "260,000,000 so'm",
            year: "2023",
            engine: "1.0 Turbo",
            transmission: "Avtomat",
            color: "Qora"
        },
        {
            id: 4,
            name: "Chevrolet Monza",
            image: "https://orientrentcar.uz/wp-content/uploads/2024/07/1-2.jpg",
            price: "280,000,000 so'm",
            year: "2023",
            engine: "1.3 Turbo",
            transmission: "Avtomat",
            color: "Qora"
        },
        {
            id: 5,
            name: "Chevrolet Captiva",
            image: "https://zamin.uz/uploads/posts/2025-03/7de746f1a8_captiva-5.webp",
            price: "350,000,000 so'm",
            year: "2024",
            engine: "2.0L",
            transmission: "Avtomat",
            color: "Kulrang"
        },
        {
            id: 6,
            name: "Chevrolet Tracker",
            image: "https://chevrolet.uz/assets/images/tracker/exterior/ex-1.jpg",
            price: "320,000,000 so'm",
            year: "2023",
            engine: "1.2 Turbo",
            transmission: "Avtomat",
            color: "Kulrang"
        },
        {
            id: 7,
            name: "Chevrolet Malibu",
            image: "https://www.gazeta.uz/media/img/2020/11/tdnCOr16048215473870_b.jpg",
            price: "380,000,000 so'm",
            year: "2023",
            engine: "1.5 Turbo",
            transmission: "Avtomat",
            color: "Qora"
        },
        {
            id: 8,
            name: "Chevrolet Spark",
            image: "https://car24.uz/wp-content/uploads/2024/01/4c78fd8c-654e-41b8-9c1a-5868d6af06c34-1.jpg",
            price: "180,000,000 so'm",
            year: "2022",
            engine: "1.4L",
            transmission: "Mexanika",
            color: "Qora"
        },
        {
            id: 9,
            name: "Chevrolet Nexia",
            image: "https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg",
            price: "190,000,000 so'm",
            year: "2022",
            engine: "1.5L",
            transmission: "Mexanika",
            color: "Kumush"
        },
        {
            id: 10,
            name: "Chevrolet Lacetti",
            image: "https://wroom.ru/i/news/15518img2.jpg",
            price: "200,000,000 so'm",
            year: "2021",
            engine: "1.8L",
            transmission: "Avtomat",
            color: "Oq"
        },
        {
            id: 11,
            name: "Chevrolet Epica",
            image: "https://avatars.mds.yandex.net/get-verba/787013/2a000001609d518ecfff83e754be8b067fc2/cattouchret",
            price: "220,000,000 so'm",
            year: "2020",
            engine: "2.0L",
            transmission: "Avtomat",
            color: "Kumush"
        },
        {
            id: 12,
            name: "Chevrolet Orlando",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Chevrolet_Orlando_LTZ_1.8_%E2%80%93_Frontansicht%2C_16._April_2011%2C_Hilden.jpg",
            price: "290,000,000 so'm",
            year: "2021",
            engine: "1.4 Turbo",
            transmission: "Avtomat",
            color: "Qora"
        },
        {
            id: 13,
            name: "Chevrolet Tahoe",
            image: "https://avatars.mds.yandex.net/get-verba/1030388/2a0000018cb0c87ad7502e95741a137da17d/456x342",
            price: "450,000,000 so'm",
            year: "2023",
            engine: "5.3L V8",
            transmission: "Avtomat",
            color: "Qora"
        },
        {
            id: 14,
            name: "Chevrolet Trailblazer",
            image: "https://s.auto.drom.ru/img1/catalog/photos/fullsize/chevrolet/trailblazer/chevrolet_trailblazer_34217.jpg",
            price: "400,000,000 so'm",
            year: "2023",
            engine: "2.0 Turbo",
            transmission: "Avtomat",
            color: "Qora"
        },
        {
            id: 15,
            name: "Chevrolet Equinox",
            image: "https://orientrentcar.uz/wp-content/uploads/2023/11/copy-2.jpg",
            price: "370,000,000 so'm",
            year: "2022",
            engine: "1.5 Turbo",
            transmission: "Avtomat",
            color: "Qora"
        },
        {
            id: 16,
            name: "Chevrolet Cruze",
            image: "https://s.auto.drom.ru/i24194/c/photos/fullsize/chevrolet/cruze/chevrolet_cruze_56042.jpg",
            price: "270,000,000 so'm",
            year: "2021",
            engine: "1.4 Turbo",
            transmission: "Avtomat",
            color: "Oq"
        },
        {
            id: 17,
            name: "Chevrolet Aveo",
            image: "https://newauto.kz/neofiles/serve/59e5d571a3abd6110d6b21dd",
            price: "230,000,000 so'm",
            year: "2022",
            engine: "1.6L",
            transmission: "Mexanika",
            color: "Qora"
        },
        {
            id: 18,
            name: "Chevrolet Suburban",
            image: "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2025/suvs/suburban/01-images/preview/2025-suburban-mov-gallerypre-02.png?imwidth=1200",
            price: "500,000,000 so'm",
            year: "2023",
            engine: "5.3L V8",
            transmission: "Avtomat",
            color: "Qora"
        },
        {
            id: 19,
            name: "Chevrolet Impala",
            image: "https://s.auto.drom.ru/i24264/c/photos/fullsize/chevrolet/impala/chevrolet_impala_1046366.jpg",
            price: "420,000,000 so'm",
            year: "2022",
            engine: "3.6L V6",
            transmission: "Avtomat",
            color: "Qora"
        },
        {
            id: 20,
            name: "Chevrolet Camaro",
            image: "https://www.freep.com/gcdn/-mm-/def10cb9ff8f08ed7265857c64353363d29d3a8d/c=0-640-2140-1849/local/-/media/2016/03/22/DetroitFreePress/DetroitFreePress/635942757416771786-2016-Chevrolet-Camaro-SS02.JPG?width=2140&height=1209&fit=crop&format=pjpg&auto=webp",
            price: "550,000,000 so'm",
            year: "2023",
            engine: "6.2L V8",
            transmission: "Avtomat",
            color: "Sariq"
        }
    ];

    // Modal oynalarni ochish/yopish funksiyalari
    function openModal(modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Animatsiya
        setTimeout(() => {
            modal.querySelector('.modal-content').style.opacity = '1';
            modal.querySelector('.modal-content').style.transform = 'translateY(0)';
        }, 10);
    }

    function closeModal(modal) {
        modal.querySelector('.modal-content').style.opacity = '0';
        modal.querySelector('.modal-content').style.transform = 'translateY(-50px)';
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    // Mahsulotlarni yuklash
    function loadProducts() {
        productGrid.innerHTML = '';
        
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200?text=Chevrolet+${product.name.replace(' ', '+')}'">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-specs">
                        <div class="spec-row">
                            <span>Yili:</span>
                            <span>${product.year}</span>
                        </div>
                        <div class="spec-row">
                            <span>Dvigatel:</span>
                            <span>${product.engine}</span>
                        </div>
                        <div class="spec-row">
                            <span>Uzatish:</span>
                            <span>${product.transmission}</span>
                        </div>
                        <div class="spec-row">
                            <span>Rangi:</span>
                            <span>${product.color}</span>
                        </div>
                    </div>
                    <div class="product-price">${product.price}</div>
                    <button class="order-button">Buyurtma berish</button>
                </div>
            `;
            
            const orderBtn = productCard.querySelector('.order-button');
            orderBtn.addEventListener('click', () => {
                orderProductInfo.innerHTML = `
                    <h3>${product.name}</h3>
                    <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
                    <div class="modal-specs">
                        <p><strong>Narx:</strong> ${product.price}</p>
                        <p><strong>Yili:</strong> ${product.year}</p>
                        <p><strong>Dvigatel:</strong> ${product.engine}</p>
                        <p><strong>Uzatish:</strong> ${product.transmission}</p>
                        <p><strong>Rangi:</strong> ${product.color}</p>
                    </div>
                `;
                openModal(orderModal);
            });
            
            productGrid.appendChild(productCard);
        });
    }

    // Sahifa yuklanganda
    function init() {
        // Modal kontentlarga boshlang'ich stil berish
        document.querySelectorAll('.modal-content').forEach(modal => {
            modal.style.opacity = '0';
            modal.style.transform = 'translateY(-50px)';
            modal.style.transition = 'all 0.3s ease-out';
        });

        loadProducts();
        
        // Modal oynalarni yopish
        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal');
                closeModal(modal);
            });
        });
        
        // Sahifa bo'yicha bosilganda modalni yopish
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                closeModal(e.target);
            }
        });
        
        // Buyurtma formasi
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Buyurtmangiz qabul qilindi! Tez orada siz bilan bog\'lanamiz.');
            closeModal(orderModal);
            orderForm.reset();
        });
        
        // Kirish formasi
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Kirish muvaffaqiyatli!');
            closeModal(loginModal);
            loginForm.reset();
        });
        
        // Ro'yxatdan o'tish formasi
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Ro\'yxatdan o\'tish muvaffaqiyatli!');
            closeModal(registerModal);
            registerForm.reset();
        });
        
        // Test haydash formasi
        testDriveForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Test haydash uchun arizangiz qabul qilindi! Tez orada siz bilan bog\'lanamiz.');
            closeModal(testDriveModal);
            testDriveForm.reset();
        });
        
        // Aloqa formasi
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Xabaringiz qabul qilindi! Tez orada siz bilan bog\'lanamiz.');
            contactForm.reset();
        });
        
        // Kirish tugmalari
        loginButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                openModal(loginModal);
            });
        });
        
        // Ro'yxatdan o'tish tugmalari
        registerButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                openModal(registerModal);
            });
        });
        
        // Test Haydash tugmasi
        testDriveBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(testDriveModal);
        });
        
        // Kirish va ro'yxatdan o'tish oynalari orasida o'tish
        showLoginLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                closeModal(registerModal);
                openModal(loginModal);
            });
        });
        
        showRegisterLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                closeModal(loginModal);
                openModal(registerModal);
            });
        });
        
        // Modellarga scroll qilish
        scrollToModelsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#models').scrollIntoView({
                behavior: 'smooth'
            });
        });
        
        // Mobil menyu
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('show');
            
            // Agar menyu ochiq bo'lsa, kirish tugmalarini ko'rsatamiz
            if (nav.classList.contains('show')) {
                const mobileAuth = document.createElement('div');
                mobileAuth.className = 'mobile-auth-buttons';
                mobileAuth.innerHTML = `
                    <button class="auth-btn login-btn">Kirish</button>
                    <button class="auth-btn register-btn">Ro'yxatdan o'tish</button>
                `;
                nav.appendChild(mobileAuth);
                
                // Mobil kirish tugmalariga hodisa qo'shamiz
                document.querySelector('.mobile-auth-buttons .login-btn').addEventListener('click', () => {
                    openModal(loginModal);
                    nav.classList.remove('show');
                });
                
                document.querySelector('.mobile-auth-buttons .register-btn').addEventListener('click', () => {
                    openModal(registerModal);
                    nav.classList.remove('show');
                });
            } else {
                // Agar menyu yopilsa, kirish tugmalarini olib tashlaymiz
                const mobileAuth = document.querySelector('.mobile-auth-buttons');
                if (mobileAuth) {
                    mobileAuth.remove();
                }
            }
        });
        
        // Telefon raqam formati
        document.querySelectorAll('input[type="tel"]').forEach(input => {
            input.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                
                if (value.length > 0) {
                    value = value.match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
                    e.target.value = !value[2] ? value[1] : '+998 ' + value[1] + ' ' + value[2] + (value[3] ? '-' + value[3] : '') + (value[4] ? '-' + value[4] : '');
                }
            });
        });
        
        // SPA navigatsiya
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Mobil menyuni yopish
                    if (window.innerWidth <= 992) {
                        nav.classList.remove('show');
                        const mobileAuth = document.querySelector('.mobile-auth-buttons');
                        if (mobileAuth) {
                            mobileAuth.remove();
                        }
                    }
                }
            });
        });
    }

    // Dasturni ishga tushirish
    init();
});