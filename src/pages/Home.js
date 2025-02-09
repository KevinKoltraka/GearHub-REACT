import { Navbar, Footer, FeaturedCategories } from "../components/allComponents";
import "../styles/pages/home.css"
import { GetFeaturedCategories } from "../services/getFeaturedCategories";
import { Link } from "react-router-dom";

export const Home = () => {

    return (
        <>
            <Navbar />
            <div className="Home">
                {/* Header Image */}
                <header className="hero-header">
                    <div className="header-content flex-column-center">
                        <h1 className="banner-title lt-sp-2 mg-top-md text-center">
                            Where Performance Meets Passion
                        </h1>
                        <Link
                            to="/products"
                            className="btn btn-solid btn-shop-now mg-lg btn-grad"
                        >
                            Shop Now
                        </Link>
                    </div>
                </header>
                <h2 className="text-center mg-top-md">
                    Kategoritë</h2>
                <div className="title-underline"></div>
                <div className="categories">
                    {GetFeaturedCategories().map((item) =>
                        <FeaturedCategories key={item._id} imgSrc={item.imgSrc} categoryTitle={item.categoryName} />
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}