import React from "react";

function Card({ card }) {
  return (
      
    <div>

{ card.bank === 'Visa' ?
<div class="card">
  
  <div class="card__front card__part">
   
    <p style={{color: 'white'}} class="card__front-logo card__logo">{card.bank}</p>
    <br />
    <img src="https://w7.pngwing.com/pngs/460/694/png-transparent-iphone-computer-icons-integrated-circuits-chips-subscriber-identity-module-sim-cards-electronics-text-rectangle.png" class="card__front-square card__square" /> 
    <p class="card_numer">{card.cardNumber}</p>
    <div class="card__space-75">
      <span class="card__label">Card holder</span>
      <p class="card__info">{card.cardName}</p>
    </div>
    <div class="card__space-25">
      <span class="card__label">Expires</span>
            <p class="card__info">{card.expireMonth}/{card.expireYear}</p>
    </div>
  </div>
  
  <div class="card__back card__part">
    <div class="card__black-line"></div>
    <div class="card__back-content">
      <div class="card__secret">
        <p class="card__secret--last">{card.ccv}</p>
      </div>
      
    </div>
  </div>

 
  </div>
  :
  card.bank === 'Mastercard' ?
  <div class="cardTwo">
  
  <div class="card__frontTwo card__partTwo">
   
    <p style={{color: 'white'}} class="card__front-logoTwo card__logoTwo">{card.bank}</p>
    <br />
    <img src="https://w7.pngwing.com/pngs/460/694/png-transparent-iphone-computer-icons-integrated-circuits-chips-subscriber-identity-module-sim-cards-electronics-text-rectangle.png" class="card__front-squareTwo card__squareTwo" /> 
    <p class="card_numerTwo">{card.cardNumber}</p>
    <div class="card__space-75Two">
      <span class="card__labelTwo">Card holder</span>
      <p class="card__infoTwo">{card.cardName}</p>
    </div>
    <div class="card__space-25Two">
      <span class="card__labelTwo">Expires</span>
            <p class="card__infoTwo">{card.expireMonth}/{card.expireYear}</p>
    </div>
  </div>
  
  <div class="card__backTwo card__partTwo">
    <div class="card__black-lineTwo"></div>
    <div class="card__back-contentTwo">
      <div class="card__secretTwo">
        <p class="card__secret--lastTwo">{card.ccv}</p>
      </div>
      
    </div>
  </div>

 
  </div>
 : 

 <div class="cardThree">
  
  <div class="card__frontThree card__partThree">
   
    <p style={{color: 'white'}} class="card__front-logoThree card__logoThree">{card.bank}</p>
    <br />
    <img src="https://w7.pngwing.com/pngs/460/694/png-transparent-iphone-computer-icons-integrated-circuits-chips-subscriber-identity-module-sim-cards-electronics-text-rectangle.png" class="card__front-squareThree card__squareThree" /> 
    <p class="card_numerThree">{card.cardNumber}</p>
    <div class="card__space-75Three">
      <span class="card__labelThree">Card holder</span>
      <p class="card__infoTwo">{card.cardName}</p>
    </div>
    <div class="card__space-25Three">
      <span class="card__labelThree">Expires</span>
            <p class="card__infoThree">{card.expireMonth}/{card.expireYear}</p>
    </div>
  </div>
  
  <div class="card__backThree card__partThree">
    <div class="card__black-lineThree"></div>
    <div class="card__back-contentThree">
      <div class="card__secretThree">
        <p class="card__secret--lastThree">{card.ccv}</p>
      </div>
      
    </div>
  </div>

 
  </div>
  }
    </div>
  )
}
export default Card;
