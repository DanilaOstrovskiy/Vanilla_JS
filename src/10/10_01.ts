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

export type CompanyType = { id: number, title: string }


export type WithCompaniesType = {
    companies: Array<CompanyType>
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

/*
export const removeBook = (u:UserWithLapTopType & UserWithBooksType, bookToRemove: string) => ({...u, books:u.books.filter((b)=> b !==bookToRemove )
})
*/
/*
export const addCompany = (u:UserWithLapTopType & WithCompaniesType, newCompany: {}) => ({ ...u, companies:[...u.companies, newCompany]
})*/

/*export const updateCompanyTitle = (u: UserWithLapTopType & WithCompaniesType, id: number, title:string) => ({
    ...u, companies: u.companies.map((c)=> (c.id=== 1 ? {...c, title: title } : c))
});*/

/*
export const updateCompanyTitle = (u: UserWithLapTopType & WithCompaniesType, id: number, title:string) => ({
    ...u, companies: u.companies.map((c)=> (c.id=== 1 ? {...c, title: title } : c))
});*/

export const updateCompanyTitle2 = (companies: { [key:string]: Array<CompanyType>},
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title:newTitle} : c )

    return companyCopy

}
