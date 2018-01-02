export default function getBaseUrl() {
  return getQueryStringParamByName('useMockApi')?'http://localhost:3001/':'/';
}

function getQueryStringParamByName(name, url)
{
  console.log('Called'); // eslint-disable-line no-console

  if(!url) url = window.location.href;
  name = name.replace('/[/[/]]/g','$&');
  var regex = new RegExp('[?&]'+name+'(=([^&#]*)|&|#|$)'),
  results = regex.exec(url);
  if(!results) return null;
  if(!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g," "));
}
