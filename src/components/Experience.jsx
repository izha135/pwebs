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

            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Information Technology Administrator	

            </h3>
            <h5>District Attorney's Office </h5>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            August 2023 - Present
            </time>
            <p></p>
            <ul>
              <li className="list-disc">
              Installing, configuring, and troubleshooting Windows/Linux operating systems and/or Virtual environments and related hardware in a heterogeneous environment
              </li>
              <li className="list-disc">
              Resolving customer support issues and fulfilling requests through remote desktop and on-site field support

              </li>
              <li className="list-disc">
              Proactively managing systems and servers utilizing Active Directory
              </li>
              <li className="list-disc">
              Enforcing strict password policies, data integrity, and file system security for the desktop environment.

              </li>
              <li className="list-disc">Communicating highly technical information to both technical and nontechnical personnel
</li>
            </ul>

            <hr className="mt-2" />
          </li>
          <li className="ml-12">
            <div class="absolute w-4 h-4 bg-violet-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Information Technology Intern
            </h3>
            <h5>State of New Mexico</h5>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              June 2023 - August 2023
            </time>
            <ul className="">
              <li className="list-disc">
                Provide technical assistance to staff and customers on hardware
                and software-related issues
              </li>
              <li className="list-disc">
                Install, configure, and troubleshoot computer systems, hardware,
                and software.
              </li>
              <li className="list-disc">
                Follow established procedures and processes for computer
                maintenance.
              </li>
              <li className="list-disc">Technologies used: WordPress</li>
            </ul>

            <hr className="mt-3" />
          </li>
          <li className="ml-12 mt-2">
            <div class="absolute w-4 h-4 bg-violet-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              IT Technical Specialist
            </h3>
            <h5>University of New Mexico</h5>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Dec. 2022 - May 2023
            </time>
            <ul>
              <li className="list-disc">
                Plays an integral role as front-line staff in the IT support
                operations of the UNM campus by responding to and
                troubleshooting email, online, and in-person inquiries
              </li>
              <li className="list-disc">
                Utilizes a central ticketing system to communicate with
                colleagues and resolve issues in conjunction with higher-level
                IT resources both centrally and within their assigned department
              </li>
              <li className="list-disc">
                Troubleshooting software and hardware issues, overseeing
                imaging, and triaging issues in our ticket tracking system,
                Help.UNM (Cherwell)
              </li>
              <li className="list-disc">
                Technologies/Environment: Windows, WSL, Linux, MacOS
              </li>
            </ul>

            <hr className="mt-2" />
          </li>
          <li className="ml-12 mt-2">
            <div class="absolute w-4 h-4 bg-violet-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Software Developer Intern
            </h3>
            <h5>
              City of Albuquerque- Department of Family and Community Services
            </h5>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              August, 2021 - December, 2021
            </time>
            <ul>
              <li className="list-disc">
                {" "}
                Created background database assets to be used by managers and
                operations staff at a non-congregate shelter for families
                seeking refuge.
              </li>
              <li className="list-disc">
                Tasked with information handling, data integration, setting up
                data pages and tables that allow simple user inputs on a
                web-based platform ensuring user friendly web-based platform.
              </li>
              <li className="list-disc">
                Set up data relationships, reports and dashboards or internal
                quality control as well as for evaluating and reporting results
                to the public.
              </li>
              <li className="list-disc">
                Technologies used: Caspio, PHP, MySQL and Excel
              </li>
            </ul>
            <hr className="mt-3" />
          </li>
        </ol>
      </div>
    </section>
  );
}
