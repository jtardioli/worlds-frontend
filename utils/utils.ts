export const getShortenedAddress = (address: string) => {
  let shortenedAddress = "";
  shortenedAddress += address.substring(0, 5);
  shortenedAddress += "...";
  shortenedAddress += address.substring(35, 39);
  return shortenedAddress;
};
