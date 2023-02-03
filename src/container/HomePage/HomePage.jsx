import React from 'react';

import {
  ProductCategory,
  Hero,
  FeaturedProducts,
  PotteryCollection,
  Shopping,
  NewsUpdates,
  GoToTop,
} from '../../components';

const Homepage = () => {
  return (
    <main className="content">
      <section>
        <Hero />
      </section>

      <section className="p-TopBottom">
        <ProductCategory />
      </section>

      <section className="p-TopBottom borderTop">
        <FeaturedProducts />
      </section>

      <section className="p-TopBottom borderTop">
        <PotteryCollection />
      </section>

      <section className="p-TopBottom">
        <Shopping />
      </section>

      <section className="p-TopBottom">
        <NewsUpdates />
      </section>
      <GoToTop />
    </main>
  );
};

export default Homepage;
