export default {
    title: "Oferta",
    name: "offer",
    type: "document",
    fields: [
        {
            title: "Pod kategoria",
            name: "category",
            type: "string",
            options: {
                list: [
                    {title: 'Pomoc Drogowa', value: 'pomoc-drogowa'},
                    {title: 'Transport Maszyn', value: 'transport-maszyn'}
                ],
            }
        },
        {
            title: "Nagłówek",
            name: "header",
            type: "string",
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'category',
                maxLength: 90,
            }
        },
        {
            name: "seo",
            title: "SEO",
            type: "object",
            fields: [
                {
                    title: "Meta Title",
                    name: "meta_title",
                    type: "string",
                },
                {
                    title: "Meta Description",
                    name: "meta_description",
                    type: "text",
                },
                {
                    title: "Meta Keywords",
                    name: "meta_keywords",
                    type: "array",
                    of: [{type: "string"}]
                },
                {
                    title: "Canonical Tag",
                    name: "canonical_tag",
                    type: "string",
                }
            ]
        },
        {
            title: "Zdjęcie w tle",
            name: "background_image",
            type: "image",
        },
        {
            title: "Alt zdjęcia w tle",
            name: "background_image_alt",
            type: "string",
        },
        {
            title: "Tekst pod nagłówkiem",
            description: "Pierwszy widoczny opis, pod nagłówkiem",
            name: "header_desc",
            type: "text"
        },
        {
            title: "Zalety",
            name: "advantages",
            type: "array",
            of: [{
                type: "object",
                fields: [
                    {
                        title: "Nagłówek",
                        name: "advantages_header",
                        type: "string",
                    },
                    {
                        title: "Opis",
                        name: "advantages_desc",
                        type: "text",
                    }
                ]
            }],
        },
        {
            title: "Service Header",
            name: "service_header",
            type: "string"
        },
        {
            title : "Services",
            name : "services",
            type : "array",
            of : [{
                type : "object",
                fields : [
                    {
                        title : "Icon",
                        name : "icon",
                        type : "image"
                    },
                    {
                        title : "Tytuł",
                        name : "title",
                        type : "string"
                    },
                    {
                        title : "Opis",
                        name : "desc",
                        type : "text"
                    }
                ]
            }]
        },
        {
            title: "Jak działamy?",
            name: "how_we_work",
            type: "array",
            of: [{
                type: "object",
                fields: [
                    {
                        title: "Nagłówek",
                        name: "how_we_work_header",
                        type: "string",
                    },
                    {
                        title: "Opis",
                        name: "how_we_work_desc",
                        type: "text",
                    }
                ]
            }],
        },
        {
            title: "Galeria zdjęć",
            name: "gallery",
            type: "array",
            of: [{type: "image"}]
        },
        {
            title: "Faq",
            name: "faq",
            type: "array",
            of: [{
                type: "object",
                fields: [
                    {
                        title: "Pytanie",
                        name: "question",
                        type: "string",
                    },
                    {
                        title: "Odpowiedź",
                        name: "answer",
                        type: "text",
                    }
                ]
            }],
        }
    ]
}