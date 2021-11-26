let xhttp = new XMLHttpRequest();

xhttp.onload = function() {
    console.log(JSON.parse(this.response));
};

xhttp.open('get', 'https://talktoapi.abdulmajid.me/api/v1/todos');

// for add new todo
// let formData = new FormData();
// formData.append('title', 'Hello Todo');
// formData.append('note', 'Hello todo note details');
// formData.append('comment', 'testing purpose comment');

xhttp.send();