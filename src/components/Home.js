import React from 'react';
import PageLayout from './PageLayout';
import BookRows from './BookRows';

function Home() {
  return (
    <PageLayout title="Welcome to Bookmarkd 🤓📚">
      <p>
        We aim to provide a free, open source platform to read, and eventually upload books.
        You can browse our library of available books, and once you've opened a book it will be available offline for you to read later.
      </p>
      <h2>Books</h2>
      <BookRows />
    </PageLayout>
  );
}

export default Home;
