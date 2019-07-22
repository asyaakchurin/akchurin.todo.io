$(document).ready(function() {

  var $form = $('#todo-form');
  var $todoList = $('.todo-list ul')

  $form.on('submit', function(e) {
    e.preventDefault();

    var $input = $form.find('.todo-input');
    var value = $input.val();

    var $newListItem = $('<li></li>');

    var $text = $('<span></span>');
    $text.text(value);
    $newListItem.append($text);

    var $removeButton = $('<button class="todo-remove">Remove</button>');
    $newListItem.append($removeButton);

    var $editButton =$('<button class="todo-edit">Edit</button>');
    $newListItem.append($editButton);

    $todoList.append($newListItem);

    $input.val('');
  });

  $(document).on('click', '.todo-remove', function() {
    var $clickedItem = $(this).closest('li');
    $clickedItem.remove();
  });


    $(document).on('click', '.todo-edit', function() {
      var $inputbtn = $('<form class="todo-inputedit"><input type="text"/></form>');
      var text = $(this).siblings('span').text();

      $inputbtn.find('input').val(text);
      $(this).closest('li').append($inputbtn);


      // to remove edit button
      var editbutton2 = $(this).siblings('button.todo-edit').remove();
    });


    // here if u hit enter it will replace the list item

    $(document).on('submit', '.todo-inputedit', function(e) {
      e.preventDefault();
      var newValue = $(this).find('input').val();

      $(this).siblings('span').text(newValue);
      console.log('submitted');
      $(this).remove();
    });



  });


