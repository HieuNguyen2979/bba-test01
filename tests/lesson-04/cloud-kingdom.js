let powerUp = 'mushroom';
switch (powerUp) {
    case "mushroom":
        effect ="Mario become Supper";
        console.log(effect);
        break;
    case "flower":
        effect ="Mario can shoot fireballs";
        console.log(effect);
        break;
    case "star":
        effect ="Mario is invincible";
        console.log(effect);
        break;
    case "none":
        effect ="Mario is normal";
        console.log(effect);
        break;        

    default:
        effect ="Unknown power-up";
        console.log(effect);
        break;
}