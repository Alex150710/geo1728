export function addOffset(map) {
     console.log("offset was added");
    const offsetY = map.getSize().y*0.1;
    // console.log("offsetY", offsetY);

    // const offpan = map.panBy([200, 300]);
    
    // console.log("offpan", offpan);
    
    map.panBy([0, -offsetY], {animate: false});
}