import React from 'react';
import Image from 'next/image';


function About() {

  return (
    
      <div>
       <div className="hidden lg:flex lg:flex-1 lg:justify-end p-4">
       <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
        >
        <Image
            src="/bandeira-Brasil.jpg"
            alt="Português"
            width={35}
            height={30}
            className="mr-2"
        />
        Português
        </button>
            </div>

        <div className="-mt-20 pt-4 flex justify-center">
        <Image
            src="/Maiara Morit.png"
            alt=""
            width={250}
            height={170}
        /> 
        </div>

    <div className="w-screen px-60">
    <div className="mt-[-20px]">
    <h1 className="text-3xl font-bold tracking-tight sm:text-5xl flex justify-center m-4 mt-0 relative top-[-10px]">
    <span style={{backgroundImage: 'linear-gradient(to right, #5DE0E6, #092E60)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 2px rgba(0, 0, 0, 0.2)'}}>
    Maiara Morit
    </span>
    </h1>
    </div>
    <div className="text-justify" style={{paddingLeft:250, width:1000 }}>
    <p>
    Hello, I&rsquo;m Maiara and I&rsquo;m 28 years old. I graduated in Journalism in 2020 and had the opportunity to intern and work in the field through a channel called Rede Internacional de Televisão (RIT). After my internship, I decided to explore the field of digital marketing and media planning. I worked at a store called Dupla do Cabelo, where I took on the responsibility of creating the marketing and e-commerce department from scratch. During this period, I was able to use my communication skills to turn the product into entertainment, resulting in significant growth in the company&rsquo;s social media presence. Additionally, I had the opportunity to lead a team that expanded over time.
    Currently, I am transitioning into the Web Development field with Trybe, as I recognize its potential to combine my passion for technology with my communication skills. I am committed to acquiring the necessary technical skills to become a competent web developer and I am dedicating my time to learning programming languages, frameworks, and relevant tools.
    </p>
    </div>    
    </div>
 
<div className="flex justify-center m-4 mt-0 relative top-[-10px]" style={{paddingTop:50,}}>
<button
  type="button"
  className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
  aria-controls="mobile-menu"
  aria-expanded="false"
  onClick={() => window.open('https://github.com/maiaramorit', '_blank')}
>
GitHub
</button>

<button
  type="button"
  className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
  aria-controls="mobile-menu"
  aria-expanded="false"
  onClick={() => window.open('https://linkedin.com/in/maiaramorit/', '_blank')}
>
LinkeIn
</button>


<button
  type="button"
  className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
  aria-controls="mobile-menu"
  aria-expanded="false"
  onClick={() => window.open('https://www.instagram.com/maiaramorit/', '_blank')}
>
Instagram
</button>
</div>

    </div>
  );
}

export default About;