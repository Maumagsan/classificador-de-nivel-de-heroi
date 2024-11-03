let heroi = "Ichigo Kurosaki";
let xp = prompt("Digite sua pontuação: ");
let rank;


switch (true) {
    case (xp < 1001):
        rank = "Ferro";
        break;
    case (xp < 2001):
        rank = "Bronze";
        break;
    case (xp < 5001):
        rank = "Prata";
        break;
    case (xp < 7001):
        rank = "Ouro";
        break;
    case (xp < 8001):
        rank = "Platina";
        break;
    case (xp < 9001):
        rank = "Ascendente";
        break;
    case (xp < 10001):
        rank = "Imortal";
        break;
    default:
        rank = "Radiante";
        break;
}

alert(`O Herói de nome ${heroi} está com o XP de ${xp}, seu rank é ${rank}`);

