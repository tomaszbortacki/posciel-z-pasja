import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollToTop = ({ setMobileActive, history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      setMobileActive(false);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
};

export default withRouter(ScrollToTop);
