import React from 'react';
import Banner from '../../components/Banner'

import '../../utils/style/banner.css'
import '../../utils/style/home.css'


import Card from '../../components/Card'


function Home(){
  
  return (
  <section className="container-home">
    <Banner bannerClass="container-banner-home" title={"Chez nous, partout et ailleurs"}/>
    <div className="container-cardlogements">
        <Card />
    </div>
  </section>)
}

export default Home