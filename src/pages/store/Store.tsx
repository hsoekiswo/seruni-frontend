import { Link } from "react-router";
import ItemList from "@components/product/ItemDisplay";
import CheckTags from "@components/search/CheckTags";
import Search from "@components/search/Search";
import Title from "@components/shared/Title";
import { Nav } from "@components/shared/Nav";
import useDisplayItems from "@utils/display/useDisplayItems";

function Store() {
  const {
    items,
    loading,
    formData,
    setFormData,
    formTags,
    setTags,
    handleSearchSubmit,
    toggleClick,
  } = useDisplayItems();

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
