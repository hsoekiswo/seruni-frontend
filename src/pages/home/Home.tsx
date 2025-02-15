import { Nav } from "@components/shared/Nav";

function Home() {
    return (
      <>
          <Nav />
          <div className="pt-20 px-20 mt-5 flex-col items-center">
            <div className="w-[1000px] my-2">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex items-end justify-center">
                        <h1 className="pr-2">The Art of Balance: </h1>
                        <h2 className="font-thin pb-2">A Guide to Kinesiology</h2>
                    </div>
                    <div>
                        <h2 className="font-thin pb-2 text-3xl">By Seruni Sekarpuri</h2>
                    </div>
                </div>
                <img className="w-full px-28" src="/assets/images/image1.png"></img>
            </div>
            <div className="flex flex-row w-[1000px] my-2">
                <div className="flex flex-row m-4 py-2 px-10 w-2/3">
                    <div className="w-1/4">
                    </div>
                    <div className="w-3/4">
                        <h1>Seruni</h1>
                        <h1><em>Sekarpuri</em></h1>
                        <p className="font-medium">A mother and Kinesiologist</p>
                        <img className="mt-2" src="/assets/images/image2.png"></img>
                        <br/>
                        <p className="text-s">
                            As a mother and kinesiologist based in Bali, I’m also a Transformational
                            Alchemist, utilizing herbs, spagyric, minerals, tissue salts & homeopathy.
                            Additionally, I am a yoga teacher specializing in hatha and prenatal yoga.
                        </p>
                        <br/>
                        <p className="text-s">
                            In my exploration of various modalities, kinesiology has evolved into my
                            trusty toolkit. These techniques go beyond a profession; they are an
                            integral part of my daily life, seamlessly woven into my family's well-
                            being, showcasing how they can infuse magic into everyday living.
                        </p>
                    </div>
                </div>
                <div className="w-2/3 flex flex-col items-stretch">
                    <div className="relative">
                        <div className="flex flex-row justify-between opacity-100 bg-transparent z-10">
                            <div className="">
                                <p>Bali based</p>
                                <p>Kinesiologist</p>
                            </div>
                            <div className="">
                                <p>Touch for Health</p>
                                <p>Instructor</p>
                            </div>
                            <div>
                                <p>Yoga</p>
                                <p>Instructor</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end h-full">
                        <div className="flex items-end">
                            <img src="/assets/images/image4.png" className=""></img>
                        </div>
                        <div className="w-4/5 bg-custom-blue-2 relative">
                            <img src="/assets/images/image3.png" className="absolute bottom-2 right-2"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-[1000px] my-2 relative">
                <img className="w-full" src="/assets/images/image5.png">
                </img>
                <div className="absolute top-1/2 left-1/3 -translate-x-1/3 -translate-y-1/2 w-1/2">
                    <p className="text-lg">Fueled by <em className="font-comorant text-2xl">passion, I aspire to make kinesiology</em> something everyone can embrace.</p>
                    <br/>
                    <p className="font-comorant text-5xl">
                        <em>
                            I believe every home should have someone acquainted with this powerful method.
                        </em>
                    </p>
                    <br/>
                    <p className="text-lg">That's why I am certified as a Touch for Health Instructor, ready to guide you.</p>
                </div>
            </div>
          </div>
      </>
    );
  }
  
export default Home;