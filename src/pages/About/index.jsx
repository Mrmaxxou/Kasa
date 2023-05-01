import Collapse from '../../components/Collapse'
import Banner from '../../components/Banner'

import dataAbout from '../../Datas/About.json'


import '../../utils/style/banner.css'
import '../../utils/style/collapse.css'
import '../../utils/style/about.css'


function About(){
    return (
        <section className="container-about">
            <Banner bannerClass="container-banner-about"/>
            {dataAbout.map((data) => (
            <Collapse collapseClass="container-collapse-about"
              key={data.title}
              title={data.title}
              text= {data.text}
            />
            ))}
        </section>
    )

}

export default About