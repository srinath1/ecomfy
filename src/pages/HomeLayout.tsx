import { Header } from "@/components";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <nav>
        <Navbar />
      </nav>
      <div className="align-element py-20">
        {isPageLoading ? <Loading /> : <Outlet />}
      </div>
    </>
  );
}
export default HomeLayout;
