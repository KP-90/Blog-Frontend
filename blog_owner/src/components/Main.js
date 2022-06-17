import Card from './Card'
const Main = (props) => {
    let filler = {
        _id:0,
        text: "This is filler",
        published: false,
        timestamp: "2022-06-14T16:19:41.520+00:00",
    }
    return(
        <div className='content'>
            {props.data ? (
                props.data.map((item, i) => {
                    return <Card i={i+1} item={item} key={item._id}/>
                })
            ) : (
                <Card i={0} item={filler}/>
            )}
        </div>
    )
}

export default Main