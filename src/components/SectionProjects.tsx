import { Heading, Link, Separator, Text } from "@radix-ui/themes";
import { BM } from "./BM";
import { Project } from "./Project";
import { TimelineProjectType } from "./Project/constants";
import { Section } from "./Section";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export function SectionProjects() {
  return (
    <>
      <Section id="projects">
        <Heading size="8" align="center">
          Key Projects
        </Heading>

        <Project
          title="J.E.T. - Advanced Manufacturing"
          type={TimelineProjectType.Club}
          images={["dFofBwn", "3Wo1TaL"]}
          skills={[
            "Advanced Thermodynamics",
            "SolidWorks",
            "Computer Fluid Dynamics",
            "Python",
          ]}
        >
          <Text>
            I am <BM>designing</BM> and <BM>manufacturing</BM> the heart of our
            jet engine: the combustion chamber. Crafted from rolled stainless
            steel sheet metal, its dimensions and geometry balance thermal
            limits, performance requirements, and efficiency.
          </Text>

          <Text>
            As a member of J.E.T. ("Jet Engine Team"—a humorously unexacting
            name I proudly coined), I frequently go beyond my current
            coursework. I <BM>independently research</BM>, implement new ideas,
            run simulations, and effectively communicate changes with my team to
            refine our designs.
          </Text>

          <Text>
            For guidance, I've been referring to Combustion Engineering by
            Ragland and Bryden to understand thermodynamics and establish the
            basic geometry of the engine. The combustion chamber consists of two
            concentric components: the combustor and the liner. The combustor
            sustains the flame, while the liner is precisely designed to allow
            airflow that ensures stoichiometric reactions and cools the
            combustion products.
          </Text>

          <Text>
            The liner is a simple rolled aluminum cylinder with a 6-inch
            diameter. The combustor, on the other hand, is more intricate. It
            begins as a truncated stainless steel cone, with its mouth carefully
            sized to direct approximately 83% of the incoming air into the
            liner, leaving the rest for the combustor. At the base of the cone,
            fuel injectors initiate the flame, which is sustained in the next
            segment of the combustor.
          </Text>

          <Text>
            The combustor transitions from the truncated cone into a cylindrical
            shape featuring a series of carefully positioned holes. These holes
            are categorized into three groups, following the direction of
            airflow:
          </Text>

          <Text>
            <ol>
              <li>
                <BM>Primary Holes</BM>: Sixteen holes consume about 20% of the
                airflow, sustaining the flame.
              </li>

              <li>
                <BM>Intermediate Holes</BM>: Twelve holes use 30% of the airflow
                to combust any remaining fuel and slightly cool the products.
              </li>

              <li>
                <BM>Dilution Holes</BM>: Eight holes consume the remaining
                airflow, cooling the products further to protect downstream
                aluminum components.
              </li>
            </ol>
          </Text>

          <Text>
            The geometry is dynamic, with dimensions adjusted daily based on
            ongoing calculations and simulations. We've developed a{" "}
            <BM>Python</BM> script using the Pint library to streamline this
            process to ensure unit consistency. Numerous variables are optimized
            to achieve our goal of producing 25 pounds of thrust.
          </Text>
        </Project>

        <Project
          title="Nerdy Birds"
          type={TimelineProjectType.Club}
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
            With no prior guidance or existing solutions, I took the initiative
            to research and implement advanced technologies for our robot's
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
          images={["vFL12f7", "hlfxY5G"]}
          skills={["SolidWorks", "MATLAB"]}
        >
          <Text>
            Scientific data often reaches multiple petabytes in size (millions
            of gigabytes!) and it's easier to fly it over physically than
            transmit it, saving months of wait time. I designed the fuselage and
            the trays that hold the hard drives all with ease of production in
            mind.
          </Text>
          <Text>
            With maximum efficiency as a goal, the trays and fuselage I designed
            allow for minimal time on the tarmac thanks to the fact that tray
            was designed to be easily manufacturable by anyone so that it comes
            in loaded with drives when loading them into the drone.{" "}
            <Link weight="bold">Read more...</Link>
          </Text>
        </Project>
      </Section>

      <Separator size="4" />

      <Section>
        <Heading size="8" align="center">
          Other Projects
        </Heading>

        <Project
          title="BlitzKit"
          type={TimelineProjectType.Hobby}
          skills={["TypeScript", "C++", "C#", "WebGL"]}
        >
          {lorem}
        </Project>

        <Project
          title="Stellar"
          type={TimelineProjectType.Hobby}
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
          skills={["Cyber-Physical Integration", "C++", "Flutter"]}
        >
          {lorem}
        </Project>

        <Project
          title="F-4 Phantom II Digitalization"
          type={TimelineProjectType.Educational}
          skills={["SolidWorks"]}
        >
          {lorem}
        </Project>
      </Section>
    </>
  );
}
