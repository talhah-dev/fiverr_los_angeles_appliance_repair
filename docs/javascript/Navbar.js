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

                    <div class="relative group">
                        <button class="flex items-center gap-2 hover:text-yellow-400 transition">
                            Services
                            <i class="fa-solid fa-chevron-down text-sm"></i>
                        </button>

                        <div class="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <div class="w-72 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">

                                <a href="/washer-repair.html" class="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition">
                                    <span class="w-10 h-10 rounded-xl bg-yellow-400/30 flex items-center justify-center text-blue-900">
                                        <i class="fa-solid fa-soap"></i>
                                    </span>
                                    <span class="font-semibold">Washer Repair</span>
                                </a>

                                <a href="/dryer-repair.html" class="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition">
                                    <span class="w-10 h-10 rounded-xl bg-yellow-400/30 flex items-center justify-center text-blue-900">
                                        <i class="fa-solid fa-fire-burner"></i>
                                    </span>
                                    <span class="font-semibold">Dryer Repair</span>
                                </a>

                                <a href="/refrigerator-repair.html" class="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition">
                                    <span class="w-10 h-10 rounded-xl bg-yellow-400/30 flex items-center justify-center text-blue-900">
                                        <i class="fa-solid fa-snowflake"></i>
                                    </span>
                                    <span class="font-semibold">Refrigerator Repair</span>
                                </a>

                                <a href="/stove-repair.html" class="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition">
                                    <span class="w-10 h-10 rounded-xl bg-yellow-400/30 flex items-center justify-center text-blue-900">
                                        <i class="fa-solid fa-burn"></i>
                                    </span>
                                    <span class="font-semibold">Stove Repair</span>
                                </a>

                                <a href="/oven-repair.html" class="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition">
                                    <span class="w-10 h-10 rounded-xl bg-yellow-400/30 flex items-center justify-center text-blue-900">
                                        <i class="fa-solid fa-kitchen-set"></i>
                                    </span>
                                    <span class="font-semibold">Oven Repair</span>
                                </a>

                                <a href="/dishwasher-repair.html" class="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition">
                                    <span class="w-10 h-10 rounded-xl bg-yellow-400/30 flex items-center justify-center text-blue-900">
                                        <i class="fa-solid fa-water"></i>
                                    </span>
                                    <span class="font-semibold">Dishwasher Repair</span>
                                </a>

                            </div>
                        </div>
                    </div>

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

            <button id="mobileServicesBtn" class="flex items-center justify-between hover:text-yellow-400 transition">
                <span>Services</span>
                <i id="mobileServicesIcon" class="fa-solid fa-chevron-down text-sm transition-transform duration-300"></i>
            </button>

            <div id="mobileServicesList" class="max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
                <div class="mt-3 flex flex-col gap-3 pl-3 text-base">
                    <a href="/washer-repair.html" class="hover:text-yellow-400 transition">Washer Repair</a>
                    <a href="/dryer-repair.html" class="hover:text-yellow-400 transition">Dryer Repair</a>
                    <a href="/refrigerator-repair.html" class="hover:text-yellow-400 transition">Refrigerator Repair</a>
                    <a href="/stove-repair.html" class="hover:text-yellow-400 transition">Stove Repair</a>
                    <a href="/oven-repair.html" class="hover:text-yellow-400 transition">Oven Repair</a>
                    <a href="/dishwasher-repair.html" class="hover:text-yellow-400 transition">Dishwasher Repair</a>
                </div>
            </div>

            <a href="/contact.html" class="hover:text-yellow-400 transition">Contact</a>

            <a href="tel:2136039155"
                class="mt-6 inline-flex items-center justify-center bg-yellow-400 text-blue-900 font-bold py-4 rounded-full">
                <i class="fa-solid fa-phone mr-3"></i>
                Call (213) 603-9155
            </a>
        </nav>
    </div>
`;

const menuBtn = document.getElementById('menuBtn');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
});

const mobileServicesBtn = document.getElementById('mobileServicesBtn');
const mobileServicesList = document.getElementById('mobileServicesList');
const mobileServicesIcon = document.getElementById('mobileServicesIcon');

mobileServicesBtn.addEventListener('click', () => {
    const isOpen = mobileServicesList.style.maxHeight && mobileServicesList.style.maxHeight !== '0px';

    if (isOpen) {
        mobileServicesList.style.maxHeight = '0px';
        mobileServicesIcon.style.transform = 'rotate(0deg)';
    } else {
        mobileServicesList.style.maxHeight = mobileServicesList.scrollHeight + 'px';
        mobileServicesIcon.style.transform = 'rotate(180deg)';
    }
});
