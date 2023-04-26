import {
  getTweetsCards,
  getOllTweetsCards,
  updateFollowers,
} from 'components/Services/Api';
import { useEffect, useState } from 'react';
import {
  TweetsList,
  TweetsCards,
  ButtonOnLoadMore,
  LiknGoBack,
} from './Tweets.styled';
import TweetsItem from 'components/TweetsItem/TweetsItem';
import Loader from 'components/Loader/Loader';

const Tweets = () => {
  const [dataCards, setDataCards] = useState([]);
  const [page, setPage] = useState(1);
  const [toHideButton, setToHideButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTweetsCards(page)
      .then(response => {
        setDataCards(prevState => [...prevState, ...response]);
        setIsLoading(false);
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
      <LiknGoBack to={'/'}>Go back</LiknGoBack>
      <TweetsList>
        {dataCards.length > 0 &&
          dataCards.map(card => (
            <TweetsItem
              key={card.id}
              data={card}
              updateValueFollowers={updateValueFollowers}
            />
          ))}
      </TweetsList>
      {isLoading && <Loader></Loader>}
      {toHideButton === false && dataCards.length > 0 && (
        <ButtonOnLoadMore type="button" onClick={onLoadMore}>
          Load more
        </ButtonOnLoadMore>
      )}
    </TweetsCards>
  );
};

export default Tweets;
