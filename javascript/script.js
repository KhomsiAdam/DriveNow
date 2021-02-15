// Mobile Navigation
const mobileBtn = document.getElementById('menu-open')
nav = document.querySelector('nav')
mobileBtnClose = document.getElementById('menu-close');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('mobile-menu-open');
})

mobileBtnClose.addEventListener('click', () => {
    nav.classList.remove('mobile-menu-open');
})

// price calculation
function resetToDefault() {
    document.getElementById("fuelItems").options[0].selected = true;
    document.getElementById("transmissionItems").options[0].selected = true;
    document.getElementById("days").value = "1";
}

/*function showPrice() {
  document.getElementById("rentPrice").hidden = false;
}*/

function calculatePrice() {

    //get selected price from value
    var temp = document.getElementById("vehicleItems");
    var vehicle = temp.options[temp.selectedIndex].value;

    //convert vehicle value string to integer
    vehicle = parseInt(vehicle);

    //switch statement to toggle between valid selection (for fuel & transmission) for each vehicle type
    switch (vehicle) {
        case 10:
            //show or hide options depending on vehicle selected
            document.getElementById("fuelItems").hidden = false;
            document.getElementById("fuelItems").options[1].hidden = false;
            document.getElementById("fuelItems").options[2].hidden = true;
            document.getElementById("fuelItems").options[3].hidden = true;
            document.getElementById("fuelItems").options[4].hidden = false;
            document.getElementById("transmissionItems").hidden = true;
            document.getElementById("enterdays").hidden = false;
            document.getElementById("days").hidden = false;
            break;

        case 12:

            //show or hide options depending on vehicle selected
            document.getElementById("fuelItems").hidden = false;
            document.getElementById("fuelItems").options[1].hidden = false;
            document.getElementById("fuelItems").options[2].hidden = false;
            document.getElementById("fuelItems").options[3].hidden = false;
            document.getElementById("fuelItems").options[4].hidden = false;
            document.getElementById("transmissionItems").hidden = false;
            document.getElementById("transmissionItems").options[1].hidden = false;
            document.getElementById("transmissionItems").options[2].hidden = true;
            document.getElementById("enterdays").hidden = false;
            document.getElementById("days").hidden = false;
            break;

        case 14:

            //show or hide options depending on vehicle selected
            document.getElementById("fuelItems").hidden = false;
            document.getElementById("fuelItems").options[1].hidden = false;
            document.getElementById("fuelItems").options[2].hidden = false;
            document.getElementById("fuelItems").options[3].hidden = false;
            document.getElementById("fuelItems").options[4].hidden = true;
            document.getElementById("transmissionItems").hidden = false;
            document.getElementById("transmissionItems").options[1].hidden = false;
            document.getElementById("transmissionItems").options[2].hidden = true;
            document.getElementById("enterdays").hidden = false;
            document.getElementById("days").hidden = false;
            break;

        case 16:

            //show or hide options depending on vehicle selected
            document.getElementById("fuelItems").hidden = false;
            document.getElementById("fuelItems").options[1].hidden = true;
            document.getElementById("fuelItems").options[2].hidden = false;
            document.getElementById("fuelItems").options[3].hidden = true;
            document.getElementById("fuelItems").options[4].hidden = true;
            document.getElementById("transmissionItems").hidden = false;
            document.getElementById("transmissionItems").options[1].hidden = false;
            document.getElementById("transmissionItems").options[2].hidden = true;
            document.getElementById("enterdays").hidden = false;
            document.getElementById("days").hidden = false;
            break;

        case 20:

            //show or hide options depending on vehicle selected
            document.getElementById("fuelItems").hidden = false;
            document.getElementById("fuelItems").options[1].hidden = false;
            document.getElementById("fuelItems").options[2].hidden = false;
            document.getElementById("fuelItems").options[3].hidden = false;
            document.getElementById("fuelItems").options[4].hidden = true;
            document.getElementById("transmissionItems").hidden = false;
            document.getElementById("transmissionItems").options[1].hidden = true;
            document.getElementById("transmissionItems").options[2].hidden = false;
            document.getElementById("enterdays").hidden = false;
            document.getElementById("days").hidden = false;
            break;

        case 250:

            //show or hide options depending on vehicle selected
            document.getElementById("fuelItems").hidden = false;
            document.getElementById("fuelItems").options[1].hidden = true;
            document.getElementById("fuelItems").options[2].hidden = false;
            document.getElementById("fuelItems").options[3].hidden = true;
            document.getElementById("fuelItems").options[4].hidden = true;
            //document.getElementById("fuelItems").options[2].selected = true;
            document.getElementById("transmissionItems").hidden = false;
            document.getElementById("transmissionItems").options[1].hidden = true;
            document.getElementById("transmissionItems").options[2].hidden = false;
            //document.getElementById("transmissionItems").options[2].selected = true;
            document.getElementById("enterdays").hidden = false;
            document.getElementById("days").hidden = false;
            break;

        case 900:

            //show or hide options depending on vehicle selected
            document.getElementById("fuelItems").hidden = false;
            document.getElementById("fuelItems").options[1].hidden = false;
            document.getElementById("fuelItems").options[2].hidden = false;
            document.getElementById("fuelItems").options[3].hidden = true;
            document.getElementById("fuelItems").options[4].hidden = true;
            document.getElementById("transmissionItems").hidden = false;
            document.getElementById("transmissionItems").options[1].hidden = false;
            document.getElementById("transmissionItems").options[2].hidden = true;
            document.getElementById("enterdays").hidden = false;
            document.getElementById("days").hidden = false;
            break;

        default:
            break;
    }

    var temp = document.getElementById("fuelItems");
    var fuel = temp.options[temp.selectedIndex].value;

    var temp = document.getElementById("transmissionItems");
    var transmission = temp.options[temp.selectedIndex].value;

    var days = document.getElementById("days").value;

    //convert fuel and transmission value strings to integers
    fuel = parseInt(fuel);
    transmission = parseInt(transmission);

    //calculate total value  
    var total = (vehicle + ((vehicle * fuel) / 100) + ((vehicle * transmission) / 100)) * days;

    //assign value to rentPrice 
    document.getElementById("rentPrice").value = total;

}