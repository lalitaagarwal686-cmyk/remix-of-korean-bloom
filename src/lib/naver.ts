/** Deep links into Naver Dictionary (opens in a new tab; no API key needed). */
export const naverKoEnUrl = (term: string) =>
  `https://en.dict.naver.com/#/search?query=${encodeURIComponent(term)}`;
export const naverKoKoUrl = (term: string) =>
  `https://ko.dict.naver.com/#/search?query=${encodeURIComponent(term)}`;
export const naverHanjaUrl = (term: string) =>
  `https://hanja.dict.naver.com/#/search?query=${encodeURIComponent(term)}`;
