export default {
    title: "Sekcja O nas",
    name: "about",
    type: "document",
    fields: [
        {
            title: "Nagłówek",
            name: "header",
            type: "string",
        },
        {
            title: "Opis",
            name: "description",
            type: "text",
        },
        {
            title: "Galeria zdjęć",
            name: "images",
            type: "array",
            of: [
                {
                    type: "object",
                    fields : [
                        {
                            title: "Zdjęcie",
                            name: "image",
                            type: "image"
                        },
                        {
                            title: "Alt zdjęcia",
                            name: "imageAlt",
                            type: "string"
                        }
                    ]

                }
            ],
            options: {
                layout: "grid"
            }
        }
    ]
}