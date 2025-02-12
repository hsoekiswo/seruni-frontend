import { useEffect, useState } from "react";
import { Link } from "react-router";
import ItemList from "@components/product/Item";
import CheckTags from "@components/search/CheckTags";
import Search from "@components/search/Search";
import Title from "@components/shared/Title";
import { Nav } from "@components/shared/Nav";
import { ItemType, SearchType, SearchTagsType } from "@schema/index";

function Store() {
  const [ formData, setFormData ] = useState<SearchType>({
    keyword: ''
  });
  const [ formTags, setTags ] = useState({
    workshop: false,
    class: false,
    'learning-resources': false,
  });
  const [items, setItems] = useState<ItemType[]>([]);
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

  const toggleClick = (
    e: React.MouseEvent,
    setFormData: React.Dispatch<React.SetStateAction<SearchTagsType>>,
  ) => {
      e.preventDefault();

      const name = e.target.dataset.name;
      
      setFormData((prev) => ({
          ...prev,
          [name]: !prev[name]
      }))
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
                  toggleClick={toggleClick}
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
