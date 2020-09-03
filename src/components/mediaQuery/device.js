const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px" /*tablet 768 x 1024 */,
  laptop: "1024px",
  laptopL: "1424px" /*"1440px"*/,
  laptopXL: "1650px" /*"1680px"*/,
  desktop: "2544px" /*"2560px"*/,
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  laptopXL: `(min-width: ${size.laptopXL})`,
  desktop: `(min-width: ${size.desktop})`,
};
