import React, { Component } from 'react';
import TVPresenter from './TVPresenter';
import { tvApi } from 'api';

class TVContainer extends Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const [
        {
          data: { results: topRated },
        },
        {
          data: { results: popular },
        },
        {
          data: { results: airingToday },
        },
      ] = await Promise.all([tvApi.topRated(), tvApi.popular(), tvApi.airingToday()]);

      this.setState({ topRated, popular, airingToday });
    } catch (error) {
      this.setState({ error: "Can't find TV information." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}

export default TVContainer;
