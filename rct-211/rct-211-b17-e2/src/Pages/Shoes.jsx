import React from "react";
import styled from "styled-components";
import Filter from "../Components/Filter";
import ShoeCard from "../Components/ShoeCard";

const Shoes = () => {
  return (
    <div style={{ dispaly: "flex", flexDirection: "row" }}>
       <ShoesPageWrapper>
       <FilterSortWrapper>
       <Filter />
       </FilterSortWrapper>
      <div>
        {/* Map through the shoes list here using ShoeCard Component */}
        
      </div>
        <ShoeslistWrapper>
            <ShoeCard/>
        </ShoeslistWrapper>
       </ShoesPageWrapper>
    </div>
  );
};

export default Shoes;

const ShoesPageWrapper = styled.div`
  display: flex;
`;
const FilterSortWrapper = styled.div`
  display:flex ;
  width: 300px;
  border: 1px solid red;
`;
const ShoeslistWrapper = styled.div`
  border: 1px solid red;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, max-content));
  grid-gap:16px ;
  justify-content: center;
  padding: initial ;
`;