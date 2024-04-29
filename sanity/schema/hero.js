export default {
    title: "Hero",
    name: "hero",
    type: "document",
    fields: [
        {
            title: "Zdjęcie w tle",
            name: "image",
            type: "image"
        },
        {
            title: "Alt zdjęcia",
            name: "imageAlt",
            type: "string"
        },
        {
            title: "Nagłówek",
            name: "header",
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            title: "Opis",
            name: "desc",
            type: "text"
        },
        {
            title : "Tekst do przycisku",
            name: "button_text",
            type: "string"
        },
    ]
}