function check() {
    alert("привет");
    el = document.getElementsByClassName("variant");    
};
function variable(){
    el.parentNode.style.border="1px solid red";
}
window.addEventListener(el.onclick , variable());

/*<div class="variables" >
    <h3 class="variable">Colors</h3>
    <div class="fc"><input type="radio" onclick="check()" name="color" class="variant" id="fc"></div>
    <div class="sc"><input type="radio" name="color" class="variant" id="sc"></div>
    <div class="tc"><input type="radio" name="color" class="variant" id="tc"></div>
</div>*/