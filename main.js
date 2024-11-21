function domainName(url){

  let startingURL = url
  let schemeAndSubdomainRemoved = ''
  let splitURL = ''

  let replacementTargets = ['http://', 'https://', 'http://www.', 'https://www.', 'www.']

  for (const target of replacementTargets) {
    // console.log(target)

    if (startingURL.includes(target)) {
      schemeAndSubdomainRemoved = startingURL.replace(target, '')
    }
  }

  // console.log(schemeAndSubdomainRemoved)

  splitURL = schemeAndSubdomainRemoved.split('.')

  // console.log(splitURL)

  let domain = splitURL[0]

  return domain
}

console.log(domainName('www.microsoft.com/products'))
console.log(domainName('https://accu-weather.com'))
console.log(domainName('http://surfline.com'))


// taking in a string
// returning a string, which is just the domain name, with everything else removed
// url = 'www.microsoft.com/products' -> 'microsoft'
// url = 'https://accu-weather.com' -> 'accu-weather'
// url = 'http://surfline.com' -> 'surfline' 
// no poorly formed URLs

// replace 'http://', 'https://', 'http://www.', 'https://www.', 'www.'  with ''
// split the url on the '.'
// return the arr[0]
