'use strict';

//add items based on input text to container below
//delete items from container
//check off items from container

function addItem() {
  $('#js-shopping-list-form').submit(function () {
    event.preventDefault();
    $('.shopping-list').prepend(`
    <li>
        <span class="shopping-item">${$('#shopping-list-entry').val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
    `);
  });
}


function deleteItem() {
  $('ul').on('click','.shopping-item-delete', function (event){
    event.target.closest('li').remove();
  });
}

function checkItem() {
  $('ul').on('click', '.shopping-item-toggle', function (){
    console.log(event.currentTarget);
    $(event.target).closest('li').children('span').toggleClass('shopping-item__checked');
  });
}

$(function (){
  addItem();
  deleteItem();
  checkItem();
});
