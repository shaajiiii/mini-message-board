import React from 'react';
import './InputBox.css'

function InputBox() {
    return (
        <div>

            <div className="input-form-contianer">
                <form>
                    <div class="form-group">
                    
                        <input type="text" class="form-control input-title-box" id="exampleFormControlInput1" placeholder="Title" />
                    </div>

                    <div class="form-group">

                        <textarea className="form-control input-msg-box" id="exampleFormControlTextarea1" rows="3" placeholder='Message'>

                        </textarea>
                    </div>

                    <button type="submit" className='submit-button' >Submit</button>
                </form>
            </div>

        </div>
    )
}

export default InputBox
