import React from "react";
import Aside from "./AsideBar/Aside";
import Section_one from "./Section_one_main/Section_one";
import Categories from "./Categories/Categories";
import BestProducts from "./Best_product/BestProduct";
import SectionFour from "./Section_four_main/SectionFour";
import ExploreProduct from "./Explore_product/ExploreProduct";
import NewArrival from "./NewArrivalBar/NewArrival";

function Home() {
  return (
    <div>
      <Aside />
      <Section_one />
      <Categories />
      <BestProducts />
      <SectionFour />
      <ExploreProduct />
      <NewArrival />

    </div>
  );
}

export default Home;
