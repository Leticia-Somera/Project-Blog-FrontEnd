import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import ListPost from '../components/ListPost';

const HomePage = ({ posts, onEdit }) => {
  return (
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
        posts={posts}
        onEdit={onEdit} 
        />
    </>
  )
}

export default HomePage
