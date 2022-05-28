import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <section className=' mt-10 blog-items bg-violet-50'>


            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary ">How to improve the performance of a React Application?</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">React is one such example of UI framework which is considered best in terms of rendering performance. Although, since it’s virtual DOM is famous for effectively rendering components, it’s still possible to run into performance issues in medium to large web applications.Performance-related problems in web app is not new. Developers have been encountering these issues since a longer period of time. </p>
            </div>
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary"> What are the different ways to manage a state in a React application?</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Managing state is a crucial skill in React because it allows you to make interactive components and dynamic web applications. State is used for everything from tracking form inputs to capturing dynamic data from an API.useReducer — This is an alternative to useState and it can be used for complex state logic. This is my favorite hook because it works just like the Redux library. It accepts a reducer of type: And also an initial state object before returning the new state.</p>
            </div>
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary "> How does prototypical inheritance work?</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Prototypal inheritance inherits behavior and state from the parent object. It inherits the behavior and state at the moment the object is called. When the parent object changes at run-time, the state and behavior of the child objects are affected.Everything in Javascript is an object. So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern </p>
            </div>
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">If we have an array of products. Each product has a name, price, description, etc. How we can implement a search to find products by name?</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Products under a product line are related either by functionality, target market, price range, or brand. Although products in a product line are generally complementary to each other, that does not need to be the case.Product of Array Except Self Given an integer array nums, return an array answer such that answer is equal to the product of all the elements of nums except nums  The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O  time and without using the division operation. </p>
            </div>
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary ">What is a unit test? Why should write unit tests?</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Unit testing is one of the many different types of automated testing. Unit tests exercise very small parts of the application in complete isolation, comparing their actual behavior with the expected behavior. The “complete isolation” part means that, when unit testing, you don’t typically connect your application with external dependencies such as databases, the filesystem, or HTTP services. That allows unit tests to be fast and more stable since they won’t fail due to problems with those external services. </p>
            </div>

        </section>
    );
};

export default Blogs;