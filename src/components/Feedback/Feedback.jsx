const Feedback = ({ clicks, total }) => {
    return <ul>
        <li>
            Good: <span>{clicks.good}</span>
        </li>
        <li>
            Neutral: <span>{clicks.neutral}</span>
        </li>
        <li>
            Bad: <span>{clicks.bad}</span>
        </li>
        <li>
            Total: <span>{total}</span>
        </li>
        <li>
            Positive: <span>{Math.round(((clicks.good + clicks.neutral) / total) * 100)}%</span>
        </li>
    </ul>
}

export default Feedback;