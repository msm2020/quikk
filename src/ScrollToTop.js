// import { Component } from 'react';
// import { withRouter } from 'react-router-dom';

// class ScrollToTop extends Component {
//     componentDidUpdate(prevProps){
//         const { location } = this.props;
//         const { pathname: currentLocation } = location;
//         const { pathname: prevLocation } = prevProps.location;
//         const currentSearch = location.search;
//         const prevSearch = prevProps.location.search;
//         if (currentLocation !== prevLocation || currentSearch !== prevSearch) {
//         window.scrollTo(0, 0);
//         }
//     }

//   // Since it nests other components,
//   // we render the nested components (children).
//   render() {
//     const { children } = this.props;
//     return children;
//   }
// }

// export default withRouter(ScrollToTop);

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
