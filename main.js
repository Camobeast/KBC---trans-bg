let people = document.querySelectorAll('.person');
let message = document.querySelectorAll('.message');

for (let i = 0; i < people.length; i++) {
    people[i].addEventListener("mouseover", function() {
        for (let j = 0; j < people.length; j++) {
            message[j].classList.add("hidden");
        }
        message[i].classList.remove("hidden");
    })
}