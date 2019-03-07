var playerHealth = 100;
var enemyHealth = Math.floor(Math.random() * 300) + 500;
var attackNum;
var specialNum;
var used = 0;
var victory = false;
console.log("STARTING ENEMY HEALTH:", enemyHealth);
console.log(used);

function attack() {
  if (used == 0 && victory == false) {
  console.log("attack");
  attackNum = Math.floor(Math.random() * 20) + 21;
  if (attackNum > 39) {
    console.log("CRITICAL DAMAGE!");
    attackNum = 70;
  }
  enemyHealth = enemyHealth - attackNum;
  console.log(enemyHealth, attackNum);
    if (enemyHealth <= 0) {
      win();
    } else {
      used = 1;
    }
  }
}

function special() {
  if (used == 0 && victory == false) {
  console.log("special");
  specialNum = Math.floor(Math.random() * 20) + 80;
  enemyHealth = enemyHealth - specialNum;
  console.log(enemyHealth, specialNum);
    if (enemyHealth <= 0) {
      win();
    } else {
      used = 1;
    }
  }
}

function item() {
  console.log("item");
}

function win() {
  console.log("YOU WIN!");
  victory = true;
}

function ok() {
  used = 0;
  console.log(used);
}
