export default function Button ({
    title="Default",
    color="#00beef"
}){
    return(
        <button style={{backgroundColor: color}}>{title}</button>
    )
}