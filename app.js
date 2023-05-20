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

	// put jQuery in here

// $('<h1/>', {
//     text: 'Heading Text'
//  }).appendTo('body');

//  $('<h1/>', {
//     text: 'Trois colors: rouge, blanc, et blue'
//  }).appendTo('body');
  
// YEAR 4

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const classes = ['Herbology', 'Divination', 'History of Magic', 'Charms', 'Potions', 'Transfiguration', 
'Defense Against the Dark Arts', 'Quidditch practice'];

const table = $('<table>').addClass('theTable');
const thread = $('<thread>')
const headerRow = $('<tr>').append(
    $('<th>').text('Day'),
    $('<th>').text('Classes')
);

thread.append(headerRow);
table.append(thread);

const tbody = $('<tbody>');
$(daysOfWeek), function(index, day) {
    const classlist = index === 0 ? classes.join(',') : '';    /// I consulted Chat GPT, I am having a tough time on this assignment
    // the assignment calls for 4 hours and I am way past that. 
    const row = $('<tr>').append(
        $('<td>').text(day),
        $('<td>').text(classlist)
    );

    tbody.append(row);

};

table.append(tbody);
$('tableContainer').append(table);


/// Year 5 - I can not do many of these as I am not getting the expected results so will try code but will be difficult to varify on my end

$h4.removeClass('Dog')
console.log(Dog)

// I know I need to access the list splice and remove the item from the list 

// this is where I would *push* a new want as an element to the pet

// this would be changing in the css file for the new element

// creating a function to have the pet go on a spy mission, prior to the mission the leash needs to be placed back in the trunk 

// this could be cool on the UX side with graphical representation of the pet moving around




