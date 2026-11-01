// import {createClient} from '@sanity/client'
// import groq from "groq";
//
// export const client = createClient({
//     projectId: 'rmjk3ild',
//     dataset: 'production',
//     useCdn: true, // set to `false` to bypass the edge cache
//     apiVersion: '2024-04-25',
//     token : "sk9gfxjWDL5ftSi2cWyoPHEUf7WNxwetOaN6wKgMaHZQmtAWS19cHpyds3aizCItdZKriT8BIYXZ2eYkknOjbbPpg7pST7xW5sEwtzFEo4RnQdB7tnIUBpfztsFJNmVys13xhVe2TSwNsISZfwAwTM4S3CpJDFrnOlMIW6xDYeCRpEzmZORS"
//
// })
//
// // uses GROQ to query content: https://www.sanity.io/docs/groq
// export async function getPosts() {
//     return client.fetch(
//         groq`*[_type == "news"] | order(publishedAt desc)`
//     )
// }
//
