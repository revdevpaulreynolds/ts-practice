interface Props {
    name?: string
}

const Greet = ({name}: Props): JSX.Element => {

    // const [name, setName] = useState('')
    return (
        <h2 className="mt-3">
            Thank you for the visit{name && `, ${name}`}!
        </h2>
        
    );
}

export default Greet;