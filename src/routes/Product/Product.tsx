import Title from "../../components/Title";
import { Nav } from "../../components/Nav";

const image = "https://devorss.com/cdn/shop/files/9780875169125_c039adc2-c6ee-4a20-86c1-4f35871552b9.jpg?v=1684360516&width=800";
const name = "Touch For Health - The Complete Edition";
const price = "Rp 300.000"

function Product() {
    return (
      <>
        <Nav />
        <div className="pt-20">
          <Title title='Store' />
          <div className="generic-container">
            <div className="w-1/2">
              <img src={image} className="item-img py-16 pl-16 pr-8"></img>
            </div>
            <div className="w-1/2 py-16 pr-16 pl-8">
              <h2>{name}</h2>
              <br/>
              <h3>{price}</h3>
              <br/>
              <button className="form-button rounded-full">Register / Login to Buy</button>
              <br/>
              <br/>
              <b>
                <p>Description</p>
              </b>
              <br/>
              <p>
                The Fundamental text of Energy Kinesiology for balancing muscles, posture, and “Chi” (Life Energy)
                <br/>
                <br/>
                This is a complete revision and expansion of the fundamental text of Energy Kinesiology.  Includes complete International Kinesiology College curriculum, plus Dr. Thie’s developments from 1990-2005. Integrates Metaphors of Muscles, Meridians and the Five Elements.
                <br/>
                <br/>
                With over a million copies in print since 1973, “Touch for Health” started a phenomenon that has flourished worldwide and contributed to the emerging profession of Energy Kinesiology, Energy Medicine and Energy Psychology. TFH has been taught in over 100 countries and 23 languages to help balance Posture, Attitude and Vital Energy to develop Wellness, Health Maintenance, Prevention, Relief from Stress, Aches & Pains and enjoyment of vibrant health.
                <br/>
                <br/>
                All new full color illustrations and photographs of all 42 muscle tests, in lying and standing positions
                Color-coded reference tabs
                Reference section includes a 2-page spread for each muscle including testing, origin/insertion, spinal reflexes, neurolymphatics, neurovasculars, and meridian
                Acupressure holding points for the 12 major Meridians
                The Complete Edition includes an extensive introduction to simple self-help energizers, Emotional Stress Release & application of muscle testing and reflex points.  Following the 42-muscle reference section, Chinese Five Element energy patterns are explained, as well as additional advanced applications such as Gait Balancing, Posture Analysis and Balancing, Reactive Muscle Reset, and pain control, and more!
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Product;