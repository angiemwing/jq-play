
// paragraph animation
$('.roll').hover(
  function(){
    $(this).html("<p>You hovered over!!</p>");
  },
  function(){
    $(this).html("<p>Roll over this paragraph again???</p>")
  }
);


// button animation
// select the button / event handler click
$('button').on('click', function(){
// set a var to return a bit of html 
  var $greenPara = $('<p class="toggle">A brand new paragraph from the button!</p>');
// select class toggle, use the method append to add the value of gp
  $('.toggle').append($greenPara); 
});



//image animation on the button element
$('.photo').on('click', function(){
  $('img').css('display', 'none').fadeIn(6000);
})

// toggle the image size with a new class
$('img').on('click', function(){
  $(this).parent().remove(); // remover parent which is the div that contains everything
  $(this).toggleClass('new');
});

// removing the image button
$('.remove').on('click', function(){
  $('img').remove();
})

// DOM transversal 
var berry = [
  {fruit: 'blueberry'},
  {fruit: 'strawberry'},
  {fruit: 'bosenberry'},
  {fruit: 'blackberry'},
  {fruit: 'rasperry'}
];

berry.forEach(function(berry){
  document.write(berry.fruit + ' ');
});