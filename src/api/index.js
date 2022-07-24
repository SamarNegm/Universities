import data from './data';

export const fetchData = () => {

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            var didSucceed = Math.random() >= 0.1;
            didSucceed ? resolve(data) : reject('Error');
        }, 2000);
    })
}

export const RemoveItem = (index) => {
    data = data.splice(index, 1)

    return data;

}
export const UpdateItem = (index, uni) => {
    return new Promise((resolve, reject) => {

        var didSucceed = Math.random() >= 0.5;
        data[index] = uni;
        console.log(data);
        didSucceed ? resolve(data) : reject('Error');

    })
}
export const CreateItem = (uni) => {
    return new Promise((resolve, reject) => {

        data[data.length] = uni;
        console.log(data);
        resolve(data);


    })
}