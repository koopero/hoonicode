module.exports = hoonicode

const data = require('./data.json')

function hoonicode( str ) {
  return str.replace( /\w/g, function ( char ) {
    if ( data[char] && Math.random() < 0.8 ) {
      return randomFromList( data[char] )
    }
    return char
  } )
}

function randomFromList( list ) {
  if ( !list.length )
    return
  var ind = Math.floor( Math.random() * list.length )
  return list[ind]
}
