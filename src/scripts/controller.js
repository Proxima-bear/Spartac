
 export async function fetchPrograms(callback) {
fetch('https://f7ff-2a01-540-4fe-e800-e871-88cc-d8f8-6364.eu.ngrok.io/programs')
    .then(response => callback(JSON.parse(response.json())))
}

export function fetchProgramByid(id) {

}



