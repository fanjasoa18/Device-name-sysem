
let scan = (folder) => {
    let count = {}
    for (let i in folder) {
        if (folder[i] in count)
            console.log(folder[i] + count[folder[i]]);
        else {
            count[folder[i]] = 0
            console.log(folder[i])
        }
        count[folder[i]]++
    }
}



// some test
let foldernames = ["one", "one", "two", "one", "three", "one", "three"]
scan(foldernames)

