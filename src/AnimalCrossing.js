import React, {useEffect, useState} from 'react'

export default function AnimalCrossing() {

    const [fishData, setFishData] = useState("Loading...");

    useEffect(() =>{
        var getFish = async() => {
            var fetchedData = await fetch("https://acnhapi.com/v1/fish");
            setFishData(await fetchedData.json());
        };
        getFish();
        console.log("Fetching");
    }, []);


    return (
        <div>
            {            Object.keys(fishData).map((key, i) => {

            return (
            <div className="ACNH-Card">
                <p className="ACNH-Name">{key}</p>
                <p className="ACNH-Price">{fishData[key].price}</p>
                <p className="ACNH-Catch-Phrase"></p>
                <img src={fishData[key].image_uri} alt="fish" className="ACNH-Image"/>
            </div>)
            })}
        </div>
    )
}
