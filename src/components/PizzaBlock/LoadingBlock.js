import React from 'react';
import ContentLoader from 'react-content-loader';
function LoadingBlock() {
  return (
    <ContentLoader
      className="pizzaBlock"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#ededed"
      foregroundColor="#e6e6e6">
      <circle cx="140" cy="142" r="120" />
      <rect x="0" y="289" rx="6" ry="6" width="280" height="20" />
      <rect x="0" y="321" rx="6" ry="6" width="280" height="84" />
      <rect x="4" y="423" rx="6" ry="6" width="88" height="31" />
      <rect x="145" y="421" rx="19" ry="19" width="133" height="37" />
    </ContentLoader>
  );
}

export default LoadingBlock;
