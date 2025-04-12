import React from 'react'
import BlogHero from '../components/BlogHero'
import CallToAction from '../components/CallToAction'
import CallToActionNewsletter from '../components/CallToActionNewsletter'
import CategorySection from '../components/CategorySection'
import FeaturePost from '../components/FeaturePost'
import LatestPosts from '../components/LatestPosts'
const Home = () => {
  return (
    <>
    <BlogHero/>
    <FeaturePost/>
    <CategorySection/>
    <CallToAction/>
    <LatestPosts/>
    <CallToActionNewsletter/>
    </>
  )
}

export default Home