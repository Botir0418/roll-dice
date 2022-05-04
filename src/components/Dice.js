import React, { Component } from 'react';
import PropTypes from 'prop-types';
import rollingDice from '../images/rollingDice.gif';
import diceImg1 from '../images/dice-1.png';
import diceImg2 from '../images/dice-2.png';
import diceImg3 from '../images/dice-3.png';
import diceImg4 from '../images/dice-4.png';
import diceImg5 from '../images/dice-5.png';
import diceImg6 from '../images/dice-6.png';

const diceArrayResult = [diceImg1, diceImg2, diceImg3, diceImg4, diceImg5, diceImg6];


export class Dice extends Component {
  render() {
    const { diceResult, isDiceRolling } = this.props;
    const [diceImgResult] = diceArrayResult.filter((imgItem, key) => {
      return diceResult === (key + 1);
    });
    const diceImg = isDiceRolling ? rollingDice : diceImgResult;

    return (
      <img src={ diceImg } alt={`Dice-${diceResult}`} className='dice' />
    );
  }
}

Dice.propTypes = {
  diceResult: PropTypes.number.isRequired,
  isDiceRolling: PropTypes.bool.isRequired
};

Dice.displayName = 'Dice';

export default Dice;
