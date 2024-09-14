import { useAppSelector } from "@/hooks";
import { CartItemsList, SectionTile, CartTotals } from "@/components";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Cart() {
  const user = useAppSelector((state) => state.userState.user);
  const numItemsInCart = useAppSelector(
    (state) => state.cartState.numItemsInCart
  );
  if (numItemsInCart === 0) {
    return <SectionTile text="Empty Cart" />;
  }
  return (
    <>
      <SectionTile text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Button asChild className="mt-8 w-full">
              <Link to="/checkout">Proceed To Checkout</Link>
            </Button>
          ) : (
            <Button asChild className="mt-8 w-full">
              <Link to="/login">Proceed To Login</Link>
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
export default Cart;
