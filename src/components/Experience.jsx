import React from "react";

export default function Experience() {
  return (
    <section className="container " id="exp">
      <h3 className="mt-[5rem] mb-6 text-4xl font-lobster-one text-purple-400">
        Experience
      </h3>
      <div className="">
        <ol className="relative border-l border-gray-400 ml-14 dark:border-gray-700 text-left  ">
        <li className="ml-12 mt-2">
            <div class="absolute w-4 h-4 bg-violet-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <h3 class="text-xl font-semibold text-gray-900 ">
            Information Technology Administrator	

            </h3>
            <h5>New Mexico Administrative Office of the District Attorneys</h5>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            August 2023 - March 2024
            </time>
            <p></p>
            <ul>
              <li className="list-disc">
              Successfully <b>created</b>  and <b>deployed</b>  powershell scripts to allow maintenance of 300+ devices
              </li>
              <li className="list-disc">
               Proactively <b>managed</b>  systems and servers using <b>Active Directory</b>  to maintain user accounts, permissions, and group policies
              </li>
              <li className="list-disc">
              <b> Resolved </b>  customer support issues and fulfilled requests through remote desktop and on-site field support

              </li>
              

            </ul>

            <hr className="mt-4" />
          </li>
          <li className="ml-12 mt-2">
            <div class="absolute w-4 h-4 bg-violet-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <h3 class="text-xl font-semibold text-gray-900 ">
            Software Developer Intern
            </h3>
            <h5>New Mexico Corrections Department</h5>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              June 2023 - August 2023
            </time>
            <ul className="">
              <li className="list-disc">
             <b>Customized</b>  the agency website by creating <b>WordPress</b>  themes and plugins to enhance user experience
              </li>
              <li className="list-disc">
             <b>Built</b>  single page applications by <b>fetching</b>  user data to <b>display</b>  information about the offender by searching the
<b> database</b> for their name, age and offender number
              </li>
              <li className="list-disc">Technologies used: <b>WordPress, HTML, CSS, JavaScript, SQL, Rest API</b> </li>
            </ul>

            <hr className="mt-4" />
          </li>
          <li className="ml-12 mt-2">
            <div class="absolute w-4 h-4 bg-violet-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <h3 class="text-xl font-semibold text-gray-900 ">
              IT Technical Specialist
            </h3>
            <h5>University of New Mexico</h5>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              December 2022 - May 2023
            </time>
            <ul>
              <li className="list-disc">
              Played an integral role as front-line staff in the <b>IT support operations</b>  of the UNM campus by responding to and
troubleshooting email, online, and in-person inquiries
              </li>
              <li className="list-disc">
             <b>Utilized</b>  a central <b>ticketing</b>  system to communicate with colleagues and resolve issues in conjunction with
higher-level IT resources both centrally and within their assigned department
              </li>
             
              <li className="list-disc">
                Environment: <b>Windows, WSL, Linux, MacOS</b> 
              </li>
            </ul>

            <hr className="mt-4" />
          </li>
          <li className="ml-12 mt-2">
            <div class="absolute w-4 h-4 bg-violet-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <h3 class="text-xl font-semibold text-gray-900 ">
              Software Developer Intern
            </h3>
            <h5>
            University of New Mexico
            </h5>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              January 2022 - May 2022
            </time>
            <ul>
              <li className="list-disc">
                {" "}
               <b>Designed</b>  and <b>implemented</b>  a user-friendly interface for UNM’s Anthropology Department portal, ensuring a
positive experience for students, faculty and staff

              </li>
              <li className="list-disc">
             <b>Conducted</b>  a comprehensive analysis of <b>user feedback</b>  through surveys, usability testing, and direct communication
channels which increased user traffic by 15%
              </li>
              <li className="list-disc">
                Technologies used: <b>Figma, HTML, CSS, React, MySQL, Node.js</b>
              </li>
            </ul>
            <hr className="mt-4" />
          </li>
          <li className="ml-12 mt-2">
            <div class="absolute w-4 h-4 bg-violet-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <h3 class="text-xl font-semibold text-gray-900 ">
            Data Science Intern
            </h3>
            <h5>City of Albuquerque</h5>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            August 2021 - December 2021
            </time>
            <ul className="">
              <li className="list-disc">
             <b>Created</b>  the background database assets for use by case managers and operations staff at a noncongregate shelter for families experiencing homelessness </li>
              <li className="list-disc">
              <b>Tasked</b> with information handling, data integration, setting up data pages and tables that enable simple user inputs on a web-based platform and improving the website as needed to keep it user friendly

              </li>
              <li className="list-disc">• Created data relationships, reports and dashboards for internal quality control as well as for evaluation and reporting results to the public </li>
            </ul>

            <hr className="mt-4" />
          </li>
        </ol>
      </div>
    </section>
  );
}
