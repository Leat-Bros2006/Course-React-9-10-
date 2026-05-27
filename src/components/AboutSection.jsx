import AboutCard from "./AboutCard";

export default function AboutSection() {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-15 px-5 bg-bg2 mt-5">
                <div>
                    <h3 className="text-accent">// ABOUT ME</h3>
                    <h1 className="py-6 text-white text-5xl font-extrabold">WHO I AM</h1>
                    {/* space = pag(but it don't use flex) */}
                    <div className="space-y-3">
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero excepturi voluptas labore amet, nihil nesciunt eos provident esse corrupti?</p>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero excepturi voluptas labore amet, nihil nesciunt eos provident esse corrupti? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero excepturi voluptas labore amet, Lorem ipsum dolor sit amet. lorem5 nihil nesciunt eos provident esse corrupti?</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <AboutCard num="3+" text="Subject Taught" />
                    <AboutCard num="10+" text="Curiosity Level" />
                    <AboutCard num="40+" text="Hands-on Learning" />
                    <AboutCard num="42+" text="Committed Instructor" />
                </div>
            </section>

        </>
    );
}
