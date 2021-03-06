import './Introduction.css';

import Browser from '../Icons/Browser';
import Clapperboard from '../Icons/Clapperboard';
import Tomato from '../Icons/Tomato';
import FloatIn from '../FloatInAnimation/FloatIn';

function Introduction({ className }) {
  return (
    <FloatIn className={'introduction__list ' + className}>
      <h2>What is this?</h2>

      <div className="introduction__list__item">
        <Browser hover shadow />
        <div>A browser extension</div>
      </div>

      <div className="introduction__list__item">
        <Clapperboard hover shadow />
        <div>
          for <a href="https:\\www.imdb.com">IMDb</a>
        </div>
      </div>

      <div className="introduction__list__item">
        <Tomato hover shadow />
        <div>
          and <a href="https:\\www.rottentomatoes.com">RottenTomatoes.</a>
        </div>
      </div>
    </FloatIn>
  );
}

export default Introduction;
