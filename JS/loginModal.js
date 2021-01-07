let createAcc = document.getElementById('createAcc')
let cancelCreateAcc = document.getElementById('cancelCreateAcc')
let createAccModal = document.getElementById('createAccModal')

let loginBtn = document.getElementById('loginBtn')
let cancelLoginModal = document.getElementById('cancelLoginModal')
let loginModal = document.getElementById('loginModal')

createAcc.addEventListener('click', ()=>{
    createAccModal.style.display = 'block'
})
cancelCreateAcc.addEventListener('click', ()=>{
    createAccModal.style.display = 'none'
})



loginBtn.addEventListener('click', ()=>{
    loginModal.style.display = 'block'
})
cancelLoginModal.addEventListener('click', ()=>{
    loginModal.style.display = 'none'
})