"use client"

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, MessageCircle, Send, MoreHorizontal, Bookmark, EllipsisVertical, Sticker } from 'lucide-react';
import Image from 'next/image';

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
  caption: 'this is a sample Instagram post caption.',
  imageUrl: '/instagram-comments/post.png',
  likes: 1234,
  commentCount: 123,
  postedDate: '23 June',
  location: 'New York',
};

// InstagramPost component
const InstagramPost: React.FC<{ post: Post; onViewComments: () => void }> = ({ post, onViewComments }) => {
  const [isLiked, setIsLiked] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="bg-white border border-gray-300 rounded-md overflow-hidden w-full">
      <div className="p-3 flex justify-between items-center">
        <div className="flex items-center">
        <Image 
          src={`https://i.pravatar.cc/150?u=${post.username}`}
          alt={post.username}
          width={32}
          height={32}
          className="rounded-full mr-2"
        />
          <div>
            <p className="font-bold text-sm">{post.username}</p>
            <p className="text-xs text-gray-500">{post.location}</p>
          </div>
        </div>
        <div className="flex items-center">
          <button 
            className={`px-3 py-1 rounded-md text-sm mr-2 ${isFollowing ? 'bg-gray-200 text-black' : 'bg-blue-500 text-white'}`}
            onClick={() => setIsFollowing(!isFollowing)}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
          <EllipsisVertical className="w-6 h-6" />
        </div>
      </div>
      <Image 
        src={post.imageUrl}
        alt="Instagram Post"
        width={100}
        height={100}
        layout="responsive"
        className="w-full h-auto"
      />
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
            className={`w-6 h-6 cursor-pointer ${isBookmarked ? 'text-blue-500 fill-current' : ''}`}
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
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(comment.likes);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prevCount => prevCount - 1);
    } else {
      setLikeCount(prevCount => prevCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex items-start mb-4">
      <Image 
        src={comment.profilePic}
        alt={comment.username}
        width={36}
        height={36}
        className="rounded-full mr-2 mt-1"
      />
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <span className="font-bold text-xs">{comment.username}</span>
            <span className="text-gray-500 text-xs mx-2">{comment.timestamp}</span>
          </div>
          <div className="flex items-center">
            <button 
              onClick={handleLike}
              className="focus:outline-none"
            >
              <Heart 
                className={`w-4 h-4 mr-1 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-500'}`} 
              />
            </button>
            <span className="text-gray-500 text-xs">{likeCount}</span>
          </div>
        </div>
        <p className="text-sm font-medium">{comment.text}</p>
        <button className="text-gray-500 text-xs mt-1">Reply</button>
      </div>
    </div>
  );
}

// CommentSection component
interface CommentSectionProps {
  comments: Comment[];
  loading: boolean;
  onDragEnd: (event: any, info: any) => void;
  loadMoreComments: () => void;
  isVisible: boolean;
}

const CommentSection = React.forwardRef<HTMLDivElement, CommentSectionProps>(
  ({ comments, loading, onDragEnd, loadMoreComments, isVisible }, ref) => {
    const { ref: loadMoreRef, inView } = useInView();
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
      if (inView && !loading) {
        loadMoreComments();
      }
    }, [inView, loading, loadMoreComments]);

    return (
      <motion.div
        ref={ref}
        initial={{ y: '100%' }}
        animate={{ y: isVisible ? 0 : '100%', height: isExpanded ? '95%' : '75%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.y < -50 && !isExpanded) {
            setIsExpanded(true);
          } else if (info.offset.y > 50 && isExpanded) {
            setIsExpanded(false);
          }
          onDragEnd(_, info);
        }}
        className="fixed inset-x-0 bottom-4 bg-white rounded-t-2xl shadow-lg overflow-hidden w-full max-w-md mx-auto"
      >
        <div className="absolute top-0 left-0 right-0 bg-white p-4 border-b border-gray-200 z-10">
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-2" />
          <h2 className="text-lg font-bold text-center">Comments</h2>
        </div>
        <motion.div 
          className="overflow-y-auto pt-24 px-4 scrollbar-hide"
          animate={{ height: isExpanded ? 'calc(95% - 36px)' : 'calc(85%)' }}
        >
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
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 flex items-center">
          <Image 
            src="https://i.pravatar.cc/150?img=1"
            alt="Your profile"
            width={32}
            height={32}
            className="rounded-full mr-2"
          />
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-grow border border-gray-300 rounded-full px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
          />
          <Sticker className="w-6 h-6 text-gray-500 cursor-pointer" />
        </div>
      </motion.div>
    );
  }
);

// Main InstagramComments component
const InstagramComments: React.FC = () => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const commentSectionRef = useRef<HTMLDivElement>(null);

  const loadMoreComments = useCallback(async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
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
      if (showComments && 
          commentSectionRef.current && 
          !commentSectionRef.current.contains(event.target as Node)) {
        setShowComments(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showComments]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-2">
      <div className="relative w-full max-w-md mx-auto" ref={containerRef}>
        <InstagramPost post={samplePost} onViewComments={handleViewComments} />
        <CommentSection
          ref={commentSectionRef}
          comments={comments}
          loading={loading}
          onDragEnd={handleDragEnd}
          loadMoreComments={loadMoreComments}
          isVisible={showComments}
        />
      </div>
    </div>
  );
};

export default InstagramComments;