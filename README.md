<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Repairo QuickFix | Bangalore Appliance Repair</title>
    
    <!-- Tailwind CSS for styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- FontAwesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Tailwind Configuration for Custom Brand Colors -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brandBlue: '#0A2540',
                        brandBlueLight: '#193A5A',
                        brandOrange: '#FF6B00',
                        brandOrangeHover: '#E55F00'
                    }
                }
            }
        }
    </script>
    <style>
        html { scroll-behavior: smooth; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
    </style>
</head>
<body class="bg-gray-50 text-gray-800 antialiased">

    <!-- Navigation -->
    <nav class="bg-white shadow-md fixed w-full z-50 top-0">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20 items-center">
                <div class="flex-shrink-0 flex items-center">
                    <i class="fa-solid fa-wrench text-brandOrange text-3xl mr-2"></i>
                    <span class="font-bold text-2xl text-brandBlue">Repairo <span class="text-brandOrange">QuickFix</span></span>
                </div>
                <div class="hidden md:flex space-x-4 items-center">
                    <a href="#services" class="text-gray-600 hover:text-brandBlue font-medium">Services</a>
                    <a href="#pricing" class="text-gray-600 hover:text-brandBlue font-medium">Pricing</a>
                    <a href="tel:9916571062" class="bg-brandBlue text-white px-5 py-2 rounded-md font-bold hover:bg-brandBlueLight transition shadow-lg">
                        <i class="fa-solid fa-phone mr-2"></i>9916571062
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="mt-20 bg-brandBlue text-white py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                    Expert Appliance Repair at Your Doorstep in Bangalore
                </h1>
                <p class="text-lg text-gray-300 mb-8">
                    Fast, reliable, and transparent repair services for all your major home appliances. We fix it right, the first time.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="tel:9916571062" class="bg-brandOrange text-white text-center px-8 py-4 rounded-md font-bold text-lg hover:bg-brandOrangeHover transition shadow-lg flex items-center justify-center">
                        <i class="fa-solid fa-phone-volume mr-2 text-xl"></i> Call Now
                    </a>
                    <a href="https://wa.me/917829007201" target="_blank" class="bg-[#25D366] text-white text-center px-8 py-4 rounded-md font-bold text-lg hover:bg-[#20bd5a] transition shadow-lg flex items-center justify-center">
                        <i class="fa-brands fa-whatsapp mr-2 text-xl"></i> WhatsApp Us
                    </a>
                </div>
            </div>
            <div class="hidden md:block">
                <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Appliance Repair Technician" class="rounded-xl shadow-2xl border-4 border-white/10">
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="bg-white py-10 border-b">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div class="p-4">
                    <i class="fa-solid fa-clock text-3xl text-brandOrange mb-3"></i>
                    <h3 class="font-bold text-brandBlue">Same-Day Service</h3>
                </div>
                <div class="p-4">
                    <i class="fa-solid fa-user-check text-3xl text-brandOrange mb-3"></i>
                    <h3 class="font-bold text-brandBlue">Verified Technicians</h3>
                </div>
                <div class="p-4">
                    <i class="fa-solid fa-indian-rupee-sign text-3xl text-brandOrange mb-3"></i>
                    <h3 class="font-bold text-brandBlue">Transparent Pricing</h3>
                </div>
                <div class="p-4">
                    <i class="fa-solid fa-house text-3xl text-brandOrange mb-3"></i>
                    <h3 class="font-bold text-brandBlue">Doorstep Support</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-brandBlue mb-4">Our Services</h2>
                <div class="w-24 h-1 bg-brandOrange mx-auto"></div>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Washing Machine -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition">
                    <img src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Washing Machine Repair" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="font-bold text-xl mb-2 text-brandBlue">Washing Machine Repair</h3>
                        <p class="text-gray-600 mb-4">Top load, front load, and semi-automatic machine repairs for all major brands.</p>
                        <a href="#booking" class="text-brandOrange font-bold hover:underline">Book Service &rarr;</a>
                    </div>
                </div>
                <!-- AC Repair -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition">
                    <img src="https://images.unsplash.com/photo-1527623617300-36940f8b18dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="AC Service and Repair" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="font-bold text-xl mb-2 text-brandBlue">AC Service & Repair</h3>
                        <p class="text-gray-600 mb-4">Gas refilling, deep cleaning, cooling issues, and PCB repairs for Split & Window ACs.</p>
                        <a href="#booking" class="text-brandOrange font-bold hover:underline">Book Service &rarr;</a>
                    </div>
                </div>
                <!-- Refrigerator -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition">
                    <img src="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Refrigerator Repair" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="font-bold text-xl mb-2 text-brandBlue">Refrigerator Repair</h3>
                        <p class="text-gray-600 mb-4">Compressor replacement, gas charging, and cooling issue resolution for all fridges.</p>
                        <a href="#booking" class="text-brandOrange font-bold hover:underline">Book Service &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-16 bg-brandBlue text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold mb-4">Honest, Upfront Pricing</h2>
            <div class="w-24 h-1 bg-brandOrange mx-auto mb-10"></div>
            
            <div class="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div class="bg-white/10 p-8 rounded-lg border border-white/20">
                    <h3 class="text-xl font-medium mb-2">Home Visit</h3>
                    <div class="text-4xl font-bold text-brandOrange mb-2">₹199</div>
                    <p class="text-gray-300">Standard visit charge</p>
                </div>
                <div class="bg-white/10 p-8 rounded-lg border border-white/20 relative overflow-hidden">
                    <div class="absolute top-0 right-0 bg-brandOrange text-white text-xs font-bold px-3 py-1 rounded-bl-lg">WAIVED</div>
                    <h3 class="text-xl font-medium mb-2">Inspection</h3>
                    <div class="text-4xl font-bold text-brandOrange mb-2">₹299</div>
                    <p class="text-gray-300 font-bold text-brandLight">*Inspection Fee Waived if you proceed with the repair!</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Booking & Testimonials -->
    <section class="py-16 bg-white" id="booking">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
            
            <!-- Booking Form -->
            <div class="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 class="text-2xl font-bold text-brandBlue mb-6">Book a Technician</h3>
                <form action="#" method="POST" class="space-y-4">
                    <div>
                        <label class="block text-gray-700 mb-2 font-medium">Full Name</label>
                        <input type="text" class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandOrange" placeholder="Enter your name" required>
                    </div>
                    <div>
                        <label class="block text-gray-700 mb-2 font-medium">Phone Number</label>
                        <input type="tel" class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandOrange" placeholder="10-digit mobile number" required>
                    </div>
                    <div>
                        <label class="block text-gray-700 mb-2 font-medium">Appliance Issue</label>
                        <select class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandOrange" required>
                            <option value="">Select Service...</option>
                            <option value="Washing Machine">Washing Machine Repair</option>
                            <option value="AC">AC Service & Repair</option>
                            <option value="Refrigerator">Refrigerator Repair</option>
                        </select>
                    </div>
                    <button type="submit" class="w-full bg-brandBlue text-white font-bold py-4 rounded-md hover:bg-brandBlueLight transition shadow-md mt-4">
                        Request Service Now
                    </button>
                </form>
            </div>

            <!-- Testimonials -->
            <div>
                <h3 class="text-2xl font-bold text-brandBlue mb-6">What Our Customers Say</h3>
                <div class="space-y-6">
                    <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-brandOrange">
                        <div class="flex text-yellow-400 mb-2">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <p class="text-gray-600 italic mb-4">"My AC stopped working in the middle of summer. Repairo QuickFix sent a technician within 2 hours. Professional service and very clear pricing. Highly recommended in Bangalore!"</p>
                        <p class="font-bold text-brandBlue">- Rahul M., Koramangala</p>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-brandOrange">
                        <div class="flex text-yellow-400 mb-2">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <p class="text-gray-600 italic mb-4">"I loved that they actually waived the inspection fee when I decided to get my washing machine motor replaced. Honest guys."</p>
                        <p class="font-bold text-brandBlue">- Priya S., Indiranagar</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
            <div>
                <div class="flex items-center mb-4">
                    <i class="fa-solid fa-wrench text-brandOrange text-2xl mr-2"></i>
                    <span class="font-bold text-xl">Repairo <span class="text-brandOrange">QuickFix</span></span>
                </div>
                <p class="text-gray-400 mb-4">Expert appliance repair at your doorstep in Bangalore. Your trusted partner for home fixes.</p>
            </div>
            <div>
                <h4 class="font-bold text-lg mb-4 text-brandOrange">Contact Us</h4>
                <ul class="space-y-3 text-gray-300">
                    <li class="flex items-center"><i class="fa-solid fa-phone w-6 text-brandOrange"></i> <a href="tel:9916571062" class="hover:text-white transition">9916571062</a></li>
                    <li class="flex items-center"><i class="fa-brands fa-whatsapp w-6 text-[#25D366]"></i> <a href="https://wa.me/917829007201" class="hover:text-white transition">7829007201</a></li>
                    <li class="flex items-center"><i class="fa-solid fa-location-dot w-6 text-brandOrange"></i> Bangalore, Karnataka</li>
                </ul>
            </div>
            <div>
                <h4 class="font-bold text-lg mb-4 text-brandOrange">Business Hours</h4>
                <ul class="space-y-2 text-gray-300">
                    <li>Monday - Sunday</li>
                    <li>8:00 AM - 9:00 PM</li>
                    <li class="mt-4 text-brandOrange font-bold">Same-Day Service Available</li>
                </ul>
            </div>
        </div>
        <div class="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500 text-sm">
            &copy; 2026 Repairo QuickFix. All rights reserved.
        </div>
    </footer>

</body>
</html>