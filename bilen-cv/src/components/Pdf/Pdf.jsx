import React from 'react';
import ReactToPdf from 'react-to-pdf'

const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [4,2]
};

// import React from 'react'

const Pdf = () => {
  return (
    <div>
        <div>
            <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} x={8.5} y={11.5} scale={0.8}>
                {({toPdf}) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
            <div style={{width: 500, height: 500, background: 'blue'}} ref={ref}/>
        </div>
    </div>
  )
}

export default Pdf

