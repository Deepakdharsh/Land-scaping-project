import React from 'react';

const Section6 = () => {
    return (
        <section className="relative w-full min-h-[80vh] bg-[#05201F] text-[#C4D1B6] overflow-hidden flex flex-col justify-between pt-[120px] pb-[40px] px-[35px]">
            {/* Top Border & Subheading */}
            <div className="border-b border-[#C4D1B6]/30 pb-[30px] flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <p className="font-semibold text-lg uppercase tracking-widest">Ready to transform your space?</p>
                <p className="text-sm font-light">Based in Nature, Designing for the Future</p>
            </div>

            {/* Main Huge Typography */}
            <div className="flex-grow flex flex-col justify-center items-center text-center mt-[80px] mb-[100px]">
                <h2 className="text-[12vw] leading-none font-playfair italic mb-4">
                    Let's Talk
                </h2>
                <p className="text-xl md:text-2xl max-w-[600px] mt-8 opacity-80 font-light">
                    Whether you have a specific project in mind or just want to explore the possibilities, I'm here to help bring your vision to life.
                </p>
                
                <button className="mt-12 bg-[#E2FFC2] text-[#05201F] font-semibold py-4 px-10 rounded-full flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                    GET IN TOUCH
                    <svg className="w-4 h-4" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12.0593L7.504 4.60687L1.00002 4.51248V2.5H11V12.5624H9L8.93581 6.04761L1.4318 13.5L0 12.0593Z" fill="currentColor"/>
                    </svg>
                </button>
            </div>

            {/* Footer links */}
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#C4D1B6]/30 pt-[30px] text-sm gap-4">
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors cursor-pointer">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors cursor-pointer">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors cursor-pointer">Behance</a>
                </div>
                <p className="font-light">&copy; {new Date().getFullYear()} Landscape Design. All rights reserved.</p>
            </div>
        </section>
    );
};

export default Section7;
