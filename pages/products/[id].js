import { useRouter } from 'next/router';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product Detail for Product ID: {id}</h1>
      <p>More product details coming soon...</p>
    </div>
  );
}
