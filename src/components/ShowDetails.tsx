import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ShowDetails.css';

interface Show {
  id: string;
  title: string;
  description: string;
  seasons: Season[];
  genres: string[];
}

interface Season {
  id: string;
  title: string;
  episodes: Episode[];
}

interface Episode {
  id: string;
  title: string;
  mp3Url: string;
  duration: number;
}

const ShowDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [show, setShow] = useState<Show | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then(response => response.json())
      .then(data => {
        setShow(data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch show details');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!show) {
    return <div>No show found</div>;
  }

  return (
    <div className="show-details">
      <h1>{show.title}</h1>
      <p>{show.description}</p>
      <h2>Seasons</h2>
      {show.seasons.map(season => (
        <div key={season.id}>
          <h3>{season.title}</h3>
          <ul>
            {season.episodes.map(episode => (
              <li key={episode.id}>
                {episode.title} - {episode.duration} seconds
                <audio controls>
                  <source src={episode.mp3Url} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ShowDetails;
