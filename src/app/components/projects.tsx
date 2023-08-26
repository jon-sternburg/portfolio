'use client';
import React, { useRef, useState, useEffect, SyntheticEvent, MouseEvent, RefObject, useMemo, ChangeEvent} from 'react'
import styles from '../page.module.css'
import { AiFillGithub } from 'react-icons/ai';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Projects():JSX.Element {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: styles.slider_wrap
      };

return (

<section className = {styles.content_item_frame}>

<h2>Projects</h2>

<div className = {styles.projects_content_wrap}>

<div className = {styles.project_content}>
<div className = {styles.top}>
<header>
<h3><a href = {'https://reader-brown.vercel.app/'} target="_blank"><span>Gutenberg Reader</span><span style = {{fontWeight: 'normal', fontSize: '16px'}}> -  https://reader-brown.vercel.app/</span></a></h3>
</header>
</div>

<div className = {styles.middle}>


<Slider {...settings}>
<img className={'slide'} src = {'./images/reader.jpeg'} />
<img className={'slide'}  src = {'./images/reader_two.jpeg'} />
</Slider>


</div>
<div className = {styles.bottom}>
<p>An ePub reader built for the Project Gutenberg free library of eBooks - allows users to customize, read, annotate, highlight, and search hundreds of classic literature texts.</p>


<div className = {styles.tag_wrap}>
<div className = {styles.react_tag}>React</div>
<div className = {styles.typescript_tag}>TypeScript</div>
<div className = {styles.next_tag}>Next.js</div>
<div className = {styles.epub_tag}>epub.js</div>
</div>

<div className = {styles.github_wrap}>

  <AiFillGithub className = {styles.github_icon} />
  <span>View source on GitHub</span>
</div> 


</div>

    
</div>

<div className = {styles.project_content}>
<div className = {styles.top}>
<header>
<h3><a href = {'https://reddit-clone-seven-pi.vercel.app/'} target="_blank"><span>Reddit-Clone!</span><span style = {{fontWeight: 'normal', fontSize: '16px'}}> -  https://reddit-clone-seven-pi.vercel.app/</span></a></h3>
</header>
</div>
<div className = {styles.middle}>

<Slider {...settings}>
<img src = {'./images/rc.jpeg'} />
<img src = {'./images/rc_two.jpeg'} />
</Slider>
</div>
<div className = {styles.bottom}>
<p>A fully functional Reddit clone, featuring content sort, subreddit/user pages, and comment threads.</p>

<div className = {styles.tag_wrap}>
<div className = {styles.react_tag}>React</div>
<div className = {styles.typescript_tag}>TypeScript</div>
<div className = {styles.next_tag}>Next.js</div>
</div>
<div className = {styles.github_wrap}>

  <AiFillGithub className = {styles.github_icon} />
  <span>View source on GitHub</span>
</div> 

</div>
</div>


<div className = {styles.project_content}>
<div className = {styles.top}>
<header>
<h3><a href = {'http://localhost:3000/'} target="_blank"><span>Portfolio Site</span><span style = {{fontWeight: 'normal', fontSize: '16px'}}> -  http://localhost:3000/</span></a></h3>
</header>
</div>
<div className = {styles.middle}>

<Slider {...settings}>
<img src = {'./images/placeholder.jpeg'} />
<img src = {'./images/placeholder.jpeg'} />
</Slider>
</div>
<div className = {styles.bottom}>
<p>My portfolio site</p>


<div className = {styles.tag_wrap}>
<div className = {styles.react_tag}>React</div>
<div className = {styles.typescript_tag}>TypeScript</div>
<div className = {styles.next_tag}>Next.js</div>
</div>  
<div className = {styles.github_wrap}>

  <AiFillGithub className = {styles.github_icon} />
  <span>View source on GitHub</span>
</div> 

</div>

</div>
<div className = {styles.project_content}>
<div className = {styles.top}>
<header>
<h3><a href = {'http://localhost:3000/'} target="_blank"><span>4th Project</span><span style = {{fontWeight: 'normal', fontSize: '16px'}}> -  http://localhost:3000/</span></a></h3>
</header>
</div>
<div className = {styles.middle}>

<Slider {...settings}>
<img src = {'./images/placeholder.jpeg'} />
<img src = {'./images/placeholder.jpeg'} />
</Slider>
</div>
<div className = {styles.bottom}>
<p>4th project description</p>


<div className = {styles.tag_wrap}>
<div className = {styles.react_tag}>React</div>
<div className = {styles.typescript_tag}>TypeScript</div>
<div className = {styles.next_tag}>Next.js</div>
</div>  
<div className = {styles.github_wrap}>

  <AiFillGithub className = {styles.github_icon} />
  <span>View source on GitHub</span>
</div> 

</div>

</div>
</div>



</section>







  )

}


