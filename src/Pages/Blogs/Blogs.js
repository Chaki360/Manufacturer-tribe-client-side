import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <section className=' mt-10 blog-items bg-violet-50'>


            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary ">How to improve the performance of a React Application?</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Node JS Isn't any language rather It's a cross platform, open-source,server side runtime environment. It's allows javascript code to be run on server or even outside of the browser.
                    On the other hand javascript is a lightweight, object-oriented scripting language. It's used to build dynamic HTML pages with interactive effects on webpage or any other application.</p>
            </div>
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary"> What are the different ways to manage a state in a React application?</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">A JSON Web Token (or JWT) is simply a JSON payload containing a particular claim. The key property of JWTs is that in order to confirm if they are valid we only need to look at the token itself Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            </div>
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary "> How does prototypical inheritance work?</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">SQL	Databases are categorized as Relational Database Management System on the other hand NoSQL databases are categorized as Non-relational or distributed database system.	SQL databases have fixed or static or predefined schema but NoSQL databases have dynamic schema.SQL databases use a powerful language "Structured Query Language" to define and manipulate the data but In NoSQL databases, collection of documents are used to query the data. It is also called unstructured query language. It varies from database to database. </p>
            </div>
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">If we have an array of products. Each product has a name, price, description, etc. How we can implement a search to find products by name?</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">SQL	Databases are categorized as Relational Database Management System on the other hand NoSQL databases are categorized as Non-relational or distributed database system.	SQL databases have fixed or static or predefined schema but NoSQL databases have dynamic schema.SQL databases use a powerful language "Structured Query Language" to define and manipulate the data but In NoSQL databases, collection of documents are used to query the data. It is also called unstructured query language. It varies from database to database. </p>
            </div>
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary ">What is a unit test? Why should write unit tests?</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">SQL	Databases are categorized as Relational Database Management System on the other hand NoSQL databases are categorized as Non-relational or distributed database system.	SQL databases have fixed or static or predefined schema but NoSQL databases have dynamic schema.SQL databases use a powerful language "Structured Query Language" to define and manipulate the data but In NoSQL databases, collection of documents are used to query the data. It is also called unstructured query language. It varies from database to database. </p>
            </div>

        </section>
    );
};

export default Blogs;