import { Nav } from "@components/shared/Nav";
// import Title from "@components/shared/Title";

function About() {
    return (
        <>
            <Nav />
            <div className="pt-20 px-5 sm:px-10 md:px-20 mt-5 flex flex-col items-center">
                <div className="max-w-[1000px] w-full flex flex-col justify-center items-center my-2 px-4 sm:px-6 pb-3">
                    <h1 className="pr-2 text-xl sm:text-2xl md:text-3xl">What is <em>Kinesiology</em></h1>
                    <img className="w-full px-4 sm:px-10 md:px-28" src="/assets/images/image6.png" alt="Banner" />
                    <p className="w-1/2 text-center">
                    Kinesiology is a powerful modality blending science with the art of tapping into your intuition to
                    enhance physical, emotional, and energetic balance through muscle monitoring. It's like having a
                    conversation with your body—a personalized approach recognizing the interconnectedness of mind,
                    body, and spirit.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row min-h-[800px] max-w-[1000px] w-full my-2 pb-3 custom-background-infinite">
                    {/* LEFT SIDE */}
                    <div className="sm:flex-row m-4 py-2 px-4 sm:px-10 w-full md:w-full relative">
                        <h1>Personal <em>Journey</em></h1>
                        <p className="absolute bottom-0 right-0 w-1/2 text-sm">
                        Little did I know that when I embarked on this journey with myself, its impact
                        would extend far beyond. The transformative power of kinesiology not only
                        brought me clarity but resonated with my family, friends, and others I've had
                        the privilege to help. It's a ripple effect of well-being and positive change.
                        <br/>
                        <br/>
                        I didn't truly understand myself until I discovered kinesiology, providing the
                        clarity I needed to know the steps I should take. Previously, I felt lost, unsure
                        of what to do, and never quite at ease. I lacked contentment and struggled
                        with my health. Through kinesiology, I gained a better understanding of myself,
                        learned about my own body, and began living in harmony with my true self.
                        </p>
                    </div>
                    {/* <img className="w-full px-4 sm:px-10 md:px-28" src="/assets/images/image7.png" alt="Banner" /> */}
                </div>

                <div className="flex flex-col md:flex-row min-h-[800px] max-w-[1000px] w-full my-2 pb-3 custom-background-mixed relative">
                    <div className="absolute top-80 left-60 w-1/5">
                        <h3>01</h3>
                        <h3 className="underline pb-2">How I Can Help:</h3>
                        <p className="text-sm">
                        Embark on your wellness journey with me
                        as your guide. Using kinesiology, I identify
                        imbalances and tailor plans to address
                        your unique needs, whether for stress
                        reduction, physical issues, or improved
                        mobility.
                        </p>
                    </div>
                    <div className="absolute top-20 right-28 w-1/5">
                        <h3>02</h3>
                        <h3 className="underline pb-2">Why Choose Me:</h3>
                        <p className="text-sm">
                        With a compassionate, client-
                        centered approach, I am dedicated
                        to helping you unlock your body's
                        innate ability to heal.
                        </p>
                    </div>
                    <div className="absolute bottom-28 left-48 w-1/4">
                        <p className="text-sm">
                        I am here to support your path to
                        accessing your balance.
                        </p>
                    </div>
                    <div className="absolute bottom-36 right-8 w-1/2">
                        <p>
                        My passion and enthusiasm for everyone to become
                        independent by knowing themselves well is what I can
                        offer because I believe everyone possesses this ability.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-between items-stretch min-h-[700px] max-w-[1000px] w-full my-2 pb-3 custom-background-rainbow">
                    <div className="w-full text-center">
                        <h1 ><em>Services</em> - How to work with me</h1>
                    </div>
                    <div className="flex flex-row justify-end min-h-[600px]">
                        <div className="flex flex-col justify-between w-1/5 text-center border-r border-r-slate-500">
                            <div>
                                <h1 className="text-9xl">1</h1>
                            </div>
                            <div className="h-1/3">
                                <h2 className="text-2xl font-comorant">Touch for Health
                                    Certification
                                </h2>
                                <h2 className="text-xl font-medium">
                                    Workshops
                                </h2>
                            </div>
                            <div className="h-1/3">
                                <ul>
                                    <li>Level 1</li>
                                    <li>Level 2</li>
                                    <li>Level 3</li>
                                    <li>Level 4</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between w-1/5 text-center border-r border-r-slate-500">
                            <div>
                                <h1 className="text-9xl">2</h1>
                            </div>
                            <div className="h-1/3">
                                <h2 className="text-2xl font-comorant">
                                    Mini
                                    Kinesiology
                                </h2>
                                <h2 className="text-xl font-medium">
                                    Classes
                                </h2>
                            </div>
                            <div className="h-1/3">
                                <ul>
                                    <li>Introduction to Kinesiology</li>
                                    <li>Kinesiology for Kids</li>
                                    <li>Eat Right, Live Right</li>
                                    <li>Healthy Pets</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between w-1/5 text-center ">
                            <div>
                                <h1 className="text-9xl">3</h1>
                            </div>
                            <div className="h-1/3">
                                <h2 className="text-2xl font-comorant">
                                    Corporate & Community
                                </h2>
                                <h2 className="text-xl font-medium">
                                    Classes
                                </h2>
                            </div>
                            <div className="h-1/3">

                            </div>
                        </div>
                        <div className="flex flex-col justify-between w-1/5 text-center">
                        <h1 className="text-9xl">4</h1>
                        <div className="h-1/3">
                            <h2 className="text-2xl font-comorant">
                                Wellness
                            </h2>
                            <h2 className="text-xl font-medium">
                                Retreats
                            </h2>
                        </div>
                        <div className="h-1/3">
                            <img src='/assets/images/image10.png' className="scale-150"></img>
                        </div>
                        </div>
                        <div className="flex flex-col justify-between w-1/5 text-center">
                            <h1 className="text-9xl">5</h1>
                            <div className="h-1/3">
                                <h2 className="text-xl font-medium">
                                    Personalized Kinesiology Sessions
                                </h2>
                            </div>
                            <div className="h-1/3">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
  
export default About;