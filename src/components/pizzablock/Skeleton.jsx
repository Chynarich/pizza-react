import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="127" r="125" />
    <rect x="17" y="266" rx="8" ry="8" width="238" height="27" />
    <rect x="17" y="306" rx="11" ry="11" width="239" height="75" />
    <rect x="8" y="402" rx="7" ry="7" width="72" height="31" />
    <rect x="142" y="397" rx="20" ry="20" width="125" height="44" />
  </ContentLoader>
);

export default Skeleton;
