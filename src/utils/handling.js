import history from 'configs/history';

const handling = {};
handling.clickTargetUrl = url => () => {
    history.push(url);
};

handling.redirectUrl = (url) => {
    history.push(url);
};

handling.refreshPage = () => {
    history.go(0);
};

handling.previousPage = () => {
    history.go(-1);
};

handling.pathname = () => {
    return history.location.pathname;
};

export default handling;
