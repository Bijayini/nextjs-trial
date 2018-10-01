import App from '../src/App';

import Link from 'next/link';

export default () => (
  <div>
    <button onClick={() => alert('hi')}>dfghjk</button>
    <Link href="/about"> About Us</Link>
    <App />
  </div>
);
