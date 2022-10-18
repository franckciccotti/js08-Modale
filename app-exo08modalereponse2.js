const attBtn = document.querySelector('#btn')
const modal = document.querySelector('#modal')
const modalClose = document.querySelector('.close')



document.addEventListener('click', (e) => {
    if(e.target === attBtn) {
   
        e.preventDefault()

        // modal.classList.remove('hide')
        modal.style.display = 'block'
        
    // } else if(modal.classList.contains !== 'hide') {
    } else if(modal.style.display === 'block') {

        if(e.target === modal || e.target === modalClose) {

            // modal.classList.add('hide')
            modal.style.display = 'none'

            
        }
    
    }
})