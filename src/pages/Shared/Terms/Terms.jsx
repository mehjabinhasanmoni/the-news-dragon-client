import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
           <h2>Our Terms & Conditions</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aliquam beatae molestiae cum molestias sit dolores? Quos facere voluptatum asperiores?</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in voluptatum debitis vel at, cumque nesciunt quisquam assumenda quaerat vero, ullam blanditiis. Fuga et ut ea unde cupiditate quae. Provident fuga tempora alias, repellat quis rem dolores possimus commodi iure sunt in accusantium dolor esse officiis accusamus porro culpa libero deleniti fugit. Laudantium, quod! Nemo dolor consectetur modi et dolores?</p>
           <p>Go back to  <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;