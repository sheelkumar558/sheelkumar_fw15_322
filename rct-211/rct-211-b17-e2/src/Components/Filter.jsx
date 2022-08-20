import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const [searchParams, setSearchparams] = useSearchParams();

  const urlCategory = searchParams.getAll("category");

  const [category, setCategory] = useState(urlCategory || []);

  const handleFilter = (e) => {
    const option = e.target.value;

    const newcategory = [...category];
    if (category.includes(option)) {
      newcategory.splice(newcategory.indexOf(option), 1);
    } else {
      newcategory.push(option);
    }
    setCategory(newcategory);
  };

  useEffect(() => {
    if (category) {
      let params = {};
      category && (params.category = category);

      setSearchparams(params);
    }
  }, [category, setSearchparams]);
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input
            type="checkbox"
            value="Sneakers"
            onChange={handleFilter}
            defaultChecked={category.includes("Sneakers")}
          />
          <label>Sneakers</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Loafers"
            onChange={handleFilter}
            defaultChecked={category.includes("Loafers")}
          />
          <label>Loafers</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Canvas"
            onChange={handleFilter}
            defaultChecked={category.includes("Canvas")}
          />
          <label>Canvas</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Boots"
            onChange={handleFilter}
            defaultChecked={category.includes("Boots")}
          />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
