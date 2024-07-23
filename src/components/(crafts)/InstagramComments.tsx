"use client"

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, MessageCircle, Send, MoreHorizontal, Bookmark, Image } from 'lucide-react';

// Types
interface Comment {
  id: string;
  username: string;
  text: string;
  likes: number;
  timestamp: string;
  profilePic: string;
}

interface Post {
  id: string;
  username: string;
  caption: string;
  imageUrl: string;
  likes: number;
  commentCount: number;
  postedDate: string;
  location: string;
}

// Utility function to generate sample comments
const generateSampleComments = (count: number): Comment[] => {
  const comments: Comment[] = [];
  for (let i = 0; i < count; i++) {
    comments.push({
      id: `comment-${i}`,
      username: `user${Math.floor(Math.random() * 1000)}`,
      text: `This is comment ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      likes: Math.floor(Math.random() * 100),
      timestamp: `${Math.floor(Math.random() * 4) + 1}w`,
      profilePic: `https://i.pravatar.cc/150?img=${i + 1}`,
    });
  }
  return comments;
};

// Sample post data
const samplePost: Post = {
  id: 'post-1',
  username: 'sampleuser',
  caption: 'This is a sample Instagram post caption.',
  imageUrl: '/instagram-comments/post.png',
  likes: 1234,
  commentCount: 123,
  postedDate: '23 June',
  location: 'New York',
};

// InstagramPost component
// InstagramPost component
const InstagramPost: React.FC<{ post: Post; onViewComments: () => void }> = ({ post, onViewComments }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="bg-white border border-gray-300 rounded-md overflow-hidden w-full">
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={`https://i.pravatar.cc/150?u=${post.username}`} alt={post.username} className="w-8 h-8 rounded-full mr-2" />
          <div>
            <p className="font-bold">{post.username}</p>
            <p className="text-sm text-gray-500">{post.location}</p>
          </div>
        </div>
        <div className="flex items-center">
          <button 
            className={`px-2 py-1 rounded-md text-sm mr-2 ${isFollowing ? 'bg-gray-200 text-black' : 'bg-blue-500 text-white'}`}
            onClick={() => setIsFollowing(!isFollowing)}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
          <MoreHorizontal className="w-6 h-6" />
        </div>
      </div>
      <img src={post.imageUrl} alt="Instagram Post" className="w-full h-auto" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex space-x-4">
            <Heart 
              className={`w-6 h-6 cursor-pointer ${isLiked ? 'text-red-500 fill-current' : ''}`} 
              onClick={() => setIsLiked(!isLiked)}
            />
            <MessageCircle className="w-6 h-6 cursor-pointer" onClick={onViewComments} />
            <Send className="w-6 h-6 cursor-pointer" />
          </div>
          <Bookmark 
            className={`w-6 h-6 cursor-pointer ${isBookmarked ? 'text-yellow-500 fill-current' : ''}`}
            onClick={() => setIsBookmarked(!isBookmarked)}
          />
        </div>
        <p className="font-bold mb-1">{post.likes} likes</p>
        <p><span className="font-bold">{post.username}</span> {post.caption}</p>
        <button
          onClick={onViewComments}
          className="text-gray-500 text-sm mt-2 focus:outline-none"
        >
          View all {post.commentCount} comments
        </button>
        <p className="text-gray-400 text-xs mt-1">{post.postedDate}</p>
      </div>
    </div>
  );
};

// CommentItem component
const CommentItem: React.FC<{ comment: Comment }> = ({ comment }) => {
  return (
    <div className="flex items-start mb-4">
      <img src={comment.profilePic} alt={comment.username} className="w-8 h-8 rounded-full mr-2" />
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <span className="font-bold">{comment.username}</span>
            <span className="text-gray-500 text-xs ml-2">{comment.timestamp}</span>
          </div>
          <div className="flex items-center">
            <Heart className="w-4 h-4 text-gray-500 mr-1" />
            <span className="text-gray-500 text-xs">{comment.likes}</span>
          </div>
        </div>
        <p className="mt-1">{comment.text}</p>
        <button className="text-gray-500 text-xs mt-1">Reply</button>
      </div>
    </div>
  );
};

// CommentSection component
const CommentSection: React.FC<{
  comments: Comment[];
  loading: boolean;
  onDragEnd: (event: any, info: any) => void;
  loadMoreComments: () => void;
}> = ({ comments, loading, onDragEnd, loadMoreComments }) => {
  const { ref: loadMoreRef, inView } = useInView();
  const [height, setHeight] = useState('75%');

  useEffect(() => {
    if (inView && !loading) {
      loadMoreComments();
    }
  }, [inView, loading, loadMoreComments]);

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0, height }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.y < -50) {
          setHeight('100%');
        } else if (info.offset.y > 50) {
          setHeight('75%');
        }
        onDragEnd(_, info);
      }}
      className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl shadow-lg overflow-hidden w-full max-w-md mx-auto"
    >
      <div className="absolute top-0 left-0 right-0 bg-white p-4 border-b border-gray-200 z-10">
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
        <h2 className="text-lg font-bold">Comments</h2>
      </div>
      <div className="overflow-y-auto h-full pt-20 pb-16 px-4 scrollbar-hide">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
        {loading && (
          <div className="text-center py-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-6 h-6 border-t-2 border-blue-500 rounded-full mx-auto"
            />
          </div>
        )}
        <div ref={loadMoreRef} className="h-1" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 flex items-center">
        <img src="https://i.pravatar.cc/150?img=1" alt="Your profile" className="w-8 h-8 rounded-full mr-2" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-grow border border-gray-300 rounded-full px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
        />
        <Image className="w-6 h-6 text-gray-500 cursor-pointer" />
      </div>
    </motion.div>
  );
};

// Main InstagramComments component
const InstagramComments: React.FC = () => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const loadMoreComments = useCallback(async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newComments = generateSampleComments(10);
    setComments((prevComments) => [...prevComments, ...newComments]);
    setLoading(false);
  }, []);

  const handleViewComments = () => {
    setShowComments(true);
    if (comments.length === 0) {
      loadMoreComments();
    }
  };

  const handleDragEnd = (_:any, info:any) => {
    if (info.offset.y > 100) {
      setShowComments(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowComments(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-2">
      <div className="relative w-full max-w-md mx-auto" ref={containerRef}>
        <InstagramPost post={samplePost} onViewComments={handleViewComments} />
        <AnimatePresence>
          {showComments && (
            <CommentSection
              comments={comments}
              loading={loading}
              onDragEnd={handleDragEnd}
              loadMoreComments={loadMoreComments}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InstagramComments;