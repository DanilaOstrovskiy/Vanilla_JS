export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }

}

export type LaptopType = {
    title: string
}

export type UserWithLapTopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = {
    companies: Array<{id: number, title: ""}>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {...u, hair: u.hair / power}
    return copy
}

/*export function moveUser(u: UserWithLapTopType, city: string) {
    return {
        ...u, address: {
            ...u.address,
            city: city
        }
    }

    /!* copy.address = {...copy.address, city: city}*!/

}*/

/*export function upgradeUserLaptop(u: UserWithLapTopType, laptop: string) {
    return {
        ...u,
        laptop: {...u.laptop,
            title: laptop
        }
    }
}*/

/*export function moveUserToOtherHouse(u: UserWithLapTopType & UserWithBooksType, house: number) {
    return {
        ...u, address: {
            ...u.address,
            house: house
        }
    }

}*/

export const removeBook = (u:UserWithLapTopType & UserWithBooksType, bookToRemove: string) => ({...u, books:u.books.filter((b)=> b !==bookToRemove )
})
