import React from "react";
import CardList from "../component/CardList";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
         <Link to="/addCard">
              <button className="addCardBtn">Add Card</button>
            </Link>
      <CardList />
    </div>
  );
}

export default Home;
