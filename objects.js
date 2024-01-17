/////// Exercise
// const person = {
//     name: 'Maxine',
//     age: 32,
//     address: {
//         city: 'London',
//         postcode: 'E1 123'
//     },
//     hobbies: ['writing', 'tennis', 'cooking']
// };

// console.log(person.address.city);
// console.log(person.hobbies[1]);


/////// Challenge
const cohort = {
    name: 'May2022',
    id: 1234,
    studentNames: ['John', 'Matt', 'Tom']
};

const showCohortDetails = (cohort) => {
    return `${cohort.id} - ${cohort.name} - ${cohort.studentNames.length} students in this cohort`
};

showCohortDetails(cohort);