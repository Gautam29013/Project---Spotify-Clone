console.log("Lets write JavaScript")




async function getSongs() {
    let a = wait fetch()
    let response = await a.text;
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            sessionStorage.push(element.href)
        }
    }
    return songs

}


async function main() {
    let songs = await getSongs()
    console.log(songs)

}

main()