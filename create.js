var playerHealth = 100;
var startEnemyHealth = Math.floor(Math.random() * 200) + 400;
var enemyHealth = startEnemyHealth;
var specialVal = 10;
var attackNum;
var specialNum;
var damVal;
var potions = 5;
var used = 0;
var victory = false;
var miss;
var enemyUsed = 0;
console.log("STARTING ENEMY HEALTH: ", enemyHealth);
console.log("STARTING PLAYER HEALTH: ", playerHealth);

//ATTACK

function attack() {
  if (used == 0 && victory == false) {
  console.log("normal attack");
  attackNum = Math.floor(Math.random() * 20) + 21;
  miss = Math.floor(Math.random()*100) + 1;
  if (miss <= 15) {
    console.log("MISS! LOSE A TURN!");
    document.getElementById("out").innerHTML = "MISS! LOSE YOUR TURN! ";
    used = 1;
  } else {
    if (attackNum > 39) {
      console.log("CRITICAL DAMAGE!");
      document.getElementById("out").innerHTML = "CRITICAL DAMAGE! DAMAGE DEALT: " + attackNum;

      attackNum = 70;
    }
    enemyHealth = enemyHealth - attackNum;
    console.log("ENEMY HEALTH REMAINING", enemyHealth, "DAMAGE DEALT", attackNum);
    document.getElementById("out").innerHTML= "HIT! DAMAGE DEALT: " + attackNum;
    document.getElementById("enemyinfo").innerHTML= "Enemy Health: " + enemyHealth;
      if (enemyHealth <= 0) {
        enemyHealth = 0;
        win();
      } else {
        used = 1;
      }
    }
  }
}

//SPECIAL

function special() {
  if (used == 0 && victory == false) {
    if (specialVal > 1) {
        console.log("special attack");
        specialNum = Math.floor(Math.random() * 20) + 80;
        enemyHealth = enemyHealth - specialNum;
        document.getElementById("out").innerHTML= "SPECIAL ATTACK! DAMAGE DEALT: " + specialNum;
        document.getElementById("enemyinfo").innerHTML= "Enemy Health:" + enemyHealth;
        console.log("ENEMY HEALTH REMAINING:", enemyHealth, "SPECIAL DAMAGE DEALT: ", specialNum);
        if (enemyHealth <= 0) {
          enemyHealth = 0;
          win();
        } else {
          specialVal = specialVal - 2;
          console.log("SPECIAL REMAINING: ", specialVal);
          document.getElementById("stat1").innerHTML= specialVal + "&nbsp" + "SP" ;
          used = 1;
        }
      } else {
        console.log("SPECIAL EMPTY")
        used = 1;
      }
    }

}

//ITEM

function item() {
  if (used == 0 && victory == false) {
    if (potions > 0) {
      console.log("item");
      document.getElementById("out").innerHTML= "YOU USED POTION! +50 HEALTH!";
      if (playerHealth + 50 > 100) {
        playerHealth = 100
        potions = potions - 1;
        console.log("HEALH MAXED OUT", "POTIONS REMAINING: ", potions)
        document.getElementById("out").innerHTML= "YOU USED POTION! HEALTH MAXED OUT";
        document.getElementById("stat2").innerHTML= "Potions: " + potions;
        document.getElementById("healthdata").innerHTML= "Health Remaining: " + playerHealth;
      } else {
        playerHealth = playerHealth + 50;
        document.getElementById("stat2").innerHTML= "Potions: " + potions;
      }
    } else {
      console.log("NOT ENOUGH POTIONS");
      document.getElementById("out").innerHTML= "NOT ENOUGH POTIONS";
    }
    used = 1;
  }
}

//ENEMY ATTACK

function enemyAttack() {
  miss = Math.floor(Math.random()*100) + 1;
  if (miss <= 15) {
    console.log("ENEMY MISSED!");
    document.getElementById("out").innerHTML= "ENEMY MISSED!";
    if (playerHealth <= 0) {
      lose();
    }
    enemyUsed = 0;

  } else {
    damVal = Math.floor(Math.random() * 10) + 10;
    playerHealth = playerHealth - damVal;
    enemyUsed = 0;
    console.log("ENEMY DAMAGE: ", damVal, "HEALTH REMAINING: ", playerHealth);
    console.log(damVal);
    document.getElementById("out").innerHTML= "ENEMY HIT! HEALTH LOST: " + damVal;
    document.getElementById("healthdata").innerHTML= "Health Remaining: " + playerHealth;
    if (playerHealth <= 0) {
        playerHealth = 0;
        document.getElementById("healthdata").innerHTML= "Health Remaining: " + playerHealth;
      lose();
    }
  }
}

//OTHER

function win() {
  console.log("YOU WIN!");
  document.getElementById("out").innerHTML= "YOU WIN!";
  victory = true;
}

function lose() {
  console.log("YOU LOSE!");
  document.getElementById("out").innerHTML= "YOU LOSE!";
  victory = true;
}

function ok() {
  if (used == 1 && enemyUsed == 0) {
    used = 0;
    enemyUsed = 1;
    enemyAttack();
    console.log("IT IS NOW YOUR TURN");
  }
}
