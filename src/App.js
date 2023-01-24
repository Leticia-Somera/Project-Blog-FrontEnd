import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState } from "react";

import './styles/App.css';
import NavBar from './components/NavBar';
import FeaturedPost from './components/FeaturedPost';
import ListPost from './components/ListPost';
import posts from './resources/posts';
import CreatePost from './pages/CreatePost';
import JoinOurTeam from './pages/JoinOurTeam';
import ContactUs from './pages/ContactUs';
import HomePage from './pages/HomePage';
import DetailPostPage from './pages/DetailPostPage';
import Error from './components/Error';

function App() {

  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [allPosts, setAllPosts] = useState(posts());
  const [postId, setPostId] = useState();

  const findPostById = (id) => {
    return allPosts[id];    
  } 

  const handleOnSave = (post) => {
    if(postId || postId === 0) {

      const copyOfPosts = allPosts.map((item, index) =>  
        index === postId ? post : item
        );

      //const copyOfPosts = Array.from(allPosts);
      //const newAllPosts = copyOfPosts.filter((post, index) => index !== postId);

      setAllPosts(copyOfPosts);
      setPostId();
    }
    else {
      setAllPosts([...allPosts, post])
    }
    navigate('/');
  }

  const handleOnEdit = (postId) => {
    setPostId(postId);
    navigate('/create-new-post');
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index
        element={<HomePage posts={allPosts} onEdit={handleOnEdit} />}
        />
        <Route path='*' element={<Error />} />
        <Route path='join-our-team' element={<JoinOurTeam />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='create-new-post' element={<CreatePost onSave={handleOnSave} postToUpdate={allPosts[postId]} />} />
        <Route path='post/:postId' element={<DetailPostPage findPostById={findPostById} />} />

      </Routes>  

    {  /* {
        isVisible ?
        <CreatePost 
        postToUpdate={allPosts[postId]}
        onPress={() => onPress()}
        onSave={handleOnSave}/> :

        <>

          <FeaturedPost 
          updatedAt={"December 16 2022"}
          height={500}
          width={500}
          title={"Technology in Healthcare: Trends that came to stay"}
          body={"Technologies have been transforming the healthcare industry over the past years through numerous advancements in disease detection, treatment, and prevention. Simply, this couldnt have occurred without the rapid development of AI-driven technology and the digitization of healthcare workflows in response to more harsh global conditions and the increased need for affordable and high-quality medical treatment"} 
          imageUrl={"https://itjuana.com/wp-content/uploads/Technology-in-Healthcare-Trends-that-came-to-stay-1-scaled.jpg"}
          blogLink={"https://itjuana.com/technology-in-healthcare-trends-that-came-to-stay/"} />

          <ListPost 
          posts={allPosts}
          onEdit={handleOnEdit} 
          />

        </>
      }      */}
    </div>
  );
}

export default App;
