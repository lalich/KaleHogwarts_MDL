// console.log('Yo, Dr. Big D!')


// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};
  const $container = $('<div>').attr('id', 'container') ;
  $('body').append($container);
  
$(() => {
    $container
    console.log($container)
 })
 const $h1 =
$('<h1/>', {
    text: 'Welcome to da ThunderDome' })
    .appendTo('body');
    // $('container').append($h1)   ???? Just can not get these to add to drop downs, this assignment is taking so long trying!

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
 
  const $list = $('<ul>').attr('storage', 'trunk')
  .appendTo('body');
    const items = [
        'butter beer',
        'invisibility cloak',
        'magic map',
        'time turner',
        'leash',
        'Bertie Botts Every Flavor [Jelly] Beans'
    ];
    for (let i = 0; i < items.lenght; i++) {
        const items = $('<li>').text(items[i]);

        if (items[i] === 'invisibility cloak' || items[i] === 'magic map' || items[i] === 'time turner')
{
    listItem.addClass('secret');
}   
if (items[i] === 'leash') {
    listItem.addClass('Dog');
} 
  list.append(listItem);


$('body').appendTo($list);  }
console.log(list)
	// put jQuery in here

// $('<h1/>', {
//     text: 'Heading Text'
//  }).appendTo('body');

//  $('<h1/>', {
//     text: 'Trois colors: rouge, blanc, et blue'
//  }).appendTo('body');
  
