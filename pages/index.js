import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Smart Yoga Products</h1>
      <p>Discover the best smart yoga gear for your practice.</p>
      <Link href="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
}
