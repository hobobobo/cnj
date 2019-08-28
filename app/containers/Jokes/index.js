/*
 * Jokes List
 *
 * List all the jokes
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Block from '../../components/Block';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import LoadingIndicator from '../../components/LoadingIndicator';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import {
  makeSelectErrorMessage,
  makeSelectIsLoading,
  makeSelectJokes,
} from './selectors';

import { fetchJoke } from './actions';

import './jokes.css';

const key = 'jokes';

class Jokes extends React.PureComponent {
  loadMore = () => {
    this.props.dispatch(fetchJoke());
  };

  renderErrorMessageBlock = () => {
    const { errorMessage } = this.props;
    if (errorMessage) {
      return (
        <Block warning>
          <FormattedMessage
            {...messages[errorMessage] || messages.couldNotLoadJokes}
          />
        </Block>
      );
    }
    return null;
  };

  render() {
    const { jokes, errorMessage, isLoading } = this.props;
    return (
      <div>
        {errorMessage && this.renderErrorMessageBlock()}
        <List>
          <Button onClick={this.loadMore}>
            {isLoading && <LoadingIndicator className="spinner" />}
            <FormattedMessage {...messages.more} />
          </Button>
          {jokes.map(joke => (
            <ListItem key={joke.id}>{joke.value}</ListItem>
          ))}
        </List>
      </div>
    );
  }
}

Jokes.propTypes = {
  dispatch: PropTypes.func.isRequired,
  jokes: PropTypes.array,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  jokes: makeSelectJokes(),
  isLoading: makeSelectIsLoading(),
  errorMessage: makeSelectErrorMessage(),
});

const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key, reducer });
const withSaga = injectSaga({ key, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Jokes);
