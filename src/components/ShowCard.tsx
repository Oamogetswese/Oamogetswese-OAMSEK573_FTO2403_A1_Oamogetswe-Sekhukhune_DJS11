import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ShowCard.css';

interface Preview {
  id: string;
  title: string;
  description: string;
  genres: string[];
  imageUrl: string;
}

interface ShowCardProps {
  show: Preview;
}

const ShowCard: React.FC<ShowCardProps> = ({ show }) => {
  return (
    <div className="show-card">
      <img src={show.imageUrl} alt={show.title} />
      <h2>{show.title}</h2>
      <p>{show.description}</p>
      <Link to={`/show/${show.id}`}>View Details</Link>
    </div>
  );
};

export default ShowCard;
