import { useEffect, useState } from "react";
import { Nav } from "../../components/Nav";
import { Link } from "react-router";
import Title from "../../components/Title";
import ItemList from "../../components/Item";
import Search from "../../components/Search";
import CheckTags from "../../components/CheckTags";
// import { handleSubmit } from "../../utils/form";
import { SearchType } from "../../schema";
import { ItemProps } from "../../schema";

function Store() {
  const [ formData, setFormData ] = useState<SearchType>({
    keyword: ''
  });
  const [items, setItems] = useState<Pick<ItemProps, "id" | "name" | "image" | "price">[]>([]);
  const [loading, setLoading] = useState(false);
  // console.log('formData.keyword');
  // console.log(formData.keyword);

  const fetchItems = async() => {
    setLoading(true);
    const path = '/products'
    let URL = 'https://seruni-backend-production.up.railway.app' + path;
    if (formData.keyword) {
      URL += `?search=${formData.keyword}`
    }

    try {
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      // console.log('data');
      // console.log(JSON.stringify(data));
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh
    fetchItems();
  };

  return (
    <>
        <Nav />
        <div className="pt-20 flex flex-col">
          <Title title="Store" />
          <div className="mx-16 my-2 flex flex-col justify-between">
              <div className="">
                <Search
                  formData={formData}
                  setFormData={setFormData}
                  onSubmit={handleSearchSubmit}
                  // onSubmit={(e) => handleSubmit(e, URL, params)}
                />
              </div>
              <div className="pt-4">
                <CheckTags />
              </div>
          </div>
          <div>
              <Link to="/product">
                <ItemList
                  items={items}
                  loading={loading}
                />
              </Link>
          </div>
        </div>
    </>
  );
}

export default Store;
