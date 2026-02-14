import React from 'react';
import { blog01, blog02, blog03 } from '../../../constant/images/images';
import { div, title } from 'motion/react-client';

const BlogCard = ({ image, title, author, date, excerpt }) => {
    return (
        <div className="group cursor-pointer">
            {/* Image Container with Overflow Hidden for Zoom Effect */}
            <div className="overflow-hidden rounded-lg mb-6">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-[350px] object-cover transform  duration-700 ease-out group-hover:scale-110"
                />
            </div>

            <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-sm text-gray-500">
                    by <span className="text-gray-600">{author}</span> on {date}
                </p>
                <p className="text-gray-600 leading-relaxed">
                    {excerpt}
                </p>
            </div>
        </div>
    );
};

const OurBlog = () => {
    const blogPosts = [
        {
            id: 1,
            image: blog01,
            title: 'Black Friday Guide: Best Sales & Discount Codes',
            author: 'fashe-theme Admin',
            date: 'Dec 28, 2017',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...'
        },
        {
            id: 2,
            image: blog02, 
            title: 'The White Sneakers Nearly Every Fashion Girls Own',
            author: 'fashe-theme Admin',
            date: 'Dec 28, 2017',
            excerpt: 'Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et...'
        },
        {
            id: 3,
            image: blog03,  
            title: 'New York SS 2018 Street Style: By Annina Mislin',
            author: 'fashe-theme Admin',
            date: 'Dec 28, 2017',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...'
        }
    ];

    return (
        <div className="w-full bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 tracking-tight">
                    OUR BLOG
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {blogPosts.map((post) => (
                        <BlogCard
                            key={post.id}
                            image={post.image}
                            title={post.title}
                            author={post.author}
                            date={post.date}
                            excerpt={post.excerpt}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurBlog;