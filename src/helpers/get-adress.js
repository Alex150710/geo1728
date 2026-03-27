export async function getAddress(ip = '8.8.8.8') {
     console.log('mapData555');
    const response = await fetch(`
        https://geo.ipify.org/api/v1?apiKey=at_PP2EhhITm45r79IIUmgO41jJ6g23T&ipAddress=${ip}`);

    return await response.json();
}

//at_PP2EhhITm45r79IIUmgO41jJ6g23T
