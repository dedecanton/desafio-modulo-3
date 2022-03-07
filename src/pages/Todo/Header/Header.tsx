/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */

import * as React from 'react';
import * as C from "./Header.style";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faList } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <C.Header>
      <C.Container>
        <C.HeaderLogo>To-do List</C.HeaderLogo>
        {/* <FontAwesomeIcon style={{fontSize:'25px'}} icon={faList} /> */}
      </C.Container>
    </C.Header>
  );
};

export default Header;
