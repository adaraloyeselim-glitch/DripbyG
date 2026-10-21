import { Link } from "react-router-dom";

const featuredProducts = [
    { id: 1, image: "/first.jpg", name: "AirMax 2025", price: 80 },
    { id: 2, image: "/second.jpg", name: "AirMax Pro", price: 230 },
    { id: 4, image: "/sixth.jpg", name: "AirMax Pro", price: 230 },
];

function Homepage({ addToCart }) {
    return (
        <main className="home-page">
            <section className="home-hero">
                <div className="home-hero-copy">
                    <p className="home-eyebrow">Drip by G · Style for every day</p>
                    <h1>Find your next favorite.</h1>
                    <p className="home-hero-description">
                        Fresh sneakers and streetwear made to bring your everyday look
                        together.
                    </p>
                    <Link to="/shop" className="home-shop-link">Shop the collection</Link>
                </div>
                <div className="home-hero-image">
                    <img src="/first.jpg" alt="White and gray sneakers from the collection" />
                    <span>Everyday sneakers, ready for anything</span>
                </div>
            </section>

            <section className="home-featured" aria-labelledby="featured-title">
                <div className="home-section-heading">
                    <p className="home-eyebrow">Picked for you</p>
                    <h2 id="featured-title">Featured Products</h2>
                    <hr />
                </div>
                <div className="home-product-grid">
                    {featuredProducts.map((product) => (
                        <article className="home-product-card" key={product.id}>
                            <Link
                                to="/shop"
                                className="home-product-image"
                                aria-label={`Browse ${product.name}`}
                            >
                                <img src={product.image} alt={product.name} />
                            </Link>
                            <div className="home-product-details">
                                <p className="home-product-label">Drip by G</p>
                                <h3>{product.name}</h3>
                                <p className="home-product-price">${product.price.toFixed(2)}</p>
                                <button
                                    type="button"
                                    className="home-add-button"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
                <Link to="/shop" className="home-view-all">View all products <span aria-hidden="true">→</span></Link>
            </section>
        </main>
    );
}

export default Homepage;
