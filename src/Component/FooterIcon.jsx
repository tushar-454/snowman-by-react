import React from 'react';

const FooterIcon = (props) => {
  const { href, name, color } = props;
  return (
    <>
      <a href={href} target='_blank' rel='noreferrer'>
        <box-icon name={name} type='logo' size='md' color={color}></box-icon>
      </a>
    </>
  );
};

export default FooterIcon;
