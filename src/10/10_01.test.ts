import {
    addCompany,
    makeHairstyle,
    removeBook,
    updateCompanyTitle, updateCompanyTitle2,
    UserType,
    UserWithLapTopType,
    WithCompaniesType
} from './10_01'


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
})

test('update company', () => {

    let companies = {
        'Dimych': [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}],
        'Artem': [{id: 2, title: 'IT-INCUBATOR'}]
    }


    const copy = updateCompanyTitle2(companies, "Dimych", 1, "EPAM")


    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('EPAM')



})