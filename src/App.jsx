import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [visibleGoods, setVisibleGoods] = useState(goodsFromServer);
  const [sortType, setSortType] = useState('');
  const [isReversed, setIsReversed] = useState(false);

  const isModified = sortType !== '' || isReversed;

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={sortType === 'alphabet' ? 'button is-info' : 'button is-info is-light'}
          onClick={() => {
            const sortedGoods = [...visibleGoods];

            sortedGoods.sort((a, b) => a.localeCompare(b));

            setVisibleGoods(sortedGoods);
            setSortType('alphabet');
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={sortType === 'length' ? 'button is-success' : 'button is-success is-light'}
          onClick={() => {
            const sortedByLength = [...visibleGoods];

            sortedByLength.sort((a, b) => a.length - b.length);

            setVisibleGoods(sortedByLength);
            setSortType('length');
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={isReversed ? 'button is-warning' : 'button is-warning is-light'}
          onClick={() => {
            const reversedGoods = [...visibleGoods];

            reversedGoods.reverse();

            setVisibleGoods(reversedGoods);
            setIsReversed(!isReversed);
          }}
        >
          Reverse
        </button>

        {isModified && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => {
              setVisibleGoods(goodsFromServer);
              setSortType('');
              setIsReversed(false);
            }}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {visibleGoods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
