import { Flex, Heading, Link, Quote, Separator, Text } from "@radix-ui/themes";
import { ASPDoodle1, ASPDoodle2, ASPDoodle3, ASPDoodle4 } from "./ASPDoodle";
import { Project } from "./Project";
import { TimelineProjectType } from "./Project/constants";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export function SectionProjects() {
  return (
    <>
      <Separator size="4" id="projects" />

      <Heading size="8" align="center">
        Key Projects
      </Heading>

      <Project
        title="J.E.T."
        type={TimelineProjectType.Club}
        time="2024 - present"
        images={["dFofBwn", "3Wo1TaL"]}
        skills={[
          "Advanced Thermodynamics",
          "SolidWorks",
          "Computer Fluid Dynamics",
          "Python",
        ]}
      >
        <Text>
          I am responsible for creating the heart of our jet engine as the lead
          designer for the combustion chamber of J.E.T. (Jet Engine Team, a
          humorously unexacting name I coined under the Advanced Manufacturing
          Club).
        </Text>
        <Text>
          This project draws knowledge beyond my current coursework; hence, I
          primarily rely on independent research. I am honing the combustion
          chamber to achieve an optimal stoichiometric combustion at a precise
          37:2 ratio. My design focuses on ease of manufacturing while
          maintaining maximum efficiency to lower emissions.
        </Text>
      </Project>

      <Project
        title="Nerdy Birds"
        type={TimelineProjectType.Club}
        time="2019 - 2023"
        video={{
          image: "TcC9m7e",
          youtube: "mjuX8Oxbl0k",
        }}
        skills={[
          "Autonomous Navigation",
          "Computer Vision",
          "Inertial Navigation",
          "Team Leadership",
          "Java",
        ]}
      >
        <Text>
          As the team captain for 2023 and programmer for the Nerdy Birds{" "}
          <Link
            target="_blank"
            href="https://www.firstinspires.org/robotics/ftc"
          >
            FTC team
          </Link>
          , I led us to a decisive first-place victory at districts—our best
          performance in the team's 10-year history—and a strong finish at
          states.
        </Text>
        <Text>
          With no prior guidance or existing solutions, I took the initiative to
          research and implement advanced technologies for our robot's
          autonomous mode. I mastered{" "}
          <Link
            target="_blank"
            href="https://en.wikipedia.org/wiki/Computer_visions"
          >
            computer vision
          </Link>
          ,{" "}
          <Link
            target="_blank"
            href="https://en.wikipedia.org/wiki/Pathfinding"
          >
            pathfinding
          </Link>
          ,{" "}
          <Link
            target="_blank"
            href="https://en.wikipedia.org/wiki/Inertial_navigation_system"
          >
            inertial navigation
          </Link>
          , and{" "}
          <Link
            target="_blank"
            href="https://en.wikipedia.org/wiki/Mecanum_wheel"
          >
            mecanum omnidirectional traversal
          </Link>
          , pushing both my high school knowledge and the boundaries of what's
          possible in FTC.
        </Text>
      </Project>

      <Project
        title="Cloud Surfers"
        type={TimelineProjectType.Educational}
        time="2024"
        images={["vFL12f7", "hlfxY5G"]}
        skills={["SolidWorks", "MATLAB"]}
      >
        {lorem}
      </Project>

      <Project
        title="Abhi's Space Program"
        type={TimelineProjectType.Hobby}
        time="2013 - 2017"
      >
        <Text>
          Abhi's Space Programs (ASP for short) marked my first venture into
          propulsion, armed with zero formal knowledge of rocketry—or safety,
          for that matter.
        </Text>
        <Text>
          With aluminum foil bodies and solid motor fuel from sparklers and
          candle wax, these rockets were truly the pinnacle of childhood
          engineering! For inexplicable reasons, however, nearly every launch
          followed the same familiar sequence:
        </Text>
      </Project>

      <Flex direction="column" align="center" gap="4">
        <Flex wrap="wrap" gap="2" justify="center">
          <Flex gap="2" wrap="wrap" justify="center">
            <ASPDoodle1 width="17rem" height="17rem" />
            <ASPDoodle2 width="17rem" height="17rem" />
          </Flex>
          <Flex gap="2" wrap="wrap" justify="center">
            <ASPDoodle3 width="17rem" height="17rem" />
            <ASPDoodle4 width="17rem" height="17rem" />
          </Flex>
        </Flex>

        <Quote>Some jokes just don't take-off.</Quote>
      </Flex>

      <Separator size="4" />

      <Heading size="8" align="center">
        Other Projects
      </Heading>

      <Project
        title="BlitzKit"
        type={TimelineProjectType.Hobby}
        time="2022 - present"
        skills={["TypeScript", "C++", "C#", "WebGL"]}
      >
        {lorem}
      </Project>

      <Project
        title="Stellar"
        type={TimelineProjectType.Hobby}
        time="2021 - 2024"
        images={["8z390aL", "Mgqhi9N"]}
        skills={["TypeScript"]}
      >
        My first proper endeavour into cyber-physical systems was the creation
        of my own CAD software. Though 2-dimensional, I was pushing my
        middle-school mathematical limits and researching capabilities beyond
        what I had been formally taught.
      </Project>

      <Project
        title="Avionics in Rocketry Club"
        type={TimelineProjectType.Club}
        time="2023"
        skills={["Cyber-Physical Integration", "C++", "Flutter"]}
      >
        {lorem}
      </Project>

      <Project
        title="F-4 Phantom II Digitalization"
        type={TimelineProjectType.Educational}
        time="2023"
        skills={["SolidWorks"]}
      >
        {lorem}
      </Project>
    </>
  );
}
