import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#0b111e] text-gray-400 border-t border-[#1f293d] pt-12 pb-6 px-6 md:px-12 font-mono text-xs">
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-left">

                    <div>
                        <div className="text-[#00ffcc] font-bold mb-3 uppercase tracking-wider">// SYSTEM STATUS</div>
                        <div className="space-y-1.5 text-gray-400">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span>All systems operational</span>
                            </div>
                            <div>Environment: <span className="text-gray-200">Production</span></div>
                            <div>Version: <span className="text-gray-200">2.1.0-stable</span></div>
                        </div>
                    </div>

                    <div>
                        <div className="text-[#00ffcc] font-bold mb-3 uppercase tracking-wider">// BUILT WITH</div>
                        <div className="text-gray-400 leading-relaxed">
                            Powered by <span className="text-gray-200">React</span>,
                            styled with <span className="text-gray-200">Tailwind CSS</span>,
                            and deployed securely on <span className="text-gray-200">Vercel</span>.
                        </div>
                    </div>

                    <div>
                        <div className="text-[#00ffcc] font-bold mb-3 uppercase tracking-wider">// ARCHIVE</div>
                        <div className="grid grid-cols-2 gap-2 text-gray-400">
                            <a href="#projects" className="hover:text-white transition-colors">projects</a>
                            <a href="#about" className="hover:text-white transition-colors">about-me</a>
                            <a href="https://www.youtube.com/@Brosliketeaching" className="hover:text-white transition-colors">experience (Teaching)</a>
                            <span className="text-gray-500 cursor-default">lat.bros.9102006@gmail.com</span>
                        </div>
                    </div>

                </div>

                <div className="border-t border-[#1f293d]/50 my-6"></div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500">
                    <div className="flex items-center gap-2">
                        <span className="text-[#00ffcc] font-bold">$&gt;</span>
                        <span>© 2026 leatbros.dev · All rights reserved</span>
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-600">
                        Designed for the web
                    </div>
                </div>

            </div>
        </footer>
    );
}