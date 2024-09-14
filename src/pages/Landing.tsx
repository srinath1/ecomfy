import { Hero, FeaturedProducts } from "../components";
import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { customFetch, ProductsResponse } from "@/utils";

const url = "/products?featured=true";
export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  return { ...response.data };
};

const Landing = () => {
  const result = useLoaderData() as ProductsResponse;
  console.log(result);
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
};

export default Landing;
