import React from 'react'

function About() {
  return (
    <>
      <div className="p-4 bg-gray-100 dark:bg-medium">
        <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 bg-white drop-shadow-lg rounded-lg dark:bg-gray-900" >
          <div className="flex flex-col items-center mb-12 ">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-700 animate-fadeIn ">
              Vision
            </h1>
            <hr className="w-1/2 border-t-4 border-gradient-to-r from-blue-500 to-indigo-700 mt-2 animate-fadeIn" />
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed text-center font-title dark:text-white ">
            Leadership in Quality Technical Education, Interdisciplinary Research and Innovation, focusing on Sustainable and Inclusive Technology.
          </p>
        </section>

        <section className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 bg-white drop-shadow-lg mt-8 rounded-lg dark:bg-gray-900">
          <div className="flex flex-col items-center mb-12 ">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-700 animate-fadeIn">
              Mission
            </h1>
            <hr className="w-1/2 border-t-4 border-gradient-to-r from-blue-500 to-indigo-700 mt-2 animate-fadeIn" />
          </div>
          <ul className="mt-4 text-gray-700 leading-relaxed list-none  pl-20 space-y-2 animate-fadeIn font-title">
            <li className='list-none dark:text-white'>
            🚀 To deliver outcome-based quality education, emphasizing on experiential learning with state-of-the-art infrastructure.
            </li>
            <li className='dark:text-white'>
            🚀 To create a conducive environment for interdisciplinary research and innovation.
            </li >
            <li className='dark:text-white'  >
            🚀 To develop professionals through holistic education focusing on individual growth, discipline, integrity, ethics and social sensitivity.
            </li>
            <li className='dark:text-white'>
            🚀 To nurture industry-institution collaboration leading to competency enhancement and entrepreneurship.
            </li>
            <li className='dark:text-white'>
            🚀 To focus on technologies that are sustainable and inclusive, benefiting all sections of the society.
            </li>
          </ul>
        </section>

        <section className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8 mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
              <img
                className="w-full h-full object-cover"
                src="/rv2.jpg"
                alt="RV College of Engineering"
              />
            </div>

            <div className="flex flex-col justify-center lg:py-24">
              <div className="flex flex-col items-center mb-12">
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-700 animate-fadeIn">
                  About RVCE
                </h1>
                <hr className="w-1/2 border-t-4 border-gradient-to-r from-blue-500 to-indigo-700 mt-2 animate-fadeIn" />
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed text-justify animate-fadeIn dark:text-white">
                RV College of Engineering (RVCE) established in 1963 is one of the earliest self-financing engineering colleges in the country. The institution is run by Rashtreeya Sikshana Samithi Trust (RSST) a not-for-profit Trust. RVCE is an Autonomous college. Currently, the institution offers 15 Bachelors, 14 Master Programs and all the departments have Research Centres, affiliated to Visvesvaraya Technological University (VTU) Belagavi. The institution has set itself a Vision "Leadership in Quality Technical Education, Interdisciplinary Research & Innovation, With a Focus on Sustainable and Inclusive Technology"
                <br /><br />
                Recent awards and achievements include - Ranked 96th in the Country by National Institutional Ranking Framework (NIRF: 2021-22), “Engineering College of the Year-2023” by the Higher Education Review Magazine, Ranked 10th in the country & 2nd in Karnataka - IIRF Ranking (2023), Ranked 6<sup>th</sup> among the top 10 of 100 Pvt. Engg. Colleges in the Country by Education World Magazine-2023. Ranked 1501+ in Times Higher Education World University Rankings-2024. Ranked 801+ in Computer Science and 1001+ Rank in Engineering category in THE World University Rankings-2024, Ranked 1501+ in Impact Ranking in The World University Rankings-2024, Ranking 601+ in Times Higher Education Asia University Rankings-2024 and NPTEL (Local Chapter) “AAA” Rating.
                <br /><br />
                RVCE has to its credit over 1700 national and international journal publications, 70 filed patents, out of which 59 were published patents, 38 granted patents and executed over Rs. 30 crores of sponsored research projects and consultancy in the last five years.
              </p>
            </div>
          </div>
        </section>

        {/* <section>
          <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
            {/* <h2 className="text-3xl font-extrabold sm:text-4xl">
              CONFERENCE TRACKS
            </h2> */} 

            {/* <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <h1
                style={{
                  marginRight: '1rem',
                  background: 'linear-gradient(to right, #ff0000, #800000)',
                  WebkitBackgroundClip: 'text',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: 'transparent',
                  alignContent: 'center',
                  width: '100%',
                }}
              >
                Conference Tracks
              </h1> */}
              {/* <hr
                style={{
                  background: 'linear-gradient(to right, red, transparent)',
                  height: '3px',
                  width: '100%',
                  marginRight: '1rem',
                }}
              />
            </div> */}
            {/* {Topics.map((topic) => (
              <div className="flex flex-col overflow-hidden  rounded-lg">
                <Accordion>                                            ////////  uncomment this when subpoints are given......
                  <Accordion.Item label={topic.label}>
                    {topic.subTopics.map((subTopic) => (
                      <ol className="list-disc">
                        <li>{subTopic}</li>
                      </ol>
                    ))}
                  </Accordion.Item>
                </Accordion>
              </div>
            ))} */}
             {/* <div>
                  {Topics.map((topic, index) => (
                    <div className="mt-8" key={topic.label}>
                      <p className="mb-4 text-2xl font-medium text-gray-900">
                        {index + 1}. {topic.label}
                      </p>
                      {/* <br /> */}
                      {/* <List className="mt-4" type="ordered">
                        {topic.subTopics.map((subTopic, index) => (
                          <List.Item
                            className="relative left-6 text-lg font-medium text-gray-500"
                            key={subTopic}
                          >
                            {index + 1}) {subTopic}
                          </List.Item>
                        ))}
                      </List> */}
                    {/* </div> 
                  ))}
                </div>
          </div>
        </section> */}

        
      </div>
    </>
  )
}

export default About
