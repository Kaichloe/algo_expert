function deviceNamesSystem(devicenames) {
   let seen = {}
   let unqiueDeviceNames = [];
   
   for (const device of devicenames){
       if (!seen[device]){
           seen[device] = 1;
           unqiueDeviceNames.push(device);
       } else {
           seen[device]++;
           const newUnqiueName = `${device}${seen[device] - 1}`
           unqiueDeviceNames.push(newUnqiueName); 
       }
   }
    return unqiueDeviceNames;
}