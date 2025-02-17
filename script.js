let phrases = [
    { text: 'изучить язык HTML', image: 'HTML.png' },
    { text: 'изучить язык JavaScript', image: 'JS.png' },
    { text: 'изучить язык Java', image: 'Java.png' },
    { text: 'изучить язык PHP', image: 'PHP.png' },
    { text: 'разобраться как работать в Figma', image: 'figma.png' },
    { text: 'разобраться как работать в Photoshop', image: 'Photoshop.png' },
    { text: 'Разобраться как работать в Illustrator', image: 'Illustrator.jpg' }
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
  
  for(let i = 0; i <= 2; i ++){
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
  } 