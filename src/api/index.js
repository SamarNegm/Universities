import data from './data';

export const fetchData = () => {

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            var didSucceed = Math.random() >= 0.5;
            didSucceed ? resolve(data) : reject('Error');
        }, 2000);
    })
}

export const RemoveItem = (index) => {

    return new Promise((resolve, reject) => {

        var didSucceed = Math.random() >= 0.5;
        data = data.splice(index, 1)
        console.log(data);
        didSucceed ? resolve(data) : reject('Error');

    })
}
