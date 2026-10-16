function count(x) {
    let calorie = document.getElementById("calorie");
    let fat = document.getElementById("fat");
    let carbohydrate = document.getElementById("carbohydrate");
    let protein = document.getElementById("protein");
    let fatPercent = document.getElementById("fatPercent");
    let carbohydratePercent = document.getElementById("carbohydratePercent");
    let proteinPercent = document.getElementById("proteinPercent");

    switch (x) {
        case "calorie":
            fat.value = Math.round((calorie.value * (fatPercent.value / 100)) / 9);
            carbohydrate.value = Math.round((calorie.value * (carbohydratePercent.value / 100)) / 4);
            protein.value = Math.round((calorie.value * (proteinPercent.value / 100)) / 4);
            break;
        case "nutrients":
            calorie.value = (fat.value * 9) + (carbohydrate.value * 4) + (protein.value * 4);
            fatPercent.value = Math.round((fat.value * 9) / calorie.value * 100);
            carbohydratePercent.value = Math.round((carbohydrate.value * 4) / calorie.value * 100);
            proteinPercent.value = Math.round((protein.value * 4) / calorie.value * 100);
            break;
        case "percent":
            fat.value = Math.round((calorie.value * (fatPercent.value / 100)) / 9);
            carbohydrate.value = Math.round((calorie.value * (carbohydratePercent.value / 100)) / 4);
            protein.value = Math.round((calorie.value * (proteinPercent.value / 100)) / 4);
            break;
    }
}