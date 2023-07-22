import React, { Component } from "react";
import { Cards } from "./components/Cards";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Cards
          img="https://www.minutemaid.com/content/dam/nagbrands/us/minutemaidus/en/products/variety-juices-and-more/jtg/JTG-PCP-Thumbnails-peachMango.png"
          title="Peach Mango"
          description="Our delicious variety of juice beverages are real juice made for
          real people"
          price="$ 4.99"
          off=" -0 %"
        />
        <Cards
          img="https://www.minutemaid.com/content/dam/nagbrands/us/minutemaidus/en/products/variety-juices-and-more/jtg/JTG-PCP-Thumbnails-tropicalBlend.png"
          title="Topical Blend"
          description="Our delicious variety of juice beverages are real juice made for real people, and are now made with 100% vitamin C. "
          price="$ 4.32"
          off=" -5 %"
        />
        <Cards
          img="https://www.minutemaid.com/content/dam/nagbrands/us/minutemaidus/en/products/variety-juices-and-more/mixed-berry/minute-maid-mixed-berry-10-oz-bottle-1.png"
          title="Mined Berry"
          description="Get mixed up in something good. Minute Maid Mixed Berry blends apple, grape, raspberry and blackberry flavors for a sundry of great taste."
          price="$ 3.99"
          off=" -25 %"
        />
        <Cards
          img="https://www.minutemaid.com/content/dam/nagbrands/us/minutemaidus/en/products/variety-juices-and-more/jtg/JTG-PCP-Thumbnails-appleJuice.png"
          title="Apple Juice"
          description="Our delicious variety of juice beverages are real juice made for real people, and are now made with 100% vitamin C. Enjoy Minute Maid Apple Juice"
          price="$ 3.42"
          off=" -5 %"
        />
        <Cards
          img="https://www.minutemaid.com/content/dam/nagbrands/us/minutemaidus/en/products/variety-juices-and-more/jtg/JTG-PCP-Thumbnails-cranAppleRaspberry.png"
          title="Apple Raspberry"
          description="Our delicious variety of juice beverages are real juice made for real people, and are now made with 100% vitamin C."
          price="$ 4.21"
          off=" -0 %"
        />
        <Cards
          img="https://www.minutemaid.com/content/dam/nagbrands/us/minutemaidus/en/products/variety-juices-and-more/jtg/JTG-PCP-Thumbnails-pineappleOrange.png"
          title="Pineapple Orange"
          description="Refresh your day with a 100% juice blend of pineapple, orange and apple juice with 100% vitamin C."
          price="$ 3.80"
          off=" -5 %"
        />
      </div>
    );
  }
}

export default App;
