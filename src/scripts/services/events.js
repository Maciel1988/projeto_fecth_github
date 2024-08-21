import { baseUrl } from "../variables.js";

async function getEvents(userName) {
    const repositoriesResponse = await fetch(`${baseUrl}/${userName}/events`);
    return await repositoriesResponse.json()
}

export { getEvents }