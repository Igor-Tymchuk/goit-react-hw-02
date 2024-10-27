


const Options = ({ update, reset, total }) => {
    return (
        <div>
            <button type="button" onClick={() => update("good")}>Good</button>
            <button type="button" onClick={() => update("neutral")}>Neutral</button>
            <button type="button" onClick={() => update("bad")}>Bad</button>
            {total ? <button type="button" onClick={() => reset()}>Reset</button> : ""}
        </div>
    );
}

export default Options;