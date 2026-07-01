import os
import re

html_files = [
    "d:/Application/Antigravity_workspace/unified_web_design/index.html",
    "d:/Application/Antigravity_workspace/unified_web_design/solutions.html",
    "d:/Application/Antigravity_workspace/unified_web_design/why_us.html",
    "d:/Application/Antigravity_workspace/unified_web_design/pricing.html",
    "d:/Application/Antigravity_workspace/unified_web_design/contact_us.html"
]

nav_content = """    <nav class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm h-20">
        <div class="flex items-center justify-between px-6 lg:px-12 max-w-7xl mx-auto h-full relative">
            <!-- Left: Logo -->
            <a href="index.html" class="shrink-0">
                <img src="logo.png" alt="GEN PHOTOS Logo" class="h-8 w-auto">
            </a>
            
            <!-- Middle: Nav Links with Mega Menu -->
            <div class="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
                <div class="relative group">
                    <a class="font-['Space_Grotesk'] text-sm font-medium tracking-tight text-slate-600 hover:text-slate-900 transition-colors duration-200 ease-out active:scale-95 flex items-center gap-1 cursor-pointer" href="#">
                        Product
                        <span class="material-symbols-outlined text-[16px]">keyboard_arrow_down</span>
                    </a>
                    <!-- Mega Menu Dropdown -->
                    <div class="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div class="w-72 bg-white border border-slate-200 rounded-xl shadow-xl py-2 overflow-hidden">
                            <a class="px-4 py-3 hover:bg-slate-50 transition-colors text-slate-600 hover:text-primary flex items-center gap-3" href="#">
                                <span class="material-symbols-outlined text-xl">wallpaper</span>
                                <span class="font-medium text-sm">Background Remover</span>
                            </a>
                            <a class="px-4 py-3 hover:bg-slate-50 transition-colors text-slate-600 hover:text-primary flex items-center gap-3" href="#">
                                <span class="material-symbols-outlined text-xl">auto_awesome</span>
                                <span class="font-medium text-sm">Image Generator</span>
                            </a>
                            <a class="px-4 py-3 hover:bg-slate-50 transition-colors text-slate-600 hover:text-primary flex items-center gap-3" href="#">
                                <span class="material-symbols-outlined text-xl">checkroom</span>
                                <span class="font-medium text-sm">Clothes Swapping</span>
                            </a>
                            <a class="px-4 py-3 hover:bg-slate-50 transition-colors text-slate-600 hover:text-primary flex items-center gap-3" href="#">
                                <span class="material-symbols-outlined text-xl">image</span>
                                <span class="font-medium text-sm">Background Generator</span>
                            </a>
                            <a class="px-4 py-3 hover:bg-slate-50 transition-colors text-slate-600 hover:text-primary flex items-center gap-3" href="#">
                                <span class="material-symbols-outlined text-xl">photo_camera</span>
                                <span class="font-medium text-sm">AI Product Photography</span>
                            </a>
                            <a class="px-4 py-3 hover:bg-slate-50 transition-colors text-slate-600 hover:text-primary flex items-center gap-3" href="#">
                                <span class="material-symbols-outlined text-xl">accessibility_new</span>
                                <span class="font-medium text-sm">Ghost Mannequin</span>
                            </a>
                        </div>
                    </div>
                </div>
                <a class="font-['Space_Grotesk'] text-sm font-medium tracking-tight text-slate-600 hover:text-slate-900 transition-colors duration-200 ease-out active:scale-95" href="solutions.html">Solutions</a>
                <a class="font-['Space_Grotesk'] text-sm font-medium tracking-tight text-slate-600 hover:text-slate-900 transition-colors duration-200 ease-out active:scale-95" href="why_us.html">Why Us</a>
                <a class="font-['Space_Grotesk'] text-sm font-medium tracking-tight text-slate-600 hover:text-slate-900 transition-colors duration-200 ease-out active:scale-95" href="pricing.html">Pricing</a>
            </div>

            <!-- Right: CTA -->
            <div class="flex items-center gap-4 shrink-0">
                <button class="hidden lg:block font-['Space_Grotesk'] text-sm font-medium text-slate-600 hover:text-slate-900 px-4 py-2">Log In</button>
                <a href="contact_us.html" class="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-['Space_Grotesk'] text-sm font-bold tracking-tight hover:bg-primary-container transition-all active:scale-95 inline-block">Contact Us</a>
            </div>
        </div>
    </nav>"""

for f in html_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Replace nav block
    content = re.sub(r'<nav.*?</nav>', nav_content, content, flags=re.DOTALL)
    
    # Remove API Status link from footer
    content = re.sub(r'<a[^>]*?>API Status</a>\s*', '', content)
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
print("Updated all 5 HTML files.")
