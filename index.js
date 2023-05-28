let generateBtn = document.getElementById('generate-btn')

generateBtn.addEventListener('click',function(){
    fetch("https://api.adviceslip.com/advice")
    .then(Response => Response.json())
    .then(data => {
        if(data.slip.advice.length > 100){

        }else {
            document.getElementById('id').innerHTML = `Advice #${data.slip.id}`
            document.getElementById('qoute-text').innerHTML = `"${data.slip.advice}"`
        }
    })
})