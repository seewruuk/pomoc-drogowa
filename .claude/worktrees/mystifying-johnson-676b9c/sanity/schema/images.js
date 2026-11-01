export default {
    title: "Zdjęcia na stronie głównej",
    name: "images",
    type: "document",
    fields : [
        {
            title: "Nagłówek",
            name: "header",
            type: "string"
        },
        {
            title: "Zdjęcia",
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