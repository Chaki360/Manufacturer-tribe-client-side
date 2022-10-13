import React from 'react';
import './Construction.css'
const Construction = () => {
    return (
        <div className='construction justify-items-center'>
            <div className="construction-card">
                <figure className="px-10">
                    <img className='w-96 rounded-xl' src="https://vignam-website.s3.ap-south-1.amazonaws.com/ezgif.com-gif-maker+(1).gif" alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-2xl font-bold">Interactive equipments</h2>
                    <p className='font-md'>Operate the equipments/apparatus, The way you do in physical labs.</p>

                </div>
            </div>
            <div className="construction-card">
                <figure className="px-10">
                    <img className='w-96 rounded-xl' src="https://vignam-website.s3.ap-south-1.amazonaws.com/ind-gif.gif" alt="" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-2xl font-bold">Industry standard equipments</h2>
                    <p>Operate the equipments/apparatus, The way you do in physical labs.</p>

                </div>
            </div>
            <div className="construction-card">
                <figure className="px-10 ">
                    <img className='w-96 rounded-xl' src="https://www.kaash.eu/gallery/3.Leisure-ts1632859084.gif" alt="" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-2xl font-bold">Customize lighting Services</h2>
                    <p>Operate the equipments/apparatus, The way you do in physical labs.</p>

                </div>
            </div>
        </div>
    );
};

export default Construction;