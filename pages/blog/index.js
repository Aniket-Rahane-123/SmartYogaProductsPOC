import Link from 'next/link';

export default function Blog() {
  const sampleBlogs = [
    { slug: 'yoga-benefits', title: '5 Benefits of Yoga' },
    { slug: 'yoga-tips', title: 'Top 10 Yoga Tips for Beginners' },
  ];

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {sampleBlogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
