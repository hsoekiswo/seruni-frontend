import { Nav } from "../../components/Nav";
import { Link } from "react-router";
import Title from "../../components/Title";
import ItemList from "../../components/Item";

function Store() {
  return (
    <>
        <Nav />
        <div className="pt-20">
            <Title title="Store" />
            <Link to="/product">
              <ItemList />
            </Link>
        </div>
    </>
  );
}

export default Store;
