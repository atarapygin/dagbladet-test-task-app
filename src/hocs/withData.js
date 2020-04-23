import React from 'react';
import { useSelector } from 'react-redux';

const withData = WrappedComponent => () => {
    const loading = useSelector(state => state.loading);
    const data = useSelector(state => state.data);

    return <WrappedComponent loading={loading} data={data} />;
}

export default withData;