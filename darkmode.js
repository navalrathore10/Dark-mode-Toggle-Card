function mode_change(clickedDiv) {
    // Selecting classes and id's
    var targetDiv1 = document.getElementById('mode');
    var targetDiv2 = document.getElementById('mode1');
    var targetDiv3 = document.getElementById('mode2');
    var targetDiv4 = document.getElementById('mode_text1');
    var targetDiv5 = document.getElementById('mode_text2');
    var targetDiv6 = document.getElementById('mode_inner_round');
    var targetDiv7 = document.getElementById('code');
    var Identifiers= document.getElementsByClassName('identifier');
    var CodeText= document.getElementsByClassName('code_text');

    // Toggle background color and text color of the target divs
    toggleBackgroundColor(targetDiv1);
    toggleBackgroundColor(targetDiv2);
    toggleBackgroundColor(targetDiv3);
    toggleColor(targetDiv4);
    toggleColor(targetDiv5);
    toggleBoxShaddow(targetDiv6);
    toggleBackgroundColorLight(targetDiv7);

    for(var i=0;i<Identifiers.length;i++){
        toggleColorLight(Identifiers[i]);
        }
    for(var j=0;j<CodeText.length;j++){
        toggleColorLightMain(CodeText[j]);
        }
}

function toggleBackgroundColorLight(element) {
    element.classList.toggle('light-mode');
}
function toggleBackgroundColor(element) {
    element.classList.toggle('dark-mode');
}

function toggleColorLight(targetDiv) {
    targetDiv.classList.toggle('light-mode-text');
}
function toggleColorLightMain(targetDiv) {
    targetDiv.classList.toggle('light-mode-main-text');
}
function toggleColor(targetDiv) {
    targetDiv.classList.toggle('dark-mode-text');
}
function toggleBoxShaddow(targetDiv) {
    targetDiv.classList.toggle('dark-mode-shaddow');
}

