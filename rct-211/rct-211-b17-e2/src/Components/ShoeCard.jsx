import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";
import styled from "styled-components";
import { getShoes } from "../Redux/AppReducer/action";
const ShoeCard = () => {
  let shoeId = null;
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const shoes = useSelector((state) => state.app.shoes);

  useEffect(() => {
    let getShoesParams = {
      params: {
        category: searchParams.getAll("category"),
      },
    };
    dispatch(getShoes(getShoesParams));
  }, [searchParams, dispatch]);
  console.log(shoes);
  return (
    <>
      <div data-cy={`shoe-card-wrapper-${shoeId}`}>
        {shoes.length > 0 &&
          shoes.map((e) => (
            <ShoesWrapper key={e.id}>
              <div>
                <img
                  data-cy="shoe-card-image"
                  width="200px"
                  src={e.image}
                  alt=""
                />
              </div>

              <Link to={`/shoes/${e.id}`}>
                <div data-cy="shoe-name">{e.name}</div>
                <div data-cy="shoe-category">{e.category}</div>
              </Link>
            </ShoesWrapper>
          ))}
      </div>
    </>
  );
};

export default ShoeCard;

const ShoesWrapper = styled.div`
  display:grid;
  border: 1px solid red;
  padding: 5px;
  width: 300px;
`;
