import { Heading, Text } from "@radix-ui/themes";
import { BM } from "./BM";
import { Project } from "./Project";
import { TimelineProjectType } from "./Project/constants";
import { Section } from "./Section";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export function SectionProjects() {
  return (
    <>
      <Section id="projects" gap="9">
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
            I served as the <BM>team lead</BM> during the 2022-2023 season,
            taking on additional responsibilities in programming while actively
            contributing to the design and manufacturing of our robot. Designed
            for the FTC Robotics Competition, the B-4/B-5 represented our
            flagship innovation—a culmination of advanced technologies I
            developed. This effort led us to secure first place at districts and
            rank among the top third of teams at the state level, marking the
            best performance in our team's 10-year history.
          </Text>
          <Text>
            The most impressive feature of our robot was the novel autonomous
            mode I designed, which surpassed anything we had seen in FTC to
            date. Operating within the competition's tight 30-second autonomous
            period, the system used cutting-edge sensors and software to execute
            tasks precisely. The robot utilized computer vision to identify
            obstacles, dynamically adapting its behavior based on gameplay
            elements.
          </Text>
          <Text>
            At the core of this innovation was a{" "}
            <BM>guided A* pathfinding system</BM>. It integrated manual route
            inputs with real-time decisions to guide the robot to scoring
            elements efficiently, ensuring precise alignment and placement on
            goals. Additionally, I incorporated color and brightness sensors to
            recognize floor patterns and infer positional hints. At the same
            time, the onboard IMU tracked accelerations and forces to maintain
            an accurate understanding of the robot's orientation and position.
            Periodic ground-based position checks further refined its spatial
            awareness.
          </Text>
          <Text>
            I also introduced "<BM>driver-relative controls</BM>,"
            revolutionizing how the robot responded to operator inputs. This
            system, enabled by mecanum wheels, advanced mathematics, and robust
            programming, decoupled the robot's movement from its local
            orientation. Regardless of its rotation or position, the robot moved
            relative to the playing field, allowing drivers to intuitively
            command strafing, backward movement, and more from their
            perspective.
          </Text>
          <Text>
            This integration of autonomous functionality and driver-friendly
            controls transformed our robot into a high-performing machine with
            innovative features. These advancements were instrumental in
            achieving our historic success during the competition.
          </Text>
        </Project>

        <Project
          title="Cloud Surfers"
          type={TimelineProjectType.Educational}
          images={["EVLAcj4", "n6ku0PT"]}
          skills={["SolidWorks", "MATLAB"]}
        >
          <Text>
            Scientific data can be massive—often spanning multiple petabytes.
            For perspective, 1PB equals <BM>1,000,000 gigabytes</BM>. Projects
            like the first image of the Milky Way's black hole required over 5PB
            of data. Transferring such volumes over the internet or even
            high-speed cables is slow; in the black hole project's case, it took
            two months. In fact, physically transporting hard drives by air is
            often faster than digital transfer.
          </Text>
          <Text>
            Cloud Surfers was my solution to this problem, which our team
            further developed. The Cloud Surfers drone is designed to carry four
            trays, each holding up to <BM>40 HDDs</BM> (hard disk drives),
            providing a total storage capacity of approximately 5.2PB—perfect
            for transporting data-intensive projects like black hole images.
          </Text>
          <Text>
            The fully autonomous drone features easily manufacturable trays
            designed for rapid deployment at universities, labs, and research
            centers. Instead of slotting in each hard drive individually, users
            can quickly load full trays directly into the fuselage, minimizing
            downtime.
          </Text>
          <Text>
            For performance, we selected the <BM>Roncz Low Drag airfoil</BM> for
            the main wings, the <BM>NACA 0012 airfoil</BM> for the vertical and
            horizontal stabilizers, and the <BM>Rotax 914 engine</BM> for
            propulsion. This configuration allows the drone to carry{" "}
            <BM>160kg of HDDs</BM> and <BM>376kg of fuel</BM>, achieving a
            trans-European flight <BM>range of 3,229km</BM>, exceeding our
            3,000km target. For perspective, this range is nearly equivalent to
            a flight from Salt Lake City, Utah, to New York.
          </Text>
          <Text>
            I led the <BM>CAD</BM> modeling, established{" "}
            <BM>design requirements</BM>, and ensured compliance with both{" "}
            <BM>federal and international regulations</BM>, shaping Cloud
            Surfers into a feasible and impactful solution for high-volume data
            transport.
          </Text>
        </Project>
      </Section>

      <Section gap="9">
        <Heading size="8" align="center">
          Other Projects
        </Heading>

        <Project
          title="BlitzKit"
          type={TimelineProjectType.Hobby}
          skills={["TypeScript", "C++", "C#", "WebGL"]}
          images={["yVssfpC", "6x2hsgZ"]}
        >
          <Text>
            BlitzKit is a passion project of mine that documents the armor
            profiles, ammunition, and statistics of around 700 tanks spanning
            from World War I to the Cold War. Originally a hobby, I never
            expected it to involve aerospace engineering concepts—let alone
            reach half a million monthly views.
          </Text>
          <Text>
            The flagship feature of BlitzKit is its{" "}
            <BM>dynamic armor profile</BM>, a <BM>real-time</BM> rendering
            system that simulates how shells interact with armor from any given
            angle and position. This GLSL-based OpenGL renderer models shell
            penetration behavior in real-time, an incredibly complex problem
            requiring research into <BM>fluid dynamics</BM> and shell{" "}
            <BM>impact heuristics</BM>.
          </Text>
          <Text>
            BlitzKit accounts for two types of armor:
            <ol>
              <li>
                <BM>Spaced armor</BM>: Layers of armor with air gaps between
                them, highly effective against explosive shells.
              </li>
              <li>
                <BM>Primary armor</BM>: The final, typically thickest layer that
                protects the crew compartment.
              </li>
            </ol>
          </Text>
          <Text>
            The site also simulates three primary shell types:
            <ol>
              <li>
                <BM>Kinetic shells</BM> (AP, APCR): Delivers a concentrated
                energy impact to penetrate armor.
              </li>
              <li>
                <BM>Explosive shells</BM> (HE, HESH): Relies on detonation and
                thin armor to cause internal damage or spalling.
              </li>
              <li>
                <BM>HEAT shells</BM>: Uses a shaped charge jet of molten metal
                to penetrate thick armor but vulnerable to spaced armor and
                external modules.
              </li>
            </ol>
          </Text>
          <Text>
            With endless combinations of armor types, angles, shell
            configurations, and impact conditions, BlitzKit provides an engaging
            and technically rich real-time simulation—bringing tank combat
            mechanics to life in a way that's both visually and analytically
            compelling.
          </Text>
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
