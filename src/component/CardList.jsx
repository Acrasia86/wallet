import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCard } from "../redux/cardSlice";

const CardList = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cardsData);

  return (
    <div>
      <div>
        <h1 style={{color: 'white', marginBottom: '50px'}}>Active Card</h1>
        {cards.slice(0, 1).map((card, i) => {
          return (
            <div key={i}>
              <Card card={card} />
            </div>
          );
        })}
      </div>
      <div>
        <div>
          <h2 style={{color: 'white', marginTop: '30px', marginBottom: '30px'}}>Unactive Cards</h2>
          {cards.slice(1, 4).map((card, i) => {
            return (
              <div key={i}>
                <div onClick={() => dispatch(setActiveCard(card))}>
                  <Card card={card} />
                </div>
               
              </div>
            );
          })}
        </div>
        {cards.length <= 3 ? null : <div style={{color:'red'}}>Can't add more cards</div>}
      </div>
   
    </div>
  );
};
export default CardList;
