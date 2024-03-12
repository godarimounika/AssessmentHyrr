// import React, { useState, useEffect } from 'react';

// function PostList() {
//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(1);

//   const fetchPosts = async () => {
//     try {
//       const response = await fetch(`http://localhost:3001/api/posts?page=${page}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           // You can add an authentication header if needed
//           // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch posts');
//       }

//       const data = await response.json();
//       setPosts((prevPosts) => [...prevPosts, ...data.posts]);
//     } catch (error) {
//       console.error('Error fetching posts:', error.message);
//     }
//   };

//   useEffect(() => {
//     // Fetch posts when the component mounts
//     fetchPosts();
//   }, [page]); // Fetch posts whenever the page changes

//   return (
   

//   <div className="bg-gray-100 min-h-screen font-sans">
//   <div className="container mx-auto p-8">
//     <h1 className="text-4xl font-bold text-blue-500 mb-8 text-center">PostList</h1>
//     <ul>
//       {posts.map((post) => (
//         <li key={post._id} className="mb-4 p-6 bg-white rounded-md shadow-md">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h2>
//           <p className="text-gray-600">{post.body}</p>
//         </li>
//       ))}
//     </ul>
//     <button
//       onClick={() => setPage((prevPage) => prevPage + 1)}
//       className="bg-blue-500 text-white px-4 py-2 mt-8 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
//     >
//       Load More
//     </button>
//   </div>
// </div>
//   );
// }

// export default PostList;


import React, { useState, useEffect } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products?page=${page}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // You can add an authentication header if needed
          // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, ...data]);
    } catch (error) {
      console.error('Error fetching posts:', error.message);
    }
  };

  useEffect(() => {
    // Fetch posts when the component mounts
    fetchPosts();
  }, [page]); // Fetch posts whenever the page changes

  return (
  

    <div className="bg-gray-100 min-h-screen font-sans">
   <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-blue-500 mb-8 text-center">PostList</h1>
      <ul>
         {posts.map((post) => (
            <li key={post.id} className="mb-8 p-6 bg-white rounded-md shadow-md">
               <img src={post.image} alt={post.title} className="mb-4 rounded-md mx-auto w-half h-48 object-cover"  />
               <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">{post.title}</h2>
               <p className="text-gray-600 text-center">{post.description}</p>
            </li>
         ))}
      </ul>
      <button
         onClick={() => setPage((prevPage) => prevPage + 1)}
         className="bg-blue-500 text-white px-4 py-2 mt-8 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline mx-auto block"
      >
         Load More
      </button>
   </div>
</div>

  );
}

export default PostList;
