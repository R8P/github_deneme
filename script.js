$(document).ready(function () {
    $('#btnTwo').on("click", function () {
        $('#textArea > p').toggle();
        console.log('clicked')
    })

    const $btnOne = $('#btnOne');
    $btnOne.click(()=>{
        setBackground()
    })
});


function setBackground() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    $('#colorArea').css("background","#" + randomColor);
    $('#colorArea >span').html("Color:#"+randomColor);
}