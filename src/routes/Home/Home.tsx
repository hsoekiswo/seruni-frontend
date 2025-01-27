import Nav from "../../components/Nav";

function Home() {
    return (
      <>
          <Nav />
          <h1>Home</h1>
          <div>
            <h2>Hi, I'm Seruni</h2>
            <img src="https://pustakalanalibrary.wordpress.com/wp-content/uploads/2024/07/img_7625.jpeg?w=768"></img>
            <p>
                I am holistic healing practitioner.
                I used kinesiology approach through <a href="https://www.ikc.global/about-touch-for-health/" >Touch For Health</a> and <a href="https://tirtausada.com/">Transformational Alchemy</a> method.
                I also teach prenatal yoga at <a href="https://bumisehat.org/?lang=id">Bumi Sehat Bali</a>.
            </p>
          </div>
          <div>
            <h2>Product Highlight</h2>
          </div>
          <div>
            <h2>Blog Latest</h2>
          </div>
      </>
    );
  }
  
export default Home;