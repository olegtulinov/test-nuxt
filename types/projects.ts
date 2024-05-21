export type Projects = {
    id: number,
    title: string,
    slug: string,
    project_url: null,
    image: string,
    image_dark: string,
    description: string,
    geo: {
        lat: null,
        lng: null
    },
    categories: {
        id: number,
        name: string
    }[]
}[]