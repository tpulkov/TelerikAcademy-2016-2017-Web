function YoungestPerson(args) {
    // body...
    var input = args,
        people = [],
        step = 3,
        youngestPerson,
        i;

    for (i = 0; i < input.length; i += step) {
        people.push({
            firstName: input[i] + '',
            secondName: input[i + 1] + '',
            age: +input[i + 2]
        });
    }
    youngestPerson = people.reduce(
        function (a, b) {
            // body...
            return a.age <= b.age ? a : b;
        }
    );
    console.log(youngestPerson.firstName + ' ' + youngestPerson.secondName);
}

// YoungestPerson([
//   'Gosho', 'Petrov', '32',
//   'Bay', 'Ivan', '81',
//   'John', 'Doe', '42'
// ]);
// YoungestPerson([
//   'Penka', 'Hristova', '61',
//   'System', 'Failiure', '88',
//   'Bat', 'Man', '16',
//   'Malko', 'Kote', '72'
// ]);
