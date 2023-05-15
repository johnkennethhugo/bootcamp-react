import Marquee from 'react-fast-marquee';

function MarqueeHeader(){
    return(
        <div className="marquee-header">
          <Marquee speed="97" gradient={false}>
            5% DISCOUNT ON ALL ESPRESSO BAR DRINKS!!! BUY NOW!
          </Marquee>
        </div>
    );
}

export default MarqueeHeader;