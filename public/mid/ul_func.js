const ul_func = (ewq) => {

    return(
        `
        <ul>
        {
            ewq.map(rew =>
            return <li>{rew}</li>
        )
        }
        </ul>
        `
    );
}

export default ul_func();