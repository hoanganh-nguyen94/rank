function gradingStudents(grades) {
    const result = [];
    grades.forEach(g => {
        if (g < 38) {
            result.push(g)
        } else {
            if ((g % 5) >= 3) {
                result.push(Math.round(g / 5) * 5)

            } else {
                result.push(g)

            }
        }
    });
    return result;
}

console.log(gradingStudents([73, 67, 38, 33]));

