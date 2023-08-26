import React, { useRef, useState, useEffect, SyntheticEvent, MouseEvent, RefObject, useMemo, ChangeEvent} from 'react'
import styles from '../page.module.css'
import { IoMdBarcode, IoMdMail } from 'react-icons/io';
import { FaFile } from 'react-icons/fa';
import Link from 'next/link'

export default function Hero():JSX.Element {


return (

<section className = {styles.hero_frame}>


<div className = {styles.hero_inner}>

<IoMdBarcode className = {styles.hero_icon} />
<h2>Jon Sternburg</h2>
<h3>React developer</h3>

<div className = {styles.tag_wrap_hero}>
<div className = {styles.react_tag}>React</div>
<div className = {styles.typescript_tag}>TypeScript</div>
<div className = {styles.node_tag}>Node.js</div>
<div className = {styles.next_tag}>Next.js</div>
<div className = {styles.gatsby_tag}>Gatsby</div>
<div className = {styles.hugo_tag}>Hugo</div>
<div className = {styles.docker_tag}>Docker</div>
</div>

</div>
</section>







  )

}


