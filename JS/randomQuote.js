const quotes = [
    '"Who is that outside my window at night?"',
   '"Somebody stole my ps5!"',
    '"Im terrified to leave my house"',
    '"I love stealing peoples beaked beanes"',
    '"The amount sure is undisclosed!"'
  ];
  
  document.getElementById('randomQuote').value = quotes[Math.floor(Math.random()*quotes.length)];