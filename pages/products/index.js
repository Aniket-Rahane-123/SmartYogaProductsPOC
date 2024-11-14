import Link from 'next/link';

export default function Products() {
  const sampleProducts = [
    { id: 1, name: 'Smart Yoga Mat', price: '$50' },
    { id: 2, name: 'Yoga Tracker Band', price: '$30' },
  ];

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {sampleProducts.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
