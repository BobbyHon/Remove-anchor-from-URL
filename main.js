function removeUrlAnchor(url){
    return url.includes('#') ? url.split('').slice(0, url.split('').indexOf('#')).join('')
                              : url
  }