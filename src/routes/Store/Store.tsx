import { Nav } from "../../components/Nav";
import Title from "../../components/Title";
import Item from "../../components/Item";

function Store() {
  return (
    <>
        <Nav />
        <div className="pt-20">
            <Title title="Store" />
            <Item />
        </div>
    </>
  );
}

export default Store;
