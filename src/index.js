document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form#create-task-form').addEventListener('submit', function(event) {
    console.log(event);
    let input = document.querySelector('input#new-task-description').value;
    let clear = document.querySelector('input#new-task-description').value = '';
    if (input === '') {
      alert("Empty Box")
    } else {
    document.getElementById('tasks').innerHTML += `${input} <button color='red'>x</button><br>`
    clear

    };
    event.preventDefault();
  }, false); 

});

