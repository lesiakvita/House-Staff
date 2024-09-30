import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Promotions from "./components/Promotions";
import Testimonials from "./components/Testimonials";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Gray Chair",
          img: "gray_chair.jpg",
          desc: "A cozy, modern lounge chair, upholstered in a soft, light gray fabric, perfectly placed in a minimalist living room. The chair is accented with neutral-toned cushions, bringing a touch of warmth and comfort to the space. The sleek black wall art behind it contrasts sharply with the bright surroundings, adding depth and sophistication to the setting. Wooden flooring further enhances the natural aesthetic.",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Table",
          img: "table.jpg",
          desc: "A sleek, wooden desk with a simple chair stands against a white wall, illuminated by gentle natural light filtering through the window. The clean lines of the desk and minimal decor, including a decorative vase and modern lamp, give the space a refined, tranquil feel. The natural wood tones and soft lighting create a perfect balance between aesthetics and functionality.",
          category: "tables",
          price: "149.00",
        },
        {
          id: 3,
          title: "Sofa",
          img: "sofa.jpg",
          desc: "A comfortable olive-green sofa, styled with a mix of vibrant yellow and neutral pillows. The setting is bathed in sunlight, giving the space a warm and inviting ambiance. The sofa sits on a textured rug with geometric patterns, and the earthy tones of the room are complemented by a hanging plant in the background. Adding a touch of warmth and texture to the overall setting.",
          category: "sofas",
          price: "219.00",
        },
        {
          id: 4,
          title: "Lamp",
          img: "lamp.jpg",
          desc: "A modern, arched floor lamp with a metallic finish that provides an elegant, understated light source. Its slim, curved design extends gracefully over a round wooden dining table, complementing the soft, neutral decor of the room. The table is paired with simple wooden chairs and sits atop a white, plush rug, adding a cozy yet minimalist vibe to the space. A vase with greenery adds freshness to the scene.",
          category: "lamps",
          price: "88.00",
        },
        {
          id: 5,
          title: "White Chair",
          img: "white_chair.jpg",
          desc: "A stylish, contemporary chair with a white, curved seat and natural wooden armrests and legs. Its sleek design blends mid-century modern aesthetics with comfort, making it a statement piece in the room. The chair is placed against a gray wall, surrounded by large indoor plants that add a lush, organic feel to the minimalist setting. A neutral cushion on the seat enhances the chair's comfort and visual appeal.",
          category: "chairs",
          price: "69.99",
        },
        {
          id: 6,
          title: "Mirror",
          img: "mirror.jpg",
          desc: "A rectangular wall mirror with clean, sharp edges, mounted in a modern bathroom. The minimalist vanity features a floating wooden cabinet with two dark stone vessel sinks, accompanied by matte black faucets, creating a striking contrast against the pale gray walls. A small side table with decor and a plant adds subtle detail, enhancing the bathroom’s stylish, serene ambiance.",
          category: "mirrors",
          price: "49.99",
        },
      ],
      showFullItem: false,
      fullItem: {},
      isMainPageVisible: true,
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header
            orders={this.state.orders}
            onDelete={this.deleteOrder}
            toggleMainPageVisibility={this.toggleMainPageVisibility.bind(this)}
          />

          <Routes>
            <Route path="/" element={this.renderMainPage()} />
            <Route path="/about" element={<About />} />{" "}
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/promotions" element={<Promotions />} />
          </Routes>

          {this.state.showFullItem && (
            <ShowFullItem
              onAdd={this.addToOrder}
              onShowItem={this.onShowItem}
              item={this.state.fullItem}
            />
          )}

          <Footer />
        </div>
      </Router>
    );
  }

  renderMainPage() {
    return (
      <div
        className={`main-page ${
          this.state.isMainPageVisible ? "visible" : "hidden"
        }`}
      >
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
      </div>
    );
  }

  toggleMainPageVisibility(isVisible) {
    this.setState({ isMainPageVisible: isVisible });
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
