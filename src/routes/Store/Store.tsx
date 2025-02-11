import { Nav } from "../../components/Nav";
import { Link } from "react-router";
import Title from "../../components/Title";
import ItemList from "../../components/Item";
import Search from "../../components/Search";

function Store() {
  return (
    <>
        <Nav />
        <div className="pt-20 flex flex-col">
          <Title title="Store" />
          <div className="mx-16 my-2 flex flex-col justify-between">
              <div className="">
                <Search />
              </div>
              <div className="pt-4">
                <form>
                  <div className="flex flex-row">
                    <div>
                      <input type="checkbox" hidden>
                      </input>
                      <label className="form-label inline">
                        <button className="mr-3 px-2 py-1 border rounded-full">
                          Workshop
                        </button>
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" hidden>
                      </input>
                      <label className="form-label inline">
                        <button className="mr-3 px-2 py-1 border rounded-full">
                          Class
                        </button>
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" hidden>
                      </input>
                      <label className="form-label inline">
                        <button className="mr-3 px-2 py-1 border rounded-full">
                          Learning Resource
                        </button>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
          </div>
          <div>
              <Link to="/product">
                <ItemList />
              </Link>
          </div>
        </div>
    </>
  );
}

export default Store;
