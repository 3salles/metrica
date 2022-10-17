import { useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';

import './styles.css';

export default function Searchbar(props) {
  const [focus, setFocus] = useState();
  const searchInputRef = useRef(null);

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <div className={`searchbox ${focus && 'focus'}`}>
      <CiSearch />
      <input
        ref={searchInputRef}
        type="text"
        placeholder={props?.text}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
  );
}
