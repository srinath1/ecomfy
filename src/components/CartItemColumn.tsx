import { formatAsKrones } from "@/utils";
import { useAppDispatch } from "@/hooks";
import { Button } from "./ui/button";
import { editItem, removeItem } from "@/features/cart/cartSlice";
import SelectProductAmount from "./SelectproductAmount";
import { Mode } from "./SelectproductAmount";

export const FirstColumn = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  return (
    <img
      src={image}
      alt={title}
      className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
    />
  );
};
export const SecondColumn = ({
  title,
  company,
  productColor,
}: {
  title: string;
  company: string;
  productColor: string;
}) => {
  return (
    <div className="sm:ml-4 md:ml-12 sm:w-48">
      <h3 className=" capitalize font-medium">{title}</h3>
      <h4 className="mt-2 capitalize text-sm">{company}</h4>
      <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
        color:{" "}
        <span
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            backgroundColor: productColor,
          }}
        ></span>
      </p>
    </div>
  );
};
export const ThirdColumn = ({
  amount,
  cartID,
}: {
  amount: number;
  cartID: string;
}) => {
  const dispatch = useAppDispatch();
  const removeFromCart = () => {
    dispatch(removeItem(cartID));
  };
  const setAmount = (value: number) => {
    dispatch(editItem({ cartID, amount: value }));
  };
  return (
    <div>
      <SelectProductAmount
        amount={amount}
        setAmount={setAmount}
        mode={Mode.CartItem}
      />
      <Button variant="link" className="-ml-4" onClick={removeFromCart}>
        remove
      </Button>
    </div>
  );
};
export const FourthColumn = ({ price }: { price: string }) => {
  return <p className="font-medium sm:ml-auto">{formatAsKrones(price)}</p>;
};
