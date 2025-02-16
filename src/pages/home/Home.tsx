import { Nav } from "@components/shared/Nav";

function Home() {
    return (
        <>
            <Nav />
            <div className="pt-20 px-5 sm:px-10 md:px-20 mt-5 flex flex-col items-center">
                {/* HEADER SECTION */}
                <div className="max-w-[1000px] w-full my-2 px-4 sm:px-6">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-wrap items-end justify-center">
                            <h1 className="pr-2 text-xl sm:text-2xl md:text-3xl">The Art of Balance:</h1>
                            <h2 className="font-thin text-lg sm:text-xl md:text-2xl">A Guide to Kinesiology</h2>
                        </div>
                        <h2 className="font-thin pb-2 text-m sm:text-l md:text-xl">By Seruni Sekarpuri</h2>
                    </div>
                    <img className="w-full px-4 sm:px-10 md:px-28" src="/assets/images/image1.png" alt="Banner" />
                </div>

                {/* PROFILE SECTION */}
                <div className="flex flex-col md:flex-row max-w-[1000px] max-h-[600px] w-full my-2">
                    {/* LEFT SIDE */}
                    <div className="flex flex-col sm:flex-row m-4 py-2 px-4 sm:px-10 w-full md:w-2/3">
                        <div className="w-full sm:w-1/4"></div>
                        <div className="w-full sm:w-3/4">
                            <h1 className="text-xl sm:text-2xl">Seruni</h1>
                            <h1 className="text-xl sm:text-2xl"><em>Sekarpuri</em></h1>
                            <p className="font-medium text-sm sm:text-base">A mother and Kinesiologist</p>
                            <img className="mt-2 w-32 sm:w-40" src="/assets/images/image2.png" alt="Profile" />
                            <br />
                            <p className="text-xs sm:text-sm">
                                As a mother and kinesiologist based in Bali, I’m also a Transformational Alchemist,
                                utilizing herbs, spagyric, minerals, tissue salts & homeopathy.
                                Additionally, I am a yoga teacher specializing in hatha and prenatal yoga.
                            </p>
                            <br />
                            <p className="text-xs sm:text-sm">
                                In my exploration of various modalities, kinesiology has evolved into my trusty toolkit.
                                These techniques go beyond a profession; they are an integral part of my daily life.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-full md:w-2/3 flex flex-col items-stretch">
                        <div className="relative px-4 sm:px-10">
                            <div className="flex flex-wrap justify-between bg-transparent z-10 text-sm sm:text-base">
                                <div><p>Bali based</p> <p>Kinesiologist</p></div>
                                <div><p>Touch for Health</p> <p>Instructor</p></div>
                                <div><p>Yoga</p> <p>Instructor</p></div>
                            </div>
                        </div>
                        <div className="flex justify-end h-full px-4 sm:px-10">
                            <div className="flex items-end">
                                <img src="/assets/images/image4.png" className="w-24 sm:w-32 md:w-40" alt="Yoga" />
                            </div>
                            <div className="w-4/5 bg-custom-blue-2 relative">
                                <img src="/assets/images/image3.png" className="absolute bottom-2 right-2 w-20 sm:w-24 md:w-32" alt="Decoration" />
                            </div>
                        </div>
                </div>
            </div>

            {/* TEXT OVER IMAGE SECTION */}
            <div className="relative w-full max-w-[1000px] my-2">
                <img className="w-full" src="/assets/images/image5.png" alt="Background" />
                <div className="absolute top-1/2 left-1/3 -translate-x-1/3 -translate-y-1/2 w-4/5 sm:w-3/5 md:w-1/2 text-center sm:text-left">
                    <p className="text-sm sm:text-lg">Fueled by <em className="font-comorant text-lg sm:text-2xl">passion, I aspire to make kinesiology</em> something everyone can embrace.</p>
                    <br />
                    <p className="font-comorant text-xl sm:text-3xl md:text-5xl">
                        <em>
                            I believe every home should have someone acquainted with this powerful method.
                        </em>
                    </p>
                    <br />
                    <p className="text-sm sm:text-lg">That's why I am certified as a Touch for Health Instructor, ready to guide you.</p>
                </div>
            </div>
            </div>
        </>
    );
  }
  
export default Home;