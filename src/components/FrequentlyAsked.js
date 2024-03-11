import React, { useState } from 'react'
import { FrequentlyAskedQuestiondetail } from './Getupdata';


export const FrequentlyAskedQuestion = () => {
    const [Question, GetQuestion] = useState(FrequentlyAskedQuestiondetail);
    console.log(Question)
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    {
                        Question.map((data, index) => {
                            return (

                                <div className='col-lg-4 col-md-4 col-12' key={index}>
                                    <div className='background_frequentlyaskedquestion font_roboto' style={{ background: "#f5f6f6" }}>
                                       <div style={{padding:"40px"}}>
                                       <h1 style={{ fontSize: "32px" }}>{data.question}</h1>
                                       <h4 style={{ fontSize: "13px", color:"#231F1E", paddingTop:"5px" }}>{data.para}</h4>
                                       </div>
                                 
                                        <div className='zoom_without_width_bottom'>
                                            <img src={data.image} alt='frquestly' className='img-fluid' style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }} />
                                        </div>

                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}


