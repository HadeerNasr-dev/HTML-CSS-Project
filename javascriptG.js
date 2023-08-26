var header = document.getElementById('Myheader')
window.addEventListener('scroll',()=>{
if (window.scrollY>250)
{
    header.style.backgroundColor= 'white' 
}
else {
    header.style.backgroundColor= 'rgb(225, 217, 217)'
}
})