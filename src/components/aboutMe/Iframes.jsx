import React from 'react';

const Iframes = (props) => {
    return (
        <div dangerouslySetInnerHTML={{__html: props.iframe ? props.iframe : ''}} >
            
        </div>
    );
};

export default Iframes;