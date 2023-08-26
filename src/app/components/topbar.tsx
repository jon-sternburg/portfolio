import React from 'react'
import styles from '../page.module.css'
import { IoMdBarcode, IoMdMail } from 'react-icons/io';
import { FaFile } from 'react-icons/fa';


export default function Topbar():JSX.Element {


return (

<nav className = {styles.top_bar_frame}>



<div className = {styles.top_bar_buttons}>


<button type = {"button"}><FaFile className = {styles.resume_icon} /><span>Resume</span></button>
<button type = {"button"}><IoMdMail className = {styles.contact_icon} /><span>Contact</span></button>




</div>
</nav>







  )

}


