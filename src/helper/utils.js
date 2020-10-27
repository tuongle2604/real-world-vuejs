const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});

const replaceParams = (url, ...params) => {
  const regex = new RegExp(/(:.+?(?=\/)|(:.+$))/);
  params.forEach(param => (url = url.replace(regex, param)));

  return url;
};

export { pick, replaceParams };
