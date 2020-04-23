import { createActionAsync } from 'redux-act-async';

export const fetchData = createActionAsync('FETCH_DATA', () => {
    return fetch('https://storage.googleapis.com/aller-structure-task/test_data.json')
    .then(res => res.json())
    .catch(error => {
        throw error;
    });
});

