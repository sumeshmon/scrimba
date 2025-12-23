/*
Challenge:
1. Wire up this search pattern app so that inputting a full or partial name brings up the matching contact or contacts.
*/
import { contactsArr } from "./contactData.js";
const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')


patternSearchSubmit.addEventListener('click', function(){
    findMatchingContacts (contactsArr, patternSearchInput.value)
})

function findMatchingContacts(contactsArr, pattern){    
    contactDisplay.innerHTML = ''     
    // console.log(pattern);
    const regex = new RegExp(pattern, 'i')
    contactsArr.filter( function (contact){
        return regex.test(contact.name)
    })
    .forEach(contact => {
        renderContact(contact)
    });
}
function renderContact (contactObj){
    const {name, email, phone} = contactObj
    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')
    const nameElem = document.createElement('p')
    const emailElem = document.createElement('p')
    const phoneElem = document.createElement('p')
    nameElem.innerText = name
    emailElem.innerText = email
    phoneElem.innerText = phone
    contactCard.appendChild(nameElem)
    contactCard.appendChild(emailElem)
    contactCard.appendChild(phoneElem)
    contactDisplay.appendChild(contactCard)

}

