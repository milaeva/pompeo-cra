import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { storeContext } from '../context';

export default function GoToTop() {
  const { handleMobileNav, mobileNavOpen } = useContext(storeContext);
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    mobileNavOpen && handleMobileNav();
    onTop();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routePath]);

  return null;
}
