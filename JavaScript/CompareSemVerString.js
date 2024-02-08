// Question: compare 2 semver strings.
// Example : 
// compare('12.1.0', '12.0.9')
// 1, meaning first one is greater

// compare('12.1.0', '12.1.2')
// -1, meaning latter one is greater

// compare('5.0.1', '5.0.1')
// 0, meaning they are equal.

function compare(v1, v2) {
    // const v1Components = v1.split('.').map(num => Number(num));
    const v1Components = v1.split('.').map(Number);
    // const v2Components = v2.split('.').map(num => Number(num));
    const v2Components = v2.split('.').map(Number);

    for(let i = 0; i < 3; i++) {
        if(v1Components[i] > v2Components[i]){
            return 1;
        } else if(v1Components[i] < v2Components[i]){
            return -1;
        }
    }

    return 0;
}