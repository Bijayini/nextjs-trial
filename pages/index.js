import App from '../src/App';
import fetch from 'isomorphic-unfetch'
import Link from 'next/link';

const url = 'https://api.myjson.com/bins/13r402';

const Index = props => (
  <div>
    <button onClick={() => alert('hi')}>dfghjk</button>
    <Link href="/about"> About Us</Link>
    <App movies={props.movies} />
  </div>
);

Index.getInitialProps = async function() {
  const res = await fetch(url);
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data}`);

  return { movies: data };
};

export default Index;
