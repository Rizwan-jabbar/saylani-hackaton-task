import { useEffect, useState } from "react";
import { fetchProducts } from "../apis/productsApi/productsApi";
import ProductsList from "./productsList";
import ProductsCategory from "./prosuctsCategory";
import {DotLoader} from 'react-spinners'

function Products() {
  const [products, setProducts] = useState([]); // filtered or full
  const [allProducts, setAllProducts] = useState([]); // original data
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setAllProducts(data); // ✅ original data safe
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <p className="h-screen flex items-center justify-center"><DotLoader /></p>;
  if (!products.length) return <p>No products found.</p>;

  // ✅ Categories (Unique values)
  const categories = ["All", ...new Set(allProducts.map((item) => item.category))];

  // ✅ Pagination Logic
  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  // ✅ Filter Products By Category
  const filterByCategory = (cat) => {
    setCategory(cat);

    if (cat === "All") {
      setProducts(allProducts);
    } else {
      const filtered = allProducts.filter((item) => item.category === cat);
      setProducts(filtered);
    }
  };

  return (
    <>
      <ProductsCategory>
        <h4 className="uppercase font-bold mt-4 text-center text-[20px]">shop by category</h4>
        <div className="flex flex-col lg:flex-row justify-center px-1 my-5 gap-2">
        {categories.map((c, index) => (
            <p
            key={index}
            onClick={() => filterByCategory(c)}
            className={`cursor-pointer px-2 py-1 bg-gray-200 text-[13px] w-32 text-center  ${
                category === c ? "text-white bg-green-300 font-bold" : ""
            }`}
            >
            {c}
          </p>
        ))}
        </div>
      </ProductsCategory>

      <div className="p-4">
        <ProductsList currentProducts={currentProducts} />

        {/* Pagination Controls */}
        <div className="flex items-center justify-center mt-6 gap-4">
          <button
            onClick={handlePrev}
            className="p-2 border rounded disabled:opacity-50"
            disabled={currentPage === 1}
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>

          <span className="font-medium">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            className="p-2 border rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
