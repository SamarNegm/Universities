import data from './data';

export const fetchData = () => {

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            var didSucceed = Math.random() >= 0.5;
            didSucceed ? resolve(data) : reject('Error');
        }, 2000);
    })
}

