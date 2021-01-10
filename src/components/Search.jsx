import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { getVideoSearch } from '../actions';
import '../assets/styles/components/Search.scss';

const MainTitleText = '¿Que quieres ver hoy?';
const MainInputPlaceholder = 'Buscar...';

const Search = (props) => {
  const { isHome, getVideoSearch } = props;
  const inputStyle = classNames('input', {
    isHome,
  });
  const handleInput = (event) => {
    getVideoSearch(event.target.value);
  };
  return (
    <section className='main'>
      <h2 className='main__title'>{MainTitleText}</h2>
      <input
        className={inputStyle}
        type='text'
        placeholder={MainInputPlaceholder}
        onKeyUp={handleInput}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    searchResult: state.searchResult,
  };
};

const mapDispatchToProps = {
  getVideoSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
