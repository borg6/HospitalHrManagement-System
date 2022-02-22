import React, { FC } from 'react';

type UserLinkProps = {
  caption: string;
  image: string;
  infoLink: string;
};

const UserLink: FC<UserLinkProps> = ({ infoLink, image, caption }) => (
  <a className="link" href={infoLink} key={infoLink}>
    <img src={image} alt={capt