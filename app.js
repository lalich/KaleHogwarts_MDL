// console.log('Yo, Dr. Big D!')


// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};
  const $container = $('<div>').attr('id', 'maincontainer') ;
  $('body').append($container);

  const $h1 = $('<div>').attr('id', 'ThunderDome') ;
$('body').append($h1) ;
  
$(() => {
    $container
    console.log($container)
 })
$('<h1/>', {
    text: 'Welcome to da ThunderDome' })
    .appendTo('body');

console.log($('div'))

 const $h2 = $('<div>') // name
    $('<h2/>', {
        text: 'Dr. Big D' })
        .appendTo('body')
    
 const $h3 = $('<div>') // element with your house
        $('<h3/>', {
            text: 'The Space'
        })
        .appendTo('body')

 const $h4 = $('<div>').addClass('Dog') // pet's name & class
 
 $('body').append($h4) ;
        $('<h4/>', {
            text: ('Aspen Girl & Willow Bug')
        })
        .appendTo('body')
 

	// put jQuery in here

// $('<h1/>', {
//     text: 'Heading Text'
//  }).appendTo('body');

//  $('<h1/>', {
//     text: 'Trois colors: rouge, blanc, et blue'
//  }).appendTo('body');
  
