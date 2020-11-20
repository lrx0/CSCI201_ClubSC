import React from 'react';

const Link = ({ href, className, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', `/ClubSC${href}`);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} href={`/ClubSC${href}`} className={className}>{children}</a>
  );
};

export default Link;
