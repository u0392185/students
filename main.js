function getStudentName() {
    var index = Math.floor(Math.random() * students.length);

    var name = students[index]

    var heading =  document.querySelector('h1');
    heading.innerHTML = name
}

function tempRemove(){
    var nameInput = document.getElementById('studentName')
    var name = nameInput.value
    var theIndexToRemove = students.findIndex(function(element) {
    
        return element.toLowerCase() === name.toLowerCase();
    });

    if(Number.isInteger(theIndexToRemove)){
        console.log(theIndexToRemove)
        var removed = students.splice(theIndexToRemove, 1);
        alert(`Removed ${removed[0]}`)
    }
}