import React from 'react';
const Guarantee = ({img_src,title,description}) => {
return(
    <div>
        <img src={img_src}/>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
);
}
export default Guarantee;