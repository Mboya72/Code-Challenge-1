function marks(m) {
    if (m > 79) {
        console.log('your grade: A');
    }
    else if (m => 60 && m <= 79) {
        console.log('Your grade: B')
    }
    else if (m > 59 && m < 60) {
        console.log('Your grade: C')
    }
    else if (m => 40 && m <= 49) {
        console.log('Your grade: D')
    }
    else if (m < 40) {
        console.log('Your grade: E')
    }
    return 'You Entered:' + m;
}
const Grade = marks(60);
console.log(Grade);