function domainName(url){

  return url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split('.')[0]

}

// console.log(domainName('www.microsoft.com/products'))
// console.log(domainName('https://accu-weather.com'))
// console.log(domainName('http://surfline.com'))


// taking in a string
// returning a string, which is just the domain name, with everything else removed
// url = 'www.microsoft.com/products' -> 'microsoft'
// url = 'https://accu-weather.com' -> 'accu-weather'
// url = 'http://surfline.com' -> 'surfline' 
// no poorly formed URLs

// replace 'http://', 'https://', 'http://www.', 'https://www.', 'www.'  with ''
// split the url on the '.'
// return the arr[0]
