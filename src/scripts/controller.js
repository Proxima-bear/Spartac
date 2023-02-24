
export async function fetchPrograms(callback) {
    fetch('http://127.0.0.1:8080/programs')
    .then(response => response.text())
    .then(json => callback(JSON.parse(json)))
}

export function fetchProgramByid(id) {

}



