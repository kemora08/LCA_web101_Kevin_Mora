$(document).ready(function() { 
let $list = $('ul');
let $newItemForm = $('#newItemForm');

$newItemForm.on('submit', function(e) {
  e.preventDefault();
  let text = $('input[type="text"]').val();
  $list.append(`<li>${text}</li>`);
  $('input[type="text"]').val('');
});

jQuery $list.on('click', 'li', function() {
  let $this = $(this);
  $this.remove();

 }
