import Link from 'next/link';

function AboutPage(): JSX.Element {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href='/'>
          <a>Go home</a>
        </Link>
      </p>
    </div>
  );
}

export default AboutPage;
