
export type ArticleProps = {
    author: string,
    content: string,
    created_at: string,
    description: string,
    id: number,
    title: string,
    image?: string,
    published_at?: string,
    url?: string,
    updated_at: string,
};

export type LoginProps = {
    email: string,
    password: string
}

export type RegisterProps = {
    email: string,
    password: string
    first_name: string
    last_name: string
}

export type UserDetailsProps = {
    email: string,
    first_name: string,
    last_name: string,
    authors: string[],
    sources: string[],
}

export type FilterProps = {
    // category: string,
    date: string
    source: string
}