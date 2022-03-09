import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import cardSlice, { addNewCard } from "../redux/cardSlice";

export const AddCard = ({ card }) => {
  let randomNum = Math.random(1, 100000);
  const newCard = {
    id: randomNum,
    cardName: ``,
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cvv: "",
    bank: "",
  };
  const dispatch = useDispatch();
  const history = useHistory();

  const [cards, setcards] = useState(newCard);
  const creditCard = useSelector((state) => state.cardsData);


  const handleChange = (e) => {
    console.log('name', e.target.name);
    console.log('value', e.target.value);
    const nextCard = {
      ...cards,
      [e.target.name]: e.target.value,
    };
    
      setcards(nextCard);
    
  };

  const handleAddCard = (e) => {
    e.preventDefault();
    history.push("/");
    if (creditCard.cards.length <= 3) {
      dispatch(addNewCard(cards));
      setcards(newCard);
    }
  
  };

  return (
    <div>
    { cards.bank === 'Visa' ?
<div class="card">
  
  <div class="card__front card__part">
   
    <p style={{color: 'white'}} class="card__front-logo card__logo">{cards.bank}</p>
    <br />
    <img src="https://w7.pngwing.com/pngs/460/694/png-transparent-iphone-computer-icons-integrated-circuits-chips-subscriber-identity-module-sim-cards-electronics-text-rectangle.png" class="card__front-square card__square" /> 
    <p class="card_numer">{cards.cardNumber}</p>
    <div class="card__space-75">
      <span class="card__label">Card holder</span>
      <p class="card__info">{cards.cardName}</p>
    </div>
    <div class="card__space-25">
      <span class="card__label">Expires</span>
            <p class="card__info">{cards.expireMonth}/{cards.expireYear}</p>
    </div>
  </div>
  
  <div class="card__back card__part">
    <div class="card__black-line"></div>
    <div class="card__back-content">
      <div class="card__secret">
        <p class="card__secret--last">{cards.ccv}</p>
      </div>
      
    </div>
  </div>

 
  </div>
  :
  cards.bank === 'Mastercard' ?
  <div class="cardTwo">
  
  <div class="card__frontTwo card__partTwo">
   
    <p style={{color: 'white'}} class="card__front-logoTwo card__logoTwo">{cards.bank}</p>
    <br />
    <img src="https://w7.pngwing.com/pngs/460/694/png-transparent-iphone-computer-icons-integrated-circuits-chips-subscriber-identity-module-sim-cards-electronics-text-rectangle.png" class="card__front-squareTwo card__squareTwo" /> 
    <p class="card_numerTwo">{cards.cardNumber}</p>
    <div class="card__space-75Two">
      <span class="card__labelTwo">Card holder</span>
      <p class="card__infoTwo">{cards.cardName}</p>
    </div>
    <div class="card__space-25Two">
      <span class="card__labelTwo">Expires</span>
            <p class="card__infoTwo">{cards.expireMonth}/{cards.expireYear}</p>
    </div>
  </div>
  
  <div class="card__backTwo card__partTwo">
    <div class="card__black-lineTwo"></div>
    <div class="card__back-contentTwo">
      <div class="card__secretTwo">
        <p class="card__secret--lastTwo">{cards.ccv}</p>
      </div>
      
    </div>
  </div>

 
  </div>
 : cards.bank === "American express" ? 

 <div class="cardThree">
  
  <div class="card__frontThree card__partThree">
   
    <p style={{color: 'white'}} class="card__front-logoThree card__logoThree">{cards.bank}</p>
    <br />
    <img src="https://w7.pngwing.com/pngs/460/694/png-transparent-iphone-computer-icons-integrated-circuits-chips-subscriber-identity-module-sim-cards-electronics-text-rectangle.png" class="card__front-squareThree card__squareThree" /> 
    <p class="card_numerThree">{cards.cardNumber}</p>
    <div class="card__space-75Three">
      <span class="card__labelThree">Card holder</span>
      <p class="card__infoTwo">{cards.cardName}</p>
    </div>
    <div class="card__space-25Three">
      <span class="card__labelThree">Expires</span>
            <p class="card__infoThree">{cards.expireMonth}/{cards.expireYear}</p>
    </div>
  </div>
  
  <div class="card__backThree card__partThree">
    <div class="card__black-lineThree"></div>
    <div class="card__back-contentThree">
      <div class="card__secretThree">
        <p class="card__secret--lastThree">{cards.ccv}</p>
      </div>
      
    </div>
  </div>

 
  </div>
  : <div></div>
  }
    <h1 style={{color: 'white', paddingBottom: '30px'}}>Add card</h1>
  <div className='ermContainer'>
  <label className='labels' htmlFor="bank">Vendor</label>
  <select name="bank" onChange={handleChange} className="form-control form-control-sm " id='americanExpress'>
        <option>Choose a card vendor</option>
        <option value="American express" id='americanExpress'>American express</option>
        <option value="Visa" id='visa'>Visa</option>
        <option value="Mastercard" id='mastercard'>Mastercard</option>
</select>
  <div style={{marginTop: '15px'}} className="form-group">
    <label className='labels' htmlFor="cardNumber">Card number</label>
    <input type="text" onChange={handleChange} className="form-control cardInput" id="cardNumber" name="cardNumber" placeholder="xxxx xxxx xxxx xxxx" />
  </div>
  <div style={{display: 'flex', flexDirection: 'row'}}>
  <div style={{marginRight: '10px'}} className="form-group">
    <label className='labels' htmlFor="firstName">Full name</label>
    <input onChange={handleChange} name="cardName" type="text" className="form-control cardInput" id="cardName" placeholder="Full name" />
  </div>
  </div>
  <div className='validContainer'>
  <div style={{marginRight: '10px'}} className="form-group">
    <label className='labels' htmlFor="validThruMonth">Month</label>
    <input onChange={handleChange} name="expireMonth" type="number" className="form-control cardInput" id="expireMonth" placeholder="00" />
  </div>
  <div style={{marginRight: '10px'}} className="form-group">
    <label className='labels' htmlFor="validThruYear">Year</label>
    <input onChange={handleChange} name="expireYear"  type="number" className="form-control cardInput" id="expireYear" placeholder="00" />
  </div>
  <div className="form-group">
    <label className='labels' htmlFor="ccv">ccv</label>
    <input onChange={handleChange} name="ccv" type="number" className="form-control cardInput" id="ccv" placeholder="xxx" />
  </div>
  </div>
  <Link to='/'>
  <button style={{border: '1px solid #efff00', marginRight: '50px'}} onClick={handleAddCard} className="addCardBtn">Add card</button>
  </Link>
  <Link to='/'>
  <button  className="addCardBtn">Go back</button> 
  </Link>
  </div>

  
    </div>
  );
};

export default AddCard;
