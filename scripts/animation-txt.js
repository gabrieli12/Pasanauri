const textElement = document.getElementById('animated-text');
const textArray = [
    "ფასანაურში ხშირია ტურისტების სტუმრობა,",
    "განსაკუთრებით ზაფხულში უამრავი ტურისტი და დამსვენებელი სტუმრობს ამ ულამაზეს ადგილს,",
    "ფასანაურში დიდად არის განვითარებული ტურიზმი და მასთან დაკავშირებული მოვლენები",
    "ფასანაური ტურისტებს სთვაზობს: "
];
let index = 0;
let charIndex = 0;

function type() {
    if (index < textArray.length) {
        if (charIndex < textArray[index].length) {
            textElement.innerHTML += textArray[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, 50); // Adjust the typing speed as needed
        } else {
            index++;
            charIndex = 0;
            setTimeout(type, 50); // Pause between texts
        }
    }
}

type();


// ჯომარდობას, სხვადასხვა გასვლით ტურებს, კვადროები, ცხენოსნობა, ბუნებაში მოგზაურობა და დათვალიერება, ჩანჩქერები, მინერალური წყლები, ნაძვნარი და სუფთა ჰაერი