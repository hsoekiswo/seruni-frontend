import Nav from "../../components/Nav";

function Home() {
    return (
      <>
          <Nav />
          <div className="px-20 mt-5">
            <div className="m-4 p-10 border rounded-md flex flex-row">
                <div className="m-4 py-2 px-10 w-3/4">
                    <h1>Hi, I'm Seruni</h1>
                    <br/>
                    <p>
                        I am holistic healing practitioner.
                        I used kinesiology approach through <a href="https://www.ikc.global/about-touch-for-health/" target="_blank">Touch For Health</a> and <a href="https://tirtausada.com/" target="_blank">Transformational Alchemy</a> method.
                        I also teach prenatal yoga at <a href="https://bumisehat.org/?lang=id" target="_blank">Bumi Sehat Bali</a>.
                    </p>
                    <br/>
                    <p>
                        Use this site as a hub for you to learn & grow. Deep dive through publications or videos on self healing, particularly on Kinesiology.
                    </p>
                </div>
                <div>
                    <img src="https://pustakalanalibrary.wordpress.com/wp-content/uploads/2024/07/img_7625.jpeg?w=768" className=""></img>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="m-4 py-8 px-20 border rounded-md w-2/3">
                    {/* Title */}
                    <h1>Touch For Health - The Complete Edition</h1>
                    <br/>
                    <img src="https://devorss.com/cdn/shop/files/9780875169125_c039adc2-c6ee-4a20-86c1-4f35871552b9.jpg?v=1684360516&width=800" className=""></img>
                    <br/>
                    {/* Description */}
                    <p>The Fundamental text of Energy Kinesiology for balancing muscles, posture, and “Chi” (Life Energy)</p>
                    <br/>
                    <p>This is a complete revision and expansion of the fundamental text of Energy Kinesiology.  Includes complete International Kinesiology College curriculum, plus Dr. Thie’s developments from 1990-2005. Integrates Metaphors of Muscles, Meridians and the Five Elements.</p>
                </div>
                <div className="m-4 py-8 px-10 border rounded-md w-1/3">
                    <h3>Blog Latest</h3>
                    <br/>
                    <h2>How Really Listen to Your Body</h2>
                    <br/>
                    <p>Listening to your body using kinesiology and Touch for Health means paying attention to the small signs it gives you to stay healthy and balanced. This method focuses on how your muscles, energy, and emotions are all connected. By gently testing your muscles, you can find areas of stress or tension that might show something is off. Once you notice these signals, you can use simple techniques like pressing certain points, stretching, or deep breathing to help your body feel better. It’s all about trusting your body’s signals and taking small steps to stay healthy and in balance.</p>
                    <br/> 
                    <hr/>
                </div>
            </div>
          </div>
      </>
    );
  }
  
export default Home;