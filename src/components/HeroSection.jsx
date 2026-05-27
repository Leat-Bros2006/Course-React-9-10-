export default function HeroSection() {
    return (
        <main>
            {/* flex- */}
            <section className="h-screen flex flex-col justify-center py-15 px-5">
                <div className="flex items-center gap-3">
                    <div className="h-0.5 w-8 bg-accent"></div>
                    <span className="text-accent">Instructor</span>
                    <span className="text-accent">.</span>
                    <span className="text-accent">Developter</span>
                    <span className="text-accent">.</span>
                    <span className="text-accent">Maker</span>
                    
                </div>
                <div>
                    <h1 className="text-5xl text-white font-black py-3">Leat Bros <span className="text-accent">B</span></h1>
                    <p className="text-muted leading-5 w-[50%]">Teaching the next generation to build for the web,
                        code in Python, and bring hardware to life - one
                        circuit and commit at a time.
                        Teaching the next generation to build for the web,
                        code in Python, and bring hardware to life - one
                        circuit and commit at a time
                    </p>
                </div>
                <div className="flex gap-3 mt-3">
                    <button className="btn-primary">View Courses</button>
                    <button className="btn-primary">Get in Touch</button>
                </div>
            </section>
        </main>
    );
}
