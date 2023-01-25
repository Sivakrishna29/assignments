const Shimmar = () => {
    return(
        <div className="restaurant-list">
            {
                Array(15).
                fill("").
                map((e, index) => (
                    <div key={index} className="shimmar-card"></div>
                ))
            }
        </div>
    ) 
}

export default Shimmar;
