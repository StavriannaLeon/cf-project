const ProductPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Product {params.id}</h1>
      {/* Product details will go here */}
    </div>
  );
};

export default ProductPage;
