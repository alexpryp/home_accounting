import React from 'react';

// Universal type for SVG
export type SVGIcon = 
  | React.FC<React.SVGProps<SVGSVGElement>>  // React component
  | string                                   // URL/path
  | React.ReactElement;

export type TNavbarButtonItem = {
  imageSVG: string;
  altText: string;
  inscription: string;
  href: string;
}

export type TNavbarButtonPropItem = {
  navbarButtonProp: TNavbarButtonItem;
}

export type TNavbarButtonProps = {
  navbarButtons: TNavbarButtonItem[]
}
