import React from 'react';
import CommentCard from './commentCard';
import CommentInput from './commentInput';


const comments = [
    {
        userImage: 'https://via.placeholder.com/40',  // Replace with actual image URL
        userName: 'Jane S',
        designer: 'Maria Gomez',
        comment: "I recently used your interior design services for my living room and I couldn't be happier! The team really listened to my needs and...",
    },
    {
        userImage: 'https://via.placeholder.com/40',  // Replace with actual image URL
        userName: 'John D',
        designer: 'Maria Gomez',
        comment: 'Working with your team was a breeze. They were professional, attentive, and really knew how to bring my vision to life. My home office...',
    },
    {
        userImage: 'https://via.placeholder.com/40',  // Replace with actual image URL
        userName: 'Tom H',
        designer: 'Maria Gomez',
        comment: "I've always struggled with making my small apartment feel cozy and inviting, but your interior design services completely transformed...",
    },
    {
        userImage: 'https://via.placeholder.com/40',  // Replace with actual image URL
        userName: 'Jane S',
        designer: 'Maria Gomez',
        comment: "I recently used your interior design services for my living room and I couldn't be happier! The team really listened to my needs and...",
    },
    {
        userImage: 'https://via.placeholder.com/40',  // Replace with actual image URL
        userName: 'John D',
        designer: 'Maria Gomez',
        comment: 'Working with your team was a breeze. They were professional, attentive, and really knew how to bring my vision to life. My home office...',
    },
    {
        userImage: 'https://via.placeholder.com/40',  // Replace with actual image URL
        userName: 'Tom H',
        designer: 'Maria Gomez',
        comment: "I've always struggled with making my small apartment feel cozy and inviting, but your interior design services completely transformed...",
    },
    // Add more comments as needed
];

const CommentsList: React.FC = () => {
    return (
        <div className='p-4 border rounded-lg mt-4 h-[44rem]'>
            <h1 className='text-xl font-bold mb-4 text-slate-600'>Project Comments</h1>
            <div className="overflow-y-auto h-[80%]">
                {comments.map((comment, index) => (
                    <CommentCard key={index} {...comment} />
                ))}
            </div>
            <CommentInput />
        </div>
    );
};

export default CommentsList;
