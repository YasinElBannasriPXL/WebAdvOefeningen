import PersonService from '../../../src/js/services/PersonService';
import PersonRepository from '../../../src/js/repositories/PersonRepository';

const persons = [[{id:1, name:"test1"}],[{id:2, name:"test2"}]];
const namesStringToMatch = "GeertSofieTim";

describe('retrieveNameById',
    () => {
        test.each(persons)(
            'given a person the name in uppercase is returned',
            async (person) => {
                let personRepository = new PersonRepository();
                let spy = jest.spyOn(personRepository, 'findById')
                    .mockImplementation(() => person);
                let personService = new PersonService(personRepository);
                let name = await personService.retrieveNameById(person.id);
                expect(spy).toHaveBeenCalledWith(person.id);
                expect(name).toBe(person.name.toUpperCase());
                spy.mockRestore();
        });

    }
);

describe('findNames', () => {
    test('findNames should return an array with names alphabetically sorted', async () => {
        let personRepository = new PersonRepository();
        let personService = new PersonService(personRepository);
        let concatenatedNames = "";
        Array.prototype.forEach.call(await personService.findNames(), p => concatenatedNames += p);
        expect(concatenatedNames).toBe(namesStringToMatch);
    })
})


