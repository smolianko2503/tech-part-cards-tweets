import {
  getTweetsCards,
  getOllTweetsCards,
  updateFollowers,
} from 'components/Services/Api';
import { useEffect, useState } from 'react';
import { TweetsList, TweetsCards, ButtonOnLoadMore } from './Tweets.styled';
import TweetsItem from 'components/TweetsItem/TweetsItem';

const Tweets = () => {
  const [dataCards, setDataCards] = useState([]);
  const [page, setPage] = useState(1);
  // const [countTweetsCards, setCountTweetsCards] = useState([]);
  const [toHideButton, setToHideButton] = useState(false);

  useEffect(() => {
    getTweetsCards(page)
      .then(response => {
        setDataCards(prevState => [...prevState, ...response]);
        console.log(response);
      })
      .catch(error => console.log(error));
  }, [page]);

  useEffect(() => {
    getOllTweetsCards()
      .then(response => {
        if (Math.ceil(response.length / 3) === page) {
          setToHideButton(true);
        }
       })
      .catch(error => console.log(error));
  }, [page]);

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const updateValueFollowers = id => {
    const updatedTweetsCards = dataCards.map(card => {
      if (card.id === id) {
        const updateCards = {
          ...card,
          followers: card.followers + (card.isFollow ? -1 : 1),
          isFollow: !card.isFollow,
        };
        updateFollowers(card.id, {
          followers: updateCards.followers,
          isFollow: updateCards.isFollow,
        });
        return updateCards;
      }
      return card;
    });
    setDataCards(updatedTweetsCards);
  };

  return (
    <TweetsCards>
      <TweetsList>
        {dataCards.map(card => (
          <TweetsItem
            key={card.id}
            data={card}
            updateValueFollowers={updateValueFollowers}
          />
        ))}
      </TweetsList>
      {toHideButton === false && (
        <ButtonOnLoadMore type="button" onClick={onLoadMore}>
          Load more
        </ButtonOnLoadMore>
      )}
    </TweetsCards>
  );
};

export default Tweets;
