const setPermissionLevel = (permissionLevel, ...names) => {
    // will be in a array
    // console.log(names); 


    names.forEach( (name) => {
        console.log(`${name} now has ${permissionLevel} level access.`);
    })
    // console.log(`${names} now has ${permissionLevel} level access.`);
    
} 
setPermissionLevel('Admin', 'Sumesh', 'Sali')