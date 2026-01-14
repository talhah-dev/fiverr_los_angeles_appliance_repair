const navbar = document.getElementById("navbar");

navbar.innerHTML = `
    <header class="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex items-center justify-between h-20 md:h-24">

                <a href="/index.html" class="flex items-center gap-2">
                    <img src="/docs/assets/logo.png" class="md:h-10 h-8" alt=""> 
                </a>

                    <nav class="hidden lg:flex items-center gap-8 font-semibold text-blue-900">
                        <a href="/index.html" class="hover:text-yellow-400 transition">Home</a>
                        <a href="/about.html" class="hover:text-yellow-400 transition">About</a>
                        <a href="/services.html" class="hover:text-yellow-400 transition">Services</a>
                        <a href="/contact.html" class="hover:text-yellow-400 transition">Contact</a>
                        <a href="tel:2136039155"
                            class="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-6 py-2 rounded-full transition">
                            Call Now
                        </a>
                    </nav>

                <button id="menuBtn" class="lg:hidden text-blue-900 text-2xl">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    </header>
    <div class="h-20 md:h-24"></div>


    <!-- Mobile Menu -->
    <div id="mobileMenu"
        class="fixed inset-0 z-50 bg-blue-900 text-white transform translate-x-full transition-transform duration-500 ease-in-out">

        <div class="flex items-center justify-between px-6 h-20 border-b border-blue-800">
            <span class="text-xl font-bold">Menu</span>
            <button id="closeMenu" class="text-2xl">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <nav class="flex flex-col px-6 pt-10 gap-6 text-lg font-semibold">
            <a href="/index.html" class="hover:text-yellow-400 transition">Home</a>
            <a href="/about.html" class="hover:text-yellow-400 transition">About</a>
            <a href="/services.html" class="hover:text-yellow-400 transition">Services</a>
            <a href="/contact.html" class="hover:text-yellow-400 transition">Contact</a>

            <a href="tel:2136039155"
                class="mt-6 inline-flex items-center justify-center bg-yellow-400 text-blue-900 font-bold py-4 rounded-full">
                <i class="fa-solid fa-phone mr-3"></i>
                Call (213) 603-9155
            </a>
        </nav>
    </div>


`;

const menuBtn = document.getElementById('menuBtn')
const closeMenu = document.getElementById('closeMenu')
const mobileMenu = document.getElementById('mobileMenu')

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full')
    mobileMenu.classList.add('translate-x-0')
})

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full')
    mobileMenu.classList.remove('translate-x-0')
})