import React, { useRef } from 'react';

export default function Login() {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()]; // Array of refs for OTP input fields
  const handleChange = (index, value) => {
    if (value.length === 1 && index < inputRefs.length - 1) {
      
      inputRefs[index + 1].current.focus(); // Move focus to the next input field
    }
  };

  const handleOpt=()=>{
    const otp = inputRefs.map(ref => ref.current).join('');
    console.log("otp: "+otp);

  }
  return (
    <div>
      <form>
        <div className='container'>
          <div className='m-2'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' className='form-control' id='email' placeholder='name@gmail.com' style={{ width: '500px' }}></input>
          </div>
          <div className='m-2'>
            <label htmlFor='otp' className='form-label'>OTP</label>
            <div className='d-flex p-1' style={{ gap: '10px' }}>
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  ref={inputRefs[index]}
                  type='text'
                  className='form-control'
                  id={`otp${index}`}
                  placeholder='0'
                  maxLength={1}
                  onChange={(e) => handleChange(index, e.target.value)}
                  style={{ width: '35px' }}
                />
              ))}
            </div>
          </div>
          <button type="button" className="btn btn-dark m-3" onClick={handleOpt()}>Verify</button>
        </div>
      </form>
    </div>
  );
}
