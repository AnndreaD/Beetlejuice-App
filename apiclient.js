//TODO add to env
const apiBaseUrl = 'http://localhost:3000/';

//TODO move to routes file
export const questionUrl = apiBaseUrl + 'question';
export const claimUrl = apiBaseUrl + 'claim';
export const categoryUrl = apiBaseUrl + 'category';
export const languageUrl = apiBaseUrl + 'language';
export const randomquestion = questionUrl + '/randomquantity';
export const randomclaim = claimUrl + '/randomquantity';

export function arrayToParamstring(paramarray) {
  let returnstring = '';
  paramarray.map(i => (returnstring = returnstring + '/' + i));
  return returnstring;
}

export async function doPost(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return await res.json();
}

export async function doGet(url) {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return await res.json();
}

//TODO create params function

export async function doGetWithParams(url, params) {
  const res = await fetch(url + params, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return await res.json();
}
