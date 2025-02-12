import { useEffect, useState } from "react";
import { Nav } from "@components/shared/Nav";
import { Link } from "react-router";
import Title from "@components/shared/Title";
import ItemList from "@components/product/Item";
import Search from "@components/search/Search";
import CheckTags from "@components/search/CheckTags";
import { SearchType } from "@schema/index";
import { ItemProps } from "@schema/index";

function Store() {
  const [ formData, setFormData ] = useState<SearchType>({
    keyword: ''
  });
  const [ formTags, setTags ] = useState({
    workshop: false,
    class: false,
    'learning-resource': false,
  });
  const [items, setItems] = useState<Pick<ItemProps, "id" | "name" | "image" | "price">[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = async() => {
    setLoading(true);
    const path = '/products'
    let URL = 'https://seruni-backend-production.up.railway.app' + path;
    // Convert to uppercase
    const selectedTags = Object.keys(formTags)
      .filter(tag => formTags[tag])
      .map(tag =>
        tag
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
    );
    if (formData.keyword) {
      URL += `?search=${formData.keyword}`;
      if (selectedTags.length > 0) {
        URL += `&tags=${selectedTags.join(',')}`;
      }
    } else {
      if (selectedTags.length > 0) {
        URL += `?tags=${selectedTags.join(',')}`;
      }
    }

    try {
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [formData, formTags]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
                />
              </div>
              <div className="pt-4">
                <CheckTags
                  formData={formTags}
                  setFormData={setTags}
                  onTagsClick={handleSearchSubmit}
                />
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
