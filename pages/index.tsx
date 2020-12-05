import Link from 'next/link';

function HomePage(): JSX.Element {
  return (
    <div>
      <h1>Hello Next.js</h1>
      <p>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </p>
    </div>
  );
}

export default HomePage;
