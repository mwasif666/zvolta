import { Link } from 'react-router-dom';

function isInternalHref(href) {
  return typeof href === 'string' && href.startsWith('/') && !href.startsWith('//');
}

export function SmartLink({ href, to, target, download, rel, ...props }) {
  const destination = to ?? href;

  if (
    !destination ||
    target === '_blank' ||
    typeof download !== 'undefined' ||
    !isInternalHref(destination)
  ) {
    return (
      <a href={href ?? to} target={target} download={download} rel={rel} {...props} />
    );
  }

  return <Link to={destination} target={target} rel={rel} {...props} />;
}
