const supported = ('contacts' in navigator && 'ContactsManager' in window);


async function openUpContact(){
    console.log("test");
    window.alert(supported);
    if(supported){
        const props = ['name'];
        const opts = {multiple: true};
        try {
        const contacts = await navigator.contacts.select(props, opts);
        handleResults(contacts);
        } catch (ex) {
        // Handle any errors here.
            window.alert(ex);
        }
    }
}

  
function handleResults(contacts) {
    ulResults.classList.toggle('success', true);
    ulResults.classList.toggle('error', false);
    ulResults.innerHTML = '';
    renderResults(contacts);
}
  
  function renderResults(contacts) {
    
    window.alert(contacts);
  }