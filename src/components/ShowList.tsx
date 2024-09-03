import React, { useEffect, useState } from 'react';
import ShowCard from './ShowCard';
import '../styles/ShowList.css';

interface Preview {
  id: string;
  title: string;
  description: string;
  genres: string[];
  imageUrl: string;
}

const ShowList: React.FC = () => {
  const [shows, setShows] = useState<Preview[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app')
      .then(response => response.json())
      .then(data => {
        const sortedShows = data.sort((a: Preview, b: Preview) => a.title.localeCompare(b.title));
        setShows(sortedShows);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch shows');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="show-list">
      <h1>Available Shows</h1>
      {shows.map(show => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
};

export default ShowList;
