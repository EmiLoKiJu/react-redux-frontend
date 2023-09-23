import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGreetings } from '../redux/greetings/greetingsSlice';

const Greeting = ({ message, getGreetings }) => {
  useEffect(() => {
    getGreetings();
  }, [getGreetings]);

  return (
    <div>
      <h1>{message}</h1>
      <h2>Above this h2 element should be an h1 element with a greeting</h2>
    </div>
  );
};

Greeting.defaultProps = {
  message: '',
  getGreetings: () => {},
};

Greeting.propTypes = {
  message: PropTypes.string,
  getGreetings: PropTypes.func,
};

const mapStateToProps = (state) => ({
  message: state.greetings.message,
});

export default connect(mapStateToProps, { getGreetings })(Greeting);
