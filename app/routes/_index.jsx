//View Models
import HorizontalProductViewModel from "../viewmodel/HorizontalProductViewModel";
import ProductViewModel from "../viewmodel/ProductViewModel";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <HorizontalProductViewModel />
      <ProductViewModel />
    </>
  );
}
