const obj = {
  a: 'snake',
  b: 'water',
  c: 'gun'
};
let g = 0;
let p = 0, q = 0;

function getRandomProperty(obj) {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
}
let z = obj[getRandomProperty(obj)]
z = z.toLowerCase(z)
do {
  let z = obj[getRandomProperty(obj)]
  z = z.toLowerCase(z)
  let i = prompt("Snake,water,gun.... Choose one!!!!")
  i = i.toLowerCase(i)
  let winOrLoose = ((z, i) => {

    if (z == 'snake' && i == 'water' || z == 'gun' && i == 'snake' || z == 'water' && i == 'gun') {
      alert('User you loose')
      p++

    }
    else if (z == 'snake' && i == 'snake' || z == 'gun' && i == 'gun' || z == 'water' && i == 'water')
      alert("Ooopssss!!! It's a tie!!!!")

    else {
      alert('User you win!!!!!!')
      q++

    }

  })

  winOrLoose(z, i);
  g++
} while (g < 20)
if (p > q)
  alert("Hurray!!!!!!... I won the game!! Better luck next time")
else
  alert("OK!! You won this time!!")

