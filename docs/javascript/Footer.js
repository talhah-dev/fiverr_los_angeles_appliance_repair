const footer = document.getElementById('footer')
footer.innerHTML = `
<footer class="bg-blue-950 text-blue-100 pt-20 pb-10">
    <div class="max-w-7xl mx-auto px-6">

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">

            <div data-aos="fade-up">
                <h3 class="text-2xl font-bold text-white mb-4">
                    Los Angeles Appliance Repair
                </h3>
                <p class="text-blue-200 mb-6 leading-relaxed">
                    Reliable and professional appliance repair services across Greater Los Angeles. Over 10 years of experience you can trust.
                </p>

                <div class="flex items-center gap-4">
                    <a href="#" class="w-10 h-10 rounded-full bg-blue-900 hover:bg-yellow-400 hover:text-blue-900 flex items-center justify-center transition">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-blue-900 hover:bg-yellow-400 hover:text-blue-900 flex items-center justify-center transition">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
                <h4 class="text-lg font-bold text-white mb-4">
                    Our Services
                </h4>
                <ul class="space-y-3">
                    <li><a href="/washer-repair.html" class="hover:text-yellow-400 transition">Washer Repair</a></li>
                    <li><a href="/dryer-repair.html" class="hover:text-yellow-400 transition">Dryer Repair</a></li>
                    <li><a href="/refrigerator-repair.html" class="hover:text-yellow-400 transition">Refrigerator Repair</a></li>
                    <li><a href="/oven-repair.html" class="hover:text-yellow-400 transition">Oven Repair</a></li>
                    <li><a href="/dishwasher-repair.html" class="hover:text-yellow-400 transition">Dishwasher Repair</a></li>
                </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
                <h4 class="text-lg font-bold text-white mb-4">
                    Quick Links
                </h4>
                <ul class="space-y-3">
                    <li><a href="/index.html" class="hover:text-yellow-400 transition">Home</a></li>
                    <li><a href="/about.html" class="hover:text-yellow-400 transition">About</a></li>
                    <li><a href="/services.html" class="hover:text-yellow-400 transition">Services</a></li>
                    <li><a href="/contact.html" class="hover:text-yellow-400 transition">Contact Us</a></li>
                </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
                <h4 class="text-lg font-bold text-white mb-4">
                    Contact Info
                </h4>
                <ul class="space-y-4 text-blue-200">
                    <li class="flex items-start gap-3">
                        <i class="fa-solid fa-location-dot text-yellow-400 mt-1"></i>
                        <span>
                            2355 Westwood Boulevard<br>
                            Los Angeles, CA 90064
                        </span>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-phone text-yellow-400"></i>
                        <a href="tel:2136039155" class="hover:text-yellow-400 transition">
                            (213) 603-9155
                        </a>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-envelope text-yellow-400"></i>
                        <a href="mailto:info@losangelesappliancerepair.com" class="hover:text-yellow-400 transition">
                            info@losangelesappliancerepair.com
                        </a>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-clock text-yellow-400"></i>
                        <span>Mon – Sun: 8 AM – 6 PM</span>
                    </li>
                </ul>
            </div>

        </div>

        <div class="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm">
            © 2026 Los Angeles Appliance Repair. All Rights Reserved.
        </div>

    </div>
</footer>

`