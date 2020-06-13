const supported = ('contacts' in navigator && 'ContactsManager' in window);


async function openUpContact(){
    console.log("test");
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
    var names = [''];
    contacts.forEach((contact) => 
        names.push(contact.name)
    )
    window.alert(names);
}