import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'components/Section';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Poster from '../../components/Poster';
import Helmet from 'react-helmet';

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => {
  return (
    <>
      <Helmet>
        <title>TV Shows| Nomflix</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {topRated && topRated.length > 0 && (
            <Section title="Top Rated Shows">
              {topRated.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  title={show.name}
                  imageUrl={show.poster_path}
                  rating={show.vote_average}
                  year={show.first_air_date && show.first_air_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="Popluar Shows">
              {popular.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  title={show.name}
                  imageUrl={show.poster_path}
                  rating={show.vote_average}
                  year={show.first_air_date && show.first_air_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}
          {airingToday && airingToday.length > 0 && (
            <Section title="Airing Today">
              {airingToday.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  title={show.name}
                  imageUrl={show.poster_path}
                  rating={show.vote_average}
                  year={show.first_air_date && show.first_air_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}
          {error && <Message color="#e74c3c" text={error} />}
        </Container>
      )}
    </>
  );
};

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;