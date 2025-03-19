import React, { useContext } from 'react'
import './Main.css'
import {assets} from "../../assets/assets"
import { Context } from '../../Context/Context'

const Main = () => {
    const { onSent,setRecnetPrompt,recnetPrompt,showResult,loading,resultData,input,setinput} = useContext(Context);
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">


            {!showResult?
            <>
                <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can i help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>beautiful places in the world</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>things to plan for a trip</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>how to balance work and life?</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>how to be happy?</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            :<div className="result">
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recnetPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?
                    <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                </div>
            </div>    
        }

            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setinput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here..'/>
                    <div>
                        <img src={assets.gallery_icon}  />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:
                        null}
                    </div>
                </div>
                <p className='bottom-info'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main