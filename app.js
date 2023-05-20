// console.log('Yo, Dr. Big D!')


// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};
  const $container = $('<div>').attr('id', 'maincontainer') ;
  $('body').append($container);

  const $h2 = $('<div>').attr('id', 'ThunderDome') ;
$('body').append($h2) ;
  
$(() => {
    $container
    console.log($container)
 })
$('<h2/>', {
    text: 'Welcome to da ThunderDome' })
    .appendTo('body');

console.log($('div'))

	// put jQuery in here

// $('<h1/>', {
//     text: 'Heading Text'
//  }).appendTo('body');

//  $('<h1/>', {
//     text: 'Trois colors: rouge, blanc, et blue'
//  }).appendTo('body');
  
