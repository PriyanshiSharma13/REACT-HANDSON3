import React, {useState} from "react";

const MyForm = () => {

    const [data1, setdata1]=useState("");
    const [data2, setdata2]=useState("");
    const [data3, setdata3]=useState("");
    const [data, setdata]=useState([]);
    const [back, setback]=useState(false);

    const fetchDataOne = (e) => {
        setdata1(e.target.value);
    }

    const fetchDataTwo = (e) => {
        setdata2(e.target.value);
    }

    const fetchDataThree = (e) => {
        setdata3(e.target.value);
    }

    const submitBtn = (e) => {
        e.preventDefault();
        setdata((store) => {
            return [...store,["Name : ",data1, " | ", "Department : ",data2, " | ", "Rating : ",data3]]
        })
        setdata1('');
        setdata2('');
        setdata3('');
        setback(true);
    }

    const takeMeBack = (e) => {
        setback(false);
    }

    return (
        <>
        <h1 className="formTitle">Employee Feedback Form</h1>
        {
            back === false ?
            <div className="formTable">
                <form onSubmit={submitBtn}>
                    <div className="wrapDetails">
                        <div className="box1">
                            <label htmlFor="name" className="label">Name :</label>
                            <input type="text" className="inputBox" placeholder="e.g. Zac Efron" value={data1} onChange={fetchDataOne} required/>  
                        </div>
                        <div className="vertical"></div>
                        <div className="box2">
                            <label htmlFor="department" className="label">Department :</label>
                            <input type="text" className="inputBox" placeholder="e.g. IT" value={data2} onChange={fetchDataTwo} required/>
                        </div>
                        <div className="vertical"></div>
                        <div className="box3">
                            <label htmlFor="rating" className="label">Rating :</label>
                            <input type="number" className="inputBox" min="1" max="10" placeholder="rate out of 10" value={data3} onChange={fetchDataThree} required/>
                        </div>
                    </div>
                    <button type="submit" className="submitBtn">Submit</button>
                </form>
            </div> :
            <div className="pushBox">
                <div className="fetchData">
                    {
                        data.map((theValue) => {
                            return <div className="storedData">{theValue}</div>
                        })
                    }
                </div>
                <div className="back">
                    <button type="submit" className="backBtn" onClick={takeMeBack}>Go Back</button>
                </div>
            </div> 
        }
        </>
    );
}

export default MyForm;
